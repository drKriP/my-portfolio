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
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform md:w-56 md:relative md:flex md:flex-col md:h-screen`}
      >
        {/* Logo */}
        <h2 className="text-2xl font-bold mb-6">{process.env.NEXT_PUBLIC_SITE_NAME || "Portfolio"}</h2>
        
        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
        
        {/* Theme Toggle Button */}
        <button
          className="mt-auto p-2 bg-gray-700 rounded-full flex items-center justify-center"
          onClick={toggleTheme}
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;
