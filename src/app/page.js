"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Sidebar from "../components/Sidebar"; // Import Sidebar
import config from "../config";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-4">
        <Hero data={config.hero} />
        <About data={config.about} />
      </main>
    </div>
  );
}
