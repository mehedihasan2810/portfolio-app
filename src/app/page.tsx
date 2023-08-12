import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Works from "@/components/Works/Works";
import { lazy, Suspense } from "react";

// const Works = lazy(() => import("@/components/Works/Works"));

export default function Home() {
  return (
    <>
      <div>
        <header>
          <Hero />
        </header>
        <main>
          {/* <Suspense fallback={<div>works loading.....</div>}> */}
            <Works />
          {/* </Suspense> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
