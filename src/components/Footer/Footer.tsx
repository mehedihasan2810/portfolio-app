'use client'
import Image from "next/image";
import {useRef, useEffect} from 'react';
import "./footer.css";
import footerImg from "../../../public/images/img4.jpg";
import { useGlobalContext } from "@/contexts/useGlobalContext";

export default function Footer() {

  const footerRef = useRef<HTMLDivElement>(null!);
  const { documentScrollTop } = useGlobalContext();

  useEffect(() => {
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

      console.log("rotate ", rotateX);
      console.log("scale ", scale);

      footerRef.current.style.opacity = `${fixedPercentage}`;
      footerRef.current.style.transform = `perspective(2000px) rotateX(${
        rotateX <= 9 ? 0 : rotateX
      }deg) scale(${scale >= 0.9 ? 1 : scale})`;
    }
  }, [documentScrollTop]);


  return (
    <footer ref={footerRef}>
      <div className="footer-first">
        <div className="footer-img-wrapper">
          <Image src={footerImg} alt="" />
          <div className="footer-img-star"></div>
        </div>

        <div className="footer-email-number-wrapper">
          <a
            href="mailto:mdmehedihasan2810@gmail.com"
            className="contact-email-link"
          >
            <div className="first">mdmehedihasan</div>
            <div className="last">2810@gmail.com</div>
          </a>

          <a href="tel:+880 1716004998" className="contact-number-link">
            <div className="first">+880 171</div>
            <div className="last">6004998</div>
          </a>
        </div>

        <p>Let's work together!</p>
      </div>






      <div className="footer-last">
        <div className="footer-last-first">
            2023 &copy; Edition
        </div>

        <div className="footer-last-socials">
            <a href="">
                Resume
            </a>
            <a href="">
                LinkedIn
            </a>
            <a href="">
                GitHub
            </a>
        </div>
      </div>
    </footer>
  );
}
