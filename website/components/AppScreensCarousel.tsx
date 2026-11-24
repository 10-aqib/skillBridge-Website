"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SCREENS = [
  { src: "/app-screens/app-home-v2.webp", label: "Find", alt: "SkillBridge app home screen with service categories and top rated workers nearby" },
  { src: "/app-screens/app-profile-v2.webp", label: "Choose", alt: "SkillBridge worker profile for Ali Raza, AC technician, with rating, skills and reviews" },
  { src: "/app-screens/app-booking-v2.webp", label: "Book", alt: "SkillBridge booking screen with service, date, time slot and price summary" },
];

const INTERVAL = 3200;

export default function AppScreensCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    if (rootRef.current) observer.observe(rootRef.current);

    return () => {
      media.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);

  const running = inView && !paused && !reducedMotion;

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % SCREENS.length), INTERVAL);
    return () => window.clearTimeout(timer);
  }, [running, active]);

  const goTo = useCallback((i: number) => setActive(i), []);

  return (
    <div
      ref={rootRef}
      className="mx-auto w-full max-w-[272px] sm:max-w-[300px] lg:max-w-[340px]"
      role="region"
      aria-roledescription="carousel"
      aria-label="SkillBridge app preview"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="phone relative">
        <div className="notch absolute left-1/2 top-0 z-10 w-[36%]! -translate-x-1/2"></div>
        <div className="relative aspect-[390/844] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-700 ease-[cubic-bezier(.65,0,.35,1)]"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {SCREENS.map((screen, i) => (
              <div
                key={screen.src}
                className="relative h-full w-full flex-shrink-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${SCREENS.length}: ${screen.label}`}
                aria-hidden={i !== active}
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 324px, (min-width: 640px) 284px, 256px"
                  className={`object-cover transition-transform duration-700 ${i === active ? "scale-100" : "scale-[.96]"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-2.5">
        {SCREENS.map((screen, i) => {
          const isActive = i === active;
          return (
            <button
              key={screen.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show screen ${i + 1}: ${screen.label}`}
              aria-current={isActive}
              className={`focus-ring relative flex items-center gap-2 overflow-hidden rounded-full border py-1.5 pl-1.5 pr-3.5 text-sm font-bold transition-colors duration-300 ${
                isActive ? "border-[#155eef] bg-white text-[#155eef] shadow-md shadow-blue-100" : "border-[#dce5f0] bg-white/70 text-[#6a7d95] hover:text-[#155eef]"
              }`}
            >
              <span
                className={`grid h-6 w-6 place-items-center rounded-full text-xs transition-colors duration-300 ${
                  isActive ? "bg-[#155eef] text-white" : "bg-[#edf3fb] text-[#6a7d95]"
                }`}
              >
                {i + 1}
              </span>
              {screen.label}
              {isActive && running && (
                <span
                  key={`progress-${active}`}
                  aria-hidden="true"
                  className="carousel-progress absolute bottom-0 left-0 h-[2px] bg-[#155eef]"
                  style={{ animationDuration: `${INTERVAL}ms` }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
