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
  const workProxyRef = useRef<HTMLDivElement>(null!);
  const workHrScrollConRef = useRef<HTMLDivElement>(null!);
  const workMaskInfoRef = useRef<HTMLDivElement>(null!);
  const workMovingLinkRef = useRef<HTMLDivElement>(null!);
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

    // gsap gsap context starts

    const pointerPos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const ctx = gsap.context((context) => {
      let clamp: any, dragRatio: number;

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

      // ScrollTrigger refresh event handler starts
      context.add("onScrollTriggerRefresh", () => {
        // don't let the drag-scroll hit the very start or end so that it doesn't unpin
        clamp = gsap.utils.clamp(
          horizontalScroll.start + 1,
          horizontalScroll.end - 1
        );
        // total scroll amount divided by the total distance that the sections move gives us the ratio we can apply to the pointer movement so that it fits.
        dragRatio =
          workConRef.current.offsetWidth /
          (workConRef.current.offsetWidth - window.innerWidth);
      });
      // ScrollTrigger refresh event handler ends

      // horizontal scroll and drag starts
      let hrScrollTween = gsap.to(workConRef.current, {
        x: -(workConRef.current.offsetWidth - window.innerWidth),
        ease: "none",
      });

      let horizontalScroll = ScrollTrigger.create({
        animation: hrScrollTween,
        trigger: workParentConRef.current,
        pin: true,
        scrub: true,
        end: () => "+=" + (workConRef.current.offsetWidth - window.innerWidth),
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

      Draggable.create(workProxyRef.current, {
        trigger: workConRef.current,
        type: "x",
        onPress() {
          clamp || ScrollTrigger.refresh();
          this.startScroll = horizontalScroll.scroll();
        },
        onDrag() {
          horizontalScroll.scroll(
            clamp(this.startScroll - (this.x - this.startX) * dragRatio)
          );
          // if you don't want it to lag at all while dragging (due to the 1-second scrub), uncomment the next line:
          //horizontalScroll.getTween().progress(1);
        },
      })[0];
      // horizontal scroll and drag ends

      // addEventListener starts
      if (ScrollTrigger.isTouch !== 1) {
        // for mouse/pointer device starts
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
        // for mouse/pointer device ends
      } else {
        // for touch only device starts
        gsap.to(".work-moving-link", { display: "none", ease: "none" });
        gsap.to(".work-demo-link-wrapper", {
          display: "block",
          ease: "none",
        });
        // for touch only device ends
      }

      ScrollTrigger.addEventListener("refresh", context.onScrollTriggerRefresh);
      // addEventListener ends

      // gsap context cleanup starts
      return () => {
        workConRef.current.removeEventListener(
          "pointermove",
          context.onPointerMove
        );

        workImgRef.current.forEach((el: HTMLAnchorElement) => {
          el.removeEventListener("pointerenter", context.onWorkImgPointerEnter);
        });

        workImgRef.current.forEach((el: HTMLAnchorElement) => {
          el.removeEventListener("pointerleave", context.onWorkImgPointerLeave);
        });

        ScrollTrigger.removeEventListener(
          "refresh",
          context.onScrollTriggerRefresh
        );
      };
      // gsap context cleanup ends
    }, workParentConRef.current);
    // gsap gsap context ends

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
      ctx.revert();
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
    workProxyRef,
  };
};

export default useWorks;
