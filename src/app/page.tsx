"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import { useGlobalContext } from "@/contexts/useGlobalContext";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const smoothWrapRef = useRef<HTMLDivElement>(null!);
  const cursorElementRef = useRef<HTMLDivElement>(null!);
  const { clientX, clientY } = useGlobalContext();

  useLayoutEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useLayoutEffect(() => {
    let scrollOffset = 0;

    const body = document.body;
    const scrollSpeed = 0.1;

    function scroller() {
      const maxHeight = Math.floor(
        smoothWrapRef.current.getBoundingClientRect().height - 1
      );
      body.style.height = maxHeight + "px";
      scrollOffset += (window.scrollY - scrollOffset) * scrollSpeed;
      smoothWrapRef.current.style.transform = `translate3D(0,-${scrollOffset}px,0)`;
    }

    function tick() {
      requestAnimationFrame(tick);
      scroller();
    }
    // requestAnimationFrame(tick)
    tick();
  }, [smoothWrapRef]);

  useLayoutEffect(() => {
    // move cursor element

    cursorElementRef.current.style.transform = `translate3d(${
      clientX - 10
    }px, ${clientY - 10}px, 0px)`;
  }, [clientX, clientY]);

  return (
    <>
      <div className={loading ? "loader isLoaderShow" : "loader"}>
        <div className="text-wrap">
          <h1 className={`first ${inter.className}`}> Mehedi</h1>
          <h1
            className={
              loading
                ? `last ${inter.className} startCliping`
                : `last ${inter.className} startCliping`
            }
          >
            Mehedi
          </h1>
        </div>
      </div>

      <div ref={cursorElementRef} className="cursor-element"></div>
      <div ref={smoothWrapRef} id="smooth-wrapper">
        <header>
          <Hero />
        </header>
        <main>
          <About />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}
