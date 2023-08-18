import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import useMatchMedia from "@/hooks/useMatchMedia";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
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
    const workMovingLinkEl = document.querySelector(
      ".work-moving-link"
    ) as HTMLAnchorElement;

    // pointer move handler starts
    function handlePointerMove(event: PointerEvent) {
      event.stopPropagation();
      const { clientX, clientY } = event;

      window.mouseXpos = clientX;
      window.mouseYpos = clientY;
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
          gsap.to(workMovingLinkEl, {
            scale: 0,
            duration: 1,
            ease: "expo.out",
          });
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

  return { footerRef, colorElRef };
};

export default useFooter;
