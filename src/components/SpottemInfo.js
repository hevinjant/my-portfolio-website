import React from "react";
import spottemLogo from "../assets/spottem/spottemLogo.png";
import { Link } from "react-router-dom";
import Snapshot1 from "../assets/spottem/homePageSS.png";
import Snapshot2 from "../assets/spottem/activityPageSS.png";

const SpottemInfo = () => {
  return (
    <div
      className="spottem-info"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        width: "100%",
        padding: "0 0 100px 0",
      }}
    >
      <img
        src={spottemLogo}
        alt="no img"
        style={{ width: "250px", height: "250px" }}
      />
      <p style={{ color: "white", fontSize: "clamp(15px, 5vw, 25px)" }}>
        Sorry! The web-app is currently offline.
      </p>
      <Link to="/" className="back-link">
        Go back to portfolio
      </Link>
      <img
        src={Snapshot1}
        alt=""
        style={{ marginTop: "50px", width: "clamp(500px, 50vw, 850px)" }}
      ></img>
      <img
        src={Snapshot2}
        alt=""
        style={{ marginTop: "25px", width: "clamp(500px, 50vw, 850px)" }}
      ></img>
    </div>
  );
};

export default SpottemInfo;
