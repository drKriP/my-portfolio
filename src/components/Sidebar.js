"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";

const Sidebar = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-gray-800 text-white rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 md:flex md:flex-col md:w-64"
      >

        {/* Sidebar Content */}
        <div className="flex flex-col flex-1">

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 flex-1">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/about" className="hover:text-gray-400">About</Link>
            <Link href="/projects" className="hover:text-gray-400">Projects</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </nav>

          {/* Theme Toggle Button (Now Fixed in Sidebar) */}
          <button
            className="p-2 bg-gray-700 rounded-full flex items-center justify-center"
            onClick={toggleTheme}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
