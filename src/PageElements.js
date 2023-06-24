import { memo, useState, useEffect, Fragment } from "react";
import { createPath } from "react-router-dom";

export const Note = memo(function Note({
  title,
  description,
  background,
  color = "black",
  collapse = true,
  style
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
      <h4>{title}</h4>
      <span style={{ position: "relative", overflow: "hidden" }}>
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: `linear-gradient(0deg, ${background} 0%, transparent 100%)`
          }}
        />
        {description}
      </span>
    </div>
  );
});

export const Caption = memo(function Caption({
  src,
  imgStyle,
  alt,
  containerStyle
}) {
  return (
    <div className="image" style={{ ...containerStyle }}>
      <img
        src={`${src}`}
        width="100%"
        style={{
          // backgroundImage: `url(${content.src})`,
          // aspectRatio: content.aspectRatio,
          ...imgStyle
        }}
        alt={alt}
      />
      {alt}
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
        ...style

        // flexGrow: 1,
        // flexShrink: 1,
        // flexBasis: 0

        //  display: "grid",
        // gridTemplateColumns: "1fr",
        //  gridTemplateRows: `repeat(${content.length}, 1fr)`,
        //   rowGap: "1rem",
        // minWidth: 0,
        // flexGrow: 2,
        // flexShrink: 2,
        // flexBasis: 1
      }}
    >
      {children}
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
    alignItems: "flex-start"
  }
}) {
  return (
    <div
      style={{
        // display: "flex",
        // flexFlow: "row nowrap",
        // gap: "1rem",
        // minWidth: 0,
        // justifyContent: "stretch",
        // alignItems: "flex-start",

        ...style

        // display: "grid",
        // gridTemplateRows: "auto",
        // gridTemplateColumns: "minmax(0,1fr)",
        // gridAutoColumns: "minmax(0,1fr)",
        // columnGap: "1rem",
        // height: "auto",

        // flexGrow: 1,
        // flexShrink: 1,
        // flexBasis: 0
      }}
    >
      {children}
    </div>
  );
});

export const Group = memo(function Group({ children, className, style }) {
  return (
    <div
      className={`group ${className}`}
      style={{
        /*display: "flex",
        flexWrap: "nowrap",
        gap: "1rem",
        minWidth: 0,
        justifyContent: "stretch",
        alignItems: "flex-start",*/
        ...style
      }}
    >
      {children}
    </div>
  );
});

export const Header = memo(function Header({
  title,
  title1,
  title2,
  subtitle,
  color,
  // background,
  children
}) {
  return (
    //<Fragment>
    <div
      style={{
        // display: "flex",
        // flexFlow: "row wrap",
        // justifyContent: "space-between",
        // alignItems: "flex-start",
        // gap: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        height: "auto",
        //padding: "1.5rem 0 0.5rem 1rem",
        // margin: "0 3rem 0 0",
        color: color,
        zIndex: 10,
        overflow: "visible"
      }}
    >
      <span style={{ display: "flex", flexFlow: "column nowrap" }}>
        <h1 style={{ color: color }}>
          {title2 ? (
            <Fragment>
              <span style={{ display: "flex", flexFlow: "row wrap" }}>
                <span
                  style={{
                    marginRight: ".6rem",
                    color: color
                  }}
                >
                  {title1}
                </span>
                <span
                  style={{
                    color: color
                  }}
                >
                  {title2}
                </span>
              </span>
            </Fragment>
          ) : (
            title
          )}
        </h1>
        <h3 style={{ color: color }}>{subtitle}</h3>
      </span>
      {children}
    </div>

    /*   <div
        style={{
          overflow: "visible",
          height: "1px",
          width: "auto",
          margin: "0 3rem 0 0",
          zIndex: 10
        }}
      >
        <div
          style={{
            height: "1rem",
            background: `linear-gradient(0deg, transparent 0%, ${background} 90%)`
          }}
        />
      </div>
        </Fragment>*/
  );
});

export const ButtonLink = memo(function ButtonLink({
  line1,
  line2,
  url,
  color
}) {
  const text = {
    x: 0,
    y: 1,
    textLength: 80,
    fontFamily: "sans-serif",
    size1: 16,
    size2: 18,
    size3: 16
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
        height: "min-content" //"48px"
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
          width: "auto"
        }}
      >
        {line1}
      </span>
      <span
        style={{
          color: { color },
          fontFamily: text.fontFamily,
          fontSize: `${text.size2}px`,
          width: "auto",
          marginLeft: ".1rem"
        }}
      >
        {line2}
        <span
          style={{
            width: "min-content",
            color: { color },
            fontFamily: text.fontFamily,
            fontSize: `${text.size1}px`,
            margin: "0 0.1rem 0 .2rem"
          }}
        >
          ↗
        </span>
      </span>
    </a>
  );
});
/*
<svg
        width="120"
        height="48"
        viewBox="0 0 120 48"
        preserveAspectRatio="xMinYMin meet"
      >
        <text
          textLength={text.textLength}
          fontSize={text.size1}
          fontFamily={text.fontFamily}
          fill={color}
          dominantBaseline="hanging"
          x={text.x}
          y={text.y}
        >
          {line1}
        </text>
        <text
          textLength={text.textLength}
          fontSize={text.size2}
          fontFamily={text.fontFamily}
          fill={color}
          dominantBaseline="hanging"
          x={text.x}
          y={text.y}
          dy={18}
        >
          {line2}
        </text>
        <text
          fontSize={text.size3}
          fontFamily={text.fontFamily}
          fill={color}
          dominantBaseline="hanging"
          x={text.x}
          y={text.y}
          dy={20}
          dx={82}
        >
          ↗
        </text>
      </svg>
*/
