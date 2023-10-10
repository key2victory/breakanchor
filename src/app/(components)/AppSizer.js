import { Link } from "next";
import { memo } from "react";

export const AppSizer = memo(function AppSizer({ height = "64px", shadowColor = "hsla(37,10%,70%,100%)", children }) {
    return (
        <div
          className="row right"
          style={{
            padding: ".8rem 1.5rem 1.2rem 0rem",
            gap: ".5rem",
            position: "fixed",
            top: 0,
            right: 0,
            height: height,
            flexDirection: "row-reverse",
            borderRadius: "5rem",
            zIndex: 10,
            filter: `drop-shadow(4px 4px 0px ${shadowColor})`
          }}>
          {children}
        </div>
    )
  })