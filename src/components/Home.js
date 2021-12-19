import React from "react";
import Typed from "react-typed";

function Home() {
  return (
    <div className="home">
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
  );
}

export default Home;
