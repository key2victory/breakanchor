import {memo, useState, useEffect, Fragment} from "react";
import "./styles.css";

export default function HeroAbout() {
  const position = {
    position: "absolute",
    top: "21%",
    left: "13%",
    width: "72%",
    aspectRatio: "289 / 495",
  };

  return (
    <div
      className="hero-desktop about"
      style={{
        // display: "flex",
        //flexFlow: "row wrap",
        // justifyContent: "center",
        //alignItems: "flex-start",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="card desktop-about tablet-about mobile-about"
        style={{
          display: "flex",
          //justifyContent: "flex-start",
          //alignItems: "center",
          //padding: "1rem",
          background: "hsla(0,0%,20%,80%)",
          //backgroundImage:
          //  "linear-gradient(hsla(0,0%,0%,50%),hsla(0,0%,0%,50%))",
          // backgroundSize: "100% 70%",
          // backgroundPosition: "bottom",
          // backgroundRepeat: "no-repeat"
        }}
      >
        <img
          width="200"
          src="./img/jmc.png"
          alt=""
          style={{margin: "0 2rem"}}
        />{" "}
        <h1
          //className="card"
          style={{color: "hsl(0,0%,100%)", textAlign: "center"}}
        >
          Janna Curtis{" "}
        </h1>{" "}
      </div>{" "}
    </div>
  );
}
