import React from "react";
import Link from "next/link";
import "../styles/footer.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsHamOpen } from "../redux/portfolioSlice";

const Footer = () => {
  const isHamOpen = useSelector((s) => s.portfolio.isHamOpen);
  const dispatch = useDispatch();

  const handleMenuItemClick = () => {
    dispatch(setIsHamOpen());
  };
  return (
    <ul className={`menu_ul ${isHamOpen && "menu_ul-active"}`}>
      <li onClick={handleMenuItemClick}>
        <Link href="/">
          <i className="fa-solid fa-house mr-3"></i>
          <p> .about() </p>
        </Link>
      </li>
      <li onClick={handleMenuItemClick}>
        <Link href="/projects">
          <i className="fa-solid fa-user mr-3"></i>
          <p> .projects() </p>
        </Link>
      </li>
      <li onClick={handleMenuItemClick}>
        <Link href="/contact">
          <i className="fa-solid fa-envelope mr-3"></i>
          <p> .contact() </p>
        </Link>
      </li>
      <li onClick={handleMenuItemClick}>
        <Link href="/blog">
          <i className="fa-solid fa-pen mr-3"></i>
          <p> .blog() </p>
        </Link>
      </li>
    </ul>
  );
};

export default Footer;
