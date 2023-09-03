"use client";
import { useEffect, useRef } from "react";
import "./Loader.css";
import { gsap } from "gsap";

const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const loaderAvatarsBlinkEl = gsap.utils.toArray(".loader-avatar-blink");

    gsap.set(loaderAvatarsBlinkEl, { transformOrigin: "center" });

    // timeline
    const loaderTL = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    const loaderHideTL = gsap.timeline({ delay: 2 });

    const matchMedia = gsap.matchMedia();

    matchMedia.add(
      {
        isDesktop: "(min-width: 800px)",
        isMobile: "(max-width: 799px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        let { reduceMotion } = context.conditions as {
          reduceMotion: boolean;
        };

        // avatar blink anim starts
        loaderTL
          .to(loaderAvatarsBlinkEl, {
            scaleY: 0,
            ease: "power1.out",
            duration: reduceMotion ? 0 : 0.1,
          })
          .to(loaderAvatarsBlinkEl, {
            scaleY: 1,
            ease: "power1.in",
            duration: reduceMotion ? 0 : 0.2,
          });
        // avatar blink anim ends

        // hide initial loader starts

        loaderHideTL
          .to(loaderRef.current, {
            clipPath: "inset(0 50% 0 50%)",
            ease: "expo.out",
            duration: reduceMotion ? 0 : 0.5,
          })
          .to(loaderRef.current, { display: "none", zIndex: -999 });
        // hide initial loader ends
      },
      loaderRef.current
    );

    return () => matchMedia.revert();
  }, []);

  return (
    <aside ref={loaderRef} className="loader-container">
      <div className="loader-black-white-wrapper">
        <div className="loader-black-white-avatar">
          <svg
            viewBox="0 0 36 36"
            fill="none"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
          >
            <mask
              id=":r2c:"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="36"
              height="36"
            >
              <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:r2c:)">
              <rect width="36" height="36" fill="#777"></rect>
              <rect
                x="0"
                y="0"
                width="36"
                height="36"
                transform="translate(-4 -4) rotate(248 18 18) scale(1.2)"
                fill="#000"
                rx="36"
              ></rect>
              <g transform="translate(0 -2) rotate(-8 18 18)">
                <path
                  d="M15 21c2 1 4 1 6 0"
                  stroke="#777"
                  fill="none"
                  strokeLinecap="round"
                ></path>
                <rect
                  className="loader-avatar-blink"
                  x="11"
                  y="14"
                  width="1.5"
                  height="2"
                  rx="1"
                  stroke="none"
                  fill="#777"
                ></rect>
                <rect
                  className="loader-avatar-blink"
                  x="23"
                  y="14"
                  width="1.5"
                  height="2"
                  rx="1"
                  stroke="none"
                  fill="#777"
                ></rect>
              </g>
            </g>
          </svg>
        </div>

        <div className="loader-gradient-top-right-wrapper">
          <div className="loader-gradient-1"></div>
          <div className="gradient-2"></div>
        </div>
        <div className="loader-gradient-bottom-left-wrapper">
          <div className="loader-gradient-1"></div>
          <div className="loader-gradient-2"></div>
        </div>
      </div>
      <div className="loader-color-wrapper">
        <div className="loader-color-avatar">
          <svg
            viewBox="0 0 36 36"
            fill="none"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
          >
            <mask
              id=":r2c:"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="36"
              height="36"
            >
              <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
            </mask>
            <g mask="url(#:r2c:)">
              <rect width="36" height="36" fill="#49007e"></rect>
              <rect
                x="0"
                y="0"
                width="36"
                height="36"
                transform="translate(-4 -4) rotate(248 18 18) scale(1.2)"
                fill="#ff7d10"
                rx="36"
              ></rect>
              <g transform="translate(0 -2) rotate(-8 18 18)">
                <path
                  d="M15 21c2 1 4 1 6 0"
                  stroke="#000"
                  fill="none"
                  strokeLinecap="round"
                ></path>
                <rect
                  className="loader-avatar-blink"
                  x="11"
                  y="14"
                  width="1.5"
                  height="2"
                  rx="1"
                  stroke="none"
                  fill="#000"
                ></rect>
                <rect
                  className="loader-avatar-blink"
                  x="23"
                  y="14"
                  width="1.5"
                  height="2"
                  rx="1"
                  stroke="none"
                  fill="#000"
                ></rect>
              </g>
            </g>
          </svg>
        </div>

        <div className="layer-gradient-top-right-wrapper">
          <div className="loader-gradient-1"></div>
          <div className="loader-gradient-2"></div>
        </div>
        <div className="layer-gradient-bottom-left-wrapper">
          <div className="loader-gradient-1"></div>
          <div className="loader-gradient-2"></div>
        </div>
      </div>
    </aside>
  );
};

export default Loader;
