import {Link} from "react-router-dom";
import {memo} from "react";
import {pages} from "./Pages";
import {samplePages} from "./PageSamples";
import {CgMenu, CgClose} from "react-icons/cg";
import {MdFilterList} from "react-icons/md";
import {IconTag, DeviceSizes} from "./PageElements";
import "./styles.css";

export const AppHeader = memo(function AppHeader({onMenuClick}) {
  return (
    <div className="header row between">
      <h4
        className="nav-link row nowrap desktop-hide laptop-hide tablet-hide phablet-hide"
        style={{
          fontSize: "1.5rem",
          alignItems: "center",
          gap: "1rem",
          padding: ".5rem .5rem",
          marginRight: ".5rem",
          borderRadius: "5rem",
        }}
        onClick={() => {
          onMenuClick();
        }}
      >
        <CgMenu />
      </h4>{" "}
      <h3>
        break anchor{" "}
        <span
          className="" //"mobile-hide"
        >
          {" "}
          design{" "}
        </span>{" "}
      </h3>{" "}
      <span
        style={{
          padding: "1rem",
          marginRight: ".5rem",
        }}
      ></span>{" "}
    </div>
  );
});

const NavButton = memo(function NavCard({item, style}) {
  return (
    <Link
      to={`/${item.path}`}
      style={{...style}}
      className="button blue row nowrap center box-shadow-shallow"
    >
      {item.title}{" "}
    </Link>
  );
});

const NavCardAbout = memo(function NavCardAbout({
  style,
  className,
  size = "large",
}) {
  const styleOption = {
    small: {
      color: "hsl(0,0%,70%)",
      textDecoration: "none",
      fontSize: "1.25rem",
      gap: "1rem",
      padding: "1rem",
    },
    large: {
      color: "hsl(0,0%,70%)",
      textDecoration: "none",
      fontSize: "1.25rem",
      gap: "1rem",
      padding: "1rem 2rem 1rem 1rem",
    },
  };
  return (
    <Link
      className={`nav-link page ${
        size === "small" ? "row left nowrap" : "col center"
      } mobile-hide`}
      to="/"
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
          margin: size === "small" ? "0" : "-1rem 0 0 0",
        }}
      >
        <h3
          className="center mobile-hide"
          style={{
            color: "hsl(0,0%,100%)",

            // transform: "translateY(-1.25rem)",
            textShadow: "2px 2px 20px hsl(0,0%,0%)",
          }}
        >
          Janna Curtis{" "}
        </h3>{" "}
        <span> About Me </span>{" "}
      </div>{" "}
    </Link>
  );
});

const NavCard = memo(function NavCard({
  item,
  style,
  className,
  color = "hsl(0,0%,90%)",
  borderTop = "",
  borderBottom = "2px dotted hsla(0,0%,0%,10%)",
}) {
  const linkStyle = {
    textDecoration: "none",
    //padding: "1rem 0",
    fontSize: "1.25rem",
    padding: "0 1.5rem 0 1.5rem",
    ...style,
  };
  return (
    <Link
      className={`nav-link page ${className}`}
      // key={`${item.path}-${index}`}
      to={`/${item.path}`}
      style={linkStyle}
    >
      <div
        className="col nowrap"
        style={{
          gap: ".5rem",
          color: color,
          padding: "1rem .5rem 1.5rem .5rem",
          borderTop: borderTop,
          borderBottom: borderBottom,
        }}
      >
        <span> {item.title} </span>{" "}
        <span
          className="row wrap"
          style={{
            gap: ".5rem",
            color: color,
          }}
        >
          {item.tags !== undefined && item.tags.length > 0
            ? item.tags.map((v_tag, i_tag) => (
                <IconTag
                  key={`device-${i_tag}`}
                  icon={v_tag}
                  textColor="hsla(0,0%,90%,100%)"
                  borderColor="hsla(0,0%,80%,30%)"
                  bgColor="hsla(0,0%,100%,6%)"
                />
              ))
            : null}{" "}
          {item.devices !== undefined && item.devices.length > 0 ? (
            <DeviceSizes
              devices={item.devices}
              textColor="hsla(0,0%,90%,100%)"
              borderColor="hsla(0,0%,80%,30%)"
              bgColor="hsla(0,0%,100%,6%)"
            />
          ) : null}{" "}
        </span>{" "}
      </div>{" "}
    </Link>
  );
});

