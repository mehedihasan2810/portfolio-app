import Link from "next/link";
import "./navbar.css";
import { useEffect } from "react";

export default function Navbar() {
  return (
    <nav>
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
