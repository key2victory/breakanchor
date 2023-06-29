import {useState} from "react";
import AppNav, {AppHeader, NavPanel} from "./AppNav";
import {Outlet} from "react-router-dom";
import "./styles.css";
import "./styles_utility.css";
import "./styles_mobile.css";
import "./styles_phablet.css";
import "./styles_tablet.css";
import "./styles_laptop.css";
import "./styles_desktop.css";

export default function App(props) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <AppHeader
        onMenuClick={() => {
          setShowNav(true);
        }}
      />{" "}
      <NavPanel />
      <AppNav
        showNav={showNav}
        onClickExit={() => {
          setShowNav(false);
        }}
      />{" "}
      <Outlet
        style={{gridColumn: "content / span 1", gridRow: "content / span 1"}}
      />{" "}
    </div>
  );
}
