"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import img1 from "../../../public/images/img1.jpg";
import img2 from "../../../public/images/img2.jpg";
import img3 from "../../../public/images/img3.jpg";
import img4 from "../../../public/images/img4.jpg";
import img5 from "../../../public/images/img5.jpg";
import img6 from "../../../public/images/img6.jpg";

import "./about.css";
import { useGlobalContext } from "@/contexts/useGlobalContext";
export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null!);
  const { documentScrollTop } = useGlobalContext();

  useEffect(() => {
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

      console.log("rotate ", rotateX);
      console.log("scale ", scale);

      aboutRef.current.style.opacity = `${fixedPercentage}`;
      aboutRef.current.style.transform = `perspective(2000px) rotateX(${
        rotateX <= 9 ? 0 : rotateX
      }deg) scale(${scale >= 0.9 ? 1 : scale})`;
    }
  }, [documentScrollTop]);

  return (
    <div ref={aboutRef} className="about-container">
      <div className="about-info-wrapper">
        <div className="about-info-center">
          <p>About</p>
          <div className="about-info">
            <span>Hi there! My name is Mehedi Hasan. A </span>
            <span>MERN based creative web developer who </span>
            <span>knows how to make websites that not</span>{" "}
            <span> only look visually appealing but also </span>
            <span> provide exceptional user experiences. </span>
          </div>

          <ul className="about-socials">
            <li>
              <a href="" className="social-link">
                Resume
              </a>
              <div className="mask resume-mask">
                <a href="">Download</a>
                <a href="">show</a>
              </div>
            </li>
            <li>
              <a href="" className="social-link">
                LinkedIn
              </a>
              <a href="" className="mask">
                A Professional me
              </a>
            </li>

            <li>
              <a href="" className="social-link">
                GitHub
              </a>
              <a href="" className="mask">
                All the ninja code that I wrote
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cube-wrapper">
        <div className="scene">
          <div className="cube">
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
