import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

// Custom hook for hero animations
const useHero = () => {
  // Refs for various elements in the hero section
  const heroMaskRef = useRef<HTMLDivElement>(null!);
  const heroMaskLayerRef = useRef<HTMLDivElement>(null!);
  const heroImgRef = useRef<HTMLImageElement>(null!);
  const heroMaskImgRef = useRef<HTMLImageElement>(null!);
  const heroRef = useRef<HTMLDivElement>(null!);
  const heroRotateTween = useRef<any>();
  const avatarBlinkTL = useRef<any>();

  // Using custom layout effect for animations
  useIsomorphicLayoutEffect(() => {
    // Calculating window dimensions and other variables
    const windowWidth = window.innerWidth;
    const windowWidthWhole = 100 / windowWidth;
    const windowHeight = window.innerHeight;
    const windowHalfWidth = windowWidth / 2;
    const windowHalfHeight = windowHeight / 2;

    // Selecting avatar elements
    const avatarsEl = gsap.utils.toArray(".boring-avatars");
    const avatarsBlinkEl = gsap.utils.toArray(".avatar-blink");

    // initial styles
    gsap.set(avatarsBlinkEl, { transformOrigin: "center" });
    gsap.set(heroMaskLayerRef.current, { xPercent: -50 });
    gsap.set(heroMaskRef.current, { xPercent: 50 });

    // QuickTo animations for avatar movement
    const avatarXto = gsap.quickTo(avatarsEl, "x", {
      duration: 0.5,
      ease: "power1.out",
    });
    const avatarYto = gsap.quickTo(avatarsEl, "y", {
      duration: 0.5,
      ease: "power1.out",
    });

    // QuickTo animations for hero mask movement
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

    // Context for matchMedia and pointer events
    const ctx = gsap.context((context) => {
      // Avatar blink timeline
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

        // Hero mask and avatar movement based on pointer events
        const xPercentage = Math.ceil(clientX * windowWidthWhole);

        heroMaskLayerXto(-xPercentage);
        heroMaskXto(xPercentage);

        // avatar move starts
        const avatarX = (windowHalfWidth - clientX) / 50;
        const avatarY = (windowHalfHeight - clientY) / 50;
        avatarXto(avatarX);
        avatarYto(avatarY);
        // avatar move ends
      });

      // Adding pointermove event listener if not on a touch-only device
      if (ScrollTrigger.isTouch !== 1) {
        heroRef.current.addEventListener("pointermove", context.onPointerMove);
      }

      // Removing event listener on cleanup
      return () => {
        heroRef.current.removeEventListener(
          "pointermove",
          context.onPointerMove
        );
      };
    }, heroRef.current);
    // matchmedia ends

    // Hero container 3D rotate animation with ScrollTrigger
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
