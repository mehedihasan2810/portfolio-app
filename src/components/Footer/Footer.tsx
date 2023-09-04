import Image from "next/image";
import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="footer-container">
      <div className="footer-color-container">
        <div className="footer-center-wrapper">
          <div className="section-top">
            <div className="footer-info">
              <h6 className="footer-scroll-anim">
                Let&#39;s Work <br />
                Together
              </h6>
              <p className="footer-scroll-anim">
                Are you a visionary brand or an unstoppable force in the
                business world, relentlessly seeking contagious creativity that
                commands attention? Perhaps you&#39;re an agency with an
                insatiable appetite for a dynamic, kick-ass creative production
                partnership that propels you to the forefront. Waste no time -
                reach out to me now and let greatness unfold!
              </p>
            </div>
            <div className="cube-wrapper footer-scroll-anim">
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
                      src="/images/img7.webp"
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
          </div>
          <div className="section-bottom">
            <div className="section-bottom-first">
              <div>
                <div>Mail</div>
                <div className="footer-email-wrapper footer-scroll-anim">
                  mdmehedihasan2810@gmail.com
                </div>
              </div>
              <div>
                <div>Phone</div>
                <div className="footer-number-wrapper footer-scroll-anim">
                  +880 1716 004998
                </div>
              </div>
              <div>
                <div>Connect</div>
                <div className="footer-social-btns-wrapper footer-scroll-anim">
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
