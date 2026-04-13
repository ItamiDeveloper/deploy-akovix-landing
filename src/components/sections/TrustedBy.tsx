"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder data representing companies/clients
const CLIENTS = [
  { name: "TechCorp", logo: "🚀" },
  { name: "InnovateLab", logo: "💡" },
  { name: "GlobalFin", logo: "📈" },
  { name: "HealthPlus", logo: "🏥" },
  { name: "EcoEnergy", logo: "🌱" },
  { name: "SmartRetail", logo: "🛍️" },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">
          Empresas que confían en nosotros
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
          {CLIENTS.map((client, idx) => (
            <motion.div
              key={idx}
              className="flex items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <span className="text-3xl">{client.logo}</span>
              <span className="font-bold text-gray-800 text-lg tracking-tight">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
