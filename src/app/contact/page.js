"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import config from "../../config";

const Contact = () => {
  const { email, phone, address } = config.contactInfo;

  return (
    <div className="container mx-auto py-20 px-6 max-w-3xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="retro-box overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-cyan-dim/20 px-4 py-2 border-b border-cyan-dim flex justify-between items-center mono text-[10px]">
          <span className="text-cyan font-bold">CONTACT_CONNECTION_ESTABLISHED</span>
          <div className="flex gap-1">
             <div className="w-2 h-2 rounded-full bg-cyan-dim"></div>
             <div className="w-2 h-2 rounded-full bg-cyan"></div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-bold mono tracking-tighter text-cyan uppercase mb-8 glitch-hover inline-block">
            [ COMMS_TERMINAL ]
          </h1>

          <div className="space-y-8">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 group"
            >
              <div className="p-4 border border-cyan-dim group-hover:border-cyan group-hover:bg-cyan/10 transition-all">
                <Mail size={24} className="text-cyan" />
              </div>
              <div>
                <p className="mono text-[10px] text-cyan/40 uppercase mb-1">EMAIL_LINK</p>
                <a href={`mailto:${email}`} className="text-xl hover:text-cyan transition-colors mono tracking-tight">
                  {email}
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6 group"
            >
              <div className="p-4 border border-cyan-dim group-hover:border-cyan group-hover:bg-cyan/10 transition-all">
                <Phone size={24} className="text-cyan" />
              </div>
              <div>
                <p className="mono text-[10px] text-cyan/40 uppercase mb-1">SECURE_VOICE_ID</p>
                <p className="text-xl mono tracking-tight">{phone}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 group"
            >
              <div className="p-4 border border-cyan-dim group-hover:border-cyan group-hover:bg-cyan/10 transition-all">
                <MapPin size={24} className="text-cyan" />
              </div>
              <div>
                <p className="mono text-[10px] text-cyan/40 uppercase mb-1">GEOSPATIAL_COORDS</p>
                <p className="text-xl mono tracking-tight font-light">{address}</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 pt-8 border-t border-cyan-dim/30">
            <button className="w-full flex items-center justify-center gap-3 py-4 bg-cyan text-background font-bold mono uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_15px_var(--cyan-dim)]">
              <Send size={20} />
              INITIATE_PUNCH_COMM
            </button>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 text-center mono text-[10px] text-cyan/30 animate-pulse">
        ENCRYPTED P2P TUNNEL ACTIVE // NO_LOGGING_POLICY: ENABLED
      </div>
    </div>
  );
};

export default Contact;
