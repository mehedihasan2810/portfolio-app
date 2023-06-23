"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
const myFont = localFont({
  src: [
    {
      path: "/../../../public/Poppins/Poppins-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "/../../../public/Poppins/Poppins-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

import "./hero.css";
import { useGlobalContext } from "@/contexts/useGlobalContext";

export default function Hero() {
  const [windmilLeft, setWindmilLeft] = useState<number>(0);
  const [windmilTop, setWindmilTop] = useState<number>(0);
  const { skillTop, navBottom } = useGlobalContext();

  // console.log(skillTop)
  const windmilRef = useRef<HTMLDivElement>(null!);
  const windmilStickRef = useRef<HTMLSpanElement>(null!);
  const heroRef = useRef<HTMLDivElement>(null!);

  // useLayoutEffect(() => {
  //   //  console.log(windmilRef.current)
  //   const windmilStick = windmilStickRef.current.getBoundingClientRect();
  //   const left = (windmilStick.left + windmilStick.right) / 2;
  //   setWindmilLeft(left)
  //   setWindmilTop(windmilStick.top)
  //   // windmilRef.current.style.left = `${center}px`;
  //   // windmilRef.current.style.top = `${windmilStick.top}px`;
  //   // console.log(windmilStick)
  //   // console.log(center)
  //   // console.log(windmilStick.top)

  // }, [])

  useLayoutEffect(() => {
    const windowHeight = document.documentElement.clientHeight;
    const heroHeight = heroRef.current.clientTop;
    console.dir(heroHeight)
    console.log(navBottom)

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

      console.log(parseInt(''+(1 - fixedPercentage) * 100))

      heroRef.current.style.opacity = `${fixedPercentage}`;
      heroRef.current.style.transform = `perspective(2000px) rotateX(${parseInt(''+(1 - fixedPercentage) * 100)}deg) scale(${fixedPercentage})`;
    }
  }, [skillTop]);

  useEffect(() => {
    const itemsContainer = document.querySelector(".habit-item-con");

    let intervalId: NodeJS.Timeout;
    let countElements = 1;

    if (itemsContainer !== null) {
      const items = itemsContainer.querySelectorAll("span");
      intervalId = setInterval(() => {
        countElements++;

        let currentItem = itemsContainer.querySelector(".active");
        if (currentItem === null) return;
        currentItem.classList.remove("active");

        if (countElements > items.length) {
          items[0].classList.add("active");
          countElements = 1;
        } else {
          currentItem.nextElementSibling?.classList.add("active");
        }
      }, 2500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div ref={heroRef} className="hero-container">
      <div className="center-container">
        <div className="left">
          <div className="author-title">
            <span className={`${myFont.className} hi-there`}>
              Hi there, I&#39;m
            </span>

            {/* <div ref={windmilRef} className="windmil-container">
        <div className="leaf leaf-1"></div>
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>
        <div className="leaf leaf-4"></div>
        <div className="leaf leaf-5"></div>
        <div className="leaf leaf-6"></div>
        <div className="leaf leaf-7"></div>
        <div className="center-bullet"></div>
      </div> */}

            <h1 className={`${myFont.className} main-title`}>Mehedi Hasan.</h1>
            {/* <div className="windmil-stick-container">
              d



      <div ref={windmilRef} className="windmil-container">
        <div className="leaf leaf-1"></div>
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>
        <div className="leaf leaf-4"></div>
        <div className="leaf leaf-5"></div>
        <div className="leaf leaf-6"></div>
        <div className="leaf leaf-7"></div>
        <div className="center-bullet"></div>
      </div>




              <span ref={windmilStickRef} className="windmil-stick"></span>   
              </div> 
              {' '} */}

            <div className="habit-con-right">
              <div className="habit-con">
                <span>A </span>
                <div className="habit-item-con">
                  <span className="active"> Full Stack Web Developer.</span>
                  <span>Javascript Enthusiast.</span>
                  {/* <span className="non-active">Traveler</span> */}
                </div>
              </div>
            </div>
          </div>

          <p className="author-desc">
            And a guy who always likes to explore new technologies, can easily
            cope with the new technology, environment, team, and prioritizes
            user experience most. Currently working with languages like
            javascript, typescript and main frontend tech reactjs, nextjs, and
            backend tech nodejs, expressjs, mongoose, and mongodb.
          </p>

          <div className="socials">
            <button>
              <GitHubIcon /> <span>GitHub</span>
            </button>
            <button>
              <LinkedInIcon /> <span>LinkedIn</span>
            </button>
            <button>
              <EmailIcon /> <span>Email</span>
            </button>
            <button>
              <ArticleIcon /> <span>Resume</span>
            </button>
          </div>
        </div>

        <div className="right">
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
    </div>
  );
}
