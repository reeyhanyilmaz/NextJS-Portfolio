import React from "react";
import Link from "next/link";
import "../styles/navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { setIsHamOpen } from "../redux/portfolioSlice";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  const isHamOpen = useSelector((state) => state.portfolio.isHamOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsHamOpen());
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <i
        className={`fa-solid fa-bars ham ${isHamOpen ? "open" : "close"}`}
        onClick={handleClick}
      ></i>
      <i
        className={`fa-solid fa-xmark cross ${isHamOpen ? "open" : "close"}`}
        onClick={handleClick}
      ></i>
      <div className="circle"></div>

      <ul>
        <li onClick={handleClick}>
          <i className="fa-solid fa-house mr-3"></i>
          <Link href="/">
            <p> .about() </p>
          </Link>
        </li>
        <li onClick={handleClick}>
          <i className="fa-solid fa-user mr-3"></i>
          <Link href="/projects">
            <p> .projects() </p>
          </Link>
        </li>
        <li onClick={handleClick}>
          <i className="fa-solid fa-envelope mr-3"></i>
          <Link href="/contact">
            <p> .contact() </p>
          </Link>
        </li>
        <li onClick={handleClick}>
          <i className="fa-duotone fa-feather mr-3"></i>
          <Link href="/blog">
            <p> .blog() </p>
          </Link>
        </li>
      </ul>

      {/* contact */}
      <div id="contact" className={`icons ${isHamOpen ? "open" : "close"}`}>
        <SocialIcon url="https://linkedin.com/in/reeyhanyilmaz" />
        <SocialIcon url="https://github.com/reeyhanyilmaz" />
        <SocialIcon url="https://discord.com/channels/818433563858567178/818433563858567181" />
      </div>
    </div>
  );
}

export default Navbar;
