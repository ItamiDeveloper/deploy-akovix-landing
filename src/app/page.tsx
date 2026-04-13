import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hub / Entry Point */}
        <Hero />
        
        {/* Social Proof */}
        <TrustedBy />

        {/* Short Hub Intro linking to other pages */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tu socio estratégico en la era digital</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              En Akovix no solo escribimos código, orquestamos soluciones integrales que abarcan desde el desarrollo de aplicaciones robustas hasta el diseño de experiencias de usuario magistrales. Explora a profundidad nuestro ecosistema.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/nosotros" className="text-brand-700 font-semibold hover:text-brand-900 underline underline-offset-4">Conoce nuestra historia</a>
              <span className="hidden sm:block text-gray-300">|</span>
              <a href="/servicios" className="text-brand-700 font-semibold hover:text-brand-900 underline underline-offset-4">Ver catálogo de soluciones</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
