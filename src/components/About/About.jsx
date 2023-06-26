import Image from "next/image";
import img1 from "../../../public/images/img1.jpg";
import img2 from "../../../public/images/img2.jpg";
import img3 from "../../../public/images/img3.jpg";
import img4 from "../../../public/images/img4.jpg";
import img5 from "../../../public/images/img5.jpg";
import img6 from "../../../public/images/img6.jpg";

import "./about.css";
export default function About() {
  return (
    <div className="about-container">
      <div className="about-info-wrapper">
        <div className="about-info-center">
          <p>about_</p>
          <p>
            Hi there! My name is Mehedi Hasan, a mern based creative developer.
            I am passionate about creating scalable, visually stunning and
            innovative websites that not only look great but also provide
            exceptional user experiences.
          </p>
          <div className="about-social">
            <button>
              <span className="download-show">
                <a href=""> download</a>

                <a href="">show</a>
              </span>

              <span>Resume</span>
            </button>
            <button>LinkedIn</button>
            <button>github</button>
          </div>
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
