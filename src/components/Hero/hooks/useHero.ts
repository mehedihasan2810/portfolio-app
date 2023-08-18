import { useGlobalContext } from "@/contexts/useGlobalContext";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import useMatchMedia from "@/hooks/useMatchMedia";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useInsertionEffect, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

// let isAnimationOn = true;

/* The `declare global` block is used to extend the global `Window` interface in TypeScript. In this
case, it is adding two properties `mouseXpos` and `mouseYpos` to the `Window` interface, both of
which are of type `number`. This allows the code to access and modify these properties on the
`window` object. */
declare global {
  interface Window {
    mouseXpos: number;
    mouseYpos: number;
  }
}

const useHero = () => {
  const heroMaskRef = useRef<HTMLDivElement>(null!);
  const heroImgRef = useRef<HTMLImageElement>(null!);
  const heroMaskImgRef = useRef<HTMLImageElement>(null!);
  const avatarsRef = useRef<HTMLDivElement[]>([]);
  const heroRef = useRef<HTMLDivElement>(null!);
  const heroRotateTween = useRef<any>();

  /**
   * The function `pushAvatarsRef` adds an HTML heading element to an array called `avatarsRef.current`
   * if it is not already included.
   * @param {HTMLHeadingElement} el - The parameter `el` is of type `HTMLHeadingElement`, which means it
   * is expecting an HTML heading element as an argument.
   */
  const pushAvatarsRef = (el: HTMLHeadingElement) => {
    if (el && !avatarsRef.current.includes(el)) {
      avatarsRef.current.push(el);
    }
  };

  /* The line `const isTouchDevices = useMatchMedia("(max-width: 992px)");` is using the `useMatchMedia`
 hook to check if the current device has a maximum width of 992 pixels. It returns a boolean value
 indicating whether the device is a touch device or not. */
  const isTouchDevices = useMatchMedia("(max-width: 992px)");

  const { isHeroAnimOn, toggleAnim } = useGlobalContext();

  /* The `useIsomorphicLayoutEffect` hook is used to perform side effects in a React component. In this
case, it is setting the initial values of `window.mouseXpos` and `window.mouseYpos` to the center of
the window. This is done only once when the component is mounted, indicated by the empty dependency
array `[]`. */
  useIsomorphicLayoutEffect(() => {
    window.mouseXpos = window.innerWidth / 2;
    window.mouseYpos = window.innerHeight / 2;
  }, []);

  useIsomorphicLayoutEffect(() => {
    /* These lines of code are calculating various dimensions of the window. */
    const windowWidth = window.innerWidth;
    const windowWidthWhole = 100 / windowWidth;
    const windowHeight = window.innerHeight;
    const windowHalfWidth = windowWidth / 2;
    const windowHalfHeight = windowHeight / 2;
    // pointer move handler starts
    function handlePointerMove(event: PointerEvent) {
      event.stopPropagation();

      window.mouseXpos = event.clientX;
      window.mouseYpos = event.clientY;

      const { clientX } = event;

      const xPercentage = Math.ceil(clientX * windowWidthWhole);

      gsap.to(heroMaskRef.current, {
        clipPath: `inset(0 ${xPercentage}% 0 0 )`,
      });

      const avatarX = (windowHalfWidth - event.clientX) / 50;
      const avatarY = (windowHalfHeight - event.clientY) / 50;

      avatarsRef.current.forEach((el) => {
        const avatarsEl = el as HTMLDivElement;
        gsap.to(avatarsEl, {
          x: avatarX,
          y: avatarY,
          duration: 0.7,
          ease: "power1.out",
        });
      });
    }
    // pointer move handler ends

    // if the device is touch device then stop the pointer move animation
    // todo
    if (!isTouchDevices) {
      if (isHeroAnimOn) {
        heroRef.current.addEventListener(
          "pointermove",
          handlePointerMove,
          false
        );
      } else {
        heroRef.current.removeEventListener(
          "pointermove",
          handlePointerMove,
          false
        );
      }
    } else {
      heroRef.current.removeEventListener(
        "pointermove",
        handlePointerMove,
        false
      );
    }
    // -----------------------------------

    return () => {
      heroRef.current.removeEventListener(
        "pointermove",
        handlePointerMove,
        false
      );
    };
  }, [isHeroAnimOn, isTouchDevices]);

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

    // hero container 3d rotate animation
    heroRotateTween.current = gsap.to(heroRef.current, {
      rotateX: 60,
      scale: 0.1,
      opacity: 0.1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onToggle: (s) => {
          toggleAnim("hero", !s.isActive);
          toggleAnim("star", s.isActive);
        },
      },
    });
    // ----------------------------
  }, []);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // blinking animaiton for black white avatars
      const heroBlackWhiteTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      heroBlackWhiteTL.to(".bw-avatar-blink", {
        fill: "#000",
        ease: "power1.out",
        duration: 0.5,
      });
      heroBlackWhiteTL.to(".bw-avatar-blink", {
        fill: "#fff",
        ease: "power1.in",
        duration: 0.5,
      });
      // --------------------------------------

      // blinking animaition for yellow avatars
      const colorYblinkTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      colorYblinkTL.to(".color-y-avatar-blink", {
        fill: "#ffb238",
        ease: "power1.out",
        duration: 0.5,
      });
      colorYblinkTL.to(".color-y-avatar-blink", {
        fill: "#000",
        ease: "power1.in",
        duration: 0.5,
      });
      // -----------------------------------------

      // blinking animation for purple avatars
      const colorPblinkTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      colorPblinkTL.to(".color-p-avatar-blink", {
        fill: "#49007e",
        ease: "power1.out",
        duration: 0.5,
      });
      colorPblinkTL.to(".color-p-avatar-blink", {
        fill: "#fff",
        ease: "power1.in",
        duration: 0.5,
      });
      // ------------------------------------------

      // blinking animation for orange avatars
      const colorOblinkTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      colorOblinkTL.to(".color-o-avatar-blink", {
        fill: "#ff7d10",
        ease: "power1.out",
        duration: 0.5,
      });
      colorOblinkTL.to(".color-o-avatar-blink", {
        fill: "#000",
        ease: "power1.in",
        duration: 0.5,
      });
      // ------------------------------------------
    }, heroRef.current);

    return () => ctx.revert();
  }, []);

  return {
    heroMaskRef,
    heroImgRef,
    heroMaskImgRef,
    avatarsRef,
    pushAvatarsRef,
    heroRef,
  };
};

export default useHero;
