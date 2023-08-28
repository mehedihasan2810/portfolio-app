import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
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
  const workMovingLinkRef = useRef<HTMLDivElement>(null!);
  const workRotateTween = useRef<any>();
  const workImgRef = useRef<HTMLAnchorElement[]>([]);
  const pushWorkImgRef = (el: HTMLAnchorElement) => workImgRef.current.push(el!);

  useIsomorphicLayoutEffect(() => {
    // set custom cursor initial styles start
    gsap.set(workMovingLinkRef.current, {
      xPercent: -50,
      yPercent: -58,
      scale: 0,
    });
    // set custom cursor initial styles end

    // set quickTo client x and y to cursor moving elements start
    const movingLinkXTo = gsap.quickTo(workMovingLinkRef.current, "x", {
      duration: 0.4,
      ease: "power3",
    });
    const movingLinkYTo = gsap.quickTo(workMovingLinkRef.current, "y", {
      duration: 0.4,
      ease: "power3",
    });

    const workMaskXTo = gsap.quickTo(workMaskInfoRef.current, "--x", {
      duration: 0.4,
      ease: "power3",
    });
    const workMaskYTo = gsap.quickTo(workMaskInfoRef.current, "--y", {
      duration: 0.4,
      ease: "power3",
    });
    // set quickTo client x and y to cursor moving elements end

    // gsap matchMedia starts
    const matchMedia = gsap.matchMedia();

    matchMedia.add(
      "(min-width: 800px)",
      (context) => {
        const pointerPos = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        };

        // oPointerMove handler
        context.add("onPointerMove", (e: PointerEvent) => {
          pointerPos.x = e.clientX;
          pointerPos.y = e.clientY;

          movingLinkXTo(pointerPos.x);
          movingLinkYTo(pointerPos.y);

          const x =
            e.clientX - workMaskInfoRef.current.getBoundingClientRect().left;
          const y =
            e.clientY - workMaskInfoRef.current.getBoundingClientRect().top;

          workMaskXTo(x);
          workMaskYTo(y);
        });
        // ----------------------------

        // onWorkImgPointerEnter handler
        context.add("onWorkImgPointerEnter", () => {
          gsap.to(workMovingLinkRef.current, {
            scale: 1,
            duration: 1,
            ease: "expo.out",
          });

          gsap.to(workMaskInfoRef.current, {
            "--size": "450px",
            duration: 1,
            ease: "expo.out",
          });
        });
        // -------------------------------

        // work container pointer leave starts
        context.add("onWorksConPointerLeave", () => {
          gsap.to(workMovingLinkRef.current, {
            scale: 0,
            duration: 1,
            ease: "expo.out",
          });
        });
        // work container pointer leave ends

        // onWorkImgPointerLeave Handler
        context.add("onWorkImgPointerLeave", () => {
          gsap.to(workMovingLinkRef.current, {
            scale: 0,
            duration: 1,
            ease: "expo.out",
          });

          gsap.to(workMaskInfoRef.current, {
            "--size": "0px",
            duration: 1,
            ease: "expo.out",
          });
        });
        // ----------------------------------

        // horizontal scroll anim starts
        gsap.to(workConRef.current, {
          x: -(workConRef.current.offsetWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: workParentConRef.current,
            pin: true,
            scrub: true,
            end: () =>
              "+=" + (workConRef.current.offsetWidth - window.innerWidth),

            onUpdate: (s) => {
              if (s.isActive) {
                gsap.to(workConRef.current, {
                  pointerEvents: "auto",
                });

                // move mask image according to cursor when scrolling starts
                const x =
                  pointerPos.x -
                  workMaskInfoRef.current.getBoundingClientRect().left;
                const y =
                  pointerPos.y -
                  workMaskInfoRef.current.getBoundingClientRect().top;

                workMaskXTo(x);
                workMaskYTo(y);
                // move mask image according to cursor when scrolling ends
              } else {
                // hide custom cursor when hr anim stops start
                gsap.to(workConRef.current, {
                  pointerEvents: "none",
                });

                gsap.to(workMovingLinkRef.current, {
                  scale: 0,
                  duration: 1,
                  ease: "expo.out",
                });

                gsap.to(workMaskInfoRef.current, {
                  "--size": "0px",
                  duration: 1,
                  ease: "expo.out",
                });
                // hide custom cursor when hr anim stops end
              }
            },
          },
        });
        // horizontal scroll anim ends

        // addEventListener
        document.addEventListener("pointermove", context.onPointerMove);

        workParentConRef.current.addEventListener(
          "pointerleave",
          context.onWorksConPointerLeave
        );

        workImgRef.current.forEach((el: HTMLAnchorElement) => {
          el.addEventListener("pointerenter", context.onWorkImgPointerEnter);
        });

        workImgRef.current.forEach((el: HTMLAnchorElement) => {
          el.addEventListener("pointerleave", context.onWorkImgPointerLeave);
        });
        // ---------------------------------------

        // matchmedia cleanup starts
        return () => {
          document.removeEventListener("pointermove", context.onPointerMove);

          workParentConRef.current.removeEventListener(
            "pointerleave",
            context.onWorksConPointerLeave
          );

          workImgRef.current.forEach((el: HTMLAnchorElement) => {
            el.removeEventListener(
              "pointerenter",
              context.onWorkImgPointerEnter
            );
          });

          workImgRef.current.forEach((el: HTMLAnchorElement) => {
            el.removeEventListener(
              "pointerleave",
              context.onWorkImgPointerLeave
            );
          });
        };
        // matchmedia cleanup ends
      },
      document
    );
    // gsap matchMedia ends

    // section rotate n scaling down animation on scroll starts
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
    // section rotate n scaling down animation on scroll ends

    return () => {
      matchMedia.revert();
    };
  }, []);

  return {
    workConRef,
    workHrScrollConRef,
    workMaskInfoRef,
    workMovingLinkRef,
    workParentConRef,
    workTopParentConRef,
    pushWorkImgRef,
  };
};

export default useWorks;
