"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import config from "../config";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero data={config.hero} />
      <About data={config.about} />
    </div>
  );
}
