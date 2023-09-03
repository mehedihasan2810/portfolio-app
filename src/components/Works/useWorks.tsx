import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, Draggable);

const useWorks = () => {
  const workParentConRef = useRef<HTMLDivElement>(null!);
  const workTopParentConRef = useRef<HTMLDivElement>(null!);
  const workConRef = useRef<HTMLDivElement>(null!);
  const workHrScrollConRef = useRef<HTMLDivElement>(null!);
  const workMaskInfoRef = useRef<HTMLDivElement>(null!);
  const workMovingLinkRef = useRef<HTMLDivElement>(null!);
  const workAnchorScrollRef = useRef<HTMLDivElement>(null!);
  const workRotateTween = useRef<any>();
  const workImgRef = useRef<HTMLAnchorElement[]>([]);
  const pushWorkImgRef = (el: HTMLAnchorElement) =>
    workImgRef.current.push(el!);

  useIsomorphicLayoutEffect(() => {
    // set custom cursor initial styles start
    gsap.set(workMovingLinkRef.current, {
      xPercent: -50,
      yPercent: -58,
      scale: 0,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
    gsap.set(workMaskInfoRef.current, {
      "--x": window.innerWidth / 2,
      "--y": window.innerHeight / 2,
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

    const pointerPos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const matchMedia = gsap.matchMedia();

    matchMedia.add(
      "(max-width: 480px)",
      () => {
        const stacks: any = gsap.utils.toArray(".work-1-info-wrapper");
        stacks.forEach((stack: HTMLDivElement, i: number) => {
          if (i === 0) return;
          gsap.set(stack, {
            yPercent: 100,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: workParentConRef.current,
            start: "top top",
            end: () => "+=" + stacks[0].offsetHeight * (stacks.length - 1),
            scrub: true,
            pin: true,
          },
        });

        tl.to(stacks[1], { yPercent: 0 });
        tl.to(stacks[2], { yPercent: 0 });
        tl.to(stacks[3], { yPercent: 0 });
        tl.to(stacks[4], { yPercent: 0 });
        tl.call(() => {
          gsap.to(workParentConRef.current, {
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
        });
      },
      workAnchorScrollRef.current
    );

    matchMedia.add(
      "(min-width: 481px)",
      (context: any) => {
        // oPointerMove handler
        context.add("onPointerMove", (e: PointerEvent) => {
          pointerPos.x = e.clientX;
          pointerPos.y = e.clientY;

          movingLinkXTo(e.clientX);
          movingLinkYTo(e.clientY);

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

        //  horizontal scroll and drag starts
        let hrScrollTween = gsap.to(workConRef.current, {
          x: -(workConRef.current.offsetWidth - window.innerWidth),
          ease: "none",
        });

        ScrollTrigger.create({
          animation: hrScrollTween,
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
        });

        //  horizontal scroll and drag ends

        // addEventListener starts
        if (ScrollTrigger.isTouch !== 1) {
          //  for mouse/pointer device starts
          workConRef.current.addEventListener(
            "pointermove",
            context.onPointerMove
          );

          workImgRef.current.forEach((el: HTMLAnchorElement) => {
            el.addEventListener("pointerenter", context.onWorkImgPointerEnter);
          });

          workImgRef.current.forEach((el: HTMLAnchorElement) => {
            el.addEventListener("pointerleave", context.onWorkImgPointerLeave);
          });
          //  for mouse/pointer device ends
        } else {
          // for touch only device starts
          gsap.set(".work-moving-link", { display: "none", ease: "none" });
          gsap.set(".work-demo-link-wrapper", {
            display: "block",
            ease: "none",
          });
          // for touch only device ends
        }
        // addEventListener ends

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

        // gsap context cleanup starts
        return () => {
          workConRef.current.removeEventListener(
            "pointermove",
            context.onPointerMove
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

          ScrollTrigger.removeEventListener(
            "refresh",
            context.onScrollTriggerRefresh
          );
        };
        // gsap context cleanup ends
      },
      workAnchorScrollRef.current
    );
    // gsap gsap context ends

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
    workAnchorScrollRef,
  };
};

export default useWorks;
