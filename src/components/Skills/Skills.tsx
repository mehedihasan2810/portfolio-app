'use client'
import {useEffect, useLayoutEffect, useRef} from 'react'
import Image from "next/image";
import localFont from "next/font/local";
import jsIcon from "../../../public/icons/js.png";
import tsIcon from "../../../public/icons/typescript.png";
import reactIcon from "../../../public/icons/react1.png";
import nextjsIcon from "../../../public/icons/nextjs.png";
import reduxIcon from "../../../public/icons/redux2.svg";
import reactQueryIcon from "../../../public/icons/react-query.svg";
import axiosIcon from "../../../public/icons/axios.svg";
import bootstrapIcon from "../../../public/icons/bootstrap.png";
import cssIcon from "../../../public/icons/css-3.png";
import daisyIcon from "../../../public/icons/daisy.png";
import tailwindIcon from "../../../public/icons/tailwind.png";
import flowbiteIcon from "../../../public/icons/flowbite.svg";
import htmlIcon from "../../../public/icons/html.svg";
import muiIcon from "../../../public/icons/mui.png";
import sassIcon from "../../../public/icons/sass.png";
import reactTestingLibraryIcon from "../../../public/icons/react-testing-library.png";
import jestIcon from "../../../public/icons/jest.png";
import postmanIcon from "../../../public/icons/postman.svg";
import expressjsIcon from "../../../public/icons/expressjs.png";
import nodejsIcon from "../../../public/icons/node.png";
import mongodbIcon from "../../../public/icons/mongodb.png";
import mongooseIcon from "../../../public/icons/mongoosepng.png";
import flower1Icon from "../../../public/icons/flower1.png";
import "./skills.css";
import { useGlobalContext } from '@/contexts/useGlobalContext';

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

  const skillsRef =  useRef<HTMLDivElement>(null!);
  const {setSkillConTop, skillTop } = useGlobalContext();



  useLayoutEffect(() => {

    function handleWindowScroll() {
      const windowHeight = document.documentElement.clientHeight;
      const skillCoords = skillsRef.current.getBoundingClientRect()
      setSkillConTop(skillCoords.top)
      // console.log(windowHeight)
      // console.dir(skillCoords)
    }
    
    window.addEventListener('scroll', handleWindowScroll)
  
    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])
  


  return (
    <section ref={skillsRef} className="skills-container">
      <div className="center-container">
        <div className="skills-title-container">
          <h2 className={myFont.className}>Skills</h2>
        </div>








      {/* <div className="windmil-container">
        <div className="leaf leaf-1"></div>
        <div className="leaf leaf-2"></div>
        <div className="leaf leaf-3"></div>
        <div className="leaf leaf-4"></div>
        <div className="leaf leaf-5"></div>
        <div className="leaf leaf-6"></div>
        <div className="leaf leaf-7"></div>
        <div className="center-bullet"></div>
      </div> */}











        <div className="grid-container">
          <div className="first">
            <div className={`first-1 ${myFont.className}`}>Language</div>

            <div className="first-2">
              <span>
                {" "}
                <Image src={jsIcon} alt="" /> JavaScript
              </span>
              <span>
                <Image src={tsIcon} alt="" /> TypeScript
              </span>
            </div>
          </div>

          <div className="second">
            <div className={`second-1 ${myFont.className}`}>FrontEnd</div>
            <div className="second-2">
              <span>
                <Image src={reactIcon} alt="" /> ReactJS
              </span>
              <span>
                <Image src={nextjsIcon} alt="" /> NextJS
              </span>
              <span>
                <Image src={reduxIcon} alt="" /> Redux
              </span>
              <span>
                <Image src={reactQueryIcon} alt="" /> React Query
              </span>
              <span>
                <Image src={axiosIcon} alt="" /> axios
              </span>
              <span>
                <Image src={cssIcon} alt="" /> CSS
              </span>
              <span>
                <Image src={sassIcon} alt="" /> Sass
              </span>
              <span>
                <Image src={tailwindIcon} alt="" /> TailwindCSS
              </span>
              <span>
                <Image src={bootstrapIcon} alt="" /> Bootstrap
              </span>
              <span>
                <Image src={muiIcon} alt="" /> MaterialUI
              </span>
              <span>
                <Image src={daisyIcon} alt="" /> DaisyUI
              </span>
              <span>
                <Image src={flowbiteIcon} alt="" /> Flowbite
              </span>
              <span>
                <Image src={htmlIcon} alt="" /> The Mighty Html
              </span>
            </div>
          </div>

          <div className="third">
            <div className={`third-1 ${myFont.className}`}>Backend</div>
            <div className="third-2">
              <span>
                <Image src={nodejsIcon} alt="" /> NodeJS
              </span>
              <span>
                <Image src={expressjsIcon} alt="" /> ExpressJS
              </span>
              <span>
                <Image src={mongodbIcon} alt="" /> Mongodb
              </span>
              <span>
                <Image src={mongooseIcon} alt="" /> Mongoose
              </span>
            </div>
          </div>

          <div className="fourth">
            <div className={`fourth-1 ${myFont.className}`}>Unit Testing</div>
            <div className="fourth-2">
              <span>
                <Image src={reactTestingLibraryIcon} alt="" /> React Testing
                Library
              </span>
              <span>
                <Image src={jestIcon} alt="" /> Jest
              </span>
              <span>
                <Image src={postmanIcon} alt="" /> Postman
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
