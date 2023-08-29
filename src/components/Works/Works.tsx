"use client";
import "./works.css";
import useWorks from "./useWorks";
import Image from "next/image";
import Link from "next/link";

interface WorksInfo {
  id: number;
  name: string;
  img: string;
  title: string;
  about: string;
  technologies: string[];
  url: string;
}

const worksInfo: WorksInfo[] = [
  {
    id: 1,
    name: "LearnInSummer",
    img: "/images/learn-in-summer.png",
    title: "A Summer Camp School",
    about:
      "LearnInSummer is a summer camp school where student can take classes by buying them. It has three level user authentication, stripe payment gatway system and many more.",
    technologies: [
      "Reactjs",
      "Expressjs",
      "MongoDB",
      "MaterialUI",
      "Firebase",
      "React Query",
      "Framer Motion",
      "stripe",
    ],
    url: "https://learn-in-summer.web.app",
  },
  {
    id: 2,
    name: "EliteMart",
    img: "/images/elite-mart.png",
    title: "An Ecommerce Website",
    about:
      "EliteMart is an ecommerce website built with nextjs and I used NextAuth for authentication and mongodb for database.",
    technologies: [
      "TypeScript",
      "Nextjs",
      "Sass",
      "Redux",
      "Mongoose",
      "Mongodb",
      "Gsap",
      "NextAuth",
      "Jest",
      "React Testing Library",
    ],
    url: "https://elite-mart.vercel.app",
  },
  {
    id: 3,
    name: "Chefs Kingdom",
    img: "/images/chefs-kingdom.png",
    title: "A recipe selling website",
    about:
      "It designed for chefs around the world who can come sell their recipes to customer via this website.",
    technologies: ["Reactjs", "Expressjs", "Mongodb", "CSS", "firebase"],
    url: "https://chefs-kingdom-96f43.firebaseapp.com",
  },
  {
    id: 4,
    name: "FunCarFactory",
    img: "/images/fun-car-factory.png",
    title: "A toy car selling website",
    about: "FunCarFactory is website where you can buy car toys for you kids.",
    technologies: ["Reactjs", "Expressjs", "Mongodb", "CSS", "firebase"],
    url: "https://fun-car-factory.web.app",
  },
  {
    id: 5,
    name: "Legal House",
    img: "/images/legal-house.png",
    title: "A website design for legal advocate farm",
    about: "A website design for legal advocate farm",
    technologies: ["HTML", "Tailwind"],
    url: "https://legal-house2810.netlify.app/",
  },
];

export default function Works() {
  const {
    workConRef,
    workHrScrollConRef,
    workMaskInfoRef,
    workMovingLinkRef,
    workParentConRef,
    pushWorkImgRef,
  } = useWorks();

  return (
    <>
      <div
        ref={workMovingLinkRef}
        className="work-moving-link"
        data-work-moving-link
      >
        View
      </div>

      <div id="work" className="work-anchor-scroll">
        <div ref={workParentConRef} className="works-parent-container">
          <div ref={workConRef} className="works-container">
            <div ref={workHrScrollConRef} className="works-wrapper">
              {/* bottom info start */}
              <div className="works-info-wrapper">
                <div className="work-gradient-1"></div>
                <div className="work-gradient-2"></div>

                {worksInfo.map((work) => (
                  <div key={work.id} className="work-1-info-wrapper">
                    <div className="work-info-img-wrapper">
                      <Image
                        src={work.img}
                        alt={work.name + " image"}
                        fill
                        sizes="450px"
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                    </div>
                    <div>
                      <h6>{work.name}</h6>
                      <p>{work.title}</p>
                    </div>

                    <div>
                      <div className="about">About</div>
                      <p>{work.about}</p>
                    </div>

                    <div className="techs-wrapper">
                      <div>Technologies</div>
                      <div className="techs">
                        {work.technologies.map((tech, index) => (
                          <div key={index}>{tech}</div>
                        ))}
                      </div>
                    </div>

                    <div className="work-demo-link-wrapper">
                      <Link href={`${work.url}`}>Demo Website</Link>
                    </div>
                  </div>
                ))}
              </div>
              {/* bottom info end */}

              {/* mask info start */}
              <div
                data-work-mask-info
                ref={workMaskInfoRef}
                className="works-mask-info-wrapper"
              >
                <div className="work-mask-gradient-1"></div>
                <div className="work-mask-gradient-2"></div>

                {worksInfo.map((work, index) => (
                  <Link
                    href={work.url}
                    target="_blank"
                    ref={pushWorkImgRef}
                    key={work.id}
                    data-work-img={`${index + 1}`}
                    className="work-1-img-wrapper"
                  >
                    <Image
                      src={work.img}
                      alt={work.name + " image"}
                      fill
                      sizes="450px"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </Link>
                ))}
              </div>
              {/* mask info end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
