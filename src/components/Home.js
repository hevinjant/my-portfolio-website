import React from "react";
import Typed from "react-typed";
import MyPic from "../assets/myPic.jpg";

function Home() {
  return (
    <div className="home">
      <div className="left-home">
        <Typed
          className="typed-text"
          strings={["Hi There! I'm Hevin.", "Welcome to my portfolio website."]}
          typeSpeed={80}
          backSpeed={30}
          loop
        />
      </div>
      <div className="right-home">
        <img className="mypic" src={MyPic} />
      </div>
    </div>
  );
}

export default Home;
