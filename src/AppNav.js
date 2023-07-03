import { Link, useMatches } from "react-router-dom";
import { Fragment, memo } from "react";
import { pages } from "./Pages";
import { samplePages } from "./PageSamples";
import { CgMenu, CgClose } from "react-icons/cg";
import { IconTag, DeviceSizes } from "./PageElements";
import {
  RiDeviceLine,
  RiSlideshow3Line,
  RiReactjsFill,
  RiLayout5Line,
  RiLayoutTopLine,
  RiEdit2Line,
  RiCalendarTodoFill,
  RiStackFill,
  RiStackshareLine,
  RiMapPinUserFill,
  RiMapPinUserLine,
  RiBox2Fill,
  RiBox2Line
} from "react-icons/ri";
import "./styles.css";

export const AppHeader = memo(function AppHeader({ onMenuClick }) {
  function Breadcrumbs() {
    let matches = useMatches();
    let crumbs = matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle.crumb(match.data));
    // first get rid of any matches that don't have handle and crumb
    // now map them into an array of elements, passing the loader
    // data to each one

    console.log(matches, crumbs);
    return (
      <Fragment>
        {crumbs.map((crumb, index) => (
          <span key={index}>{crumb}</span>
        ))}
      </Fragment>
    );
  }
  return (
    <div className="header row between desktop-hide laptop-hide tablet-hide phablet-hide">
      <h4
        className="nav-link row nowrap desktop-hide laptop-hide tablet-hide phablet-hide"
        style={{
          fontSize: "1.5rem",
          alignItems: "center",
          gap: "1rem",
          padding: ".5rem .5rem",
          marginRight: ".5rem",
          borderRadius: "5rem"
        }}
        onClick={() => {
          onMenuClick();
        }}
      >
        <CgMenu />
      </h4>
      <Breadcrumbs />
      {/* <h3>
        break anchor
        <span
          className="" //"mobile-hide"
        >
          design
        </span>
      </h3>*/}
      <span
        style={{
          padding: "1rem",
          marginRight: ".5rem"
        }}
      ></span>
    </div>
  );
});

const NavButton = memo(function NavCard({ item, style }) {
  return (
    <Link
      to={`/${item.path}`}
      style={{ ...style }}
      className="button blue row nowrap center box-shadow-shallow"
    >
      {item.title}
    </Link>
  );
});

const NavCardAbout = memo(function NavCardAbout({
  style,
  className,
  size = "large"
}) {
  const styleOption = {
    small: {
      color: "hsl(0,0%,70%)",
      textDecoration: "none",
      fontSize: "1.25rem",
      gap: "1rem",
      padding: "1rem"
    },
    large: {
      color: "hsl(0,0%,70%)",
      textDecoration: "none",
      fontSize: "1.25rem",
      gap: "1rem",
      padding: "1rem 2rem 1rem 1rem"
    }
  };
  return (
    <div
      className={`${size === "small" ? "row left nowrap" : "col center"
        } mobile-hide`}
      // to="/"
      style={styleOption[size]}
    >
      <img
        className="mobile-hide"
        width={size === "small" ? "56" : "120"}
        src="./img/jmc.png"
        alt=""
      />
      <div
        className={`col center ${size === "small" ? "left" : ""} mobile-hide`}
        style={{
          gap: ".25rem",
          width: size === "small" ? "auto" : "100%",
          margin: size === "small" ? "0" : "-1rem 0 0 0"
        }}
      >
        <h3
          className="center"
          style={{
            color: "hsl(0,0%,90%)",

            // transform: "translateY(-1.25rem)",
            //  textShadow: "2px 2px 20px hsl(0,0%,0%)"
          }}
        >
          Janna Curtis
        </h3>
        <h5>break anchor design</h5>
      </div>
    </div>
  );
});

