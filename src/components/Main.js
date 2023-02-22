import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import Experiences from "./Experiences";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Experiences />
      <About />
      <Footer />
    </>
  );
};

export default Main;
