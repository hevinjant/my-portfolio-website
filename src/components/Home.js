import React from "react";
import Typed from "react-typed";
import MyPic from "../assets/myPic.jpg";

function Home() {
  return (
    <div className="home">
      <div className="left-home">
        <Typed
          className="typed-text"
          strings={[
            "Hi There!",
            "I'm Hevin Jantasmin",
            "Computer Science student at Cal Poly SLO",
          ]}
          typeSpeed={120}
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
