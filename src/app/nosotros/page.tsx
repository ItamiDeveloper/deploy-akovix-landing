import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";

export const metadata = {
  title: "Nosotros | Akovix Technologies",
  description: "Descubre quiénes somos, nuestra tecnología y cómo transformamos tu negocio.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-gray-50 flex flex-col">
        <AboutSection />
        <div className="flex-1">
          <TechStack />
        </div>
      </main>
      <Footer />
    </>
  );
}
