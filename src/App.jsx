import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./About";
import Sponsors from "./Sponsors";
import Contact from "./Contact";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <div>
        <Nav></Nav>
        <Home></Home>
        <About></About>
        <Contact></Contact>

        <Sponsors></Sponsors>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
