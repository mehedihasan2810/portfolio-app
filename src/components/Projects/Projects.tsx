"use client";
import Image from "next/image";
import React, { useRef, useState, useLayoutEffect } from "react";
import "./projects.css";
import { useGlobalContext } from "@/contexts/useGlobalContext";
import useMatchMedia from "@/hooks/useMatchMedia";
function Projects() {
  const [currentScrolltop, setCurrentScrolltop] = useState<number>(0);
  const [IsCardFlipped, setIsCardFlipped] = useState<boolean>(false);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const frameId = useRef<unknown>();
  const { documentScrollTop, clientX, clientY } = useGlobalContext();

  const isSmallDevice = useMatchMedia("(max-width: 992px)");

  useLayoutEffect(() => {
    if (isSmallDevice) {
      return;
    }

    const windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;

    if (documentScrollTop < windowHeight * 4) {
      const percentage = (windowHeight * 4 - documentScrollTop) / windowHeight;
      const fixedPercentage = +percentage.toFixed(2);

      const rotateX =
        parseInt("" + (1 - fixedPercentage) * 100) < 0
          ? 0
          : parseInt("" + (1 - fixedPercentage) * 100);
      const scale = fixedPercentage >= 1 ? 1 : fixedPercentage;

      projectsRef.current.style.opacity = `${fixedPercentage}`;
      projectsRef.current.style.transform = `perspective(2000px) rotateX(${
        rotateX <= 9 ? 0 : rotateX > 75 ? 75 : rotateX
      }deg) scale(${scale >= 0.9 ? 1 : scale < 0.2 ? 0.2 : scale})`;
    }
  }, [documentScrollTop]);

  // structured animation
  function animate({
    timing,
    draw,
    duration,
  }: {
    timing: (timeFraction: number) => number;
    draw: (progress: number) => void;
    duration: number;
  }) {
    let start = performance.now();

    frameId.current = requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // calculate the current animation state
      let progress = timing(timeFraction);

      draw(progress); // draw it

      if (timeFraction < 1) {
        frameId.current = requestAnimationFrame(animate);
      }
    });
  }

  //  scroll image to bottom on pointer over
  function handleImageScrolltoBottom(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    event.stopPropagation();
    cancelAnimationFrame(frameId.current as number);

    const targetElement = event.currentTarget as HTMLDivElement;
    const infoWrapper = targetElement.querySelector(
      ".project-info-wrapper"
    ) as HTMLDivElement;
    const frontFaceElement = targetElement.querySelector(
      ".front-face"
    ) as HTMLDivElement;
    frontFaceElement.scrollTop = 0;
    const scrollableHeight =
      frontFaceElement.scrollHeight - frontFaceElement.offsetHeight;

    //* draw the animation
    function draw(progress: number) {
      setCurrentScrolltop(scrollableHeight * progress);

      frontFaceElement.scrollTop = scrollableHeight * progress;
    }

    animate({
      duration: 7000,
      timing(timeFraction: number) {
        return Math.pow(timeFraction, 1);
      },
      draw,
    });
  }

  //* get the image back to the initial state on pointer leave
  function handleImageScrollTobottomLeave(
    event: React.PointerEvent<HTMLDivElement>
  ) {
    event.stopPropagation();
    const infoWrapper = document.querySelector(
      ".project-info-wrapper"
    ) as HTMLDivElement;
    const targetElement = event.currentTarget as HTMLDivElement;
    const flipCardElement = targetElement.querySelector(
      ".flip-card"
    ) as HTMLDivElement;
    const frontFaceElement = targetElement.querySelector(
      ".front-face"
    ) as HTMLDivElement;

    //* cancel animaiton frame
    cancelAnimationFrame(frameId.current as number);

    const scrollableHeight =
      frontFaceElement.scrollHeight - frontFaceElement.offsetHeight;

    function draw(progress: number) {
      frontFaceElement.scrollTop = currentScrolltop * (1 - progress);
    }

    animate({
      duration: 3000,
      timing(timeFraction: number) {
        return Math.pow(timeFraction, 1);
      },
      draw,
    });

    //* get the flipCard back to the initial positoin on pointer leave
    if (IsCardFlipped) {
      flipCardElement.style.transform = `translateX(0%) rotateY(0deg)`;
      setIsCardFlipped(false);
    }
  }

  function flipProjectCard(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    const targetElement = event.currentTarget as HTMLButtonElement;
    const parentElement = targetElement.closest(".item") as HTMLDivElement;
    const flipCardElement = parentElement.querySelector(
      ".flip-card"
    ) as HTMLDivElement;
    setIsCardFlipped(true);
    cancelAnimationFrame(frameId.current as number);
    flipCardElement.style.transform = `translateX(-100%) rotateY(-180deg)`;
  }

  return (
    <section ref={projectsRef} className="projects-container">
      <div className="project-grid">
        <div
          onPointerEnter={handleImageScrolltoBottom}
          onPointerLeave={handleImageScrollTobottomLeave}
          className="item item-1"
        >
          <div className="flip-card">
            <div className="face front-face">
              <Image
                className="img1"
                src="/images/legal-house.png"
                width={1500}
                height={500}
                alt=""
              />
            </div>

            <div className="face back-face">
              <div className="project-details">
                <p>
                  Legal House is a website for advocate farm. In this website
                  client can book their appointment and get any relavant
                  information and services.{" "}
                </p>

                <div className="tech">
                  <span>Html</span>
                  <span>TailwindCSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-cta">
            <h6>Legal House</h6>
            <div className="project-btn-link">
              <a href="https://legal-house2810.netlify.app/" target="blank">
                View
              </a>
              <a
                href="https://github.com/mehedihasan2810/legal-house"
                target="blank"
              >
                Source
              </a>
              <button onClick={flipProjectCard}>Details</button>
            </div>
          </div>
        </div>

        <div
          onPointerEnter={handleImageScrolltoBottom}
          onPointerLeave={handleImageScrollTobottomLeave}
          className="item item-2"
        >
          <div className="flip-card">
            <div className="face front-face">
              <Image
                className="img1"
                src="/images/learn-in-summer.png"
                width={1500}
                height={500}
                alt=""
              />
            </div>

            <div className="face back-face">
              <div className="project-details">
                <p>
                  Learn In Summer is summer camp school where any instructor can
                  sell class or course on any subject and student or any
                  indivisuals who needs this class or course can buy them. This
                  website has three lavel user authentication implemented normal
                  user or student, instructor, admin.{" "}
                </p>

                <div className="tech">
                  <span>Html</span>
                  <span>CSS</span>
                  <span>MaterialUI</span>
                  <span>React</span>
                  <span>React Query</span>
                  <span>Stripe</span>
                  <span>Firebase</span>
                  <span>Framer Motion</span>
                  <span>ExpressJS</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-cta">
            <h6>Learn In Summer</h6>
            <div className="project-btn-link">
              <a href=" https://learn-in-summer.web.app" target="blank">
                View
              </a>
              <a
                href="https://github.com/mehedihasan2810/learn-in-summer-client"
                target="blank"
              >
                Source
              </a>
              <button onClick={flipProjectCard}>Details</button>
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

        <div
          onPointerEnter={handleImageScrolltoBottom}
          onPointerLeave={handleImageScrollTobottomLeave}
          className="item item-4"
        >
          <div className="flip-card">
            <div className="face front-face">
              <Image
                className="img1"
                src="/images/fun-car-factory.png"
                width={1500}
                height={500}
                alt=""
              />
            </div>

            <div className="face back-face">
              <div className="project-details">
                <p>
                  Fun Car Factory is a toy selling online website. Here the site
                  owner can sell their manufactured toys directly to the
                  customer{" "}
                </p>

                <div className="tech">
                  <span>Html</span>
                  <span>CSS</span>
                  <span>React</span>
                  <span>Firebase</span>
                  <span>ExpressJS</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-cta">
            <h6>Fun Car Factory</h6>
            <div className="project-btn-link">
              <a href=" https://fun-car-factory.web.app" target="blank">
                View
              </a>
              <a
                href="https://github.com/mehedihasan2810/fun-car-factory-client"
                target="blank"
              >
                Source
              </a>
              <button onClick={flipProjectCard}>Details</button>
            </div>
          </div>
        </div>

        <div
          onPointerEnter={handleImageScrolltoBottom}
          onPointerLeave={handleImageScrollTobottomLeave}
          className="item item-5"
        >
          <div className="flip-card">
            <div className="face front-face">
              <Image
                className="img1"
                src="/images/your-job.png"
                width={1500}
                height={500}
                alt=""
              />
            </div>

            <div className="face back-face">
              <div className="project-details">
                <p>Your Job is job portal website design. </p>

                <div className="tech">
                  <span>Html</span>
                  <span>Sass</span>
                  <span>MaterialUI</span>
                  <span>React</span>
                  <span>Recharts</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-cta">
            <h6>Your Job</h6>
            <div className="project-btn-link">
              <a href="https://your-job.netlify.app" target="blank">
                View
              </a>
              <a
                href="https://github.com/mehedihasan2810/your-job"
                target="blank"
              >
                Source
              </a>
              <button onClick={flipProjectCard}>Details</button>
            </div>
          </div>
        </div>

        <div
          onPointerEnter={handleImageScrolltoBottom}
          onPointerLeave={handleImageScrollTobottomLeave}
          className="item item-6"
        >
          <div className="flip-card">
            <div className="face front-face">
              <Image
                className="img1"
                src="/images/chefs-kingdom.png"
                width={1500}
                height={500}
                alt=""
              />
            </div>

            <div className="face back-face">
              <div className="project-details">
                <p>
                  Chef's kingdom is recipe selling website where any chef's from
                  around the world sell thir recipe and consumer can buy them.{" "}
                </p>

                <div className="tech">
                  <span>Html</span>
                  <span>Css</span>
                  <span>MaterialUI</span>
                  <span>React</span>
                  <span>Firebase</span>
                  <span>ExpressJS</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-cta">
            <h6>Chef's kingdom</h6>
            <div className="project-btn-link">
              <a
                href="https://chefs-kingdom-96f43.firebaseapp.com/"
                target="blank"
              >
                View
              </a>
              <a
                href="https://github.com/mehedihasan2810/chefs-kingdom-client"
                target="blank"
              >
                Source
              </a>
              <button onClick={flipProjectCard}>Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
