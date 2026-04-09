"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export default function Hero({ data }) {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.section 
      variants={containerVars}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center py-32 px-4"
    >
      <motion.div variants={itemVars} className="mb-4 mono text-cyan text-sm tracking-widest uppercase">
        [ SYSTEM_ID: {data.name.split(' ').join('_').toUpperCase()} ]
      </motion.div>

      <motion.h1 
        variants={itemVars}
        className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-2"
        style={{ textShadow: '0 0 20px var(--cyan-dim)' }}
      >
        <span className="text-cyan animate-pulse">&gt;</span> {data.name}
      </motion.h1>

      <motion.h2 variants={itemVars} className="text-xl md:text-2xl mono text-cyan opacity-80 mb-6">
        {data.company.toUpperCase()} // SOFTWARE_ENGINEER
      </motion.h2>

      <motion.div 
        variants={itemVars} 
        className="max-w-2xl text-lg md:text-xl text-gray-400 mb-8 font-light leading-relaxed"
      >
        <span className="text-cyan mono mr-2">$</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {data.bio}
        </motion.span>
        <span className="inline-block w-2 h-5 bg-cyan ml-1 animate-pulse" />
      </motion.div>

      <motion.div variants={itemVars} className="flex gap-6">
        {data.socials.map((social, index) => (
          <Link key={index} href={social.link} target="_blank">
            <div className="retro-box group p-3 hover:bg-cyan hover:text-black transition-all duration-300 flex items-center gap-2">
              {social.name === "GitHub" ? <Github size={20} /> : <Linkedin size={20} />}
              <span className="mono font-bold text-xs uppercase">{social.name}</span>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-cyan/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </motion.section>
  );
}
