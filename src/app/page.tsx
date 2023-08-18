import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Works from "@/components/Works/Works";

export default function Home() {
  return (
    <>
      <div>
        <header>
          <Hero />
        </header>
        <main>
          <Works />
        </main>
        <Footer />
      </div>
    </>
  );
}