export default function AppNavFlyout({showNav, onClickExit}) {
  return (
    <div
      className={`overlay ${
        showNav === true ? "show" : "hide"
      } desktop-hide laptop-hide tablet-hide phablet-hide row nowrap`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,

        justifyContent: "stretch",
        alignItems: "stretch",
        zIndex: 10,
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
          zIndex: 10,
        }}
        onClick={() => {
          onClickExit();
        }}
      >
        <NavPanel className="" />
      </div>{" "}
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
    </div>
  );
}

export function NavPanel({
  className = "mobile-hide nav-panel box-shadow-edged",
  background = "hsl(0,0%,35%)",
  showNav,
  onClickExit,
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
        zIndex: 1,
      }}
    >
      <div
        className="col stretch-h"
        style={{
          //gap: "1rem",
          background: "hsla(0,0%,0%,20%)",
        }}
      >
        {" "}
        <div
          className="nav-link desktop-hide laptop-hide tablet-hide phablet-hide"
          style={{
            cursor: "pointer",
            padding: "1rem 1.1rem",
            margin: ".5rem .8rem .5rem auto",
            borderRadius: "2rem",
            zIndex: 3,
          }}
          onClick={onClickExit}
        >
          <CgClose size="18" />
        </div>{" "}
        <NavCardAbout />
        <NavCard
          className="desktop-hide laptop-hide tablet-hide phablet-hide"
          item={{path: "", title: "About Me"}}
          style={
            {
              // margin: "0 2rem 1rem 2rem",
            }
          }
          color="hsla(0,0%,100%,70%)"
          borderTop={borderStyle}
          borderBottom=""
        />
        <span
          className="row between center"
          style={{
            fontSize: "1.1rem",
            //  background: "hsl(0,0%,35%,100%)",
            //borderRadius: ".25rem",
            background: background,
            height: "auto",
            color: "hsl(0,0%,65%)",
            // fontWeight: 200,
            padding: "0 1.5rem 0 1.5rem",
            // borderTop: "3px solid hsl(0,0%,25%)",

            /*boxShadow:
                  "0px 2px 1px 0px hsla(0, 0%, 0%, 50%), 0px 15px 10px 0px hsla(0, 0%, 0%, 10%)",*/
            //filter: "drop-shadow(6px 6px 1px hsla(0, 0%, 0%, 23%))",
            zIndex: 1,
          }}
        >
          <span
            style={{
              width: "100%",
              padding: "1.5rem .5rem .5rem .5rem",
              borderBottom: "2px solid hsl(0,0%,25%)",
            }}
          >
            Samples{" "}
          </span>{" "}
          <div
            className="nav-link center"
            style={{
              display: "none",
              width: "48px",
              height: "48px",
              fontSize: "2rem",
              cursor: "pointer",
              // padding: ".25rem .5rem",
              margin: "0",
              borderRadius: "2rem",
              aspectRatio: "1 / 1",
            }}
            onClick={() => {
              //onClickExit();
            }}
          >
            <MdFilterList
            //size="18"
            />
          </div>{" "}
        </span>{" "}
      </div>{" "}
      <div
        className="col nowrap scroll"
        style={{height: "100%", zIndex: 0, padding: "0 0 2rem 0"}}
      >
        {pages.map((item, index) => (
          <NavCard
            key={`${item.path}-${index}`}
            item={item}
            style={
              {
                // borderTop: "2px solid hsla(0,0%,0%,10%)"
              }
            }
            color="hsla(0,0%,100%,70%)"
            borderTop={borderStyle}
            borderBottom=""
          />
        ))}{" "}
        {samplePages.map((item, index) => (
          <NavCard
            key={`${item.path}-${index}`}
            item={item}
            style={
              {
                // borderTop: "2px solid hsla(0,0%,0%,10%)"
              }
            }
            color="hsla(0,0%,100%,70%)"
            borderTop={borderStyle}
            borderBottom=""
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
}
