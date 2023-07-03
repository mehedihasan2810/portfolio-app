'use client'
import Link from "next/link";
import "./navbar.css";
import { useLayoutEffect, useRef } from "react";
import { useGlobalContext } from "@/contexts/useGlobalContext";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null!);



  return (
    <nav ref={navRef}>
      <div className="center-container">
        <div className="logo-container">
          <Link href='/'>
          &copy; mehedi hasan
          </Link>
         
        </div>

        <ul>
          <li className="list-item-1">
          <Link href="#">about</Link>
         
           
          </li>
          <li className="list-item-2">
          <Link href="#">skill</Link>
          </li>
          <li className="list-item-3">
          <Link href="#">work</Link>
           
          </li>
         
          <li className="list-item-4">
          <Link href="#">contact</Link>
           
          </li>
        </ul>
      </div>
    </nav>
  );
}
