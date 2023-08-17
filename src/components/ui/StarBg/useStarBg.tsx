import { useGlobalContext } from "@/contexts/useGlobalContext";
import useMatchMedia from "@/hooks/useMatchMedia";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const useStarBg = () => {
  const starBgRef = useRef<HTMLDivElement>(null!);
  const isTouchDevices = useMatchMedia("(max-width: 992px)");
  const { isStarBgAnimOn } = useGlobalContext();

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowHalfWidth = windowWidth / 2;
    const windowHalfHeight = windowHeight / 2;

    function handlePointerMove(event: PointerEvent) {
      event.stopPropagation();
      window.mouseXpos = event.clientX;
      window.mouseYpos = event.clientY;

      // move stars on pointermove
      const starX = (windowHalfWidth - event.clientX) / 20;
      const starY = (windowHalfHeight - event.clientY) / 20;
      gsap.to(starBgRef.current, { x: starX, y: starY });
      // -------------------------
    }

    // stop pointer move animation if device is touch
    // or start the animation
    if (!isTouchDevices) {
      if (isStarBgAnimOn) {
        window.addEventListener("pointermove", handlePointerMove, false);
      } else {
        window.removeEventListener("pointermove", handlePointerMove, false);
      }
    } else {
      window.removeEventListener("pointermove", handlePointerMove, false);
    }
    // ---------------------------------

    return () => {
      window.removeEventListener("pointermove", handlePointerMove, false);
    };
  }, [isStarBgAnimOn, isTouchDevices]);

  return { starBgRef };
};

export default useStarBg;
