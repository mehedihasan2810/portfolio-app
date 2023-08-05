"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import "./hero.css";
import { useGlobalContext } from "@/contexts/useGlobalContext";
// import Navbar from "../Navbar/Navbar";
// import MaskHero from "./MaskHero";
import useMatchMedia from "@/hooks/useMatchMedia";
import useHero from "./hooks/useHero";
import Image from "next/image";
import Link from "next/link";

// const creativeLetters1 = ["A", "C", "R", "E"];
// const creativeLetters2 = ["A", "T", "I", "V", "E"];
// const developerLetters1 = ["D", "E", "V", "E"];
// const developerLetters2 = ["L", "O", "P", "E", "R"];

export default function Hero() {
  const { documentScrollTop } = useGlobalContext();
  const isSmallDevice = useMatchMedia("(max-width: 992px)");

  const heroRef = useRef<HTMLDivElement>(null!);
  // const developerLetterBgRef1 = useRef<HTMLSpanElement>(null!);
  // const developerLetterBgRef2 = useRef<HTMLSpanElement>(null!);
  // const creativeLetterBgRef1 = useRef<HTMLSpanElement>(null!);
  // const creativeLetterBgRef2 = useRef<HTMLSpanElement>(null!);
  // const webRef = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    if (isSmallDevice) {
      return;
    }

    const windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;

    if (documentScrollTop < windowHeight) {
      const percentage = (windowHeight - documentScrollTop) / windowHeight;
      const fixedPercentage = +percentage.toFixed(2);
      if (fixedPercentage < 0) {
        return;
      }

      heroRef.current.style.opacity = `${fixedPercentage}`;
      heroRef.current.style.transform = `perspective(2000px) rotateX(${parseInt(
        "" + (1 - fixedPercentage) * 100
      )}deg) scale(${fixedPercentage})`;
    }
  }, [documentScrollTop, isSmallDevice]);

  const {
    heroMaskRef,
    heroImgRef,
    heroMaskImgRef,
    avatarsRef,
    pushAvatarsRef,
  } = useHero();

  return (
    <div ref={heroRef} className="hero-full-container">
      {/* <Navbar /> */}
      <div className="hero-container">
        <div className="hero-author-info-container">
          <div className="hero-author-info-wrapper">
            <Image
              ref={heroImgRef}
              src="/images/hero-img.JPG"
              alt="author image"
              width={500}
              height={500}
            />
            <h1 className="hero-main-heading">
              <span> Hi There,</span>
              <span> I'm Mehedi Hasan.</span>
            </h1>
            <p>
              A web developer who is passionate about creating websites that not
              only have stunning visuals but also provide amazing user
              experiences. I also like learning new technologies.
            </p>

            <div className="hero-social-btns-wrapper">
              <Link href="https://www.linkedin.com/in/md-mehedi-hasan2810" target="_blank">
                <Image
                  src="/social-icons/linkedin-black.svg"
                  alt="linkedin logo"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://github.com/mehedihasan2810" target="_blank">
                <Image
                  src="/social-icons/github-black2.svg"
                  alt="github logo"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://www.facebook.com/mehedihasan.miraj.79" target="_blank">
                <Image
                  src="/social-icons/facebook-black.svg"
                  alt="facebook logo"
                  width={40}
                  height={40}
                />
              </Link>
              {/* <Link href='#'>Resume</Link> */}
            </div>

            {/* todo */}
            <div ref={pushAvatarsRef} className="boring-avatars-1">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":rh:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:rh:)">
                  <rect width="36" height="36" fill="#777"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(7 1) rotate(133 18 18) scale(1.1)"
                    fill="#000"
                    rx="6"
                  ></rect>
                  <g transform="translate(3.5 -2) rotate(-3 18 18)">
                    <path
                      d="M15 20c2 1 4 1 6 0"
                      stroke="#fff"
                      fill="none"
                      stroke-linecap="round"
                    ></path>
                    <rect
                      x="11"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#fff"
                    ></rect>
                    <rect
                      x="23"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#fff"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>
            <div ref={pushAvatarsRef} className="boring-avatars-2">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":r1s:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r1s:)">
                  <rect width="36" height="36" fill="#777"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(5 5) rotate(111 18 18) scale(1)"
                    fill="#000"
                    rx="6"
                  ></rect>
                  <g transform="translate(7 3) rotate(-1 18 18)">
                    <path d="M13,19 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path>
                    <rect
                      x="13"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#FFFFFF"
                    ></rect>
                    <rect
                      x="21"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#FFFFFF"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>
            <div ref={pushAvatarsRef} className="boring-avatars-3">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":r22:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r22:)">
                  <rect width="36" height="36" fill="#777"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(-5 -5) rotate(89 18 18) scale(1.2)"
                    fill="#000"
                    rx="36"
                  ></rect>
                  <g transform="translate(-1 -1) rotate(-9 18 18)">
                    <path
                      d="M15 21c2 1 4 1 6 0"
                      stroke="#777"
                      fill="none"
                      stroke-linecap="round"
                    ></path>
                    <rect
                      x="10"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#777"
                    ></rect>
                    <rect
                      x="24"
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
            <div ref={pushAvatarsRef} className="boring-avatars-4">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":r35:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r35:)">
                  <rect width="36" height="36" fill="#777"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(3 5) rotate(341 18 18) scale(1.2)"
                    fill="#000"
                    rx="36"
                  ></rect>
                  <g transform="translate(-5 1) rotate(-1 18 18)">
                    <path d="M13,21 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path>
                    <rect
                      x="13"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#FFFFFF"
                    ></rect>
                    <rect
                      x="21"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#FFFFFF"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>
            <div ref={pushAvatarsRef} className="boring-avatars-5">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":r1r:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r1r:)">
                  <rect width="36" height="36" fill="#777"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(-5 9) rotate(189 18 18) scale(1)"
                    fill="#000"
                    rx="36"
                  ></rect>
                  <g transform="translate(-5 4.5) rotate(9 18 18)">
                    <path d="M13,19 a1,0.75 0 0,0 10,0" fill="#fff"></path>
                    <rect
                      x="10"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#fff"
                    ></rect>
                    <rect
                      x="24"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#fff"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>
            <div ref={pushAvatarsRef} className="boring-avatars-6">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":r31:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r31:)">
                  <rect width="36" height="36" fill="#777"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(9 -5) rotate(219 18 18) scale(1)"
                    fill="#000"
                    rx="6"
                  ></rect>
                  <g transform="translate(4.5 -3) rotate(-9 18 18)">
                    <path
                      d="M15 19c2 1 4 1 6 0"
                      stroke="#fff"
                      fill="none"
                      stroke-linecap="round"
                    ></path>
                    <rect
                      x="10"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#fff"
                    ></rect>
                    <rect
                      x="24"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#fff"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* bg gradient */}
          <div className="gradient-top-right-wrapper">
            <div className="gradient-1"></div>
            <div className="gradient-2"></div>
          </div>
          <div className="gradient-bottom-left-wrapper">
            <div className="gradient-1"></div>
            <div className="gradient-2"></div>
          </div>
        </div>

        {/* mask */}
        <div ref={heroMaskRef} className="hero-mask-author-info-container">
          <div className="hero-mask-author-info-wrapper">
            <Image
              ref={heroMaskImgRef}
              src="/images/hero-img.JPG"
              alt="author image"
              width={500}
              height={500}
            />
            <h1 className="hero-mask-main-heading">
              <span> Hi There,</span>
              <span> I'm Mehedi Hasan.</span>
            </h1>
            <p>
              A web developer who is passionate about creating websites that not
              only have stunning visuals but also provide amazing user
              experiences. I also like learning new technologies.
            </p>

            <div className="hero-mask-social-btns-wrapper">
              <Link href="https://www.linkedin.com/in/md-mehedi-hasan2810/" target="_blank">
                <Image
                  src="/social-icons/linkedin-color.svg"
                  alt="linkedin logo"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://github.com/mehedihasan2810" target="_blank">
                <Image
                  src="/social-icons/github-color.svg"
                  alt="github logo"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://www.facebook.com/mehedihasan.miraj.79" target="_blank">
                <Image
                  src="/social-icons/facebook-color.svg"
                  alt="facebook logo"
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            {/* todo mask */}
            <div ref={pushAvatarsRef} className="boring-avatars-1">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":rh:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:rh:)">
                  <rect width="36" height="36" fill="#49007e"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(7 1) rotate(133 18 18) scale(1.1)"
                    fill="#ff7d10"
                    rx="6"
                  ></rect>
                  <g transform="translate(3.5 -2) rotate(-3 18 18)">
                    <path
                      d="M15 20c2 1 4 1 6 0"
                      stroke="#000000"
                      fill="none"
                      stroke-linecap="round"
                    ></path>
                    <rect
                      x="11"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#000000"
                    ></rect>
                    <rect
                      x="23"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#000000"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>

            <div ref={pushAvatarsRef} className="boring-avatars-2">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":r1s:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r1s:)">
                  <rect width="36" height="36" fill="#ffb238"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(5 5) rotate(111 18 18) scale(1)"
                    fill="#49007e"
                    rx="6"
                  ></rect>
                  <g transform="translate(7 3) rotate(-1 18 18)">
                    <path d="M13,19 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path>
                    <rect
                      x="13"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#FFFFFF"
                    ></rect>
                    <rect
                      x="21"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#FFFFFF"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>

            <div ref={pushAvatarsRef} className="boring-avatars-3">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":r22:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r22:)">
                  <rect width="36" height="36" fill="#ff005b"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(-5 -5) rotate(89 18 18) scale(1.2)"
                    fill="#ffb238"
                    rx="36"
                  ></rect>
                  <g transform="translate(-1 -1) rotate(-9 18 18)">
                    <path
                      d="M15 21c2 1 4 1 6 0"
                      stroke="#000000"
                      fill="none"
                      stroke-linecap="round"
                    ></path>
                    <rect
                      x="10"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#000000"
                    ></rect>
                    <rect
                      x="24"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#000000"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>

            <div ref={pushAvatarsRef} className="boring-avatars-4">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":r35:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r35:)">
                  <rect width="36" height="36" fill="#ffb238"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(3 5) rotate(341 18 18) scale(1.2)"
                    fill="#49007e"
                    rx="36"
                  ></rect>
                  <g transform="translate(-5 1) rotate(-1 18 18)">
                    <path d="M13,21 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path>
                    <rect
                      x="13"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#FFFFFF"
                    ></rect>
                    <rect
                      x="21"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#FFFFFF"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>

            <div ref={pushAvatarsRef} className="boring-avatars-5">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":r1r:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r1r:)">
                  <rect width="36" height="36" fill="#ff005b"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(-5 9) rotate(189 18 18) scale(1)"
                    fill="#ffb238"
                    rx="36"
                  ></rect>
                  <g transform="translate(-5 4.5) rotate(9 18 18)">
                    <path d="M13,19 a1,0.75 0 0,0 10,0" fill="#000000"></path>
                    <rect
                      x="10"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#000000"
                    ></rect>
                    <rect
                      x="24"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#000000"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>

            <div ref={pushAvatarsRef} className="boring-avatars-6">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <mask
                  id=":r31:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#:r31:)">
                  <rect width="36" height="36" fill="#ff005b"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(9 -5) rotate(219 18 18) scale(1)"
                    fill="#ffb238"
                    rx="6"
                  ></rect>
                  <g transform="translate(4.5 -3) rotate(-9 18 18)">
                    <path
                      d="M15 19c2 1 4 1 6 0"
                      stroke="#000000"
                      fill="none"
                      stroke-linecap="round"
                    ></path>
                    <rect
                      x="10"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#000000"
                    ></rect>
                    <rect
                      x="24"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#000000"
                    ></rect>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* bg mask gradient */}
          <div className="mask-gradient-top-right-wrapper">
            <div className="gradient-1"></div>
            <div className="gradient-2"></div>
          </div>
          <div className="mask-gradient-bottom-left-wrapper">
            <div className="gradient-1"></div>
            <div className="gradient-2"></div>
          </div>
        </div>

        {/* <div className="hero-title-container">
          <h1>
            <div ref={webRef} className="creative">
              <span className="creative-first">
                {creativeLetters1.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}

                <span
                  ref={creativeLetterBgRef1}
                  className="creative-letter-bg-1"
                ></span>
              </span>

              <span className="creative-second">
                {creativeLetters2.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}

                <span
                  ref={creativeLetterBgRef2}
                  className="creative-letter-bg-2"
                ></span>
              </span>
            </div>
          </h1>

          <h1>
            <div className="developer">
              <span className="developer-first">
                {developerLetters1.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}

                <span
                  ref={developerLetterBgRef1}
                  className="developer-letter-bg-1"
                ></span>
              </span>

              <span className="developer-second">
                {developerLetters2.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}

                <span
                  ref={developerLetterBgRef2}
                  className="developer-letter-bg-2"
                ></span>
              </span>
            </div>
          </h1>
        </div> */}
      </div>

      {/* <MaskHero /> */}
    </div>
  );
}
