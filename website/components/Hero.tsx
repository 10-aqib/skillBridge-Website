import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const ctaHref = siteConfig.liveAppUrl || "#app-preview";

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#f5f8fc]">
      <div className="hero-orb absolute -right-32 top-0 h-[600px] w-[600px] rounded-full"></div>
      
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[.92fr_1.08fr] lg:px-8 lg:py-24">
        
        {/* Left: Text Content */}
        <div className="reveal max-w-xl">
          <h1 className="display text-4xl font-semibold leading-[1.05] text-[#10233d] sm:text-5xl lg:text-6xl">
            Find Skilled Professionals.<br/>Get Things Done.
          </h1>
          
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#52647c]">
            Connect with vetted experts for any job. From home repairs to tutoring, SkillBridge makes finding the right help effortless and reliable.
          </p>
          
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a 
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-[#155eef] text-white px-5 py-3.5 font-bold shadow-lg shadow-blue-200 transition hover:-translate-y-0.5" 
              href="https://github.com/10-aqib/SkillBridge-Website/releases/latest/download/skillbridge.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try the Live App
              <ArrowUpRight size={18} />
            </a> 
            <Link 
              className="focus-ring inline-flex items-center justify-center rounded-xl border border-transparent text-[#52647c] px-5 py-3.5 font-bold transition hover:text-[#155eef] bg-transparent" 
              href="#how-it-works"
            >
              How it works
            </Link>
          </div>
          
          <div className="mt-10 flex items-center gap-3 text-sm text-[#52647c]">
            <span className="flex -space-x-2">
              <span className="h-8 w-8 rounded-full border-2 border-white bg-[#c8e9e3]"></span>
              <span className="h-8 w-8 rounded-full border-2 border-white bg-[#b8cdf5]"></span>
              <span className="h-8 w-8 rounded-full border-2 border-white bg-[#f3d7a3]"></span>
            </span> 
            <span>The trusted choice</span>
          </div>
        </div>
        
        {/* Right: Hero Image */}
        <div className="reveal relative mx-auto w-full max-w-[620px] lg:max-w-none" style={{ transitionDelay: ".14s" }}>
          <div aria-hidden="true" className="absolute -inset-4 -z-0 rounded-[2.5rem] bg-gradient-to-br from-[#d8f3ee] via-[#e3ecfd] to-[#ece4ff] blur-2xl sm:-inset-6"></div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#141224] shadow-[0_30px_70px_rgba(18,49,85,.28)] sm:rounded-[2rem]">
            <Image
              src="/hero-skillbridge.webp"
              alt="SkillBridge app on a phone, showing job search, skill courses, progress tracking and networking"
              width={1176}
              height={941}
              preload
              sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, (min-width: 640px) 620px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
