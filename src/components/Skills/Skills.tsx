"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import localFont from "next/font/local";

import "./skills.css";
import { useGlobalContext } from "@/contexts/useGlobalContext";
import useMatchMedia from "@/hooks/useMatchMedia";

const myFont = localFont({
  src: [
    {
      path: "/../../../public/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/../../../public/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null!);
  const { documentScrollTop } = useGlobalContext();
  const isSmallDevice = useMatchMedia("(max-width: 992px)");

  useLayoutEffect(() => {
    if (isSmallDevice) {
      return;
    }
    const windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;

    if (documentScrollTop < windowHeight * 3) {
      const percentage = (windowHeight * 3 - documentScrollTop) / windowHeight;
      const fixedPercentage = +percentage.toFixed(2);

      const rotateX =
        parseInt("" + (1 - fixedPercentage) * 100) < 0
          ? 0
          : parseInt("" + (1 - fixedPercentage) * 100);
      const scale = fixedPercentage >= 1 ? 1 : fixedPercentage;

      skillsRef.current.style.opacity = `${fixedPercentage}`;
      skillsRef.current.style.transform = `perspective(2000px) rotateX(${
        rotateX <= 9 ? 0 : rotateX > 75 ? 75 : rotateX
      }deg) scale(${scale >= 0.9 ? 1 : scale < 0.2 ? 0.2 : scale})`;
    }
  }, [documentScrollTop]);

  return (
    <section ref={skillsRef} className="skills-container">
      <div className="center-container">
        <div className="skills-title-container">
          <h2 className={myFont.className}>Skills</h2>
        </div>

        <div className="grid-container">
          <div className="first">
            <div className={`first-1 ${myFont.className}`}>Language</div>

            <div className="first-2">
              <span>
                {" "}
                <Image src="/icons/js.png" width={20} height={20} alt="" />{" "}
                JavaScript
              </span>
              <span>
                <Image
                  src="/icons/typescript.png"
                  width={20}
                  height={20}
                  alt=""
                />{" "}
                TypeScript
              </span>
            </div>
          </div>

          <div className="second">
            <div className={`second-1 ${myFont.className}`}>FrontEnd</div>
            <div className="second-2">
              <span>
                <Image src="/icons/react1.png" width={20} height={20} alt="" />{" "}
                ReactJS
              </span>
              <span>
                <Image src="/icons/nextjs.png" width={20} height={20} alt="" />{" "}
                NextJS
              </span>
              <span>
                <Image src="/icons/redux2.svg" width={20} height={20} alt="" />{" "}
                Redux
              </span>
              <span>
                <Image
                  src="/icons/react-query.svg"
                  width={20}
                  height={20}
                  alt=""
                />{" "}
                React Query
              </span>
              <span>
                <Image src="/icons/axios.svg" width={20} height={20} alt="" />{" "}
                axios
              </span>
              <span>
                <Image src="/icons/css-3.png" width={20} height={20} alt="" />{" "}
                CSS
              </span>
              <span>
                <Image src="/icons/sass.png" width={20} height={20} alt="" />{" "}
                Sass
              </span>
              <span>
                <Image
                  src="/icons/tailwind.png"
                  width={20}
                  height={20}
                  alt=""
                />{" "}
                TailwindCSS
              </span>
              <span>
                <Image
                  src="/icons/bootstrap.png"
                  width={20}
                  height={20}
                  alt=""
                />{" "}
                Bootstrap
              </span>
              <span>
                <Image src="/icons/mui.png" width={20} height={20} alt="" />{" "}
                MaterialUI
              </span>
              <span>
                <Image src="/icons/daisy.png" width={20} height={20} alt="" />{" "}
                DaisyUI
              </span>

              <span>
                <Image src="/icons/html.svg" width={20} height={20} alt="" />{" "}
                The Mighty Html
              </span>
            </div>
          </div>

          <div className="third">
            <div className={`third-1 ${myFont.className}`}>Backend</div>
            <div className="third-2">
              <span>
                <Image src="/icons/node.png" width={20} height={20} alt="" />{" "}
                NodeJS
              </span>
              <span>
                <Image src="/icons/express.png" width={20} height={20} alt="" />{" "}
                ExpressJS
              </span>
              <span>
                <Image src="/icons/mongodb.png" width={20} height={20} alt="" />{" "}
                Mongodb
              </span>
              <span>
                <Image
                  src="/icons/mongoosepng.png"
                  width={20}
                  height={20}
                  alt=""
                />{" "}
                Mongoose
              </span>
            </div>
          </div>

          <div className="fourth">
            <div className={`fourth-1 ${myFont.className}`}>Unit Testing</div>
            <div className="fourth-2">
              <span>
                <Image
                  src="/icons/react-testing-library.png"
                  width={20}
                  height={20}
                  alt=""
                />{" "}
                React Testing Library
              </span>
              <span>
                <Image src="/icons/jest.png" width={20} height={20} alt="" />{" "}
                Jest
              </span>
              <span>
                <Image src="/icons/postman.svg" width={20} height={20} alt="" />{" "}
                Postman
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
