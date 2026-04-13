"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers, Cpu, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-50/30 pt-28 pb-20">
      {/* Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-400/10 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-brand-600/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 shadow-sm text-sm font-semibold text-brand-700 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Agencia de Desarrollo y Consultoría IT
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Innovación <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-brand-400">
                Llevada al Código.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Potenciamos el núcleo tecnológico de tu empresa. Desde aplicativos móviles nativos hasta ecosistemas web empresariales. En Akovix, construimos el futuro.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link
                href="/contacto"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-900 text-white font-medium hover:bg-brand-900 transition-all shadow-xl hover:shadow-brand-900/30"
              >
                Inicia tu Proyecto
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-800 font-medium hover:text-brand-700 hover:bg-gray-50 border border-gray-200 transition-all shadow-sm"
              >
                Descubre qué hacemos
              </Link>
            </motion.div>
          </div>

          {/* Abstract Visual / Floating Tech Elements */}
          <div className="relative hidden lg:block h-[600px] w-full">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-white rounded-3xl border border-brand-50 shadow-2xl p-8 flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Glassmorphism subtle overlay */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-10" />
              
              <Image 
                src="/Logo_Akovix.svg" 
                alt="Akovix Base" 
                width={400} 
                height={200}
                className="opacity-20 absolute scale-150 grayscale"
              />

              {/* Floating UI Cards */}
              <motion.div className="z-20 absolute top-[15%] left-[5%] bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100" animate={floatAnimation}>
                <div className="bg-brand-100 p-3 rounded-lg"><Code2 className="text-brand-600" /></div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Clean Architecture</div>
                  <div className="text-xs text-gray-400">Escalabilidad pura</div>
                </div>
              </motion.div>

              <motion.div className="z-20 absolute bottom-[25%] right-[5%] bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100" animate={{...floatAnimation, transition: {duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1}}}>
                <div className="bg-brand-900 p-3 rounded-lg"><Smartphone className="text-white" /></div>
                <div>
                  <div className="text-sm font-bold text-gray-800">App Development</div>
                  <div className="text-xs text-gray-400">iOS & Android</div>
                </div>
              </motion.div>
              
              <motion.div className="z-20 absolute top-[40%] right-[10%] bg-brand-500 p-4 rounded-2xl shadow-brand-500/30 shadow-xl" animate={{...floatAnimation, transition: {duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2}}}>
                <Cpu className="text-white w-8 h-8" />
              </motion.div>

              <motion.div className="z-20 absolute bottom-[15%] left-[15%] bg-white p-4 rounded-2xl shadow-xl border border-gray-100" animate={{...floatAnimation, transition: {duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5}}}>
                <Layers className="text-brand-400 w-8 h-8" />
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
