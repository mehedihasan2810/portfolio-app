import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const useHero = () => {
  const heroMaskRef = useRef<HTMLDivElement>(null!);
  const heroImgRef = useRef<HTMLImageElement>(null!);
  const heroMaskImgRef = useRef<HTMLImageElement>(null!);
  const avatarsRef = useRef<HTMLDivElement[]>([]);
  const heroRef = useRef<HTMLDivElement>(null!);
  const heroRotateTween = useRef<any>();

  const pushAvatarsRef = (el: HTMLHeadingElement) =>
    avatarsRef.current.push(el!);

  useIsomorphicLayoutEffect(() => {
    const windowWidth = window.innerWidth;
    const windowWidthWhole = 100 / windowWidth;
    const windowHeight = window.innerHeight;
    const windowHalfWidth = windowWidth / 2;
    const windowHalfHeight = windowHeight / 2;

    let avatarXto = gsap.quickTo(avatarsRef.current, "x", {
      duration: 0.7,
      ease: "power1.out",
    });
    let avatarYto = gsap.quickTo(avatarsRef.current, "y", {
      duration: 0.7,
      ease: "power1.out",
    });

    const matchMedia = gsap.matchMedia();

    matchMedia.add(
      "(min-width: 801px)",
      (context) => {
        context.add("onPointerMove", (e: PointerEvent) => {
          const { clientX, clientY } = e;

          const xPercentage = Math.ceil(clientX * windowWidthWhole);
          gsap.to(heroMaskRef.current, {
            clipPath: `inset(0 ${xPercentage}% 0 0 )`,
          });

          const avatarX = (windowHalfWidth - clientX) / 50;
          const avatarY = (windowHalfHeight - clientY) / 50;

          avatarXto(avatarX);
          avatarYto(avatarY);
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

    const colorYblinkTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    colorYblinkTL.to(".avatar-blink", {
      // fill: "#ffb238",
      height: 0,
      ease: "power1.out",
      duration: 0.2,
    });
    colorYblinkTL.to(".avatar-blink", {
      // fill: "#000",
      height: 2,
      ease: "power1.in",
      duration: 0.2,
    });

    return () => {
      matchMedia.revert();
    };
  }, []);

  // useIsomorphicLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // blinking animaiton for black white avatars
  //     const heroBlackWhiteTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  //     heroBlackWhiteTL.to(".bw-avatar-blink", {
  //       fill: "#000",
  //       ease: "power1.out",
  //       duration: 0.5,
  //     });
  //     heroBlackWhiteTL.to(".bw-avatar-blink", {
  //       fill: "#fff",
  //       ease: "power1.in",
  //       duration: 0.5,
  //     });
  //     // --------------------------------------

  //     // blinking animaition for yellow avatars
  //     const colorYblinkTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  //     colorYblinkTL.to(".color-y-avatar-blink", {
  //       fill: "#ffb238",
  //       ease: "power1.out",
  //       duration: 0.5,
  //     });
  //     colorYblinkTL.to(".color-y-avatar-blink", {
  //       fill: "#000",
  //       ease: "power1.in",
  //       duration: 0.5,
  //     });
  //     // -----------------------------------------

  //     // blinking animation for purple avatars
  //     const colorPblinkTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  //     colorPblinkTL.to(".color-p-avatar-blink", {
  //       fill: "#49007e",
  //       ease: "power1.out",
  //       duration: 0.5,
  //     });
  //     colorPblinkTL.to(".color-p-avatar-blink", {
  //       fill: "#fff",
  //       ease: "power1.in",
  //       duration: 0.5,
  //     });
  //     // ------------------------------------------

  //     // blinking animation for orange avatars
  //     const colorOblinkTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  //     colorOblinkTL.to(".color-o-avatar-blink", {
  //       fill: "#ff7d10",
  //       ease: "power1.out",
  //       duration: 0.5,
  //     });
  //     colorOblinkTL.to(".color-o-avatar-blink", {
  //       fill: "#000",
  //       ease: "power1.in",
  //       duration: 0.5,
  //     });
  //     // ------------------------------------------
  //   }, heroRef.current);

  //   return () => ctx.revert();
  // }, []);

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
