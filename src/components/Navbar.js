"use client";

import Link from "next/link";
import { Sun, Moon, Download, Terminal } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const pathname = usePathname();
  const pageTitles = {
    "/": "OVERVIEW",
    "/projects": "PROJECT_FILES",
    "/contact": "CONTACT_COMMS",
  };

  const currentTitle = pageTitles[pathname] || "SYSTEM_ROOT";

  return (
    <nav className="border-b-2 border-cyan-dim bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-sm mono">
        <div className="flex items-center gap-3">
          <Terminal size={20} className="text-cyan animate-pulse" />
          <h1 className="text-xl font-bold tracking-tighter text-cyan hidden md:block">
            {currentTitle}
          </h1>
        </div>

        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className={`glitch-hover ${pathname === "/" ? "text-cyan border-b border-cyan" : ""}`}>
              [ HOME ]
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`glitch-hover ${pathname === "/projects" ? "text-cyan border-b border-cyan" : ""}`}>
              [ PROJECTS ]
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`glitch-hover ${pathname === "/contact" ? "text-cyan border-b border-cyan" : ""}`}>
              [ CONTACT ]
            </Link>
          </li>
          <li className="ml-2">
            <a
              href="/SalamPlinth-Resume.pdf"
              download
              className="px-3 py-1.5 bg-cyan text-background hover:bg-white transition-colors flex items-center gap-2 font-bold"
            >
              <Download size={16} />
              <span className="hidden lg:inline">RESUME.EXE</span>
            </a>
          </li>
          <li>
            <button
              className="p-1.5 border border-cyan-dim hover:border-cyan text-cyan transition-colors"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </div>
      <div className="h-0.5 bg-cyan-dim/20 w-full overflow-hidden">
         <div className="h-full bg-cyan w-1/3 animate-[slide_3s_infinite_linear]" 
              style={{ animationName: 'navbar-scan' }}></div>
      </div>
      <style jsx>{`
        @keyframes navbar-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
