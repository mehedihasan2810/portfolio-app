import { useGlobalContext } from "@/contexts/useGlobalContext";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import useMatchMedia from "@/hooks/useMatchMedia";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const useWorks = () => {
  const workParentConRef = useRef<HTMLDivElement>(null!);
  const workTopParentConRef = useRef<HTMLDivElement>(null!);
  const workConRef = useRef<HTMLDivElement>(null!);
  const workHrScrollConRef = useRef<HTMLDivElement>(null!);
  const workMaskInfoRef = useRef<HTMLDivElement>(null!);
  const workMovingLinkRef = useRef<HTMLAnchorElement>(null!);
  const workRotateTween = useRef<any>();
  const workMovingLinkTween = useRef<any>();
  const { isWorksAnimOn, toggleAnim } = useGlobalContext();

  const isTouchDevices = useMatchMedia("(max-width: 992px)");

  useIsomorphicLayoutEffect(() => {
    /* The code `workMovingLinkTween.current = gsap.set(workMovingLinkRef.current, {...});` is setting
  the initial properties of the `workMovingLinkRef` element using GSAP (GreenSock Animation
  Platform). */
    workMovingLinkTween.current = gsap.set(workMovingLinkRef.current, {
      xPercent: -50,
      yPercent: -57,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      scale: 0,
    });
    // -----------------------------

    /* The code `let xTo = gsap.quickTo(workMovingLinkRef.current, "x", { duration: 0.3 });` and `let
   yTo = gsap.quickTo(workMovingLinkRef.current, "y", { duration: 0.3 });` are creating GSAP
   (GreenSock Animation Platform) tweens for animating the `x` and `y` properties of the
   `workMovingLinkRef` element. */
    let xTo = gsap.quickTo(workMovingLinkRef.current, "x", {
      duration: 0.3,
    });
    let yTo = gsap.quickTo(workMovingLinkRef.current, "y", {
      duration: 0.3,
    });
    // ------------------

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

      // calculate the mask img x and y position
      const x =
        window.mouseXpos - workMaskInfoRef.current.getBoundingClientRect().left;
      const y =
        window.mouseYpos - workMaskInfoRef.current.getBoundingClientRect().top;
      // --------------------

      /* The code `gsap.to(workMaskInfoRef.current, { "--x": ``, duration: 0.3 });` and
     `gsap.to(workMaskInfoRef.current, { "--y": ``, duration: 0.3 });` are using the GSAP
     library to animate the CSS custom properties `--x` and `--y` of the `workMaskInfoRef` element. */
      gsap.to(workMaskInfoRef.current, { "--x": `${x}`, duration: 0.3 });
      gsap.to(workMaskInfoRef.current, { "--y": `${y}`, duration: 0.3 });

      //-------------------

      /* The code block is checking if the `closestWorkImgEl` variable exists. If it does, it means that
    the pointer is currently hovering over a work image element. In that case, it uses GSAP
    (GreenSock Animation Platform) to animate the scale of the `workMovingLinkRef` element to 1,
    making it visible. */
      if (closestWorkImgEl) {
        gsap.to(workMovingLinkRef.current, {
          scale: 1,
          duration: 1,
          ease: "expo.out",
        });
      } else {
        gsap.to(workMovingLinkRef.current, {
          scale: 0,
          duration: 1,
          ease: "expo.out",
        });
      }
      // ----------------

      //  set mask image size
      gsap.to(workMaskInfoRef.current, { "--size": `450` });
    }
    // mousemove handler ends

    /* This code block is adding or removing an event listener for the "pointermove" event based on the
  values of the `isTouchDevices` and `isWorksAnimOn` variables. */
    if (!isTouchDevices) {
      if (isWorksAnimOn) {
        window.addEventListener("pointermove", handlePointerMove, false);
      } else {
        window.removeEventListener("pointermove", handlePointerMove, false);
      }
    } else {
      window.removeEventListener("pointermove", handlePointerMove, false);
    }
    // --------------------------

    return () => {
      window.removeEventListener("pointermove", handlePointerMove, false);
    };
  }, [isWorksAnimOn, isTouchDevices]);

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

    let mm = gsap.matchMedia();

    mm.add(
      {
        isTouchDevice: "(max-width: 992px)",
        isNonTouchDevice: "(min-width: 993px)",
      },
      (context) => {
        const { isTouchDevice } = context.conditions as {
          isTouchDevice: boolean;
        };
        console.log(isTouchDevice);

        // work section horizontal animation starts
        gsap.to(workConRef.current, {
          x: -(workConRef.current.offsetWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: workParentConRef.current,
            pin: true,
            scrub: true,
            // start: 'top top',
            end: () =>
              "+=" + (workConRef.current.offsetWidth - window.innerWidth),
            onToggle: (s) => {
              toggleAnim("star", !s.isActive);
              toggleAnim("work", s.isActive);

              console.log("fooooooooo " + window.mouseXpos);

              if (s.isActive) {
                worksLinkEl.classList.add("sidebar-active-link");
                aboutLinkEl.classList.remove("sidebar-active-link");
                contactLinkEl.classList.remove("sidebar-active-link");
              }

              if (!isTouchDevice) {
                if (s.isActive) {
                  gsap.to(workMaskInfoRef.current, {
                    "--size": `${window.mouseXpos === 960 ? 0 : 450}`,
                  });
                  gsap.to(workMovingLinkRef.current, {
                    scale: 0,
                    duration: 1,
                    ease: "expo.out",
                  });
                } else {
                  gsap.to(workMaskInfoRef.current, { "--size": `0` });
                  gsap.to(workMovingLinkRef.current, {
                    scale: 0,
                    duration: 1,
                    ease: "expo.out",
                  });
                }
              }
            },

            onUpdate: (s) => {
              toggleAnim("work", s.isActive);
              if (!isTouchDevice) {
                if (s.isActive) {
                  const x =
                    window.mouseXpos -
                    workMaskInfoRef.current.getBoundingClientRect().left;
                  const y =
                    window.mouseYpos -
                    workMaskInfoRef.current.getBoundingClientRect().top;

                  gsap.to(workMaskInfoRef.current, {
                    "--x": `${x}`,
                    duration: 0.3,
                  });
                  gsap.to(workMaskInfoRef.current, {
                    "--y": `${y}`,
                    duration: 0.3,
                  });
                }
              }
            },
          },
        });
        // work section horizontal animation ends
      }
    );

    workRotateTween.current = gsap.to(workParentConRef.current, {
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

    return () => mm.revert();
  }, []);

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
