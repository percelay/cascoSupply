"use client";

import { useState } from "react";

type FormState = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  mediaType: string;
  psiMin: string;
  psiMax: string;
  temperature: string;
  connectionType: string;
  valveType: string;
  material: string;
  industry: string;
  quantity: string;
  deliveryTimeline: string;
  additionalNotes: string;
};

const initialState: FormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  mediaType: "",
  psiMin: "",
  psiMax: "",
  temperature: "",
  connectionType: "",
  valveType: "",
  material: "",
  industry: "",
  quantity: "",
  deliveryTimeline: "",
  additionalNotes: "",
};

const industries = [
  "Petro-Chemical",
  "Power-Utility",
  "Pharmaceutical",
  "Marine",
  "Pulp & Paper",
  "Food & Beverage",
  "Water Treatment",
  "HVAC / Building",
  "Mining",
  "Other",
];

const valveTypes = [
  "Gate Valve",
  "Globe Valve",
  "Check Valve",
  "Control Valve",
  "Ball Valve",
  "Butterfly Valve",
  "Plug Valve",
  "Safety Relief Valve",
  "Custom / Unknown",
];

const materials = [
  "Stainless Steel 304",
  "Stainless Steel 316",
  "Carbon Steel (WCB)",
  "Alloy 20 (CN7M)",
  "Duplex Stainless Steel",
  "Hastelloy C-276",
  "Monel 400",
  "Bronze",
  "Cast Iron",
  "PVC / Plastic",
];

const connectionTypes = [
  "Flanged – ANSI 150#",
  "Flanged – ANSI 300#",
  "Flanged – ANSI 600#",
  "Flanged – ANSI 900#+",
  "Butt Weld (BW)",
  "Socket Weld (SW)",
  "Threaded (NPT)",
  "Wafer / Lug",
  "Clamp / Sanitary",
];

const timelines = [
  "Standard Lead Time (4-8 weeks)",
  "Expedited (2-4 weeks)",
  "Emergency / ASAP",
  "Long-term / Blanket PO",
];

function FieldLabel({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <label className="block text-[#A3A3A3] text-[9px] font-semibold tracking-[0.3em] uppercase mb-1.5">
      {label}
      {required && <span className="text-[#FF8C00] ml-1">*</span>}
    </label>
  );
}

