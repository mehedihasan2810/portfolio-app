"use client";
import "./works.css";
import useWorks from "./useWorks";
import Image from "next/image";
import Link from "next/link";
import { worksInfo } from "./data";

export default function Works() {
  const {
    workConRef,
    workHrScrollConRef,
    workMaskInfoRef,
    workMovingLinkRef,
    workParentConRef,
    pushWorkImgRef,
    workAnchorScrollRef,
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

      <div ref={workAnchorScrollRef} id="work" className="work-anchor-scroll">
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
                      <Link href={`${work.url}`}>Demo</Link>
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
