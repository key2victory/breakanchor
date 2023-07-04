import { useState } from "react";
import AppNav, { AppHeader, NavPanel } from "./AppNav";
import { Outlet } from "react-router-dom";
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
    <div className="App" style={{
      background: `linear-gradient(90deg, hsla(39, 0%, 100%, 0%) 0%, hsla(40, 0%, 100%, 100%) 100%), linear-gradient(45deg, hsl(39, 14%, 80%) 0%, hsl(40, 7%, 60%) 100%)`,
    }}>
      <AppHeader
        onMenuClick={() => {
          setShowNav(true);
        }}
      />
      <NavPanel />
      <AppNav
        showNav={showNav}
        onClickExit={() => {
          setShowNav(false);
        }}
      />
      <Outlet
        style={{ gridColumn: "content / span 1", gridRow: "content / span 1" }}
      />
    </div>
  );
}
