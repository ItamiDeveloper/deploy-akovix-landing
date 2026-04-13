"use client";

import { motion } from "framer-motion";

const TECHNOLOGIES = [
  "React", "Next.js", "Node.js", "TypeScript",
  "AWS", "PostgreSQL", "Docker", "Framer Motion", "Tailwind CSS", "React Native"
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 border-y border-gray-100 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Tecnologías de Vanguardia
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee whitespace-nowrap flex gap-12 sm:gap-24 items-center">
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-bold text-gray-200 hover:text-brand-300 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Marquee effect using pure CSS to slide infinitely. Adding inline styles for simplicity since modifying tailwind config for keyframes takes more steps. */}
        <style dangerouslySetInnerHTML={{__html: `
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}} />
      </div>
    </section>
  );
}
