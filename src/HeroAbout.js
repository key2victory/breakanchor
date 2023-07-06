import { memo, useState, useEffect, Fragment } from "react";
import NavPanel from "./AppNav";
import "./styles.css";

export const HeroAbout = memo(function HeroAbout({
  device = "small",
  style = { background: "hsla(0,0%,20%,80%)", }
}) {
  const deviceSize = {
    small: "desktop-hide laptop-hide tablet-hide card row wrap",
    large: "mobile-hide phablet-hide col"
  }

  return (
    <div
      className={`${deviceSize[device]} center`} //desktop-about tablet-about mobile-about"
      style={{
        display: "flex",
        padding: "1rem 1.5rem",
        width: "100%",
        height: "auto",
        gap: "0rem",
        ...style
      }}
    >
      <img
        width="120"
        src="./img/jmc.png"
        alt=""
        style={{
          margin: "0 .3rem",
        }}
      />
      <span className={`col nowrap ${device === "small" ? "center" : "center"}`} style={{
        color: "hsl(0,0%,90%)",
        margin: "0 .3rem",
        textAlign: "left",//"center"
        // minWidth: "max-content",
        // flexGrow: 0, flexShrink: 0, flexBasis: "max-content"
      }}>
        <h3
          style={{
            color: "hsl(0,0%,90%)",
            width: "auto",
            // minWidth: "max-content"
          }}
        >
          Janna Curtis
        </h3>
        <h5 style={{
          color: "hsl(0,0%,70%)",
          width: "auto",
          // minWidth: "max-content"
        }}>break anchor design</h5>
      </span>
    </div>
  );
})