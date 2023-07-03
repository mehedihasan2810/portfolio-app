"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";



import "./hero.css";
import { useGlobalContext } from "@/contexts/useGlobalContext";
import Navbar from "../Navbar/Navbar";
import MaskHero from "./MaskHero";
import useMatchMedia from "@/hooks/useMatchMedia";

const creativeLetters1 = ["A", "C", "R", "E"];
const creativeLetters2 = ["A", "T", "I", "V", "E"];
const developerLetters1 = ["D", "E", "V", "E"];
const developerLetters2 = ["L", "O", "P", "E", "R"];

export default function Hero() {
  const { documentScrollTop } = useGlobalContext();
const isSmallDevice = useMatchMedia('(max-width: 992px)');

  const heroRef = useRef<HTMLDivElement>(null!);
  const developerLetterBgRef1 = useRef<HTMLSpanElement>(null!);
  const developerLetterBgRef2 = useRef<HTMLSpanElement>(null!);
  const creativeLetterBgRef1 = useRef<HTMLSpanElement>(null!);
  const creativeLetterBgRef2 = useRef<HTMLSpanElement>(null!);
  const webRef = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {

   if(isSmallDevice){
    return;
   }


    const windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;

    if (documentScrollTop < windowHeight) {
      const percentage = (windowHeight - documentScrollTop) / windowHeight;
      const fixedPercentage = +percentage.toFixed(2);
      console.log(fixedPercentage);
      if (fixedPercentage < 0) {
        return;
      }

      console.log(parseInt("" + (1 - fixedPercentage) * 100));

      heroRef.current.style.opacity = `${fixedPercentage}`;
      heroRef.current.style.transform = `perspective(2000px) rotateX(${parseInt(
        "" + (1 - fixedPercentage) * 100
      )}deg) scale(${fixedPercentage})`;
    }




    




  }, [documentScrollTop, isSmallDevice]);

  return (
    <div ref={heroRef} className="hero-full-container">
      <div className="hero-container">
        <Navbar />

        <div className="hero-title-container">
          <h1 
          >
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

          <h1 
          >
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
          {/* <p className="based-in">based in Bangladesh</p> */}
        </div>
      </div>

      <MaskHero />
    </div>
  );
}
