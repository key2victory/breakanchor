import { memo, useState, useEffect, Fragment } from "react";
import "./styles.css";
//import "./device-frames.css";

export const About = memo(function About() {
  const position = {
    position: "absolute",
    top: "21%",
    left: "13%",
    width: "72%",
    aspectRatio: "289 / 495"
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        className="card"
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          backgroundImage: "linear-gradient(hsl(0,0%,40%),hsl(0,0%,40%))",
          // backgroundSize: "100% 90%",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat"
        }}
      >
        <img width="200" src="./img/jmc.png" style={{ margin: "0 2rem" }} />
        <h1
          //className="card"
          style={{ color: "hsl(0,0%,100%)", textAlign: "center" }}
        >
          Janna Curtis
        </h1>
      </div>
    </div>
  );
});
