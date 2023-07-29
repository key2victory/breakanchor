import { memo, useState, useEffect, Fragment } from "react";


import "./styles.css";

export const HeroAbout = memo(function HeroAbout({
  theme,
  deviceSize,
  hide = false,
  style = {
  }
}) {

  const autoStyle = {
    small: { flexFlow: "row wrap", borderRadius: "1rem", background: "hsla(40,10%,70%,0%)" },
    large: { flexFlow: "column nowrap", borderRadius: 0, background: "hsla(0,0%,0%,0%)" },
  }

  //const autoStyle = ["xs", "sm"].includes(media) ? deviceSize.small : deviceSize.large;

  return (
    <div
      className="center"//{`center ${hide === true ? "hide" : ""}`}//`${deviceSize[device]} center`} //desktop-about tablet-about mobile-about"
      style={{
        display: hide === true ? "none" : "flex",
        //visibility: hide === true ? "hidden" : "visible",
        // flexFlow: ["xs", "sm"].includes(media) ? "row wrap" : "col nowrap",
        padding: "1rem 1.5rem",
        width: "100%",
        height: "auto",
        gap: "0rem",
        zIndex: 1,
        // borderRadius: ["xs", "sm"].includes(media) ? "1rem" : 0,//"1rem",
        ...autoStyle[deviceSize],
        ...style,

      }}
    >
      <img
        width="120"//{["xs", "sm"].includes(media) ? "120" : "100"}
        src="./img/jmc.png"
        alt=""
        style={{
          margin: "0 .3rem",
        }}
      />
      <span className="col nowrap center" style={{
        color: "hsl(0,0%,90%)",
        margin: "0 .3rem",
        textAlign: "left",//"center"
        // minWidth: "max-content",
        // flexGrow: 0, flexShrink: 0, flexBasis: "max-content"
      }}>
        <h3
          style={{
            color: deviceSize === "small" ? "hsla(0,0%,0%,60%)" : "hsla(0,0%,0%,50%)",
            width: "auto",
          }}
        >
          Janna Curtis
        </h3>
        <h5 style={{
          color: deviceSize === "small" ? "hsl(0,0%,50%)" : "hsla(0,0%,0%,30%)",
          width: "auto",
        }}>break anchor design</h5>
      </span>

    </div>
  );
})