"use client";
import Image from "next/image";
import img1 from "../../../public/images/img1.avif";
import React, { useRef, useEffect } from "react";
import "./projects.css";
import { useGlobalContext } from "@/contexts/useGlobalContext";
function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null!);
  const { documentScrollTop } = useGlobalContext();

  useEffect(() => {
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

      console.log("rotate ", rotateX);
      console.log("scale ", scale);

      projectsRef.current.style.opacity = `${fixedPercentage}`;
      projectsRef.current.style.transform = `perspective(2000px) rotateX(${
        rotateX <= 9 ? 0 : rotateX
      }deg) scale(${scale >= 0.9 ? 1 : scale})`;
    }
  }, [documentScrollTop]);

  return (
    <section ref={projectsRef} className="projects-container">
      <div className="project-grid">
        <div className="item item-1">
          <Image className="img1" src={img1} alt="" />

          <div className="project-info-wrapper">
            <div className="project-info">
              <h6>Summer camp school</h6>
              <a href="#">Demo</a>
              <a href="#">Source</a>
            </div>
          </div>
        </div>
        <div className="item item-2">
          {" "}
          <Image className="img2" src={img1} alt="" />
          <div className="project-info-wrapper">
            <div className="project-info">
              <h6>Summer camp school</h6>
              <a href="#">Demo</a>
              <a href="#">Source</a>
            </div>
          </div>
        </div>
        <div className="item item-3">
          <div className="flip-card">
            <div className="face front-face">
              <h2>Works</h2>
            </div>
            <div className="face back-face">
              <span>More Work</span>
            </div>
          </div>
        </div>
        <div className="item item-4">
          {" "}
          <Image className="img3" src={img1} alt="" />
          <div className="project-info-wrapper">
            <div className="project-info">
              <h6>Summer camp school</h6>
              <a href="#">Demo</a>
              <a href="#">Source</a>
            </div>
          </div>
        </div>
        <div className="item item-5">
          {" "}
          <Image className="img4" src={img1} alt="" />
          <div className="project-info-wrapper">
            <div className="project-info">
              <h6>Summer camp school</h6>
              <a href="#">Demo</a>
              <a href="#">Source</a>
            </div>
          </div>
        </div>
        <div className="item item-6">
          {" "}
          <Image className="img5" src={img1} alt="" />
          <div className="project-info-wrapper">
            <div className="project-info">
              <h6>Summer camp school</h6>
              <a href="#">Demo</a>
              <a href="#">Source</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
