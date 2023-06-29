import {memo, useState, useEffect, Fragment} from "react";
import NavPanel from "./AppNav";
import "./styles.css";

export default function HeroAbout() {
  /* const position = {
      position: "absolute",
      top: "21%",
      left: "13%",
      width: "72%",
      aspectRatio: "289 / 495"
    };*/

  return (
    <div
      className="desktop-hide laptop-hide tablet-hide phablet-hide card row wrap center" //desktop-about tablet-about mobile-about"
      style={{
        display: "flex",
        padding: "1rem 1.5rem",
        background: "hsla(0,0%,20%,80%)",
      }}
    >
      <img
        width="150"
        src="./img/jmc.png"
        alt=""
        style={{margin: "0 1.5rem 0 0"}}
      />{" "}
      <h1
        //className="card"
        style={{
          color: "hsl(0,0%,100%)", //textAlign: "center"
          width: "max-content",
        }}
      >
        Janna Curtis{" "}
      </h1>{" "}
    </div>
  );
}
