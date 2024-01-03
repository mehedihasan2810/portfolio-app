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
                  src="/images/hero-img.webp"
                  alt="An Image of the owner of this site Mehedi Hasan"
                  width={200}
                  height={200}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBZ0lDQWdKQ0FrS0Nna05EZ3dPRFJNUkVCQVJFeHdVRmhRV0ZCd3JHeDhiR3g4Ykt5WXVKU01sTGlaRU5TOHZOVVJPUWo1Q1RsOVZWVjkzY1hlY25ORUJDQWdJQ0FrSUNRb0tDUTBPREE0TkV4RVFFQkVUSEJRV0ZCWVVIQ3NiSHhzYkh4c3JKaTRsSXlVdUprUTFMeTgxUkU1Q1BrSk9YMVZWWDNkeGQ1eWMwZi9DQUJFSUFCZ0FFQU1CSWdBQ0VRRURFUUgveEFBckFBQURBUUFBQUFBQUFBQUFBQUFBQUFBQUF3UUhBUUVCQVFBQUFBQUFBQUFBQUFBQUFBQUNBQVAvMmdBTUF3RUFBaEFERUFBQUFNbmsxdER5bVFDdi84UUFKQkFBQWdJQkF3SUhBQUFBQUFBQUFBQUFBUUlEQkFBRkJoRVNFeUVqUVlHU29jSC8yZ0FJQVFFQUFUOEFUUTd3VFRwbnJ2MmJnY3dzaERsMWpQREhOYXF3VmJmYWg2K09nRWh1ZnJuTmpWMVRSWXBDdmpMTkkyYjlwd0xvYU9rYThwWVEvTE5qM1paSzVxT3c2WUI1ZnVjMzFjTTFDc0lad1lubVpHVWVyUm44NHovL3hBQWNFUUVBQVFRREFBQUFBQUFBQUFBQUFBQUJBZ0FERVRFU0UwSC8yZ0FJQVFJQkFUOEE2SEJQbDVxb3JLdzVkTFgveEFBYkVRRUFBZ0lEQUFBQUFBQUFBQUFBQUFBQkFBSURNUkloSXYvYUFBZ0JBd0VCUHdDdVk5VWE5OHR4Q3VZUTJFLy8yUT09JyAvPgogICAgPC9zdmc+CiAg"
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
                    src="/images/hero-img.webp"
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
