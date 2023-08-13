import { useGlobalContext } from "@/contexts/useGlobalContext";
import useMatchMedia from "@/hooks/useMatchMedia";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
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

  const pushAvatarsRef = (el: HTMLHeadingElement) => {
    if (el && !avatarsRef.current.includes(el)) {
      avatarsRef.current.push(el);
    }
  };

  const isTouchDevices = useMatchMedia("(max-width: 992px)");

  const { isHeroAnimOn, toggleAnim } = useGlobalContext();

  useEffect(() => {
    window.mouseXpos = window.innerWidth / 2;
    window.mouseYpos = window.innerHeight / 2;
  }, []);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowWidthWhole = 100 / windowWidth;
    const windowHeight = window.innerHeight;
    const windowHalfWidth = windowWidth / 2;
    const windowHalfHeight = windowHeight / 2;

    function handleMouseMove(event: PointerEvent) {
      event.stopPropagation();

      window.mouseXpos = event.clientX;
      window.mouseYpos = event.clientY;

      const { clientX } = event;

      const xPercentage = Math.ceil(clientX * windowWidthWhole);

      heroMaskRef.current.style.clipPath = `inset(0 ${xPercentage}% 0 0 )`;

      const avatarX = (windowHalfWidth - event.clientX) / 60;
      const avatarY = (windowHalfHeight - event.clientY) / 60;

      avatarsRef.current.forEach((el) => {
        const avatarsEl = el as HTMLDivElement;
        avatarsEl.style.transform = `translate(${avatarX}px, ${avatarY}px)`;
      });
    }

    if (!isTouchDevices) {
      if (isHeroAnimOn) {
        heroRef.current.addEventListener("pointermove", handleMouseMove, false);
      } else {
        heroRef.current.removeEventListener(
          "pointermove",
          handleMouseMove,
          false
        );
      }
    } else {
      heroRef.current.removeEventListener(
        "pointermove",
        handleMouseMove,
        false
      );
    }

    return () => {
      heroRef.current.removeEventListener(
        "pointermove",
        handleMouseMove,
        false
      );
    };
  }, [isHeroAnimOn, isTouchDevices]);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      heroRef.current,
      { rotateX: 0, scale: 1, opacity: 1 },
      { rotateX: 60, scale: 0.1, opacity: 0.1 }
    );

    ScrollTrigger.create({
      animation: tl,
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onToggle: (self) => {
        toggleAnim("hero", !self.isActive);
        toggleAnim("star", self.isActive);
      },
    });
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
