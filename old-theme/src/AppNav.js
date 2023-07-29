import { Link, useMatches } from "react-router-dom";
import { Fragment, memo } from "react";
import { HeroAbout } from "./HeroAbout";
import { CgMenu, CgClose } from "react-icons/cg";
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
import ReactGA from "react-ga4";

const hiddenStyle = {
  position: "absolute",
  visibility: "hidden",
  height: 0,
  width: 0,
  bottom: 0,
  right: 0,
}

export const AppHeader = memo(function AppHeader({ onMenuClick, hide = false, media, /*height = "64px",*/ children//onClickXS, onClickSM, onClickMD, onClickLG, onClickXL 
}) {
  /*  const gridColumn = {
      xs: "content / content-end",
      sm: "content / content-end",
      md: "side / content-end",
      lg: "side / content-end",
      xl: "side / content-end",
    }
    console.log(gridColumn[media]);*/

  /*  function Breadcrumbs() {
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
    }*/

  return (
    <div className="row between" //header desktop-hide laptop-hide tablet-hide" 
      style={{
        gridColumn: "content / content-end",
        gridRow: "header / span 1",
        display: ["xl", "lg", "md"].includes(media) ? "none" : "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",

        background: "hsla(0, 0%, 20%, 100%)",
        color: "hsla(0, 0%, 100%, 80%)",
        margin: 0,
        padding: "0rem 0.8rem 0rem 1.5rem",
        zIndex: 3,
        boxShadow: "0px 2px 2px 0px hsla(0, 0%, 0%, 50%), 0px 2px 20px 4px hsla(0, 0%, 0%, 20%)",
        //hide === true ? hiddenStyle : null
      }}>
      <h4
        className="nav-link row nowrap" //desktop-hide laptop-hide tablet-hide"
        style={{
          fontSize: "1.5rem",
          alignItems: "center",
          gap: "1rem",
          padding: ".5rem .5rem",
          marginRight: ".5rem",
          borderRadius: "5rem",
          // display: ["xl", "lg", "md"].includes(media) ? "none" : "flex"
        }}
        onClick={() => {
          onMenuClick();
        }}
      >
        <CgMenu />
      </h4>
      {/* <Breadcrumbs />
       <h3>
        break anchor
        <span
          className="" //"mobile-hide phablet-hide"
        >
          design
        </span>
      </h3>*/}
      <span
        className="row"
        style={{
          padding: "1rem",
          marginRight: ".5rem"
        }}
      >{children}</span>
    </div>
  );
});

export const AppSizer = memo(function AppSizer({ height = "64px", children }) {
  return (
    <Fragment>
      <div
        className="row right"
        style={{
          padding: ".8rem 1.5rem 1.2rem 0rem",
          // margin: "1rem",
          gap: ".5rem",
          position: "fixed",
          top: 0,
          right: 0,
          height: height,
          flexDirection: "row-reverse",
          // background: "hsla(37,10%,74%,100%)",//"hsl(39, 14%, 80%),
          borderRadius: "5rem",
          // width: "auto",
          zIndex: 10,
          filter: "drop-shadow(4px 4px 0px hsla(37,10%,70%,100%))"
        }}>
        {children}
      </div>
      {/*<div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: height,
        pointerEvents: "none",
        background: "hsla(0, 0%, 20%, 20%)",
        zIndex: 0,
      }} />*/}
    </Fragment>
  )
})

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
      className={`nav-link page ${className} umami--click--AppNav/${path}`}
      // key={`${item.path}-${index}`}
      to={`${path}`}
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
        onClick={() => {
          ReactGA.event({
            category: "jmc_nav",
            action: "jmc_click_nav",
            label: `clicked ${title} from App navigation`,

            //value: 99, // optional, must be a number
            //  nonInteraction: true, // optional, true/false
            // transport: "xhr", // optional, beacon/xhr/image
          });

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

export default function AppNavFlyout({ showNav, media, onClickExit }) {

  return (
    <div
      className={`overlay ${showNav === true ? "show" : "hide"
        /**desktop-hide laptop-hide tablet-hide */}  row nowrap`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        visibility: ["xs", "sm"].includes(media) ? "visible" : "hidden",
        //  display: ["xs", "sm"].includes(media) ? "flex" : "none",
        // gridColumn: "side span 1",
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
          minWidth: "220px",
          width: "100%",
          maxWidth: "300px",
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: "auto",
          // transform: showNav === true ? "translateX(0)" : "translateX(-100%)",
          transitionProperty: "transform, box-shadow",
          transitionDuration: "0.5s, .2s",
          // padding: "1rem 0rem",
          gap: 0,
          background: "hsla(0,0%,25%,0%)",

          boxShadow: showNav === true ?
            "-2px 2px 6px 4px hsla(0, 0%, 0%, 20%), -2px 2px 50px 4px hsla(0, 0%, 0%, 50%)" : "-2px 2px 6px 4px hsla(0, 0%, 0%, 0%), -2px 2px 50px 4px hsla(0, 0%, 0%, 0%)",
          zIndex: 10
        }}
        onClick={() => {
          onClickExit();
        }}
      >
        <NavPanel media={media} showNav={showNav} />
      </div>
      <div
        className="overlay-hotspot"
        style={{
          background: "hsla(0,0%,0%,0%)",
          minWidth: "2rem",
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
  className, //= "mobile-hide phablet-hide box-shadow-edged",//nav-panel,
  background = "hsla(0,0%,35%,0%)",
  showNav,
  media,
  onClickExit
}) {
  const borderStyle = "2px solid hsla(0,0%,0%,10%)";
  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateRows: "auto 1fr",
        position: "absolute",
        gridColumn: "side / span 1",
        gridRow: "1 / span 2",
        width: "100%",
        height: "100%",
        // minWidth: "320px",
        //minHeight: "100%",
        flexShrink: 0,
        padding: "0",
        gap: 0,
        background: background,
        overflow: "hidden",
        boxShadow: showNav === true ? "0px 0px 4px 2px hsla(0, 0%, 0%, 20%), 2px 2px 2px 4px hsla(0, 0%, 0%, 20%)" : "0px 0px 4px 2px hsla(0, 0%, 0%, 0%), 2px 2px 2px 4px hsla(0, 0%, 0%, 0%)",
        zIndex: 1
      }}
    >
      <div
        className="col stretch-h"
        style={{
          //  background: "hsla(0,0%,0%,20%)"
          //visibility: ["xs", "sm"].includes(media) ? "hidden" : "visible",
        }}
      >
        <div
          className="nav-link"// desktop-hide laptop-hide tablet-hide"
          style={{
            display: ["xs", "sm"].includes(media) ? "flex" : "none",
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
        <HeroAbout deviceSize="large"
          hide={["xs", "sm"].includes(media)}
        />

      </div>
      <div className="col top">
        <NavCard
          //  className="desktop-hide laptop-hide tablet-hide"
          icon={RiMapPinUserFill}
          path="about"
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

        {/* <NavCard
          icon={RiStackshareLine}
          title="Learning Connections"
          path="learning"
          color="hsla(0,0%,100%,70%)"
          borderTop={borderStyle}
          borderBottom=""
        />*/}
      </div>
    </div>
  );
}