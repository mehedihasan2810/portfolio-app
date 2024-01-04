"use client";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useIsomorphicLayoutEffect(() => {
    const lenis = new Lenis();
    /* The code `lenis.on("scroll", ScrollTrigger.update)` is setting up an event listener for the
   "scroll" event on the `lenis` object. When the "scroll" event is triggered, it will call the
   `ScrollTrigger.update` function. */
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      // hide scroll down start
      if (lenis.isScrolling) {
        gsap.to(".scroll-down", {
          scale: 0,
          duration: 0.2,
        });
      }
      // hide scroll down start
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // reload on resize starts
    // function handleWindowResize() {
    //   location.reload();
    // }
    // window.addEventListener("resize", handleWindowResize);
    // reload on resize ends

    // change title on visibility change start
    // function handleVisibilityChange() {
    //   if (document.hidden) {
    //     document.title = "Hi There! 😀";
    //   } else {
    //     document.title = "Mehedi Hasan | Web Developer";
    //   }
    // }
    // document.addEventListener("visibilitychange", handleVisibilityChange);
    // change title on visibility change end

    return () => {
      // document.removeEventListener("visibilitychange", handleVisibilityChange);
      // window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return children;
};

export default SmoothScrollProvider;
