"use client";
import BlackWhiteAvatars from "./components/BlackWhiteAvatars";
import ColorAvatars from "./components/ColorAvatars";
import { socialMediaLinks } from "./data";
import "./hero.css";
import useHero from "./hooks/useHero";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { heroMaskRef, heroImgRef, heroMaskImgRef, heroRef, heroMaskLayerRef } =
    useHero();

  return (
    <>
      <div className="scroll-down">Scroll Down</div>
      <div id="about" className="hero-anchor-scroll">
        <div ref={heroRef} className="hero-full-container">
          <div className="hero-container">
            <div className="hero-author-info-container">
              <div className="hero-author-info-wrapper">
                <Image
                  ref={heroImgRef}
                  src="/images/hero-img.JPG"
                  alt="author image"
                  priority={true}
                  width={200}
                  height={200}
                />
                <div className="hero-main-heading">
                  <div>
                    {" "}
                    Hi there{" "}
                    <span style={{ filter: "brightness(0.5)" }}>👋🏼</span>
                  </div>
                  <div> I&#39;m Mehedi Hasan.</div>
                </div>
                <p>
                  A web developer who is passionate about building beautiful
                  websites with fast & amazing user experiences. My hope is that
                  one day, we&#39;ll be able to learn, create, and collaborate
                  faster on the web.
                </p>

                <div className="hero-social-btns-wrapper">
                  {socialMediaLinks.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      aria-label={item.ariaLavel}
                    >
                      <Image
                        src={item.iconSrc}
                        alt={item.alt}
                        width={40}
                        height={40}
                        aria-hidden
                      />
                    </Link>
                  ))}
                </div>

                <BlackWhiteAvatars />
              </div>
            </div>

            {/* mask start*/}
            <div ref={heroMaskLayerRef} className="hero-mask-layer-container">
              <div
                ref={heroMaskRef}
                className="hero-mask-author-info-container"
              >
                <div className="hero-mask-author-info-wrapper">
                  <Image
                    ref={heroMaskImgRef}
                    src="/images/hero-img.JPG"
                    alt="author image"
                    priority={true}
                    width={200}
                    height={200}
                  />
                  <div className="hero-mask-main-heading">
                    <div> Hi there 👋</div>
                    <div> I&#39;m Mehedi Hasan.</div>
                  </div>
                  <p>
                    A web developer who is passionate about building beautiful
                    websites with fast & amazing user experiences. My hope is
                    that one day, we&#39;ll be able to learn, create, and
                    collaborate faster on the web.
                  </p>

                  <div className="hero-mask-social-btns-wrapper">
                    {socialMediaLinks.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        target="_blank"
                        aria-label={item.ariaLavel}
                      >
                        <Image
                          src={item.iconSrc}
                          alt={item.alt}
                          width={40}
                          height={40}
                          aria-hidden
                        />
                      </Link>
                    ))}
                  </div>

                  <ColorAvatars />
                </div>
              </div>
            </div>
            {/* mask end */}
          </div>
        </div>
      </div>
    </>
  );
}
