// No "use client" needed — pure CSS animation

const clients = [
  {
    name: "PSEG",
    sub: "Power & Gas",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 16h8l4-4 4 4h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Benjamin Moore",
    sub: "Coatings & Chemicals",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 28V12l8-8 8 8v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <rect x="12" y="20" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    name: "Flowserve",
    sub: "Flow Control OEM",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Crane Co.",
    sub: "Industrial Manufacturing",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="12" width="6" height="10" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="8" width="6" height="14" stroke="currentColor" strokeWidth="1.5" />
        <rect x="22" y="14" width="6" height="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 22h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    name: "Velan",
    sub: "Valve Manufacturer",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 16h6l2-6 4 12 4-8 2 2h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Tyco / Johnson",
    sub: "Flow Control",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L28 28H4L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="bevel" />
        <path d="M16 12v8M13 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    name: "Emerson",
    sub: "Process Automation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 16a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <path d="M8 16a8 8 0 0016 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeDasharray="3 2" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
        <path d="M16 4v3M16 25v3M4 16h3M25 16h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
    ),
  },
  {
    name: "Victaulic",
    sub: "Piping Systems",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 12h24v8H4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 14h2m20 0h2M4 18h2m20 0h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <circle cx="8" cy="16" r="2" fill="currentColor" />
        <circle cx="24" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

// Duplicate for seamless loop
const allClients = [...clients, ...clients];

export default function ClientMarquee() {
  return (
    <section id="clients" className="bg-[#1A1A1A] border-y border-white/10 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-[#FF8C00] text-xs font-semibold tracking-[0.4em] uppercase">
              Trusted By Industry Leaders
            </span>
          </div>
          <p className="text-[#A3A3A3] text-xs font-medium tracking-wide max-w-sm">
            Supplying critical infrastructure projects for Fortune 500 companies
            and engineering firms worldwide.
          </p>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {allClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-4 mx-8 group cursor-default"
            >
              <div className="flex items-center gap-4 border border-white/10 bg-[#2F2F2F] px-6 py-4 hover:border-white/25 hover:bg-[#3a3a3a] transition-all duration-300 min-w-[200px]">
                <div className="text-[#A3A3A3] group-hover:text-white transition-colors duration-300 shrink-0">
                  {client.icon}
                </div>
                <div>
                  <p className="text-white font-black text-sm tracking-wide uppercase leading-tight">
                    {client.name}
                  </p>
                  <p className="text-[#A3A3A3] text-[9px] tracking-[0.2em] uppercase font-medium mt-0.5">
                    {client.sub}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-8 bg-white/10" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {[
            { value: "500+", label: "Products In Stock", sub: "Ready to Ship" },
            { value: "30+", label: "Years In Business", sub: "Est. Industrial Leader" },
            { value: "6", label: "Industries Served", sub: "Globally" },
            { value: "24hr", label: "Quote Turnaround", sub: "Engineering Grade" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#2F2F2F] px-6 py-8 text-center hover:bg-[#3a3a3a] transition-colors duration-300"
            >
              <div className="text-white font-black text-3xl lg:text-4xl leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-white text-xs font-semibold tracking-wide uppercase mt-2">
                {stat.label}
              </div>
              <div className="text-[#A3A3A3] text-[10px] tracking-[0.15em] uppercase mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
