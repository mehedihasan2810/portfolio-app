import { useGlobalContext } from "@/contexts/useGlobalContext";
import useMatchMedia from "@/hooks/useMatchMedia";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const useWorks = () => {
  const workParentConRef = useRef<HTMLDivElement>(null!);
  const workTopParentConRef = useRef<HTMLDivElement>(null!);
  const workConRef = useRef<HTMLDivElement>(null!);
  const workHrScrollConRef = useRef<HTMLDivElement>(null!);
  const workMaskInfoRef = useRef<HTMLDivElement>(null!);
  const workMovingLinkRef = useRef<HTMLAnchorElement>(null!);
  const { isWorksAnimOn, toggleAnim } = useGlobalContext();

  const isTouchDevices = useMatchMedia("(max-width: 992px)");

  useEffect(() => {
    gsap.set(workMovingLinkRef.current, {
      xPercent: -50,
      yPercent: -57,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    let xTo = gsap.quickTo(workMovingLinkRef.current, "x", {
      duration: 0.3,
      ease: "power1.out",
    });
    let yTo = gsap.quickTo(workMovingLinkRef.current, "y", {
      duration: 0.3,
      ease: "power1.out",
    });

    // handlePointerMove
    function handlePointerMove(event: PointerEvent): void {
      event.stopPropagation();

      const targetEl = event.target as Element;
      const closestWorkImgEl = targetEl.closest(
        "[data-work-img]"
      ) as HTMLDivElement | null;

      window.mouseXpos = event.clientX;
      window.mouseYpos = event.clientY;

      xTo(window.mouseXpos);
      yTo(window.mouseYpos);

      // set the mask img position
      const x =
        window.mouseXpos - workMaskInfoRef.current.getBoundingClientRect().left;
      const y =
        window.mouseYpos - workMaskInfoRef.current.getBoundingClientRect().top;

      workMaskInfoRef.current.style.setProperty("--x", `${x}px`);
      workMaskInfoRef.current.style.setProperty("--y", `${y}px`);
      //

      // set mask image size when cursor on mask container and scroll stoped
      if (closestWorkImgEl) {
        workMovingLinkRef.current.style.opacity = `1`;
      } else {
        workMovingLinkRef.current.style.opacity = `0`;
      }

      workMaskInfoRef.current.style.setProperty("--size", `450px`);
    }

    if (!isTouchDevices) {
      if (isWorksAnimOn) {
        window.addEventListener("pointermove", handlePointerMove, false);
      } else {
        window.removeEventListener("pointermove", handlePointerMove, false);
      }
    } else {
      window.removeEventListener("pointermove", handlePointerMove, false);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove, false);
    };
  }, [isWorksAnimOn, isTouchDevices]);

  useEffect(() => {
    // set horizontal scroll with gsap
    const tween = gsap.to(workConRef.current, {
      x: -(workConRef.current.offsetWidth - window.innerWidth),
      scrollTrigger: {
        trigger: workParentConRef.current,
        pin: true,
        scrub: true,
        end: "+=" + (workConRef.current.offsetWidth - window.innerWidth),
        onToggle: (s) => {
          toggleAnim("star", !s.isActive);
          toggleAnim("work", s.isActive);
          if (!isTouchDevices) {
            if (s.isActive) {
              workMaskInfoRef.current.style.setProperty("--size", `450px`);
              workMovingLinkRef.current.style.opacity = "0";
            } else {
              workMaskInfoRef.current.style.setProperty("--size", `0px`);
              workMovingLinkRef.current.style.opacity = "0";
            }
          }
        },

        onUpdate: (s) => {
          toggleAnim("work", s.isActive);
          if (!isTouchDevices) {
            if (s.isActive) {
              const x =
                window.mouseXpos -
                workMaskInfoRef.current.getBoundingClientRect().left;
              const y =
                window.mouseYpos -
                workMaskInfoRef.current.getBoundingClientRect().top;
              workMaskInfoRef.current.style.setProperty("--x", `${x}px`);
              workMaskInfoRef.current.style.setProperty("--y", `${y}px`);
            }
          }
        },
      },
    });

    const tween2 = gsap.to(workParentConRef.current, {
      rotateX: 80,
      scale: 0.1,
      opacity: 0.1,
      scrollTrigger: {
        trigger: workParentConRef.current,
        start: "top -1px",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
      tween2.kill();
    };
  }, [isTouchDevices]);

  return {
    workConRef,
    workHrScrollConRef,
    workMaskInfoRef,
    workMovingLinkRef,
    workParentConRef,
    workTopParentConRef,
  };
};

export default useWorks;
