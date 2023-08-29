import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const useHero = () => {
  const heroMaskRef = useRef<HTMLDivElement>(null!);
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

    // avatar move quickto start
    const avatarXto = gsap.quickTo(avatarsEl, "x", {
      duration: 0.7,
      ease: "power1.out",
    });
    const avatarYto = gsap.quickTo(avatarsEl, "y", {
      duration: 0.7,
      ease: "power1.out",
    });
    // avatar move quickto end

    gsap.set(avatarsBlinkEl, { transformOrigin: "bottom" });

    // matchmedia starts
    const matchMedia = gsap.matchMedia();
    matchMedia.add(
      "(min-width: 801px)",
      (context) => {
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

          // clip hero layer starts
          const xPercentage = Math.ceil(clientX * windowWidthWhole);
          gsap.to(heroMaskRef.current, {
            clipPath: `inset(0 ${xPercentage}% 0 0 )`,
          });
          // clip hero layer ends

          // avatar move starts
          const avatarX = (windowHalfWidth - clientX) / 50;
          const avatarY = (windowHalfHeight - clientY) / 50;
          avatarXto(avatarX);
          avatarYto(avatarY);
          // avatar move ends
        });

        heroRef.current.addEventListener("pointermove", context.onPointerMove);

        return () => {
          heroRef.current.removeEventListener(
            "pointermove",
            context.onPointerMove
          );
        };
      },
      heroRef.current
    );
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
      matchMedia.revert();
    };
  }, []);

  return {
    heroMaskRef,
    heroImgRef,
    heroMaskImgRef,
    heroRef,
  };
};

export default useHero;
