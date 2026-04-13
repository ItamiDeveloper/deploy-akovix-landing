import ContactSection from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contacto | Akovix Technologies",
  description: "Ponte en contacto con nuestro equipo para cotizar tu proyecto de desarrollo.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen flex items-center justify-center bg-gray-50 border-t border-gray-100">
        <div className="w-full">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
