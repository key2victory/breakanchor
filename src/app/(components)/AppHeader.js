import { Link } from "next";
import { memo } from "react";

export const AppHeader = memo(function AppHeader({ onMenuClick, hide = false, media, children
}) {
  return (
    <div className="row between"
      style={{
        gridColumn: "content / content-end",
        gridRow: "header / span 1",
        display: ["xl", "lg", "md"].includes(media) ? "none" : "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        background: "hsla(0, 0%, 7%, 100%)",
        color: "hsla(0, 0%, 100%, 80%)",
        margin: 0,
        padding: "0rem 0.8rem 0rem 1.5rem",
        zIndex: 3,
        boxShadow: "0px 2px 2px 0px hsla(0, 0%, 0%, 50%), 0px 2px 20px 4px hsla(0, 0%, 0%, 20%)",
      }}>
      <h4
        className="nav-link row nowrap"
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
       {/* <CgMenu /> */}
      </h4>
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