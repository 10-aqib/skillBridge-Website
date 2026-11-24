"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`nav-shell sticky top-0 z-50 w-full border-b border-transparent ${isScrolled ? "scrolled" : ""}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary navigation">
        
        {/* Brand */}
        <Link href="#home" className="focus-ring flex items-center rounded-lg" onClick={closeMenu}>
          <Logo markClassName="h-9 w-9" textClassName="text-xl" />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 lg:flex">
          <Link className="nav-link focus-ring rounded" href="#home" title="Go to Home">Home</Link>
          <Link className="nav-link focus-ring rounded" href="#how-it-works" title="See How It Works">How it works</Link>
          <Link className="nav-link focus-ring rounded" href="#features" title="View Features">Features</Link>
          <Link className="nav-link focus-ring rounded" href="#app-preview" title="Preview Mobile App">App Preview</Link>
          <Link className="nav-link focus-ring rounded" href="#about" title="About SkillBridge">About</Link>
        </div>
        
        <div className="hidden lg:block">
          <a 
            className="focus-ring rounded-xl px-5 py-3 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg bg-[#155eef] text-white" 
            href="https://github.com/10-aqib/SkillBridge-Website/releases/latest/download/skillbridge.apk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          id="menu-toggle" 
          type="button" 
          className="focus-ring rounded-lg p-2 text-[#10233d] lg:hidden" 
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} 
          aria-expanded={mobileMenuOpen}
          onClick={toggleMenu}
        >
          <Menu size={25} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className={`absolute left-0 right-0 top-full mx-3 -translate-y-2 rounded-2xl border border-[#dce5f0] bg-white p-3 shadow-xl transition-all duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? "is-open translate-y-0 opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <Link className="focus-ring block rounded-xl px-4 py-3 font-semibold text-[#31455f] hover:bg-slate-50" href="#home" onClick={closeMenu}>Home</Link>
        <Link className="focus-ring block rounded-xl px-4 py-3 font-semibold text-[#31455f] hover:bg-slate-50" href="#how-it-works" onClick={closeMenu}>How it works</Link>
        <Link className="focus-ring block rounded-xl px-4 py-3 font-semibold text-[#31455f] hover:bg-slate-50" href="#features" onClick={closeMenu}>Features</Link>
        <Link className="focus-ring block rounded-xl px-4 py-3 font-semibold text-[#31455f] hover:bg-slate-50" href="#app-preview" onClick={closeMenu}>App Preview</Link>
        <Link className="focus-ring block rounded-xl px-4 py-3 font-semibold text-[#31455f] hover:bg-slate-50" href="#about" onClick={closeMenu}>About</Link>
        <a 
          className="focus-ring mt-2 block rounded-xl px-4 py-3 text-center font-bold bg-[#155eef] text-white" 
          href="https://github.com/10-aqib/SkillBridge-Website/releases/latest/download/skillbridge.apk"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
