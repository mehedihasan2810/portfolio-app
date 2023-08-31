"use client";
import Link from "next/link";
import { useState } from "react";
import "./Sidebar.css";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

let lenis: any;

if (typeof window !== "undefined") {
  lenis = new Lenis();
}

type ActiveSectionType = "hero" | "work" | "contact";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<ActiveSectionType>("hero");

  useIsomorphicLayoutEffect(() => {
    const heroEl = document.querySelector(
      ".hero-anchor-scroll"
    ) as HTMLDivElement;
    const footerEl = document.querySelector(".footer-container") as HTMLElement;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);

      // check active section starts
      if (ScrollTrigger.isInViewport(heroEl, 0.5)) {
        setActiveSection("hero");
      } else if (ScrollTrigger.isInViewport(footerEl, 0.5)) {
        setActiveSection("contact");
      } else {
        setActiveSection("work");
      }
      // check active section ends
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <div className="sidebar-container">
      <Link
        className={`sidebar-about ${
          activeSection === "hero" ? "sidebar-active-link" : ""
        }`}
        href="#"
        onClick={() => {
          lenis.scrollTo("#about", { duration: 1.5 });
        }}
      >
        About
      </Link>
      <Link
        className={`sidebar-works ${
          activeSection === "work" ? "sidebar-active-link" : ""
        }`}
        href="#"
        onClick={() => {
          lenis.scrollTo("#work", { duration: 1.5 });
        }}
      >
        Works
      </Link>
      <Link
        className={`sidebar-contact ${
          activeSection === "contact" ? "sidebar-active-link" : ""
        }`}
        href="#"
        onClick={() => {
          lenis.scrollTo("#contact", { duration: 1.5 });
        }}
      >
        Contact
      </Link>
    </div>
  );
};

export default Sidebar;
