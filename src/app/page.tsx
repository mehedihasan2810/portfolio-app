import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About"
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
    <header>
      {/* <Navbar /> */}
      <Hero />
    </header>
    <main>
      <Skills/>
      <About/>
      <Projects/>
    </main>
    <Footer/>
    </>
  );
}
