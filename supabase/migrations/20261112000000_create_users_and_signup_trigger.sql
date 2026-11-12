-- SkillBridge: public.users profile table + auto-create on signup.
-- Safe to re-run.

create table if not exists public.users (
  id         uuid primary key references auth.users (id) on delete cascade,
  email      text,
  full_name  text,
  role       text not null default 'customer' check (role in ('worker', 'customer')),
  created_at timestamptz not null default now()
);

alter table public.users enable row level security;

-- Users can read their own profile.
drop policy if exists "Users can view own profile" on public.users;
create policy "Users can view own profile"
  on public.users for select
  to authenticated
  using ((select auth.uid()) = id);

-- Users can update their own profile, but not change their role.
drop policy if exists "Users can update own profile" on public.users;
create policy "Users can update own profile"
  on public.users for update
  to authenticated
  using ((select auth.uid()) = id)
  with check (
    (select auth.uid()) = id
    and role = (select u.role from public.users u where u.id = (select auth.uid()))
  );

-- Create a profile row whenever a new auth user signs up.
-- Reads full_name and role from the metadata sent by the signup form.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.users (id, email, full_name, role)
  values (
    new.id,
    new.email,
    nullif(new.raw_user_meta_data ->> 'full_name', ''),
    case
      when new.raw_user_meta_data ->> 'role' in ('worker', 'customer')
        then new.raw_user_meta_data ->> 'role'
      else 'customer'
    end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Backfill profiles for users who signed up before this trigger existed.
insert into public.users (id, email, full_name, role)
select
  u.id,
  u.email,
  nullif(u.raw_user_meta_data ->> 'full_name', ''),
  case
    when u.raw_user_meta_data ->> 'role' in ('worker', 'customer')
      then u.raw_user_meta_data ->> 'role'
    else 'customer'
  end
from auth.users u
on conflict (id) do nothing;
