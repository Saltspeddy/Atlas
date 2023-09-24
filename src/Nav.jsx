import { Link } from "react-scroll";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Sponsors from "./Sponsors";
import Contact from "./Contact";

const Nav = () => {
  return (
    <ul className="fixed w-screen text-white text-xl font-bold h-20 flex justify-center items-center gap-10">
      <li className="">
        <Link to="home">Home</Link>
      </li>
      <li className="">
        <Link to="about">About</Link>
      </li>
      <li className="">
        <Link to="sponsors">Sponsors</Link>
      </li>
      <li className="">
        <Link to="contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Nav;
