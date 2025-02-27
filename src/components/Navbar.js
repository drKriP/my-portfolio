"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = ({ toggleTheme, isDarkMode }) => {

  const pathname = usePathname();
  const pageTitles = {
    "/": "Home",
    "/projects": "Projects",
    "/contact": "Contact",
  };

  const currentTitle = pageTitles[pathname] || "My Portfolio";

  return (
    <nav className="bg-background text-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">{currentTitle}</h1>
        <ul className="flex space-x-4 items-center"> {/* ✅ Keep items aligned */}
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          {/* ✅ Move Theme Toggle Button Inside the List */}
          <li>
            <button
              className="p-2 bg-gray-700 rounded-full flex items-center justify-center text-white"
              onClick={toggleTheme}
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
