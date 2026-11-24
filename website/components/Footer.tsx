import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f8fc] py-10 border-t border-[#dce5f0] text-center text-[#52647c]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Logo className="mb-4" markClassName="h-8 w-8" textClassName="text-lg" />
        <p className="text-sm font-medium">
          © 2026 SkillBridge Tech. Built for expert reliability.<br className="sm:hidden" />
          {" "}Designed for professionals and customers to connect seamlessly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
