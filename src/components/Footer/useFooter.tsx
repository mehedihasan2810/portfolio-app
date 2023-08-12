import { useEffect, useRef } from "react";

const useFooter = () => {
  const footerRef = useRef<HTMLDivElement>(null!);
  const colorElRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowWidthWhole = 100 / (windowWidth - 50);

    function handlePointerMove(event: PointerEvent) {
      event.stopPropagation();
      console.clear();
      const { clientX, clientY } = event;

      window.mouseXpos = clientX;
      window.mouseYpos = clientY;

      const xPercentage = 100 - Math.ceil(clientX * windowWidthWhole);
      colorElRef.current.style.clipPath = `inset(0 0 0 ${xPercentage}%)`;
    }

    footerRef.current.addEventListener("pointermove", handlePointerMove, false);

    return () => {
      footerRef.current.removeEventListener(
        "pointermove",
        handlePointerMove,
        false
      );
    };
  }, []);

  return { footerRef, colorElRef };
};

export default useFooter;
