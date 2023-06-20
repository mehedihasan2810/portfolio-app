"use client";
import { useEffect, useRef } from "react";
import localFont from "next/font/local";
import Image from 'next/image'
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import img1 from '../../../public/images/img1.jpg'
import img2 from '../../../public/images/img2.jpg'
import img3 from '../../../public/images/img3.jpg'
import img4 from '../../../public/images/img4.jpg'
import img5 from '../../../public/images/img5.jpg'
import img6 from '../../../public/images/img6.jpg'
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

export default function Hero() {
  useEffect(() => {
    const itemsContainer = document.querySelector(".habit-item-con");

    let intervalId: NodeJS.Timer;
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
  });
  return (
    <div className="hero-container">
      <div className="center-container">
        <div className="left">
          <div className="author-title">
            <span className={`${myFont.className} hi-there`}>
              Hi there, I&#39;m
            </span>
            <h1 className={myFont.className}>Mehedi Hasan.</h1>
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
            cope with the new technology, environment, team and prioritizes user
            experience most. Currently working with language like javascript,
            typescript and main frontend tech reactjs, nextjs and backend tech
            nodejs, expressjs, mongoose and mongodb.
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
                <Image
                  src={img3}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="cube__face cube__face--back">
                <Image
                  src={img1}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="cube__face cube__face--right">
                <Image
                  src={img5}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="cube__face cube__face--left">
                <Image
                  src={img6}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="cube__face cube__face--top">
                <Image
                  src={img2}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className="cube__face cube__face--bottom">
                <Image
                  src={img4}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
