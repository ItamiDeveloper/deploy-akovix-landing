import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/Services";

export const metadata = {
  title: "Servicios | Akovix Technologies",
  description: "Conoce todos los servicios tecnológicos, desarrollo web y aplicaciones móviles que ofrecemos.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        {/* We can reuse the section component as the main body for now */}
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
