import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, CONTACT_INFO } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="#home" className="inline-block">
              <Image
                src="/Logo_Akovix.svg"
                alt="Akovix Technologies"
                width={140}
                height={76}
                className="w-auto h-12"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Potenciamos empresas mediante el desarrollo de software a medida, aplicaciones móviles y soluciones web de alto impacto.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link: { label: string; href: string }) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-brand-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-600 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-600 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>

          {/* CTA Col */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">
              ¿Listo para empezar?
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Agenda una reunión con nuestros expertos y hagamos realidad tu proyecto.
            </p>
            <a
              href="#contact"
              className="inline-block px-5 py-2.5 rounded-lg bg-brand-600 text-white font-medium hover:bg-brand-700 transition"
            >
              Consultoría Gratuita
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Akovix Technologies. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
