import { memo, useState, useEffect, Fragment } from "react";

import {
  MdOutlineSmartphone,
  MdOutlineTablet,
  MdOutlineLaptop,
  MdOutlineComputer,
} from "react-icons/md";

function IconTag({ icon }) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        borderRadius: ".5rem",
        padding: ".5rem",
        background: "hsl(0,0%,30%)",
      }}
    >
      {icon === "phone" ? (
        <MdOutlineSmartphone />
      ) : icon === "tablet" ? (
        <MdOutlineTablet />
      ) : icon === "desktop" ? (
        <MdOutlineComputer />
      ) : null}{" "}
      <span> {icon} </span>{" "}
    </div>
  );
}

/*const IconTag = ({ icon }) => {
  const IconList = {
    phone: MdOutlineSmartphone,
   tablet: MdOutlineTablet,
   desktop: MdOutlineComputer,
  };
  const Icon = IconList[icon];

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        borderRadius: "1rem",
        background: "hsl(0,0%,30%)"
      }}
    >
      <Icon />
      <span>{icon}</span>
    </div>
  );
};*/

export const Note = memo(function Note({
  title,
  description,
  background,
  color = "black",
  collapse = false,
  style,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`note ${!collapse ? "open" : open ? "open" : ""}`}
      style={{ background: background, color: color, ...style }}
      onClick={() => {
        if (collapse) {
          setOpen(!open);
        }
      }}
    >
      <h4> {title} </h4>{" "}
      <span style={{ position: "relative", overflow: "hidden" }}>
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: `linear-gradient(0deg, ${background} 0%, transparent 100%)`,
          }}
        />{" "}
        {description}{" "}
      </span>{" "}
    </div>
  );
});

export const Caption = memo(function Caption({
  src,
  imgStyle,
  alt,
  containerStyle,
}) {
  return (
    <div className="image" style={{ ...containerStyle }}>
      <img
        src={`${src}`}
        width="100%"
        style={{
          ...imgStyle,
        }}
        alt={alt}
      />{" "}
      {alt}{" "}
    </div>
  );
});

export const Column = memo(function Column({ children, style }) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        gap: "1rem",
        minWidth: 0,
        minHeight: 0,
        height: "100%",
        ...style,
      }}
    >
      {children}{" "}
    </div>
  );
});

export const Row = memo(function Row({
  children,
  style = {
    display: "flex",
    flexFlow: "row nowrap",
    gap: "1rem",
    minWidth: 0,
    justifyContent: "stretch",
    alignItems: "flex-start",
  },
}) {
  return (
    <div
      style={{
        ...style,
      }}
    >
      {children}{" "}
    </div>
  );
});

export const Group = memo(function Group({ children, className, style }) {
  return (
    <div
      className={`group ${className}`}
      style={{
        ...style,
      }}
    >
      {children}{" "}
    </div>
  );
});

export const Header = memo(function Header({
  title,
  title1,
  title2,
  subtitle,
  color,
  style,
  children,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        height: "auto",
        color: color,
        zIndex: 10,
        overflow: "visible",
        ...style,
      }}
    >
      <span style={{ display: "flex", flexFlow: "column nowrap" }}>
        <h1 style={{ color: color }}>
          {" "}
          {title2 ? (
            <Fragment>
              <span style={{ display: "flex", flexFlow: "row wrap" }}>
                <span
                  style={{
                    marginRight: ".6rem",
                    color: color,
                  }}
                >
                  {title1}{" "}
                </span>{" "}
                <span
                  style={{
                    color: color,
                  }}
                >
                  {title2}{" "}
                </span>{" "}
              </span>{" "}
            </Fragment>
          ) : (
            title
          )}{" "}
        </h1>{" "}
        <h3 style={{ color: color }}> {subtitle} </h3>{" "}
      </span>{" "}
      {children}{" "}
    </div>
  );
});

export const ButtonLink = memo(function ButtonLink({
  line1,
  line2,
  url,
  color,
}) {
  const text = {
    x: 0,
    y: 1,
    textLength: 80,
    fontFamily: "sans-serif",
    size1: 16,
    size2: 18,
    size3: 16,
  };

  return (
    <a
      className={`button-link ${color}`}
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",

        //gap: ".25rem",
        // minWidth: 0,
        width: "max-content",
        height: "min-content", //"48px"
      }}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <span
        style={{
          color: { color },
          fontFamily: text.fontFamily,
          fontSize: `${text.size1}px`,
          width: "auto",
        }}
      >
        {line1}{" "}
      </span>{" "}
      <span
        style={{
          color: { color },
          fontFamily: text.fontFamily,
          fontSize: `${text.size2}px`,
          width: "auto",
          marginLeft: ".1rem",
        }}
      >
        {line2}{" "}
        <span
          style={{
            width: "min-content",
            color: { color },
            fontFamily: text.fontFamily,
            fontSize: `${text.size1}px`,
            margin: "0 0.1rem 0 .2rem",
          }}
        >
          ↗
        </span>{" "}
      </span>{" "}
    </a>
  );
});
