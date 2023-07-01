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


import "./hero.css";
import { useGlobalContext } from "@/contexts/useGlobalContext";
import Navbar from "../Navbar/Navbar";
import hoverOverlay from "@/utils/hoverOverlay";

const creativeLetters1 = ["A", "C", "R", "E"];
const creativeLetters2 = ["A", "T", "I", "V", "E"];
const developerLetters1 = ["D", "E", "V", "E"];
const developerLetters2 = ["L", "O", "P", "E", "R"];

export default function MaskHero() {
  const { clientX, clientY, documentScrollTop } = useGlobalContext();

  const developerLetterBgRef1 = useRef<HTMLSpanElement>(null!);
  const developerLetterBgRef2 = useRef<HTMLSpanElement>(null!);
  const creativeLetterBgRef1 = useRef<HTMLSpanElement>(null!);
  const creativeLetterBgRef2 = useRef<HTMLSpanElement>(null!);
  const heroLayerRef = useRef<HTMLDivElement>(null!);
  const creativeElementRef = useRef<HTMLDivElement>(null!);
  const developerElementRef = useRef<HTMLDivElement>(null!);
  const logoContainerRef = useRef<HTMLDivElement>(null!);

  //   useLayoutEffect(() => {
  //     const windowHeight = document.documentElement.clientHeight;
  //     const heroHeight = heroRef.current.clientTop;
  //     console.dir(heroHeight);
  //     console.log(navBottom);

  //     if (skillTop === null) {
  //       return;
  //     }

  //     // if( navBottom !== null && navBottom > 0) {
  //     //   return;
  //     // }

  //     if (skillTop === 0) {
  //       heroRef.current.style.opacity = `0`;
  //     } else {
  //       const percentage = skillTop / windowHeight;
  //       const fixedPercentage = +percentage.toFixed(2);
  //       console.log(fixedPercentage);
  //       if (fixedPercentage < 0) {
  //         return;
  //       }

  //       console.log(parseInt("" + (1 - fixedPercentage) * 100));

  //       heroRef.current.style.opacity = `${fixedPercentage}`;
  //       heroRef.current.style.transform = `perspective(2000px) rotateX(${parseInt(
  //         "" + (1 - fixedPercentage) * 100
  //       )}deg) scale(${fixedPercentage})`;
  //     }
  //   }, [skillTop]);

  //   const handleLetterPointerOver = (
  //     event: React.PointerEvent<HTMLSpanElement>
  //   ) => {
  //     const letterElement = event.currentTarget;
  //     const perentElementClassName = letterElement.parentElement?.className;
  //     let letterBgElement;
  //     if (perentElementClassName === "developer-first") {
  //       letterBgElement = developerLetterBgRef1.current;
  //     } else if (perentElementClassName === "developer-second") {
  //       letterBgElement = developerLetterBgRef2.current;
  //     } else if (perentElementClassName === "creative-first") {
  //       letterBgElement = creativeLetterBgRef1.current;
  //     } else {
  //       letterBgElement = creativeLetterBgRef2.current;
  //     }

  //     letterBgElement.style.width = `${letterElement.offsetWidth}px`;
  //     letterBgElement.style.left = `${letterElement.offsetLeft}px`;
  //     letterBgElement.style.opacity = "1";
  //   };

  //   function handleLetterPointerOut(event: React.PointerEvent<HTMLSpanElement>) {
  //     const bgElement = event.currentTarget;
  //     const perentElementClassName = bgElement.parentElement?.className;
  //     let letterBgElement;
  //     if (perentElementClassName === "developer-first") {
  //       letterBgElement = developerLetterBgRef1.current;
  //     } else if (perentElementClassName === "developer-second") {
  //       letterBgElement = developerLetterBgRef2.current;
  //     } else if (perentElementClassName === "creative-first") {
  //       letterBgElement = creativeLetterBgRef1.current;
  //     } else {
  //       letterBgElement = creativeLetterBgRef2.current;
  //     }

  //     letterBgElement.style.opacity = "0";
  //   }

  useLayoutEffect(() => {
    // const maskLayer = document.querySelector(".mask-layer");
    // document.addEventListener("pointermove", function (event) {
    //   // event.stopPropagation();
    //   const heroLayerStyle = heroLayerRef.current.style;
    //    const targetElement = event.target as HTMLElement;
    //   if(targetElement.closest('.developer') || targetElement.closest('.creative')){
    //     heroLayerStyle.setProperty(`--x`, `${event.clientX}px`)
    //     heroLayerStyle.setProperty(`--y`, `${event.clientY}px`)
    //     heroLayerStyle.setProperty(`--size`, `350px`)
    //   }else{
    //     heroLayerStyle.setProperty(`--x`, `${event.clientX}px`)
    //     heroLayerStyle.setProperty(`--y`, `${event.clientY}px`)
    //     heroLayerStyle.setProperty(`--size`, `50px`)
    //   }
    // });
  }, []);

  useLayoutEffect(() => {
    // const heroFullElement = document.querySelector('.hero-full-container') as HTMLDivElement;

     
    const heroFullElement = document.querySelector(
      ".hero-full-container"
    ) as HTMLDivElement;
    const heroLayerContainer = heroFullElement.querySelector('.hero-layer-container') as HTMLDivElement;
    const logoContainer = heroLayerContainer.querySelector('.logo-container') as HTMLDivElement;
    const cursorElement = document.querySelector('.cursor-element') as HTMLDivElement;
    const list1 = heroLayerContainer.querySelector('.list-item-1') as HTMLLIElement;
    const list2 = heroLayerContainer.querySelector('.list-item-2') as HTMLLIElement;
    const list3 = heroLayerContainer.querySelector('.list-item-3') as HTMLLIElement;
    const list4 = heroLayerContainer.querySelector('.list-item-4') as HTMLLIElement;
    // const navLists = heroLayerContainer.querySelectorAll('li') as NodeListOf<HTMLLIElement>;

    console.log('liiiiii', list3.getBoundingClientRect().width)
    console.log('liiiiii22', list3.offsetWidth)

    const heroFullElementBottom =
      heroFullElement.getBoundingClientRect().bottom;

    if (window.innerHeight > heroFullElementBottom + 5) {
      developerElementRef.current.style.setProperty("--size", "0%");
      creativeElementRef.current.style.setProperty("--size", "0%");

      cursorElement.style.width = '20px';
      cursorElement.style.height = '20px';
    } else {
      hoverOverlay(
        clientX,
        clientY,
        creativeElementRef.current
      );
      hoverOverlay(
        clientX,
        clientY,
        developerElementRef.current
      );
      hoverOverlay(
        clientX,
        clientY,
        logoContainer
      );
      hoverOverlay(
        clientX,
        clientY,
        list1
      );
      hoverOverlay(
        clientX,
        clientY,
        list2
      );
      hoverOverlay(
        clientX,
        clientY,
        list3
      );
      hoverOverlay(
        clientX,
        clientY,
        list4
      );

      

      // Array.from(navLists).forEach(li => {
      //   hoverOverlay(clientX, clientY, li)
      // })
    }

    // const creativeElementX =
    //   creativeElementRef.current.getBoundingClientRect().left;
    // const creativeElementY =
    //   creativeElementRef.current.getBoundingClientRect().top;
    // const creativeElementHeight = creativeElementRef.current.offsetHeight;
    // const creativeElementWidth = creativeElementRef.current.offsetWidth;
  }, [clientX, clientY, documentScrollTop]);

  // useLayoutEffect(() => {

  // }, [documentScrollTop])

  return (
    <div ref={heroLayerRef} className="hero-layer-container">
      <Navbar />

      <div className="hero-title-container">
        <h1 >
          <div ref={creativeElementRef} className="creative">
            <span className="creative-first">
              {creativeLetters1.map((letter, index) => (
                <span
                  key={index}
                  //   onPointerOver={handleLetterPointerOver}
                  //   onPointerOut={handleLetterPointerOut}
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
                  //   onPointerOver={handleLetterPointerOver}
                  //   onPointerOut={handleLetterPointerOut}
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

        <h1 >
          <div ref={developerElementRef} className="developer">
            <span className="developer-first">
              {developerLetters1.map((letter, index) => (
                <span
                  key={index}
                  //   onPointerOver={handleLetterPointerOver}
                  //   onPointerOut={handleLetterPointerOut}
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
                  //   onPointerOver={handleLetterPointerOver}
                  //   onPointerOut={handleLetterPointerOut}
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
        {/* <p className="based-in">based in Bangladesh</p> */}
      </div>
    </div>
    // </div>
  );
}
