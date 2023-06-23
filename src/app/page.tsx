import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
      <Hero />
    </header>
    <main>
      <Skills/>
    </main>
    </>
  );
}
