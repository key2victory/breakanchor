import { memo, useState, useEffect, Fragment } from "react";
import "./styles.css";
//import "./device-frames.css";

export const SlideDeck = memo(function SlideDeck() {
  const position = {
    position: "absolute",
    top: "21%",
    left: "13%",
    width: "72%",
    aspectRatio: "289 / 495"
  };

  return (
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vRJZQGOASDM7XWmFRaq4Oc_qd6sVKGX6NThZ4oV7XouyA0tL0C1Cjndh4RUMkgXmUDybimNRvd1kJVc/embed?start=true&loop=true&delayms=3000"
      frameborder="0"
      width="960"
      height="569"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    ></iframe>
  );
});
