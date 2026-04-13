"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor, Code2, Lightbulb } from "lucide-react";
import { SERVICES } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone size={32} className="text-brand-600" />,
  Monitor: <Monitor size={32} className="text-brand-600" />,
  Code2: <Code2 size={32} className="text-brand-600" />,
  Lightbulb: <Lightbulb size={32} className="text-brand-600" />,
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestros <span className="text-brand-gradient">Servicios Core</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soluciones integrales de software diseñadas para impulsar la eficiencia operativa y el crecimiento de tu empresa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100 hover:border-brand-200 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-xl bg-brand-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[service.iconName as string] || <Code2 size={32} className="text-brand-600" />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              
              {/* Subtle hover effect background */}
              <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-brand-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
