import { useEffect, useRef } from "react";

const useHero = () => {
  const heroMaskRef = useRef<HTMLDivElement>(null!);
  const heroImgRef = useRef<HTMLImageElement>(null!);
  const heroMaskImgRef = useRef<HTMLImageElement>(null!);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    function handleMouseMove(event: any) {
      const windowHalfWidth = windowWidth / 2;
      const isLessHalf = event.clientX < windowWidth / 2;

      const circleSize = isLessHalf
        ? windowHalfWidth - event.clientX
        : event.clientX - windowWidth / 2;
      const circleSizePercent = Number.parseInt(
        `${(circleSize / windowHalfWidth) * 100}`
      );

      const finalCircleSize = isLessHalf
        ? circleSizePercent
        : -circleSizePercent;

      heroMaskRef.current.style.clipPath = `circle(${
        100 + finalCircleSize / 3.3
      }% at -28% 50%)`;

      heroImgRef.current.style.transform = `translateX(${
        isLessHalf ? 15 : -15
      }px)`;
      heroMaskImgRef.current.style.transform = `translateX(${
        isLessHalf ? 15 : -15
      }px)`;
    }

    document.addEventListener("pointermove", handleMouseMove);

    return () => document.addEventListener("pointermove", handleMouseMove);
  }, []);

  return { heroMaskRef, heroImgRef, heroMaskImgRef };
};

export default useHero;
