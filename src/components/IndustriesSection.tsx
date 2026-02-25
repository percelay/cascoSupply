import Image from "next/image";

const industries = [
  {
    name: "Petro-Chemical",
    description:
      "Corrosion-resistant valves and piping for refinery, upstream/downstream, and chemical processing applications.",
    image:
      "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&q=80",
    specs: ["NACE MR0175", "API 600", "High H₂S Environments"],
    accent: "left",
  },
  {
    name: "Power-Utility",
    description:
      "High-pressure, high-temperature valves compliant with ASME power piping codes for steam and feedwater systems.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
    specs: ["ASME B31.1", "Class 2500", "Steam Service"],
    accent: "right",
  },
  {
    name: "Pharmaceutical",
    description:
      "Sanitary-grade valves meeting FDA, 3-A, and cGMP standards for bioprocessing and sterile manufacturing.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    specs: ["FDA 21 CFR", "3-A Sanitary", "cGMP Compliant"],
    accent: "left",
  },
  {
    name: "Marine",
    description:
      "Bronze, Monel, and duplex stainless steel fittings rated for seawater service and offshore environments.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    specs: ["ABS / DNV GL", "Seawater Rated", "IMO Standards"],
    accent: "right",
  },
  {
    name: "Pulp & Paper",
    description:
      "Abrasion and corrosion-resistant valves for pulping liquors, white water, and black liquor service.",
    image:
      "https://images.unsplash.com/photo-1580394693981-254f38fd6f37?w=600&q=80",
    specs: ["Slurry Service", "Alloy 20", "High pH Media"],
    accent: "left",
  },
  {
    name: "Food & Beverage",
    description:
      "Hygienic clamp-end valves and fittings for clean-in-place (CIP) systems, USDA-compliant dairy and food processing.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    specs: ["USDA Approved", "CIP Ready", "316L SS Electropolished"],
    accent: "right",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="bg-[#2F2F2F] py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-[#FF8C00] text-xs font-semibold tracking-[0.4em] uppercase">
              Industries Served
            </span>
          </div>
          <h2 className="text-white font-black text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tight leading-none mb-4">
            BUILT FOR
            <br />
            <span className="text-[#A3A3A3]">EVERY SECTOR</span>
          </h2>
          <p className="text-[#A3A3A3] text-sm lg:text-base leading-relaxed">
            From offshore platforms to sterile pharmaceutical plants — Casco
            Supply provides engineered piping solutions across the full spectrum
            of heavy industry.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative bg-[#2F2F2F] overflow-hidden cursor-default"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F] via-[#2F2F2F]/40 to-transparent" />

                {/* Industry name on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-black text-xl uppercase tracking-wide leading-tight">
                    {industry.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 border-t border-white/5">
                <p className="text-[#A3A3A3] text-xs leading-relaxed mb-4">
                  {industry.description}
                </p>

                {/* Spec tags */}
                <div className="flex flex-wrap gap-1.5">
                  {industry.specs.map((spec) => (
                    <span
                      key={spec}
                      className="border border-[#FF8C00]/25 text-[#FF8C00] text-[9px] font-semibold tracking-[0.1em] uppercase px-2 py-1"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Hover underline accent */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[#A3A3A3] text-[10px] font-semibold tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-300">
                    View Products
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-[#A3A3A3] group-hover:text-[#FF8C00] group-hover:translate-x-1 transition-all duration-300"
                  >
                    <path
                      d="M2 7H12M12 7L8 3M12 7L8 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-px bg-[#1A1A1A] border border-white/5 p-8 flex flex-col lg:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-[#FF8C00] shrink-0"
            >
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M10 6v4l3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
            <p className="text-[#A3A3A3] text-xs leading-relaxed">
              <span className="text-white font-semibold">Don&apos;t see your industry?</span>{" "}
              Casco Supply sources specialized valves and piping for virtually
              any application. Contact our engineering team for a consultation.
            </p>
          </div>
          <a
            href="#custom"
            className="shrink-0 border border-white/30 text-white text-[10px] font-black tracking-[0.2em] uppercase px-6 py-3 hover:border-white hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
          >
            CONTACT ENGINEERING
          </a>
        </div>
      </div>
    </section>
  );
}
