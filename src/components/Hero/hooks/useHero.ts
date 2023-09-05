import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const useHero = () => {
  const heroMaskRef = useRef<HTMLDivElement>(null!);
  const heroMaskLayerRef = useRef<HTMLDivElement>(null!);
  const heroImgRef = useRef<HTMLImageElement>(null!);
  const heroMaskImgRef = useRef<HTMLImageElement>(null!);
  const heroRef = useRef<HTMLDivElement>(null!);
  const heroRotateTween = useRef<any>();
  const avatarBlinkTL = useRef<any>();

  useIsomorphicLayoutEffect(() => {
    const windowWidth = window.innerWidth;
    const windowWidthWhole = 100 / windowWidth;
    const windowHeight = window.innerHeight;
    const windowHalfWidth = windowWidth / 2;
    const windowHalfHeight = windowHeight / 2;

    const avatarsEl = gsap.utils.toArray(".boring-avatars");
    const avatarsBlinkEl = gsap.utils.toArray(".avatar-blink");

    // initial styles
    gsap.set(avatarsBlinkEl, { transformOrigin: "center" });
    gsap.set(heroMaskLayerRef.current, { xPercent: -50 });
    gsap.set(heroMaskRef.current, { xPercent: 50 });

    // avatar move quickto start
    const avatarXto = gsap.quickTo(avatarsEl, "x", {
      duration: 0.5,
      ease: "power1.out",
    });
    const avatarYto = gsap.quickTo(avatarsEl, "y", {
      duration: 0.5,
      ease: "power1.out",
    });
    // avatar move quickto end

    // hero mask quickto starts
    const heroMaskLayerXto = gsap.quickTo(
      heroMaskLayerRef.current,
      "xPercent",
      {
        duration: 1,
        ease: "power2.out",
      }
    );
    const heroMaskXto = gsap.quickTo(heroMaskRef.current, "xPercent", {
      duration: 1,
      ease: "power2.out",
    });
    // hero mask quickto ends

    // matchmedia starts
    // const matchMedia = gsap.matchMedia();
    const ctx = gsap.context((context) => {
      // avatar blink starts
      avatarBlinkTL.current = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      avatarBlinkTL.current.to(avatarsBlinkEl, {
        scaleY: 0,
        ease: "power1.out",
        duration: 0.2,
      });
      avatarBlinkTL.current.to(avatarsBlinkEl, {
        scaleY: 1,
        ease: "power1.in",
        duration: 0.2,
      });
      // avatar blink ends

      context.add("onPointerMove", (e: PointerEvent) => {
        const { clientX, clientY } = e;

        // move hero layer starts
        const xPercentage = Math.ceil(clientX * windowWidthWhole);

        heroMaskLayerXto(-xPercentage);
        heroMaskXto(xPercentage);
        // move hero layer ends

        // avatar move starts
        const avatarX = (windowHalfWidth - clientX) / 50;
        const avatarY = (windowHalfHeight - clientY) / 50;
        avatarXto(avatarX);
        avatarYto(avatarY);
        // avatar move ends
      });

      // off animation on touch only device
      if (ScrollTrigger.isTouch !== 1) {
        heroRef.current.addEventListener("pointermove", context.onPointerMove);
      }

      return () => {
        heroRef.current.removeEventListener(
          "pointermove",
          context.onPointerMove
        );
      };
    }, heroRef.current);
    // matchmedia ends

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
      },
    });
    // ----------------------------

    return () => {
      ctx.revert();
    };
  }, []);


  // useIsomorphicLayoutEffect(() => {
  //   console.log(ScrollTrigger.isScrolling())
  // }, [])

  return {
    heroMaskRef,
    heroImgRef,
    heroMaskImgRef,
    heroRef,
    heroMaskLayerRef,
  };
};

export default useHero;
