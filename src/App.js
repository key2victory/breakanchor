import {useState} from "react";
import AppNav, {AppHeader} from "./AppNav";

import {Outlet} from "react-router-dom";
import "./styles.css";
import "./styles_mobile.css";
import "./styles_tablet.css";
import "./styles_desktop.css";

export default function App(props) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      className="App"
      style={
        {
          //background: "hsl(0,0%,100%)"
          //  "linear-gradient(0deg, hsl(0,0%,100%) 30%, hsl(0,0%,50%) 30%)"
        }
      }
    >
      <AppHeader
        onMenuClick={() => {
          setShowNav(true);
        }}
      />{" "}
      <AppNav
        showNav={showNav}
        onClickExit={() => {
          setShowNav(false);
        }}
      />
      <Outlet />
    </div>
  );
}
