import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import IndustriesSection from "@/components/IndustriesSection";
import ClientMarquee from "@/components/ClientMarquee";
import CustomValveForm from "@/components/CustomValveForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1A1A1A]">
      <Navbar />
      <Hero />
      <ProductGrid />
      <IndustriesSection />
      <ClientMarquee />
      <CustomValveForm />
      <Footer />
    </main>
  );
}
