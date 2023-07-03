"use client";
import React, { useLayoutEffect, useRef } from "react";
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

  

  useLayoutEffect(() => {
    const heroFullElement = document.querySelector(
      ".hero-full-container"
    ) as HTMLDivElement;
    const heroLayerContainer = heroFullElement.querySelector(
      ".hero-layer-container"
    ) as HTMLDivElement;
    const logoContainer = heroLayerContainer.querySelector(
      ".logo-container"
    ) as HTMLDivElement;
    const cursorElement = document.querySelector(
      ".cursor-element"
    ) as HTMLDivElement;
    const list1 = heroLayerContainer.querySelector(
      ".list-item-1"
    ) as HTMLLIElement;
    const list2 = heroLayerContainer.querySelector(
      ".list-item-2"
    ) as HTMLLIElement;
    const list3 = heroLayerContainer.querySelector(
      ".list-item-3"
    ) as HTMLLIElement;
    const list4 = heroLayerContainer.querySelector(
      ".list-item-4"
    ) as HTMLLIElement;

    const heroFullElementBottom =
      heroFullElement.getBoundingClientRect().bottom;

    if (window.innerHeight > heroFullElementBottom + 5) {
      developerElementRef.current.style.setProperty("--size", "0%");
      creativeElementRef.current.style.setProperty("--size", "0%");

      cursorElement.style.width = "20px";
      cursorElement.style.height = "20px";
    } else {
      hoverOverlay(clientX, clientY, creativeElementRef.current);
      hoverOverlay(clientX, clientY, developerElementRef.current);
      hoverOverlay(clientX, clientY, logoContainer);
      hoverOverlay(clientX, clientY, list1);
      hoverOverlay(clientX, clientY, list2);
      hoverOverlay(clientX, clientY, list3);
      hoverOverlay(clientX, clientY, list4);
    }
  }, [clientX, clientY, documentScrollTop]);

  return (
    <div ref={heroLayerRef} className="hero-layer-container">
      <Navbar />

      <div className="hero-title-container">
        <h1>
          <div ref={creativeElementRef} className="creative">
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
          <div ref={developerElementRef} className="developer">
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
      </div>
    </div>
  );
}
