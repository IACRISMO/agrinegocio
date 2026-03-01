import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TecnologiaSection } from "@/components/TecnologiaSection";
import { RevolucionDigitalSection } from "@/components/RevolucionDigitalSection";
import { CultivosSection } from "@/components/CultivosSection";
import { PorQueElegirnosSection } from "@/components/PorQueElegirnosSection";
import { ImagePlaceholderSection } from "@/components/ImagePlaceholderSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { SociosCampoSection } from "@/components/SociosCampoSection";
import { ComoFuncionaSection } from "@/components/ComoFuncionaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SociosCampoSection />
        <ComoFuncionaSection />
        <ServicesSection />
        <TecnologiaSection />
        <RevolucionDigitalSection />
        <CultivosSection />
        <PorQueElegirnosSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
