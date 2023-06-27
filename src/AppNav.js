import {Link} from "react-router-dom";
import {memo} from "react";
import {pages} from "./Pages";
import {samplePages} from "./PageSamples";
import {CgMenu, CgClose} from "react-icons/cg";
import {IconTag, DeviceSizes} from "./PageElements";
import "./styles.css";

export const AppHeader = memo(function AppHeader({onMenuClick}) {
  return (
    <div className="header">
      <h3>
        break anchor <span className="mobile-hide"> design </span>{" "}
      </h3>{" "}
      <span
        className="pointer"
        style={{
          fontSize: "1.5rem",
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          gap: "1rem",
        }}
        onClick={() => {
          onMenuClick();
        }}
      >
        <CgMenu />
        menu{" "}
      </span>{" "}
    </div>
  );
});

const NavLink = memo(function NavLink({item, style}) {
  const linkStyle = {
    textDecoration: "none",
    //padding: "1rem 0",
    fontSize: "1.25rem",
    ...style,
  };
  return (
    <Link
      // key={`${item.path}-${index}`}
      to={`/${item.path}`}
      style={linkStyle}
    >
      <div
        className="nav-link"
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          gap: ".5rem",
          color: "hsl(0,0%,30%)",
          padding: "1rem 1rem 1.75rem 2rem",
        }}
      >
        <span> {item.title} </span>{" "}
        <span
          style={{
            display: "flex",
            flexFlow: "row wrap",
            gap: ".5rem",
            color: "hsl(0,0%,30%)",
          }}
        >
          {item.tags !== undefined && item.tags.length > 0
            ? item.tags.map((v_tag, i_tag) => (
                <IconTag key={`device-${i_tag}`} icon={v_tag} />
              ))
            : null}{" "}
          {item.devices !== undefined && item.devices.length > 0 ? (
            <DeviceSizes devices={item.devices} />
          ) : null}{" "}
        </span>{" "}
      </div>{" "}
    </Link>
  );
});

export default function AppNav({showNav, onClickExit}) {
  return (
    <div
      className={`overlay ${showNav === true ? "show" : "hide"}`}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "stretch",
        alignItems: "stretch",
        zIndex: 10,
      }}
    >
      <div
        className="overlay-hotspot"
        style={{
          background: "hsla(0,0%,0%,0%)",
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
          zIndex: 10,
        }}
        onClick={() => {
          onClickExit();
        }}
      />{" "}
      <div
        className={`app-nav ${showNav === true ? "show" : "hide"}`}
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          width: "320px",
          padding: "1rem 0rem",
          gap: 0,
          background: "hsl(0,0%,80%)",
          boxShadow:
            "-2px 2px 6px 4px hsla(0, 0%, 0%, 20%), -2px 2px 50px 4px hsla(0, 0%, 0%, 50%)",
          zIndex: 10,
        }}
        onClick={() => {
          onClickExit();
        }}
      >
        <div
          style={{
            marginLeft: "auto",
            cursor: "pointer",
          }}
          onClick={() => {
            onClickExit();
          }}
        >
          <CgClose />
        </div>{" "}
        <NavLink item={{path: "", title: "About Me"}} />{" "}
        {pages.map((item, index) => (
          <NavLink
            key={`${item.path}-${index}`}
            item={item}
            style={{borderTop: "2px solid hsla(0,0%,0%,10%)"}}
          />
          /* <Link key={`${item.path}-${index}`} to={item.path} style={linkStyle}>
                        {item.title}
                      </Link>*/
        ))}{" "}
        {samplePages.map((item, index) => (
          <NavLink
            key={`${item.path}-${index}`}
            item={item}
            style={{borderTop: "2px solid hsla(0,0%,0%,10%)"}}
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
}
