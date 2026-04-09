"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function About({ data }) {
  return (
    <section className="max-w-4xl mx-auto py-24 px-6">
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px flex-1 bg-cyan-dim"></div>
        <h2 className="text-3xl font-bold mono tracking-widest text-cyan uppercase flex items-center gap-3">
          <Cpu className="animate-spin-slow" /> [ ABOUT_ME ]
        </h2>
        <div className="h-px flex-1 bg-cyan-dim"></div>
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="retro-box p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-dim group-hover:bg-cyan transition-colors" />
          <p className="text-xl text-gray-300 leading-relaxed relative z-10">
            {data.description}
          </p>
          <div className="mt-8 pt-6 border-t border-cyan-dim/30 flex justify-between items-center mono text-xs text-cyan/50">
             <span>LOCAL_DATA_SOURCE: STABLE</span>
             <span>ENCRYPTION: AES-256</span>
          </div>
        </motion.div>

        <div className="flex flex-wrap md:flex-col gap-3">
          <h3 className="mono text-xs text-cyan/60 uppercase mb-2 md:block hidden">CORE_SKILLS</h3>
          <div className="flex flex-wrap gap-2 max-w-sm">
            {data.skills.map((skill, index) => (
              <motion.span 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1 border border-cyan-dim text-cyan text-xs mono uppercase hover:border-cyan hover:bg-cyan/10 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}