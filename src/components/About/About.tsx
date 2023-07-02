"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import img1 from "../../../public/images/img1.jpg";
import img2 from "../../../public/images/img2.jpg";
import img3 from "../../../public/images/img3.jpg";
import img4 from "../../../public/images/img4.jpg";
import img5 from "../../../public/images/img5.jpg";
import img6 from "../../../public/images/img6.jpg";

import "./about.css";
import { useGlobalContext } from "@/contexts/useGlobalContext";
import isCursorOnElement from "@/utils/isCursorOnElement";
export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null!);
  const aboutInfoRef = useRef<HTMLDivElement>(null!);
  const aboutLi1Ref = useRef<HTMLLIElement>(null!);
  const aboutLi2Ref = useRef<HTMLLIElement>(null!);
  const aboutLi3Ref = useRef<HTMLLIElement>(null!);
  const cubeRef = useRef<HTMLDivElement>(null!);
  const { documentScrollTop, hideCursorElement, showCursorElement, clientX, clientY } = useGlobalContext();

  useLayoutEffect(() => {
    const windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;

    if (documentScrollTop < windowHeight * 2) {
      const percentage = (windowHeight * 2 - documentScrollTop) / windowHeight;
      const fixedPercentage = +percentage.toFixed(2);

      const rotateX =
        parseInt("" + (1 - fixedPercentage) * 100) < 0
          ? 0
          : parseInt("" + (1 - fixedPercentage) * 100);
      const scale = fixedPercentage >= 1 ? 1 : fixedPercentage;

      if(scale < 0.20){
          cubeRef.current.style.animation = 'none';
      }else{
        cubeRef.current.style.animation = 'spinCube 30s infinite linear';
      }

      console.log("rotate ", rotateX);
      console.log("scale ", scale);

      aboutRef.current.style.opacity = `${fixedPercentage}`;
      aboutRef.current.style.transform = `perspective(2000px) rotateX(${
        rotateX <= 9 ? 0 : rotateX > 75 ? 75 : rotateX
      }deg) scale(${scale >= 0.9 ? 1 : scale < 0.20 ? 0.20 : scale})`;
    }
  }, [documentScrollTop]);



  useLayoutEffect(() => {
    const cursorElement = document.querySelector('.cursor-element') as HTMLDivElement;
    if(
      isCursorOnElement(clientX, clientY, aboutInfoRef.current) || isCursorOnElement(clientX, clientY, aboutLi1Ref.current) || isCursorOnElement(clientX, clientY, aboutLi2Ref.current) || 
      isCursorOnElement(clientX, clientY, aboutLi3Ref.current)){
        cursorElement.style.width = '0px';
    cursorElement.style.height = '0px';
    }else{
      cursorElement.style.width = '20px';
          cursorElement.style.height = '20px';
    }
         
  }, [clientX, clientY, aboutInfoRef, aboutLi1Ref, aboutLi2Ref, aboutLi3Ref])


  // function handleHideCursor

  return (
    <div ref={aboutRef} className="about-container">
      <div className="about-info-wrapper">
        <div className="about-info-center">
          <p>About</p>
          <div ref={aboutInfoRef} className="about-info">
            <span>Hi there! My name is Mehedi Hasan. A </span>
            <span>MERN based creative web developer who </span>
            <span>knows how to make websites that not</span>{" "}
            <span> only look visually appealing but also </span>
            <span> provide exceptional user experiences. </span>
          </div>

          <ul className="about-socials">
            <li ref={aboutLi1Ref}>
              <a href="https://drive.google.com/file/d/168leLznsYCQLtoI_0FN_UjKozS6Wtkjq/view?usp=drive_link" target="blank" className="social-link">
                Resume
              </a>
              <div className="mask resume-mask">
                <a href="\md_mehedi_hasan_resume.pdf" download >Download</a>
                <a href="https://drive.google.com/file/d/168leLznsYCQLtoI_0FN_UjKozS6Wtkjq/view?usp=drive_link" target="blank">show</a>
              </div>
            </li>
            <li ref={aboutLi2Ref}>
              <a href="https://www.linkedin.com/in/md-mehedi-hasan2810/" target="blank" className="social-link">
                LinkedIn
              </a>
              <a href="https://www.linkedin.com/in/md-mehedi-hasan2810/" target="blank" className="mask">
                A Professional me
              </a>
            </li>

            <li ref={aboutLi3Ref}>
              <a href="https://github.com/mehedihasan2810"  target="blank" className="social-link">
                GitHub
              </a>
              <a href="https://github.com/mehedihasan2810"  target="blank" className="mask">
                All the ninja code that I wrote
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cube-wrapper">
        <div className="scene">
          <div ref={cubeRef} className="cube">
            <div className="cube__face cube__face--front">
              <Image src={img3} alt="" width={400} height={400} />
            </div>
            <div className="cube__face cube__face--back">
              <Image src={img1} alt="" width={400} height={400} />
            </div>
            <div className="cube__face cube__face--right">
              <Image src={img5} alt="" width={400} height={400} />
            </div>
            <div className="cube__face cube__face--left">
              <Image src={img6} alt="" width={400} height={400} />
            </div>
            <div className="cube__face cube__face--top">
              <Image src={img2} alt="" width={400} height={400} />
            </div>
            <div className="cube__face cube__face--bottom">
              <Image src={img4} alt="" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
