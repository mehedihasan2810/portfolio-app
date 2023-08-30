// import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
// import useMatchMedia from "@/hooks/useMatchMedia";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const useFooter = () => {
  const footerRef = useRef<HTMLDivElement>(null!);
  const colorElRef = useRef<HTMLDivElement>(null!);
  // const isTouchDevices = useMatchMedia("(max-width: 992px)");

  // useIsomorphicLayoutEffect(() => {
  //   const workMovingLinkEl = document.querySelector(
  //     ".work-moving-link"
  //   ) as HTMLAnchorElement;


  //   gsap.to(footerRef.current, {
  //     scrollTrigger: {
  //       trigger: footerRef.current,
  //       start: "top bottom",
  //       onToggle: () => {
  //         gsap.to(workMovingLinkEl, {
  //           scale: 0,
  //           duration: 1,
  //           ease: "expo.out",
  //         });
  //       },
  //     },
  //   });
  // }, [isTouchDevices]);

  return { footerRef, colorElRef };
};

export default useFooter;
