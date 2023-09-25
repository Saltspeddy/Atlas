import { Link } from "react-scroll";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Sponsors from "./Sponsors";
import Contact from "./Contact";
import { useState, useEffect } from "react";

const Nav = () => {
  function setPageOffset() {
    let navBar = document.querySelector("#navBar");

    if (window.pageYOffset === 0) {
      navBar.style.backgroundColor = "transparent";
    } else {
      navBar.style.backgroundColor = "rgba(8, 11, 44, 0.7)";
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setPageOffset, { passive: true });
    return () => {
      window.removeEventListener("scroll", setPageOffset);
    };
  }, []);
  return (
    <ul
      id="navBar"
      className="fixed w-screen text-white text-xl font-bold h-20 flex justify-center items-center gap-10 duration-300"
    >
      <li className="">
        <Link to="home">Home</Link>
      </li>
      <li className="">
        <Link to="about">About</Link>
      </li>
      <li className="">
        <Link to="contact">Contact</Link>
      </li>
      <li className="">
        <Link to="sponsors">Sponsors</Link>
      </li>
    </ul>
  );
};

export default Nav;
