import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Casco Supply Inc. | Industrial Pipe, Valves, Flanges & Fittings",
  description:
    "Specialized supplier of high-quality PIPE, VALVES, FLANGES, FITTINGS, and AUTOMATION. Serving Petro-Chemical, Power-Utility, Pharmaceutical, Marine, and more.",
  keywords:
    "industrial valves, pipe fittings, flanges, gate valve, globe valve, control valve, ASME valves, industrial supply",
  openGraph: {
    title: "Casco Supply Inc.",
    description: "Precision Piping for Global Industry",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-[#1A1A1A] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
