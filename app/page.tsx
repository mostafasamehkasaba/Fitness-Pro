
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/pricing";
import Testmonials from "@/components/Testmonials";
import Programes from "@/components/ui/Programes";
import WhyChoose from "@/components/WhyChoose";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Programes />
      <WhyChoose />
      <Testmonials />
      <Pricing />
      <Footer />
    </main>
  );
}

