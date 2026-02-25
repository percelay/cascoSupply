import Link from "next/link";

const products = [
  "Gate Valves",
  "Globe Valves",
  "Check Valves",
  "Control Valves",
  "Ball Valves",
  "Butterfly Valves",
  "Pipe & Fittings",
  "Flanges",
  "Automation",
];

const industries = [
  "Petro-Chemical",
  "Power-Utility",
  "Pharmaceutical",
  "Marine",
  "Pulp & Paper",
  "Food & Beverage",
];

const company = [
  { label: "About Casco Supply", href: "#" },
  { label: "Our Mission", href: "#" },
  { label: "Quality Assurance", href: "#" },
  { label: "Certifications", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] border-t border-white/10">
      {/* Top CTA Band */}
      <div className="border-b border-white/10 bg-[#2F2F2F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#A3A3A3] text-[10px] tracking-[0.4em] uppercase mb-2">
              Ready to Source?
            </p>
            <h3 className="text-white font-black text-2xl lg:text-3xl xl:text-4xl uppercase tracking-tight leading-none">
              LET&apos;S ENGINEER
              <br />
              YOUR SOLUTION
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#custom"
              className="bg-white text-[#1A1A1A] text-xs font-black tracking-[0.25em] uppercase px-7 py-4 hover:bg-[#FF8C00] hover:text-white transition-colors duration-300 text-center"
            >
              GET A QUOTE
            </a>
            <a
              href="tel:+18005551234"
              className="border border-white/30 text-white text-xs font-black tracking-[0.25em] uppercase px-7 py-4 hover:border-white transition-colors duration-300 text-center flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 2h3l1 3-2 1a9 9 0 004 4l1-2 3 1v3a1 1 0 01-1 1A11 11 0 011 3a1 1 0 011-1z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                />
              </svg>
              CALL NOW
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <svg
                width="40"
                height="40"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </Link>

            <p className="text-[#A3A3A3] text-xs leading-relaxed max-w-xs mb-8">
              Specialized supplier of high-quality PIPE, VALVES, FLANGES,
              FITTINGS, and AUTOMATION. Integrity and personalized service since
              inception.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-3 text-[#A3A3A3] text-xs hover:text-white transition-colors duration-200"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="shrink-0 text-[#FF8C00]"
                >
                  <path
                    d="M2 2h3l1 3-2 1a9 9 0 004 4l1-2 3 1v3a1 1 0 01-1 1A11 11 0 011 3a1 1 0 011-1z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="square"
                  />
                </svg>
                +1 (800) 555-1234
              </a>
              <a
                href="mailto:sales@cascosupply.com"
                className="flex items-center gap-3 text-[#A3A3A3] text-xs hover:text-white transition-colors duration-200"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="shrink-0 text-[#FF8C00]"
                >
                  <rect
                    x="1"
                    y="3"
                    width="12"
                    height="8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M1 3l6 5 6-5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="square"
                  />
                </svg>
                sales@cascosupply.com
              </a>
              <div className="flex items-start gap-3 text-[#A3A3A3] text-xs">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="shrink-0 mt-0.5 text-[#FF8C00]"
                >
                  <path
                    d="M7 1a5 5 0 015 5c0 4-5 8-5 8S2 10 2 6a5 5 0 015-5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <circle cx="7" cy="6" r="1.5" fill="currentColor" />
                </svg>
                <span>
                  123 Industrial Blvd, Suite 400
                  <br />
                  Newark, NJ 07102
                </span>
              </div>
            </div>

            {/* Mission badge */}
            <div className="border border-[#FF8C00]/20 bg-[#FF8C00]/5 px-4 py-3 max-w-xs">
              <p className="text-[#FF8C00] text-[9px] font-semibold tracking-[0.3em] uppercase mb-1">
                Our Mission
              </p>
              <p className="text-white text-[11px] leading-relaxed font-medium">
                &ldquo;Integrity and personalized service
                <br />
                since inception.&rdquo;
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="text-white font-black text-[10px] tracking-[0.3em] uppercase mb-5">
              Products
            </p>
            <ul className="space-y-2.5">
              {products.map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-[#A3A3A3] text-xs hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:bg-[#FF8C00] transition-colors duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="text-white font-black text-[10px] tracking-[0.3em] uppercase mb-5">
              Industries
            </p>
            <ul className="space-y-2.5 mb-8">
              {industries.map((item) => (
                <li key={item}>
                  <a
                    href="#industries"
                    className="text-[#A3A3A3] text-xs hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:bg-[#FF8C00] transition-colors duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-black text-[10px] tracking-[0.3em] uppercase mb-5">
              Company
            </p>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#A3A3A3] text-xs hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:bg-[#FF8C00] transition-colors duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications mini */}
            <div className="mt-8">
              <p className="text-[#A3A3A3] text-[9px] tracking-[0.3em] uppercase mb-3">
                Certified To
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["ISO 9001", "ASME", "API", "NACE"].map((cert) => (
                  <span
                    key={cert}
                    className="border border-white/15 text-[#A3A3A3] text-[9px] font-semibold tracking-wide px-2 py-1"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A3A3A3] text-[10px] tracking-wide">
            © {new Date().getFullYear()} Casco Supply Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#A3A3A3] text-[10px] hover:text-white transition-colors duration-200 tracking-wide uppercase"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#A3A3A3] text-[10px] hover:text-white transition-colors duration-200 tracking-wide uppercase"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#A3A3A3] text-[10px] hover:text-white transition-colors duration-200 tracking-wide uppercase"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
