"use client";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
let lenis: any;

if (typeof window !== "undefined") {
  lenis = new Lenis();
}

const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    /* The code `lenis.on("scroll", ScrollTrigger.update)` is setting up an event listener for the
   "scroll" event on the `lenis` object. When the "scroll" event is triggered, it will call the
   `ScrollTrigger.update` function. */
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    /**
     * The function `handleWindowResize` reloads the current page when the window is resized.
     * @param {UIEvent} event - The event parameter is of type UIEvent, which represents a user
     * interface event, such as a click or a resize event.
     */
    function handleWindowResize(event: UIEvent) {
      location.reload();
    }
    window.addEventListener("resize", handleWindowResize, false);

    /**
     * The function changes the document title based on the visibility of the tab.
     */
    function handleVisibilityChange() {
      if (document.hidden) {
        document.title = "Press this tab";
      } else {
        document.title = "Mehedi Hasan. A Web Developer";
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, []);
  return children;
};

export default SmoothScrollProvider;
