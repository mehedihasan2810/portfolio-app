"use client";
import Image from "next/image";
import "./footer.css";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cubeImages } from "./data";

export default function Footer() {
  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: ".cube-wrapper",
      start: "top bottom",
      end: "bottom top",
      toggleClass: "play-cube",
    });
  }, []);

  return (
    <footer id="contact" className="footer-container">
      <div className="footer-color-container">
        <div className="footer-center-wrapper">
          <div className="section-top">
            <div className="footer-info">
              <h6>
                Let&#39;s Work <br />
                Together
              </h6>
              <p>
                Are you a visionary brand or an unstoppable force in the
                business world, relentlessly seeking contagious creativity that
                commands attention? Perhaps you&#39;re an agency with an
                insatiable appetite for a dynamic, kick-ass creative production
                partnership that propels you to the forefront. Waste no time -
                reach out to me now and let greatness unfold!
              </p>
            </div>
            <div className="cube-wrapper">
              <div className="scene">
                <div className="cube" aria-hidden>
                  {cubeImages.map((item) => (
                    <div key={item.id} className={item.className}>
                      <Image
                        src={item.url}
                        alt=""
                        width={400}
                        height={400}
                        placeholder="blur"
                        blurDataURL={item.blurHash}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="section-bottom">
            <div className="section-bottom-first">
              <div>
                <div>Mail</div>
                <div className="footer-email-wrapper">
                  mehedi.hasan.webcraft@gmail.com
                </div>
              </div>
              <div>
                <div>WhatsApp</div>
                <div className="footer-number-wrapper">+880 1716 004998</div>
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
                  <Link href="https://wa.me/1716004998" target="_blank">
                    <Image
                      src="/social-icons/whatsapp.png"
                      alt="whatsapp logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                  {/* <Link
                    href="https://www.facebook.com/mehedihasan.miraj.79"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/facebook-color.svg"
                      alt="facebook logo"
                      width={40}
                      height={40}
                    />
                  </Link> */}
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
