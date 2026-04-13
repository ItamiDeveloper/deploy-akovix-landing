"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const benefits = [
    "Arquitectura Limpia y Escalable",
    "Metodologías Ágiles de Desarrollo",
    "Experiencia de Usuario (UX) Premium",
    "Soporte y Mantenimiento Continuo",
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              ¿Por qué elegir <br/>
              <span className="text-brand-gradient">Akovix Technologies?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Somos más que una agencia de desarrollo; somos tu socio tecnológico estratégico. Entendemos las necesidades de tu negocio para transformarlas en productos digitales de calidad mundial que aporten valor real desde el primer día.
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <motion.li 
                  key={idx}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                >
                  <CheckCircle2 className="text-brand-500 w-6 h-6 flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual Element (Logo or Abstract Image) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-3xl bg-white border border-gray-100 shadow-2xl p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-50/50 backdrop-blur-3xl" />
              <Image 
                src="/Logo_Akovix.svg" 
                alt="Akovix Technologies" 
                width={300} 
                height={200}
                className="relative z-10 w-3/4 opacity-90 drop-shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
