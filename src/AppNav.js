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
    <div className="header">
      <h3>
        break anchor <span className="mobile-hide"> design </span>{" "}
      </h3>{" "}
      <h4
        className="nav-link row nowrap desktop-hide tablet-hide"
        style={{
          fontSize: "1.5rem",
          alignItems: "center",
          gap: "1rem",
          padding: ".2rem .8rem",
          borderRadius: "1rem",
        }}
        onClick={() => {
          onMenuClick();
        }}
      >
        <CgMenu />
        menu{" "}
      </h4>{" "}
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

const NavCard = memo(function NavCard({item, style, color = "hsl(0,0%,30%)"}) {
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
        className="nav-link col nowrap"
        style={{
          gap: ".5rem",
          color: color,
          padding: "1rem 1rem 1.75rem 2rem",
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
        className={`app-nav ${
          showNav === true ? "show" : "hide"
        } desktop-hide tablet-hide`}
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
          className="nav-link"
          style={{
            //marginLeft: "auto",
            cursor: "pointer",
            padding: "1rem 1.1rem",
            margin: "0rem 1rem 0rem auto",
            borderRadius: "2rem",
          }}
          onClick={() => {
            onClickExit();
          }}
        >
          <CgClose size="18" />
        </div>
        <NavCard item={{path: "", title: "About Me"}} />{" "}
        {pages.map((item, index) => (
          <NavCard
            key={`${item.path}-${index}`}
            item={item}
            style={{borderTop: "2px solid hsla(0,0%,0%,10%)"}}
          />
          /* <Link key={`${item.path}-${index}`} to={item.path} style={linkStyle}>
                  {item.title}
                </Link>*/
        ))}{" "}
        {samplePages.map((item, index) => (
          <NavCard
            key={`${item.path}-${index}`}
            item={item}
            style={{borderTop: "2px solid hsla(0,0%,0%,10%)"}}
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
}

export function NavPanel({showNav, onClickExit}) {
  return (
    <div
      className="mobile-hide grid box-shadow-edged"
      style={{
        position: "absolute",
        gridTemplateRows: "auto 1fr",
        gridColumn: "side / span 1",
        gridRow: "content / span 1",
        width: "100%",
        height: "100%",
        // minWidth: "320px",
        //minHeight: "100%",
        flexShrink: 0,
        padding: "0",
        gap: 0,
        background: "hsl(0,0%,35%)",
        overflow: "hidden",
        /*boxShadow:
                  "2px 0px 2px 0px hsla(0, 0%, 0%, 20%), 2px 2px 2px 0px hsla(0, 0%, 0%, 50%)",*/
        zIndex: 1,
      }}
    >
      <div
        className="col stretch-h"
        style={{
          gap: "1rem",
          background: "hsla(0,0%,0%,20%)",
        }}
      >
        <div
          className="col center"
          style={{
            padding: "1rem",
          }}
        >
          <img width="150" src="./img/jmc.png" alt="" />
          <h2 className="center" style={{color: "hsl(0,0%,100%)"}}>
            Janna Curtis{" "}
          </h2>{" "}
        </div>{" "}
        <NavButton
          item={{path: "", title: "About Me"}}
          style={{margin: "0 2rem"}}
        />{" "}
        <span
          className="row between center"
          style={{
            fontSize: "1.25rem",
            background: "hsl(0,0%,35%,100%)",
            //borderRadius: ".25rem",

            height: "48px",
            color: "hsl(0,0%,90%)",
            padding: "0rem 2rem 0rem 2rem",
            //  borderBottom: "3px solid hsl(0,0%,25%)",
            boxShadow:
              "0px 2px 1px 0px hsla(0, 0%, 0%, 50%), 0px 15px 10px 0px hsla(0, 0%, 0%, 10%)",
            //filter: "drop-shadow(6px 6px 1px hsla(0, 0%, 0%, 23%))",
            zIndex: 1,
          }}
        >
          <span> Samples </span>{" "}
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
      <div className="col nowrap scroll" style={{height: "100%", zIndex: 0}}>
        {" "}
        {pages.map((item, index) => (
          <NavCard
            key={`${item.path}-${index}`}
            item={item}
            style={{
              borderTop: "2px solid hsla(0,0%,0%,10%)",
            }}
            color="hsla(0,0%,100%,70%)"
          />
        ))}{" "}
        {samplePages.map((item, index) => (
          <NavCard
            key={`${item.path}-${index}`}
            item={item}
            style={{borderTop: "2px solid hsla(0,0%,0%,10%)"}}
            color="hsla(0,0%,100%,70%)"
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
}