export const NavCard = memo(function NavCard({
  icon,
  title,
  path,
  style,
  className,
  color = "hsl(0,0%,90%)",
  borderTop = "",
  borderBottom = "2px dotted hsla(0,0%,0%,10%)",
  children
}) {
  const linkStyle = {
    textDecoration: "none",
    //padding: "1rem 0",
    fontSize: "1.25rem",
    padding: icon !== undefined ? "0 1rem 0 .5rem" : "0 1.5rem 0 1.5rem",
    ...style
  };
  const IconRender = icon;
  return (
    <Link
      className={`nav-link page ${className}`}
      // key={`${item.path}-${index}`}
      to={`/${path}`}
      style={linkStyle}
    >
      <div
        className="row nowrap center left"
        style={{
          gap: "1rem",
          color: color,
          padding: "1rem .5rem 1rem .5rem",
          borderTop: borderTop,
          borderBottom: borderBottom
        }}
      >
        {icon !== undefined ? <IconRender /> : null}
        <span
          className="col nowrap"
          style={{
            gap: ".5rem"
          }}
        >
          <span>{title}</span>
          {children}
        </span>
      </div>
    </Link>
  );
});

export default function AppNavFlyout({ showNav, onClickExit }) {
  return (
    <div
      className={`overlay ${showNav === true ? "show" : "hide"
        } desktop-hide laptop-hide tablet-hide phablet-hide row nowrap`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,

        justifyContent: "stretch",
        alignItems: "stretch",
        zIndex: 10
      }}
    >
      <div
        className={`app-nav ${showNav === true ? "show" : "hide"}`}
        style={{
          position: "relative",
          display: "flex",
          flexFlow: "column nowrap",
          width: "320px",
          // padding: "1rem 0rem",
          gap: 0,
          background: "hsla(0,0%,25%,0%)",
          boxShadow:
            "-2px 2px 6px 4px hsla(0, 0%, 0%, 20%), -2px 2px 50px 4px hsla(0, 0%, 0%, 50%)",
          zIndex: 10
        }}
        onClick={() => {
          onClickExit();
        }}
      >
        <NavPanel className="" />
      </div>
      <div
        className="overlay-hotspot"
        style={{
          background: "hsla(0,0%,0%,0%)",
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
          zIndex: 10
        }}
        onClick={() => {
          onClickExit();
        }}
      />
    </div>
  );
}

export function NavPanel({
  className = "mobile-hide nav-panel box-shadow-edged",
  background = "hsl(0,0%,35%)",
  showNav,
  onClickExit
}) {
  const borderStyle = "2px solid hsla(0,0%,0%,10%)";
  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateRows: "auto 1fr",

        width: "100%",
        height: "100%",
        // minWidth: "320px",
        //minHeight: "100%",
        flexShrink: 0,
        padding: "0",
        gap: 0,
        background: background,
        overflow: "hidden",
        /*boxShadow:
          "2px 0px 2px 0px hsla(0, 0%, 0%, 20%), 2px 2px 2px 0px hsla(0, 0%, 0%, 50%)",*/
        zIndex: 1
      }}
    >
      <div
        className="col stretch-h"
        style={{
          //gap: "1rem",
          background: "hsla(0,0%,0%,20%)"
        }}
      >
        <div
          className="nav-link desktop-hide laptop-hide tablet-hide phablet-hide"
          style={{
            cursor: "pointer",
            padding: "1rem 1.1rem",
            margin: ".5rem .8rem .5rem auto",
            borderRadius: "2rem",
            zIndex: 3
          }}
          onClick={onClickExit}
        >
          <CgClose size="18" />
        </div>
        <NavCardAbout />

      </div>
      <div className="col top">
        <NavCard
          //  className="desktop-hide laptop-hide tablet-hide phablet-hide"
          icon={RiMapPinUserFill}
          path=""
          title="About Me"
          color="hsla(0,0%,100%,70%)"
          borderTop={borderStyle}
          borderBottom=""
        />
        <NavCard
          icon={RiBox2Line}
          title="Projects"
          path="projects"
          color="hsla(0,0%,100%,70%)"
          borderTop={borderStyle}
          borderBottom=""
        />
        <NavCard
          icon={RiSlideshow3Line}
          title="Presentations"
          path="presentations"
          color="hsla(0,0%,100%,70%)"
          borderTop={borderStyle}
          borderBottom=""
        />
        <NavCard
          icon={RiStackshareLine}
          title="Learning Connections"
          path="learning"
          color="hsla(0,0%,100%,70%)"
          borderTop={borderStyle}
          borderBottom=""
        />
      </div>
    </div>
  );
}
