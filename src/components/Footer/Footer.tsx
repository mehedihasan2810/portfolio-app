"use client";
import Image from "next/image";
import "./footer.css";
import Link from "next/link";
import useFooter from "./useFooter";

export default function Footer() {
  const { footerRef, colorElRef } = useFooter();

  return (
    <footer ref={footerRef}>
      <div className="footer-gray-container">
        <div className="footer-center-wrapper">
          <div className="section-top">
            <div className="footer-info">
              <h6>
                Let's Work <br />
                Together
              </h6>
              <p>
                Are you a brand or company in need of contagiously creative
                stopping power? Or are you an agency in need of a kick-ass
                creative production partner? Just hit us up!
              </p>
            </div>
            {/* 3d cube starts */}
            <div className="cube-wrapper">
              <div className="scene">
                <div
                  // ref={cubeRef}
                  className="cube"
                >
                  <div className="cube__face cube__face--front">
                    <Image
                      src="/images/img3.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="cube__face cube__face--back">
                    <Image
                      src="/images/img1.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="cube__face cube__face--right">
                    <Image
                      src="/images/img5.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="cube__face cube__face--left">
                    <Image
                      src="/images/img6.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="cube__face cube__face--top">
                    <Image
                      src="/images/img2.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="cube__face cube__face--bottom">
                    <Image
                      src="/images/img4.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* 3d cube ends */}
          </div>
          <div className="section-bottom">
            <div className="section-bottom-first">
              <div>
                <div>Mail</div>
                <div>mdmehedihasan2810@gmail.com</div>
              </div>
              <div>
                <div>Phone</div>
                <div>+880 1716 004998</div>
              </div>
              <div>
                <div>Connect</div>
                <div className="footer-social-btns-wrapper">
                  <Link
                    href="https://www.linkedin.com/in/md-mehedi-hasan2810/"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/linkedin-color.svg"
                      alt="linkedin logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link
                    href="https://github.com/mehedihasan2810"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/github-color.svg"
                      alt="github logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/mehedihasan.miraj.79"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/facebook-color.svg"
                      alt="facebook logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="copyright-info-wrapper">
              <div>2023@Edition</div>
            </div>
          </div>
        </div>
      </div>

      <div ref={colorElRef} className="footer-color-container">
        <div className="footer-center-wrapper">
          <div className="section-top">
          <div className="footer-info">
              <h6>
                Let's Work <br />
                Together
              </h6>
              <p>
                Are you a brand or company in need of contagiously creative
                stopping power? Or are you an agency in need of a kick-ass
                creative production partner? Just hit us up!
              </p>
            </div>
            {/* 3d cube starts */}
            <div className="cube-wrapper">
              <div className="scene">
                <div
                  // ref={cubeRef}
                  className="cube"
                >
                  <div className="cube__face cube__face--front">
                    <Image
                      src="/images/img3.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="cube__face cube__face--back">
                    <Image
                      src="/images/img1.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="cube__face cube__face--right">
                    <Image
                      src="/images/img5.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="cube__face cube__face--left">
                    <Image
                      src="/images/img6.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="cube__face cube__face--top">
                    <Image
                      src="/images/img2.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="cube__face cube__face--bottom">
                    <Image
                      src="/images/img4.jpg"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* 3d cube ends */}
          </div>
          <div className="section-bottom">
            <div className="section-bottom-first">
              <div>
                <div>Mail</div>
                <div>mdmehedihasan2810@gmail.com</div>
              </div>
              <div>
                <div>Phone</div>
                <div>+880 1716 004998</div>
              </div>
              <div>
                <div>Connect</div>
                <div className="footer-social-btns-wrapper">
                  <Link
                    href="https://www.linkedin.com/in/md-mehedi-hasan2810/"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/linkedin-color.svg"
                      alt="linkedin logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link
                    href="https://github.com/mehedihasan2810"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/github-color.svg"
                      alt="github logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/mehedihasan.miraj.79"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/facebook-color.svg"
                      alt="facebook logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="copyright-info-wrapper">
              <div>2023@Edition</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
