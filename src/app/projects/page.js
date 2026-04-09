"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderCode, ExternalLink, ShieldCheck } from "lucide-react";
import config from "../../config";

const Projects = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      <div className="flex flex-col mb-12">
         <h1 className="text-4xl font-bold mono tracking-tighter text-cyan uppercase mb-2">
           <span className="animate-pulse">&gt;</span> PROJECT_DATABASE
         </h1>
         <div className="h-1 w-32 bg-cyan shadow-[0_0_10px_var(--cyan)]"></div>
         <p className="mt-4 mono text-xs text-cyan/60 uppercase">
           STATUS: 200_OK // ACCESS_LEVEL: GUEST // BYTES: 1.2MB
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {config.projects.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="retro-box group relative flex flex-col p-6 overflow-hidden"
          >
            {/* Folder Tab Effect */}
            <div className="absolute top-0 left-0 w-24 h-6 -translate-y-full bg-cyan-dim skew-x-12 origin-bottom-left transition-transform group-hover:bg-cyan group-hover:text-black mono text-[10px] flex items-center justify-center font-bold">
               {project.name.split(' ')[0]}.BAT
            </div>

            <div className="flex justify-between items-start mb-6">
              <FolderCode size={32} className="text-cyan group-hover:animate-bounce" />
              <div className="mono text-[10px] text-cyan/40 border border-cyan-dim px-2 py-0.5 rounded">
                SEC_HASH: {Math.random().toString(36).substring(7).toUpperCase()}
              </div>
            </div>

            <h2 className="text-xl font-bold mono mb-3 text-white group-hover:text-cyan transition-colors truncate">
              {project.name}
            </h2>

            <p className="text-gray-400 text-sm mb-8 line-clamp-3 font-light leading-relaxed">
              {project.description}
            </p>

            <div className="mt-auto flex items-center justify-between gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 border border-cyan text-cyan mono text-xs uppercase hover:bg-cyan hover:text-background transition-all font-bold tracking-widest"
              >
                <ShieldCheck size={14} />
                [ ACCESS_REPO ]
              </a>
              <div className="mono text-[10px] text-cyan/40 animate-pulse">
                _v1.0.4
              </div>
            </div>

            {/* Hover Scanline Animation */}
            <div className="absolute inset-0 bg-cyan/5 -translate-y-full group-hover:translate-y-full transition-transform duration-[2000ms] ease-linear pointer-events-none border-b border-cyan/30" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
