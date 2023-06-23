'use client'
import Link from "next/link";
import "./navbar.css";
import { useLayoutEffect, useRef } from "react";
import { useGlobalContext } from "@/contexts/useGlobalContext";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null!);
  const {setNavConbottom} = useGlobalContext()

// useLayoutEffect(() => {
 
     
// function handleGetNavCoords() {
//   const navCoords = navRef.current.getBoundingClientRect()
//   setNavConbottom(navCoords.bottom)
// }

//   window.addEventListener('scroll', handleGetNavCoords)
  
//   return () => {
//     window.removeEventListener('scroll', handleGetNavCoords)
//   }
// }, [])

  return (
    <nav ref={navRef}>
      <div className="center-container">
        <div className="logo-container">
          <div className="inner-container">
            <span className="logo">&copy; mehedi hasan</span>
            <span className="logo">&copy; mehedi hasan</span>
          </div>
        </div>

        <ul>
          <li>
            <span>
              <Link href="#">work</Link>
              <Link className="line" href="#">
                work
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link href="#">about</Link>
              <Link className="line" href="#">
                about
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link href="#">contact</Link>
              <Link className="line" href="#">
                contact
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
