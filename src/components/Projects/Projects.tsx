"use client";
import Image from "next/image";
import img1 from "../../../public/images/img1.avif";
import React, { useRef, useEffect } from "react";
import "./projects.css";
function Projects() {
  function handleProjectMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    // const projectCoords = event.currentTarget.getBoundingClientRect();

    // const center = (projectCoords.right + projectCoords.left) / 2;

    // if (event.clientX < center) {
    //   event.currentTarget.style.transform = `
    //     perspective(2000px)
    //     rotateY(-2deg) 
    //     translateX(-50px)
    //     `;
    // }else{
    //   event.currentTarget.style.transform = `
    //   perspective(2000px)
    //   rotateY(2deg) 
    //   translateX(50px)
    //   `;
    // }
  }

  return (
    <section className="projects-container">
      {/* <div className="center-container"> */}

      <div onMouseMove={handleProjectMouseMove} className="project-grid">
        <div className="item item-1">
          <Image src={img1} alt="" />
        </div>
        <div className="item item-2">
          {" "}
          <Image src={img1} alt="" />
        </div>
        <div className="item item-3">
         <div className="flip-card">

          <div className="face front-face">
          <h2>Projects</h2>
          </div>
          <div className="face back-face">
            <span>More Work</span>
          </div>

          </div>

        </div>
        <div className="item item-4">
          {" "}
          <Image src={img1} alt="" />
        </div>
        <div className="item item-5">
          {" "}
          <Image src={img1} alt="" />
        </div>
        <div className="item item-6">
          {" "}
          <Image src={img1} alt="" />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Projects;