export default function CustomValveForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#1A1A1A] border border-white/15 text-white text-xs font-medium px-4 py-3 focus:outline-none focus:border-white/40 placeholder:text-white/20 transition-colors duration-200";

  const selectClass =
    "w-full bg-[#1A1A1A] border border-white/15 text-white text-xs font-medium px-4 py-3 focus:outline-none focus:border-white/40 transition-colors duration-200 appearance-none cursor-pointer";

  if (submitted) {
    return (
      <section id="custom" className="bg-[#2F2F2F] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center min-h-[400px]">
          <div className="text-center max-w-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#FF8C00] mb-8">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M5 14L11 20L23 8"
                  stroke="#FF8C00"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
            <h3 className="text-white font-black text-3xl lg:text-4xl uppercase tracking-tight mb-4">
              REQUEST RECEIVED
            </h3>
            <p className="text-[#A3A3A3] text-sm leading-relaxed mb-8">
              Our engineering team will review your specifications and respond
              within{" "}
              <span className="text-white font-semibold">1 business day</span>.
              For urgent requirements, call us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialState);
                  setStep(1);
                }}
                className="bg-white text-[#1A1A1A] text-xs font-black tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#FF8C00] hover:text-white transition-colors duration-200"
              >
                NEW REQUEST
              </button>
              <a
                href="tel:+1-800-CASCO"
                className="border border-white/30 text-white text-xs font-black tracking-[0.2em] uppercase px-6 py-3 hover:border-white transition-colors duration-200"
              >
                CALL US NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="custom"
      className="bg-[#2F2F2F] py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 industrial-grid opacity-30" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#1A1A1A]/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#FF8C00]" />
            <span className="text-[#FF8C00] text-xs font-semibold tracking-[0.4em] uppercase">
              Custom Solutions
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-white font-black text-4xl lg:text-5xl xl:text-6xl uppercase tracking-tight leading-none mb-4">
                ENGINEER
                <br />
                <span className="text-[#A3A3A3]">YOUR SOLUTION</span>
              </h2>
              <p className="text-[#A3A3A3] text-sm max-w-lg leading-relaxed">
                Trusted by engineering firms including{" "}
                <span className="text-white font-semibold">PSEG</span>,{" "}
                <span className="text-white font-semibold">Benjamin Moore</span>
                , and global OEMs. Submit your technical requirements for a
                precision-matched quote.
              </p>
            </div>
            {/* Step indicator */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStep(1)}
                  className={`w-8 h-8 border text-xs font-black transition-all duration-200 ${
                    step === 1
                      ? "bg-white text-[#1A1A1A] border-white"
                      : "border-white/30 text-[#A3A3A3]"
                  }`}
                >
                  1
                </button>
                <div className="w-6 h-px bg-white/20" />
                <button
                  onClick={() => setStep(2)}
                  className={`w-8 h-8 border text-xs font-black transition-all duration-200 ${
                    step === 2
                      ? "bg-white text-[#1A1A1A] border-white"
                      : "border-white/30 text-[#A3A3A3]"
                  }`}
                >
                  2
                </button>
              </div>
              <span className="text-[#A3A3A3] text-[10px] tracking-[0.2em] uppercase">
                {step === 1 ? "Contact Info" : "Technical Specs"}
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
            {/* Left / Main form columns */}
            <div className="lg:col-span-2 bg-[#2F2F2F]">
              {/* Step 1: Company Info */}
              <div
                className={`p-8 lg:p-10 border-b border-white/5 transition-all duration-300 ${
                  step === 2 ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <p className="text-white font-black text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                  <span className="w-5 h-5 border border-[#FF8C00] text-[#FF8C00] text-[9px] font-black flex items-center justify-center">
                    01
                  </span>
                  Company &amp; Contact
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <FieldLabel label="Company Name" required />
                    <input
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="PSEG / Engineering Firm"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <FieldLabel label="Contact Name" required />
                    <input
                      name="contactName"
                      value={form.contactName}
                      onChange={handleChange}
                      placeholder="Project Engineer"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <FieldLabel label="Email Address" required />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="engineer@company.com"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <FieldLabel label="Phone Number" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (800) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-white text-[#1A1A1A] text-[10px] font-black tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#FF8C00] hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    NEXT: TECHNICAL SPECS
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7H12M12 7L8 3M12 7L8 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Step 2: Technical Specs */}
              <div
                className={`p-8 lg:p-10 transition-all duration-300 ${
                  step === 1 ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                <p className="text-white font-black text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                  <span className="w-5 h-5 border border-[#FF8C00] text-[#FF8C00] text-[9px] font-black flex items-center justify-center">
                    02
                  </span>
                  Technical Specifications
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Media Type */}
                  <div>
                    <FieldLabel label="Media / Fluid Type" required />
                    <input
                      name="mediaType"
                      value={form.mediaType}
                      onChange={handleChange}
                      placeholder="Steam, Oil, Gas, Corrosive..."
                      className={inputClass}
                      required
                    />
                  </div>

                  {/* Industry */}
                  <div className="relative">
                    <FieldLabel label="Industry" required />
                    <select
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >
                      <option value="" disabled>
                        Select Industry
                      </option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[58%] -translate-y-1/2">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#A3A3A3"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* PSI Range */}
                  <div>
                    <FieldLabel label="Min PSI Requirement" required />
                    <input
                      type="number"
                      name="psiMin"
                      value={form.psiMin}
                      onChange={handleChange}
                      placeholder="e.g. 150"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <FieldLabel label="Max PSI Requirement" required />
                    <input
                      type="number"
                      name="psiMax"
                      value={form.psiMax}
                      onChange={handleChange}
                      placeholder="e.g. 2500"
                      className={inputClass}
                      required
                    />
                  </div>

                  {/* Temperature */}
                  <div>
                    <FieldLabel label="Operating Temperature (°F)" />
                    <input
                      name="temperature"
                      value={form.temperature}
                      onChange={handleChange}
                      placeholder="e.g. -20°F to +850°F"
                      className={inputClass}
                    />
                  </div>

                  {/* Connection Type */}
                  <div className="relative">
                    <FieldLabel label="Connection Type" required />
                    <select
                      name="connectionType"
                      value={form.connectionType}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >
                      <option value="" disabled>
                        Select Connection
                      </option>
                      {connectionTypes.map((ct) => (
                        <option key={ct} value={ct}>
                          {ct}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[58%] -translate-y-1/2">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#A3A3A3"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Valve Type */}
                  <div className="relative">
                    <FieldLabel label="Valve / Product Type" required />
                    <select
                      name="valveType"
                      value={form.valveType}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >
                      <option value="" disabled>
                        Select Type
                      </option>
                      {valveTypes.map((vt) => (
                        <option key={vt} value={vt}>
                          {vt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[58%] -translate-y-1/2">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#A3A3A3"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Material */}
                  <div className="relative">
                    <FieldLabel label="Material Grade" />
                    <select
                      name="material"
                      value={form.material}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Select Material (Optional)</option>
                      {materials.map((mat) => (
                        <option key={mat} value={mat}>
                          {mat}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[58%] -translate-y-1/2">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#A3A3A3"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <FieldLabel label="Estimated Quantity" />
                    <input
                      type="number"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="Units required"
                      className={inputClass}
                    />
                  </div>

                  {/* Delivery Timeline */}
                  <div className="relative">
                    <FieldLabel label="Delivery Timeline" />
                    <select
                      name="deliveryTimeline"
                      value={form.deliveryTimeline}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map((tl) => (
                        <option key={tl} value={tl}>
                          {tl}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-4 top-[58%] -translate-y-1/2">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="#A3A3A3"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="sm:col-span-2">
                    <FieldLabel label="Additional Notes / PO Number / Drawing Ref." />
                    <textarea
                      name="additionalNotes"
                      value={form.additionalNotes}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Include ASME class requirements, special coatings, certifications (MTR, PED, NACE), or reference drawings..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar — summary / trust */}
            <div className="bg-[#1A1A1A] border-l-0 lg:border-l border-white/5 p-8">
              {/* What happens next */}
              <div className="mb-10">
                <p className="text-white font-black text-xs tracking-[0.25em] uppercase mb-6">
                  WHAT HAPPENS NEXT
                </p>
                <div className="space-y-5">
                  {[
                    {
                      num: "01",
                      title: "Engineering Review",
                      desc: "Our technical team reviews your specs within 24 hours.",
                    },
                    {
                      num: "02",
                      title: "Matched Quote",
                      desc: "Receive a precision-matched proposal with compliant options.",
                    },
                    {
                      num: "03",
                      title: "CAD & Documentation",
                      desc: "Full technical package: STEP files, MTRs, pressure certs.",
                    },
                    {
                      num: "04",
                      title: "Delivery",
                      desc: "Domestic & international logistics, expedite available.",
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <span className="text-[#FF8C00] text-[9px] font-black shrink-0 pt-0.5">
                        {step.num}
                      </span>
                      <div>
                        <p className="text-white text-xs font-semibold mb-0.5">
                          {step.title}
                        </p>
                        <p className="text-[#A3A3A3] text-[11px] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="border-t border-white/10 pt-8 mb-10">
                <p className="text-[#A3A3A3] text-[9px] tracking-[0.3em] uppercase mb-5">
                  Certifications &amp; Compliance
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "ASME B16.34",
                    "API 600",
                    "NACE MR0175",
                    "PED 2014/68/EU",
                    "ISO 9001",
                    "MSS SP-25",
                  ].map((cert) => (
                    <div
                      key={cert}
                      className="border border-white/10 text-[#A3A3A3] text-[9px] font-semibold tracking-wide px-2.5 py-2 text-center"
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-[#A3A3A3] text-[9px] tracking-[0.3em] uppercase mb-4">
                  Prefer to Talk?
                </p>
                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-3 text-white font-semibold text-sm hover:text-[#FF8C00] transition-colors duration-200 mb-3"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0"
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
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="shrink-0"
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
              </div>
            </div>
          </div>

          {/* Form Submit */}
          <div className="bg-[#1A1A1A] border-t border-white/10 px-8 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-[#A3A3A3] text-[10px] leading-relaxed max-w-sm">
              By submitting this form, you agree to be contacted by a Casco
              Supply representative. All inquiries are treated with strict
              confidentiality.
            </p>
            <button
              type="submit"
              onClick={() => step === 1 ? setStep(2) : undefined}
              className="shrink-0 bg-white text-[#1A1A1A] text-xs font-black tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#FF8C00] hover:text-white transition-colors duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              SUBMIT TECHNICAL REQUEST
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
