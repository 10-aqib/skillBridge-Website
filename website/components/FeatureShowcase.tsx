import { SlidersHorizontal, Zap, Wrench, Hammer, MonitorCog, Search, Check, Star } from "lucide-react";
import Image from "next/image";

export default function FeatureShowcase() {
  return (
    <section id="features" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        <div className="reveal max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-[#0f9f8f]">PLATFORM BENEFITS</p>
          <h2 className="display mt-3 text-4xl font-semibold sm:text-5xl text-[#10233d]">
            Everything you need to find the right help
          </h2>
        </div>
        
        {/* Feature 1 */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="reveal rounded-[2rem] bg-[#edf3fb] p-7 sm:p-10">
            <div className="mx-auto max-w-md rounded-2xl bg-white p-5 shadow-xl shadow-[#b9cae0]">
              <div className="flex items-center justify-between">
                <b className="text-sm text-[#10233d]">Explore services</b>
                <SlidersHorizontal className="text-[#155eef]" size={18} />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#e2f5f0] p-4">
                  <Zap className="text-[#0f9f8f]" size={20} />
                  <p className="mt-4 text-sm font-bold text-[#10233d]">Electrician</p>
                </div>
                <div className="rounded-xl bg-[#eaf0fd] p-4">
                  <Wrench className="text-[#155eef]" size={20} />
                  <p className="mt-4 text-sm font-bold text-[#10233d]">Plumber</p>
                </div>
                <div className="rounded-xl bg-[#fff3df] p-4">
                  <Hammer className="text-[#ce7a13]" size={20} />
                  <p className="mt-4 text-sm font-bold text-[#10233d]">Carpenter</p>
                </div>
                <div className="rounded-xl bg-[#f0eafd] p-4">
                  <MonitorCog className="text-[#7652bd]" size={20} />
                  <p className="mt-4 text-sm font-bold text-[#10233d]">Tech repair</p>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e0f4ef] text-[#0f9f8f]">
              <Search size={23} />
            </span>
            <h3 className="mt-6 text-3xl font-bold text-[#10233d]">Discover Skilled Professionals instantly.</h3>
            <p className="mt-4 max-w-lg text-lg leading-8 text-[#52647c]">
              Our intuitive interface lets you quickly find exactly what you need. From Home Repairs to Tech Support, curated options are at your fingertips.
            </p>
            <ul className="mt-6 space-y-3 text-[#31455f]">
              <li className="flex gap-3">
                <Check className="text-[#0f9f8f]" size={18} />
                <span>Categorized service listings for quick navigation.</span>
              </li>
              <li className="flex gap-3">
                <Check className="text-[#0f9f8f]" size={18} />
                <span>Algorithm-driven &apos;Top Rated Nearby&apos; recommendations.</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Feature 2 */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="reveal order-2 lg:order-1">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8effd] text-[#155eef]">
              <Star size={23} />
            </span>
            <h3 className="mt-6 text-3xl font-bold text-[#10233d]">Detailed Worker Profiles you can trust.</h3>
            <p className="mt-4 max-w-lg text-lg leading-8 text-[#52647c]">
              Make informed decisions. Every professional on SkillBridge has a comprehensive profile detailing their skills, experience, and real customer reviews.
            </p>
          </div>
          <div className="reveal order-1 overflow-hidden rounded-[2rem] bg-[#e0f4ef] p-7 sm:p-10 lg:order-2">
            <div className="mx-auto flex max-w-sm gap-4 rounded-2xl bg-white p-4 shadow-xl shadow-[#aad8cf]">
              <Image
                src="/worker-ac-technician.webp"
                alt="Ali Raza, AC technician"
                width={320}
                height={320}
                sizes="96px"
                className="h-20 w-20 flex-shrink-0 rounded-xl bg-[#c8e9e3] object-cover sm:h-24 sm:w-24"
              />
              <div className="flex-1">
                <p className="font-bold text-[#10233d]">Ali Raza</p>
                <p className="mt-1 text-sm text-[#52647c]">AC Technician</p>
                <p className="mt-2 text-sm font-bold text-[#0f9f8f]">★★★★★ 4.9</p>
                <span className="mt-3 inline-block rounded-full bg-[#e0f4ef] px-2 py-1 text-xs font-bold text-[#087c6e]">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
