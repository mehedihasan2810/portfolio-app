import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import useMatchMedia from "@/hooks/useMatchMedia";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const useFooter = () => {
  const footerRef = useRef<HTMLDivElement>(null!);
  const colorElRef = useRef<HTMLDivElement>(null!);
  const isTouchDevices = useMatchMedia("(max-width: 992px)");

  useIsomorphicLayoutEffect(() => {
    const aboutLinkEl = document.querySelector(
      ".sidebar-about"
    ) as HTMLAnchorElement;
    const worksLinkEl = document.querySelector(
      ".sidebar-works"
    ) as HTMLAnchorElement;
    const contactLinkEl = document.querySelector(
      ".sidebar-contact"
    ) as HTMLAnchorElement;

    /* These lines of code are calculating the window width and then calculating a percentage value
   based on the window width. */
    const windowWidth = window.innerWidth;
    const windowWidthWhole = 100 / (windowWidth - 50);

    // pointer move handler starts
    function handlePointerMove(event: PointerEvent) {
      event.stopPropagation();
      // console.clear();
      const { clientX, clientY } = event;

      window.mouseXpos = clientX;
      window.mouseYpos = clientY;

      /* The code is calculating the percentage of the client's X position relative to the window width
    and then using that percentage to update the `clipPath` property of the `colorElRef` element
    using GSAP animation library. */
      const xPercentage = 100 - Math.ceil(clientX * windowWidthWhole);
      gsap.to(colorElRef.current, { clipPath: `inset(0 0 0 ${xPercentage}%)` });
      // colorElRef.current.style.clipPath = `inset(0 0 0 ${xPercentage}%)`;
    }
    // pointer move handler ends

    // if device is touch device then stop the pointer move animation
    // or if not then start the animation
    if (!isTouchDevices) {
      footerRef.current.addEventListener(
        "pointermove",
        handlePointerMove,
        false
      );
    } else {
      footerRef.current.removeEventListener(
        "pointermove",
        handlePointerMove,
        false
      );
    }
    // ----------------------------------

    /* The code `gsap.to(footerRef.current, {...})` is using the GSAP animation library to animate the
 `footerRef.current` element. */
    gsap.to(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        onToggle: (s) => {
          if (s.isActive) {
            contactLinkEl.classList.add("sidebar-active-link");
            worksLinkEl.classList.remove("sidebar-active-link");
            aboutLinkEl.classList.remove("sidebar-active-link");
          } else {
            contactLinkEl.classList.remove("sidebar-active-link");
            worksLinkEl.classList.add("sidebar-active-link");
            aboutLinkEl.classList.remove("sidebar-active-link");
          }
        },
      },
    });
    // --------------------------------------

    return () => {
      footerRef.current.removeEventListener(
        "pointermove",
        handlePointerMove,
        false
      );
    };
  }, [isTouchDevices]);

  useIsomorphicLayoutEffect(() => {
 
    const ctx = gsap.context(() => {
      const footerScrollAnims = gsap.utils.toArray(".footer-scroll-anim");
      footerScrollAnims.forEach((el) => {
        const element = el as HTMLDivElement;
        gsap.from(element, {
          y: Math.min(element.offsetHeight, 100),
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: `top 100%-=${Math.min(element.offsetHeight, 100)}`,
            scrub: 3,
          },
        });
      });
    }, footerRef.current);

    return () => ctx.revert();
  }, []);

  return { footerRef, colorElRef };
};

export default useFooter;
