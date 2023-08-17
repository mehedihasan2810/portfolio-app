"use client";
import Link from "next/link";
import React, { useRef } from "react";
import "./Sidebar.css";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useGlobalContext } from "@/contexts/useGlobalContext";
let lenis: any;

if (typeof window !== "undefined") {
  lenis = new Lenis();
}

gsap.registerPlugin(ScrollTrigger);

const Sidebar = () => {
  const sidebarContainerRef = useRef<HTMLDivElement>(null!);
  // const sidebarScrollRef = useRef<HTMLDivElement>(null!);
  const sidebarAboutLinkRef = useRef<HTMLAnchorElement>(null!);
  const sidebarWorksLinkRef = useRef<HTMLAnchorElement>(null!);
  const sidebarContactLinkRef = useRef<HTMLAnchorElement>(null!);

  const { isWorksAnimOn, toggleAnim } = useGlobalContext();
  useIsomorphicLayoutEffect(() => {
    const heroScrollEl = document.querySelector(
      ".hero-anchor-scroll"
    ) as HTMLDivElement;

    const ctx = gsap.context(() => {
      gsap.to(".hero-anchor-scroll", {
        scrollTrigger: {
          trigger: ".hero-anchor-scroll",
          start: "bottom bottom",
          end: "bottom top",
          onToggle: (s) => {
            console.log("hero " + s.isActive);
            const top = heroScrollEl.getBoundingClientRect().top;
            if (s.isActive || (!s.isActive && top === 0)) {
              sidebarAboutLinkRef.current.classList.add("sidebar-active-link");
              sidebarWorksLinkRef.current.classList.remove(
                "sidebar-active-link"
              );
              sidebarContactLinkRef.current.classList.remove(
                "sidebar-active-link"
              );
            }
          },
        },
      });

      gsap.to(".work-anchor-scroll", {
        scrollTrigger: {
          trigger: ".work-anchor-scroll",
          start: "top 90%",
          // end: "bottom 50%",
          onToggle: (s) => {
            console.log("work " + s.isActive);

            if (s.isActive) {
              sidebarWorksLinkRef.current.classList.add("sidebar-active-link");
              sidebarAboutLinkRef.current.classList.remove(
                "sidebar-active-link"
              );
              sidebarContactLinkRef.current.classList.remove(
                "sidebar-active-link"
              );
            }

            const top = heroScrollEl.getBoundingClientRect().top;
            if (!s.isActive && top > -100) {
              sidebarWorksLinkRef.current.classList.remove(
                "sidebar-active-link"
              );
              sidebarAboutLinkRef.current.classList.add("sidebar-active-link");
              sidebarContactLinkRef.current.classList.remove(
                "sidebar-active-link"
              );
            }
          },
        },
      });
    }, document.body);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sidebarContainerRef} className="sidebar-container">
      <Link
        ref={sidebarAboutLinkRef}
        className="sidebar-about sidebar-active-link"
        href="#"
        onClick={() => {

          toggleAnim('hero', true)


          const footerMaskEl = document.querySelector(
            ".footer-color-container"
          ) as HTMLDivElement;

          // reset the clip style on anchor link click
          footerMaskEl.style.clipPath = "inset(0 0 0 50% )";

          lenis.scrollTo("#about", { duration: 1.5 });
        }}
      >
        About
      </Link>
      <Link
        ref={sidebarWorksLinkRef}
        className="sidebar-works"
        href="#"
        onClick={() => {
          toggleAnim('work', true)
            

          const heroMaskEl = document.querySelector(
            ".hero-mask-author-info-container"
          ) as HTMLDivElement;
          const footerMaskEl = document.querySelector(
            ".footer-color-container"
          ) as HTMLDivElement;

          // reset the clip style on anchor link click
          heroMaskEl.style.clipPath = "inset(0 50% 0 0 )";
          footerMaskEl.style.clipPath = "inset(0 0 0 50% )";

          lenis.scrollTo("#work", { duration: 1.5 });
        }}
      >
        Works
      </Link>
      <Link
        ref={sidebarContactLinkRef}
        className="sidebar-contact"
        href="#"
        onClick={() => {
          const heroMaskEl = document.querySelector(
            ".hero-mask-author-info-container"
          ) as HTMLDivElement;

          heroMaskEl.style.clipPath = "inset(0 50% 0 0 )";

          lenis.scrollTo("#contact", { duration: 1.5 });
        }}
      >
        Contact
      </Link>
    </div>
  );
};

export default Sidebar;
