import { useGlobalContext } from "@/contexts/useGlobalContext";
import useMatchMedia from "@/hooks/useMatchMedia";
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

      // move avatars on pointermove
      const starX = (windowHalfWidth - event.clientX) / 20;
      const starY = (windowHalfHeight - event.clientY) / 20;

      starBgRef.current.style.transform = `translate(${starX}px, ${starY}px)`;
    }

    if (!isTouchDevices) {
      if (isStarBgAnimOn) {
        window.addEventListener("pointermove", handlePointerMove, false);
      } else {
        window.removeEventListener("pointermove", handlePointerMove, false);
      }
    } else {
      window.removeEventListener("pointermove", handlePointerMove, false);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove, false);
    };
  }, [isStarBgAnimOn, isTouchDevices]);

  return { starBgRef };
};

export default useStarBg;
