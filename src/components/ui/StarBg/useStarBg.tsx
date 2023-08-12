import { useGlobalContext } from "@/contexts/useGlobalContext";
import React, { useEffect, useRef } from "react";

// declare global {
//   interface Window {
//   mouseXpos: number;
//   mouseYpos: number;
//   }
// }


const useStarBg = () => {
  const starBgRef = useRef<HTMLDivElement>(null!);

  const { isStarBgAnimOn, isHeroAnimOn, toggleAnim } = useGlobalContext();

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowHalfWidth = windowWidth / 2;
    const windowHalfHeight = windowHeight / 2;

    // const stars = document.querySelectorAll(".stars-bg__star");

    function handlePointerMove(event: PointerEvent) {
      event.stopPropagation();
      // console.clear();
      window.mouseXpos = event.clientX;
      window.mouseYpos = event.clientY;


      // if (isAnimationOn) {

      // move avatars on pointermove

      const starX = (windowHalfWidth - event.clientX) / 20;
      const starY = (windowHalfHeight - event.clientY) / 20;

      starBgRef.current.style.transform = `translate(${starX}px, ${starY}px)`;
      // stars.forEach((el) => {
      //   const starEl = el as SVGPathElement;
      //   starEl.style.transform = `translate(${starX}px, ${starY}px)`;
      // });
      //   }
    }

    if (isStarBgAnimOn) {
      window.addEventListener("pointermove", handlePointerMove, false);
    } else {
      window.removeEventListener("pointermove", handlePointerMove, false);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove, false);
    };
  }, [isStarBgAnimOn]);

  return { starBgRef };
};

export default useStarBg;
