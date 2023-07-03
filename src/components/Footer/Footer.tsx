"use client";
import Image from "next/image";
import { useRef } from "react";
import "./footer.css";
import footerImg from "../../../public/images/img4.jpg";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null!);

  return (
    <footer ref={footerRef}>
      <div className="footer-first">
        <div className="footer-img-wrapper">
          <Image src={footerImg} alt="" />
          <div className="footer-img-star"></div>
        </div>

        <a
          href="mailto:mdmehedihasan2810@gmail.com"
          className="contact-email-link"
        >
          mdmehedihasan 2810@gmail.com
        </a>

        <p>Let's work together!</p>
      </div>

      <div className="footer-last">
        <div className="footer-last-first">2023 &copy; Edition</div>

        <div className="footer-last-socials">
          <a
            href="https://www.facebook.com/mehedihasan.miraj.79"
            target="blank"
          >
            FaceBook
          </a>
          <a
            href="https://www.linkedin.com/in/md-mehedi-hasan2810/"
            target="blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/mehedihasan2810" target="blank">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
