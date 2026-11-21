import { ExternalLink } from "lucide-react";
import AppScreensCarousel from "@/components/AppScreensCarousel";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function AppPreview() {
  const ctaHref = siteConfig.liveAppUrl || "#home";

  return (
    <section id="app-preview" className="app-grid w-full bg-[#f5f8fc] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        
        <div className="reveal">
          <p className="text-sm font-bold uppercase tracking-[.16em] text-[#155eef]">SkillBridge App</p>
          <h2 className="display mt-3 text-4xl font-semibold sm:text-5xl text-[#10233d]">
            Experience the Future of Service Booking.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[#52647c]">
            Download the SkillBridge app to get instant access to a network of vetted professionals. Fast, secure, and right in your pocket.
          </p>
          <a
            href="https://github.com/10-aqib/SkillBridge-Website/releases/latest/download/skillbridge.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl bg-[#155eef] px-5 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5"
          >
            Try the Live App
            <ExternalLink size={18} />
          </a>
        </div>
        
        <div className="reveal">
          <AppScreensCarousel />
        </div>
        
      </div>
    </section>
  );
}
