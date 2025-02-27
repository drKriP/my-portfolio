"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { metadata } from "./metadata";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // ✅ Load theme from localStorage when component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false); // Light mode is saved, so set dark mode OFF
      document.documentElement.classList.add("light");
    } else {
      setIsDarkMode(true); // Default to dark mode
      document.documentElement.classList.remove("light");
    }
  }, []);

  // ✅ Toggle theme and persist it in localStorage
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    if (newMode) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-background text-foreground">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        {children}
      </body>
    </html>
  );
}
