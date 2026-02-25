"use client";

import { useState } from "react";
import Image from "next/image";

type Material = "Stainless Steel" | "Carbon Steel" | "Alloy 20";

interface TechSpec {
  pressureRating: string;
  temperatureRange: string;
  sizeRange: string;
  endConnections: string;
  asmeStandards: string[];
  materials: Material[];
  cadFiles: string[];
  body: string;
  trim: string;
  seat: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  badge?: string;
  specs: TechSpec;
}

const products: Product[] = [
  {
    id: "gate-valve",
    name: "Gate Valve",
    category: "Isolation",
    tagline: "Full-bore shutoff for minimal flow restriction",
    image:
      "https://images.unsplash.com/photo-1581094651181-35942459ef62?w=800&q=80",
    badge: "Most Popular",
    specs: {
      pressureRating: "Class 150 – 2500 (ANSI/ASME B16.34)",
      temperatureRange: "-20°F to +1200°F",
      sizeRange: '½" – 48" NPS',
      endConnections: "Flanged (RF, RTJ), BW, SW, NPT",
      asmeStandards: ["ASME B16.34", "ASME B16.10", "API 600", "API 603"],
      materials: ["Stainless Steel", "Carbon Steel", "Alloy 20"],
      cadFiles: [".STEP (ISO 10303-21)", ".IGES", ".DWG"],
      body: "WCB / CF8M / CN7M",
      trim: "13Cr / SS316 / Monel",
      seat: "Metal-to-Metal / Resilient Seated",
    },
  },
  {
    id: "globe-valve",
    name: "Globe Valve",
    category: "Throttling",
    tagline: "Precision flow control for demanding applications",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    specs: {
      pressureRating: "Class 150 – 1500 (ANSI/ASME B16.34)",
      temperatureRange: "-50°F to +1000°F",
      sizeRange: '½" – 24" NPS',
      endConnections: "Flanged (RF, FF), BW, SW, Threaded",
      asmeStandards: ["ASME B16.34", "ASME B16.10", "MSS SP-42"],
      materials: ["Stainless Steel", "Carbon Steel", "Alloy 20"],
      cadFiles: [".STEP (ISO 10303-21)", ".IGES", ".DWG"],
      body: "WCB / CF8M / CN7M",
      trim: "SS316 / Stellite / Inconel",
      seat: "Plug & Seat Renewable",
    },
  },
  {
    id: "check-valve",
    name: "Check Valve",
    category: "Non-Return",
    tagline: "Automatic backflow prevention, zero maintenance",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80",
    specs: {
      pressureRating: "Class 150 – 2500 (ANSI/ASME B16.34)",
      temperatureRange: "-100°F to +1500°F",
      sizeRange: '½" – 60" NPS',
      endConnections: "Flanged (RF, RTJ), BW, Wafer/Lug",
      asmeStandards: ["ASME B16.34", "API 594", "API 6D"],
      materials: ["Stainless Steel", "Carbon Steel", "Alloy 20"],
      cadFiles: [".STEP (ISO 10303-21)", ".IGES", ".DWG"],
      body: "WCB / CF8M / CN7M / Duplex SS",
      trim: "SS304 / SS316 / Alloy 20",
      seat: "Swing / Tilting Disc / Dual Plate",
    },
  },
  {
    id: "control-valve",
    name: "Control Valve",
    category: "Automation",
    tagline: "Automated process control for critical systems",
    image:
      "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=800&q=80",
    badge: "New",
    specs: {
      pressureRating: "Class 150 – 900 (ANSI/ASME B16.34)",
      temperatureRange: "-320°F to +800°F",
      sizeRange: '½" – 24" NPS',
      endConnections: "Flanged (RF), BW, Threaded",
      asmeStandards: ["ASME B16.34", "IEC 60534", "ANSI/FCI 70-2"],
      materials: ["Stainless Steel", "Carbon Steel", "Alloy 20"],
      cadFiles: [".STEP (ISO 10303-21)", ".IGES", ".DWG", "3D PDF"],
      body: "WCB / CF8M / SS316 / Hastelloy",
      trim: "SS316 / Stellite / Ceramic",
      seat: "Characterized / Equal Percentage / Linear",
    },
  },
];

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 py-2.5 border-b border-white/5 last:border-0">
      <span className="text-[#A3A3A3] text-[10px] font-semibold tracking-[0.15em] uppercase w-32 shrink-0">
        {label}
      </span>
      <span className="text-white text-xs font-medium leading-relaxed">
        {value}
      </span>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState<Material>(
    "Stainless Steel"
  );

  return (
    <article className="group relative bg-[#2F2F2F] border border-white/10 flex flex-col overflow-hidden hover:border-white/25 transition-all duration-300">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 right-4 z-10 bg-[#FF8C00] text-white text-[9px] font-black tracking-[0.2em] uppercase px-2.5 py-1">
          {product.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 bg-[#1A1A1A] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Category label */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#2F2F2F] to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="text-[#FF8C00] text-[9px] font-black tracking-[0.35em] uppercase">
            {product.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-white font-black text-xl tracking-wide uppercase mb-1">
          {product.name}
        </h3>
        <p className="text-[#A3A3A3] text-xs leading-relaxed mb-5">
          {product.tagline}
        </p>

        {/* Material Selector */}
        <div className="mb-5">
          <p className="text-[#A3A3A3] text-[9px] font-semibold tracking-[0.3em] uppercase mb-2">
            Material Grade
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {product.specs.materials.map((mat) => (
              <button
                key={mat}
                onClick={() => setActiveMaterial(mat)}
                className={`text-[9px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1.5 border transition-all duration-200 ${
                  activeMaterial === mat
                    ? "bg-white text-[#1A1A1A] border-white"
                    : "border-white/20 text-[#A3A3A3] hover:border-white/40 hover:text-white"
                }`}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-[#1A1A1A] px-3 py-2.5">
            <p className="text-[#A3A3A3] text-[8px] tracking-[0.2em] uppercase mb-1">
              Size Range
            </p>
            <p className="text-white text-xs font-semibold">{product.specs.sizeRange}</p>
          </div>
          <div className="bg-[#1A1A1A] px-3 py-2.5">
            <p className="text-[#A3A3A3] text-[8px] tracking-[0.2em] uppercase mb-1">
              Pressure Class
            </p>
            <p className="text-white text-xs font-semibold leading-tight">
              {product.specs.pressureRating.split(" (")[0]}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-2">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`flex-1 text-[10px] font-black tracking-[0.2em] uppercase px-3 py-2.5 border transition-all duration-200 flex items-center justify-center gap-2 ${
              drawerOpen
                ? "bg-white text-[#1A1A1A] border-white"
                : "border-white/30 text-white hover:border-white hover:bg-white/5"
            }`}
          >
            TECH SPECS
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform duration-300 ${drawerOpen ? "rotate-180" : ""}`}
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </button>
          <a
            href="#custom"
            className="border border-white/30 text-white text-[10px] font-black tracking-[0.15em] uppercase px-3 py-2.5 hover:border-[#FF8C00] hover:text-[#FF8C00] transition-all duration-200"
          >
            RFQ
          </a>
        </div>
      </div>

      {/* Technical Specs Drawer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          drawerOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#1A1A1A] p-5">
          {/* Drawer Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-4 h-px bg-[#FF8C00]" />
            <span className="text-[#FF8C00] text-[9px] font-black tracking-[0.35em] uppercase">
              Technical Specifications
            </span>
          </div>

          {/* Spec Rows */}
          <div className="mb-5">
            <SpecRow label="Pressure Rating" value={product.specs.pressureRating} />
            <SpecRow label="Temp. Range" value={product.specs.temperatureRange} />
            <SpecRow label="Size Range" value={product.specs.sizeRange} />
            <SpecRow label="End Connections" value={product.specs.endConnections} />
            <SpecRow label="Body Material" value={product.specs.body} />
            <SpecRow label="Trim Material" value={product.specs.trim} />
            <SpecRow label="Seat Type" value={product.specs.seat} />
          </div>

          {/* ASME Standards */}
          <div className="mb-5">
            <p className="text-[#A3A3A3] text-[9px] font-semibold tracking-[0.3em] uppercase mb-2">
              ASME / API Standards
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.specs.asmeStandards.map((std) => (
                <span
                  key={std}
                  className="border border-[#FF8C00]/30 text-[#FF8C00] text-[9px] font-semibold tracking-[0.1em] uppercase px-2 py-1"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>

          {/* CAD Files */}
          <div>
            <p className="text-[#A3A3A3] text-[9px] font-semibold tracking-[0.3em] uppercase mb-2">
              CAD Files Available
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.specs.cadFiles.map((file) => (
                <span
                  key={file}
                  className="bg-white/5 border border-white/10 text-[#A3A3A3] text-[9px] font-medium tracking-wide px-2 py-1"
                >
                  {file}
                </span>
              ))}
            </div>
            <a
              href="#custom"
              className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] text-[9px] font-black tracking-[0.2em] uppercase px-4 py-2.5 hover:bg-[#FF8C00] hover:text-white transition-colors duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1v7M6 8L3 5M6 8l3-3M1 11h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
              REQUEST CAD FILES
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="bg-[#1A1A1A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-[#FF8C00] text-xs font-semibold tracking-[0.4em] uppercase">
              Product Catalog
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-white font-black text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tight leading-none mb-4">
                INDUSTRIAL
                <br />
                <span className="text-[#A3A3A3]">VALVE SOLUTIONS</span>
              </h2>
              <p className="text-[#A3A3A3] text-sm lg:text-base max-w-lg leading-relaxed">
                Engineer-grade valves for mission-critical applications. Every
                product meets or exceeds ASME, API, and industry-specific
                standards.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[#A3A3A3] text-xs font-medium">
                Showing 4 of 500+ products
              </span>
              <a
                href="#custom"
                className="border border-white/20 text-white text-[10px] font-black tracking-[0.2em] uppercase px-4 py-2.5 hover:border-white transition-colors duration-200"
              >
                VIEW ALL
              </a>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-white/5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-px bg-[#2F2F2F] border border-white/10 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#A3A3A3] text-[10px] tracking-[0.35em] uppercase mb-2">
              Also Available
            </p>
            <h3 className="text-white font-black text-2xl lg:text-3xl uppercase tracking-tight">
              PIPE · FLANGES · FITTINGS · AUTOMATION
            </h3>
          </div>
          <a
            href="#custom"
            className="shrink-0 bg-white text-[#1A1A1A] text-xs font-black tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#FF8C00] hover:text-white transition-colors duration-300 inline-flex items-center gap-3"
          >
            REQUEST FULL CATALOG
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
