"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google"; // Added Space_Mono
import "./globals.css";
import Navbar from "../components/Navbar";
import { metadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove("light");
    }
  }, []);

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable}`}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-background text-foreground min-h-screen selection:bg-cyan selection:text-black">
        <div className="crt-overlay" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main className="flex-1">
            {children}
          </main>
          <footer className="p-8 text-center mono text-sm opacity-50 border-t border-cyan-dim mt-20">
            [ SYSTEM VERSION 1.0.42 ] [ CREATED BY SALAM PLINTH ]
          </footer>
        </div>
      </body>
    </html>
  );
}
