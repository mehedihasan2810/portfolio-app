"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import img1 from "../../../public/images/img1.jpg";
import img2 from "../../../public/images/img2.jpg";
import img3 from "../../../public/images/img3.jpg";
import img4 from "../../../public/images/img4.jpg";
import img5 from "../../../public/images/img5.jpg";
import img6 from "../../../public/images/img6.jpg";
import imgBgRemove from "../../../public/images/img4-removebg.png";
const myFont = localFont({
  src: [
    {
      path: "/../../../public/Poppins/Poppins-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
    // {
    //   path: "/../../../public/Poppins/Poppins-Bold.ttf",
    //   weight: "600",
    //   style: "normal",
    // },
  ],
});

import "./hero.css";
import { useGlobalContext } from "@/contexts/useGlobalContext";
import Navbar from "../Navbar/Navbar";

const creativeLetters1 = ["A", "C", "R", "E"];
const creativeLetters2 = ["A", "T", "I", "V", "E"];
const developerLetters1 = ["D", "E", "V", "E"];
const developerLetters2 = ["L","O", "P", "E", "R"];

export default function Hero() {
  const { skillTop, navBottom } = useGlobalContext();

  const heroRef = useRef<HTMLDivElement>(null!);
  const developerLetterBgRef1 = useRef<HTMLSpanElement>(null!);
  const developerLetterBgRef2 = useRef<HTMLSpanElement>(null!);
  const creativeLetterBgRef1 = useRef<HTMLSpanElement>(null!);
  const creativeLetterBgRef2 = useRef<HTMLSpanElement>(null!);
  const webRef = useRef<HTMLDivElement>(null!);
  const webAuthorRef = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    const windowHeight = document.documentElement.clientHeight;
    const heroHeight = heroRef.current.clientTop;
    console.dir(heroHeight);
    console.log(navBottom);

    if (skillTop === null) {
      return;
    }

    // if( navBottom !== null && navBottom > 0) {
    //   return;
    // }

    if (skillTop === 0) {
      heroRef.current.style.opacity = `0`;
    } else {
      const percentage = skillTop / windowHeight;
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
  }, [skillTop]);

  const handleLetterPointerOver = (
    event: React.PointerEvent<HTMLSpanElement>
  ) => {
    const letterElement = event.currentTarget;
    const perentElementClassName = letterElement.parentElement?.className;
    let letterBgElement;
    if (perentElementClassName === "developer-first") {
      letterBgElement = developerLetterBgRef1.current;
    } else if (perentElementClassName === "developer-second") {
      letterBgElement = developerLetterBgRef2.current;
    } else if (perentElementClassName === "creative-first") {
      letterBgElement = creativeLetterBgRef1.current;
    } else {
      letterBgElement = creativeLetterBgRef2.current;
    }

    letterBgElement.style.width = `${letterElement.offsetWidth}px`;
    letterBgElement.style.left = `${letterElement.offsetLeft}px`;
    letterBgElement.style.opacity = "1";
  };

  function handleLetterPointerOut(event: React.PointerEvent<HTMLSpanElement>) {
    const bgElement = event.currentTarget;
    const perentElementClassName = bgElement.parentElement?.className;
    let letterBgElement;
    if (perentElementClassName === "developer-first") {
      letterBgElement = developerLetterBgRef1.current;
    } else if (perentElementClassName === "developer-second") {
      letterBgElement = developerLetterBgRef2.current;
    } else if (perentElementClassName === "creative-first") {
      letterBgElement = creativeLetterBgRef1.current;
    } else {
      letterBgElement = creativeLetterBgRef2.current;
    }

    letterBgElement.style.opacity = "0";
  }

  return (
    <div ref={heroRef} className="hero-container">


      <Navbar/>

      <div className="hero-title-container">
        
        <h1 className={myFont.className}>
          <div ref={webRef} className="creative">
            <span className="creative-first">
              {creativeLetters1.map((letter, index) => (
                <span
                  key={index}
                  onPointerOver={handleLetterPointerOver}
                  onPointerOut={handleLetterPointerOut}
                >
                  {letter}
                </span>
              ))}

              <span
                ref={creativeLetterBgRef1}
                className="creative-letter-bg-1"
              ></span>
            </span>

            <span className="creative-second">
              {creativeLetters2.map((letter, index) => (
                <span
                  key={index}
                  onPointerOver={handleLetterPointerOver}
                  onPointerOut={handleLetterPointerOut}
                >
                  {letter}
                </span>
              ))}

              <span
                ref={creativeLetterBgRef2}
                className="creative-letter-bg-2"
              ></span>
            </span>
          </div>
        </h1>

        <h1 className={myFont.className}>
          <div className="developer">
            <span className="developer-first">
              {developerLetters1.map((letter, index) => (
                <span
                  key={index}
                  onPointerOver={handleLetterPointerOver}
                  onPointerOut={handleLetterPointerOut}
                >
                  {letter}
                </span>
              ))}

              <span
                ref={developerLetterBgRef1}
                className="developer-letter-bg-1"
              ></span>
            </span>

            <span className="developer-second">
              {developerLetters2.map((letter, index) => (
                <span
                  key={index}
                  onPointerOver={handleLetterPointerOver}
                  onPointerOut={handleLetterPointerOut}
                >
                  {letter}
                </span>
              ))}

              <span
                ref={developerLetterBgRef2}
                className="developer-letter-bg-2"
              ></span>
            </span>
          </div>
        </h1>
        <p className="based-in">based in Bangladesh</p>
      </div>
    </div>
  );
}
