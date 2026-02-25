"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Custom Solutions", href: "#custom" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#1A1A1A]/90 border-b border-white/10 shadow-2xl"
          : "backdrop-blur-md bg-[#1A1A1A]/80 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              {/* Industrial hexagon logo mark */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <polygon
                  points="18,2 32,10 32,26 18,34 4,26 4,10"
                  stroke="#FF8C00"
                  strokeWidth="1.5"
                  fill="none"
                />
                <polygon
                  points="18,8 28,14 28,22 18,28 8,22 8,14"
                  fill="#FF8C00"
                  opacity="0.15"
                />
                <text
                  x="18"
                  y="22"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="900"
                  fill="#FF8C00"
                  fontFamily="Inter, sans-serif"
                >
                  CS
                </text>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-base tracking-[0.15em] uppercase">
                  CASCO
                </span>
                <span className="text-[#FF8C00] font-black text-[10px] tracking-[0.35em] uppercase">
                  SUPPLY INC.
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#A3A3A3] hover:text-white text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FF8C00] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#custom"
              className="hidden lg:block bg-white text-[#1A1A1A] text-xs font-black tracking-[0.2em] uppercase px-5 py-2.5 transition-colors duration-200 hover:bg-[#FF8C00] hover:text-white"
            >
              GET A QUOTE
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="bg-[#1A1A1A]/95 backdrop-blur-md px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[#A3A3A3] hover:text-white text-sm font-semibold tracking-[0.2em] uppercase transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#custom"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-white text-[#1A1A1A] text-xs font-black tracking-[0.2em] uppercase px-5 py-3 text-center hover:bg-[#FF8C00] hover:text-white transition-colors duration-200"
          >
            GET A QUOTE
          </a>
        </nav>
      </div>
    </header>
  );
}
