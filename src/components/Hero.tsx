"use client";

import Image from "next/image";

const industries = [
  "Petro-Chemical",
  "Power-Utility",
  "Pharmaceutical",
  "Marine",
  "Pulp & Paper",
  "Food & Beverage",
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center pt-16 lg:pt-20">
      {/* Background Image */}
      <Image
        src="/images/valveHero.jpg"
        alt="Industrial pipeline infrastructure"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay — layered for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/85 to-[#1A1A1A]/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent z-10" />

      {/* Industrial grid overlay */}
      <div className="absolute inset-0 industrial-grid z-10 opacity-60" />

      {/* Orange accent line — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF8C00] z-20" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-[#FF8C00] text-xs font-semibold tracking-[0.4em] uppercase">
              Est. Industrial Supply
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up animate-delay-100 font-black text-white uppercase leading-none tracking-tight mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              PRECISION
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              PIPING FOR
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white relative">
              GLOBAL
              <span className="relative inline-block ml-4">
                <span className="relative z-10">INDUSTRY</span>
                <span className="absolute inset-x-0 bottom-0 h-2 bg-[#FF8C00] z-0 opacity-80" />
              </span>
            </span>
          </h1>

          {/* Mission statement */}
          <p className="animate-fade-in-up animate-delay-200 text-[#A3A3A3] text-base lg:text-lg font-normal max-w-xl mb-10 leading-relaxed">
            Specialized supplier of high-quality{" "}
            <span className="text-white font-semibold">
              PIPE, VALVES, FLANGES, FITTINGS,
            </span>{" "}
            and{" "}
            <span className="text-white font-semibold">AUTOMATION</span>. Integrity
            and personalized service since inception.
          </p>

          {/* CTA Row */}
          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#products"
              className="bg-white text-[#1A1A1A] text-xs font-black tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#FF8C00] hover:text-white transition-colors duration-300 inline-flex items-center gap-3"
            >
              VIEW PRODUCT CATALOG
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </a>
            <a
              href="#custom"
              className="border border-white/30 text-white text-xs font-black tracking-[0.25em] uppercase px-8 py-4 hover:border-white hover:bg-white/5 transition-all duration-300 inline-flex items-center gap-3"
            >
              CUSTOM SOLUTIONS
            </a>
          </div>

          {/* Industry Tags */}
          <div className="animate-fade-in-up animate-delay-300">
            <p className="text-[#A3A3A3] text-[10px] tracking-[0.35em] uppercase mb-3">
              Industries Served
            </p>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="border border-white/15 text-[#A3A3A3] text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 hover:border-[#FF8C00]/50 hover:text-white transition-colors duration-200"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[#A3A3A3] text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#A3A3A3] to-transparent animate-pulse" />
      </div>

      {/* Bottom stat bar */}
      <div className="absolute bottom-0 right-0 z-20 hidden lg:flex">
        <div className="bg-[#1A1A1A]/90 border-l border-t border-white/10 backdrop-blur-sm px-8 py-5 flex gap-10">
          {[
            { value: "30+", label: "Years Experience" },
            { value: "500+", label: "Products Stocked" },
            { value: "6", label: "Industries" },
          ].map((stat) => (
            <div key={stat.label} className="text-right">
              <div className="text-white font-black text-2xl leading-none">
                {stat.value}
              </div>
              <div className="text-[#A3A3A3] text-[10px] tracking-[0.2em] uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
