import React from "react";
import Link from "next/link";
import "../styles/footer-menu.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsHamOpen } from "../redux/portfolioSlice";

const FooterMenu = () => {
  const isHamOpen = useSelector((s) => s.portfolio.isHamOpen);
  const dispatch = useDispatch();

  const handleMenuItemClick = () => {
    dispatch(setIsHamOpen());
  };
  return (
    <ul className={`menu_ul ${isHamOpen && "menu_ul-active"}`}>
      <li onClick={handleMenuItemClick}>
        <i className="fa-solid fa-house mr-3"></i>
        <Link href="/">
          <p> .about() </p>
        </Link>
      </li>
      <li onClick={handleMenuItemClick}>
        <i className="fa-solid fa-user mr-3"></i>
        <Link href="/projects">
          <p> .projects() </p>
        </Link>
      </li>
      <li onClick={handleMenuItemClick}>
        <i className="fa-solid fa-envelope mr-3"></i>
        <Link href="/contact">
          <p> .contact() </p>
        </Link>
      </li>
      <li onClick={handleMenuItemClick}>
        <i className="fa-solid fa-pen mr-3"></i>
        <Link href="/blog">
          <p> .blog() </p>
        </Link>
      </li>
    </ul>
  );
};

export default FooterMenu;
