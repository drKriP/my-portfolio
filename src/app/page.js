import Hero from "../components/Hero";
import About from "../components/About";
import config from "../config";

export default function Home() {
  return (
    <main>
      <Hero data={config.hero} />
      <About data={config.about} />
    </main>
  );
}
