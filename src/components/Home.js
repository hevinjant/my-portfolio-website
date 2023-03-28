import React from "react";
import MyPic from "../assets/myPic.jpg";
import Background1 from "../assets/pbg3.jpg";

function Home() {
  return (
    <div className="home">
      <div className="left-home">
        <h1>Hi, I'm Hevin!</h1>
      </div>
      <div className="right-home">
        <img className="mypic" alt="no img" src={MyPic} />
      </div>
    </div>
  );
}

export default Home;
