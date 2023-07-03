"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import "./footer.css";
import footerImg from "../../../public/images/img4.jpg";
import { useGlobalContext } from "@/contexts/useGlobalContext";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null!);
  const { documentScrollTop } = useGlobalContext();

  // useEffect(() => {
  //   const windowHeight =
  //     document.documentElement.clientHeight || document.body.clientHeight;

  //   if (documentScrollTop < windowHeight * 5) {
  //     const percentage = (windowHeight * 5 - documentScrollTop) / windowHeight;
  //     const fixedPercentage = +percentage.toFixed(2);

  //     const rotateX =
  //       parseInt("" + (1 - fixedPercentage) * 100) < 0
  //         ? 0
  //         : parseInt("" + (1 - fixedPercentage) * 100);
  //     const scale = fixedPercentage >= 1 ? 1 : fixedPercentage;

  //     console.log("rotate ", rotateX);
  //     console.log("scale ", scale);

  //     footerRef.current.style.opacity = `${fixedPercentage}`;
  //     footerRef.current.style.transform = `perspective(2000px) rotateX(${
  //       rotateX <= 9 ? 0 : rotateX
  //     }deg) scale(${scale >= 0.9 ? 1 : scale})`;
  //   }
  // }, [documentScrollTop]);

  return (
    <footer ref={footerRef}>
      <div className="footer-first">
        <div className="footer-img-wrapper">
          <Image src={footerImg} alt="" />
          <div className="footer-img-star"></div>
        </div>

        {/* <div className="footer-email-number-wrapper"> */}
        <a
          href="mailto:mdmehedihasan2810@gmail.com"
          className="contact-email-link"
        >
          mdmehedihasan 2810@gmail.com
        </a>

        {/* <a href="tel:+880 1716004998" className="contact-number-link">
            <div className="first">+880 171</div>
            <div className="last">6004998</div>
          </a> */}
        {/* </div> */}

        <p>Let's work together!</p>
      </div>

      <div className="footer-last">
        <div className="footer-last-first">2023 &copy; Edition</div>

        <div className="footer-last-socials">
          <a href="https://www.facebook.com/mehedihasan.miraj.79" target="blank">FaceBook</a>
          <a href="https://www.linkedin.com/in/md-mehedi-hasan2810/" target="blank">LinkedIn</a>
          <a href="https://github.com/mehedihasan2810" target="blank">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
