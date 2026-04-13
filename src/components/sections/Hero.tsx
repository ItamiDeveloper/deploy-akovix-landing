"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-white pt-24 md:pt-32"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-100/40 blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-50 text-brand-700 ring-1 ring-brand-200 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Rocket size={16} className="text-brand-500" />
          <span>Transformando ideas en ecosistemas digitales</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desarrollo de Software de <br className="hidden md:block" />
          <span className="text-brand-gradient">Alta Ingeniería</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          En <strong>Akovix Technologies</strong> creamos aplicaciones móviles, plataformas web y sistemas robustos a medida orientados a escalar tu negocio e impulsar tu éxito digital.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Quiero Empezar <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-gray-800 font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            Nuestros Servicios <Code2 size={18} className="text-gray-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
