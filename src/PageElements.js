import {memo, useState, useEffect, Fragment} from "react";

import {
  MdOutlineSmartphone,
  MdOutlineTablet,
  MdOutlineLaptop,
  MdOutlineComputer,
  MdDevices,
  MdOutlineDesignServices,
} from "react-icons/md";

import {
  RiDeviceLine,
  RiSlideshow3Line,
  RiReactjsFill,
  RiLayout5Line,
  RiLayoutTopLine,
  RiEdit2Line,
} from "react-icons/ri";

const ChipTag = memo(function ChipTag({
  textColor = "hsla(0,0%,40%,100%)",
  borderColor = "hsla(0,0%,40%,30%)",
  bgColor = "hsla(0,0%,0%,6%)",
  solid = "false",
  children,
}) {
  const chipStyle = solid
    ? {
        border: `2px solid ${borderColor}`,
        background: "hsla(0,0%,0%,0%)",
        color: textColor,
      }
    : {
        border: "none",
        background: bgColor,
        color: textColor,
      };
  return (
    <div
      className="row nowrap center left"
      style={{
        width: "fit-content",
        flexGrow: 0,
        flexShrink: 0,
        gap: ".25rem", //   gap: ".5rem",
        borderRadius: "2rem",
        padding: ".2rem .6rem",
        fontSize: "1rem",
        ...chipStyle,
      }}
    >
      {children}{" "}
    </div>
  );
});

export const IconTag = memo(function IconTag({
  icon,
  textColor = "hsla(0,0%,40%,100%)",
  borderColor = "hsla(0,0%,40%,30%)",
  bgColor = "hsla(0,0%,0%,6%)",
  solid = "false",
}) {
  const IconList = {
    presentation: RiLayoutTopLine, // RiSlideshow3Line,
    reactjs: RiReactjsFill,
    showcase: RiLayout5Line,
    high: RiEdit2Line, //RiLayout5Line,
    med: RiEdit2Line, //RiLayout5Line,
    low: RiEdit2Line, //RiLayout5Line
  };
  const labelList = {
    presentation: "speaker presentation",
    high: "hi-fi mock",
    med: "med-fi mock",
    low: "lo-fi mock",
  };
  const Icon = IconList[icon] !== undefined ? IconList[icon] : RiDeviceLine;
  const label = labelList[icon] !== undefined ? labelList[icon] : icon;

  return (
    <ChipTag
      textColor={textColor}
      borderColor={borderColor}
      bgColor={bgColor}
      solid={solid}
    >
      <Icon />
      <span> {label} </span>{" "}
    </ChipTag>
  );
});

export const DeviceSizes = memo(function DeviceSizes({
  devices,
  textColor = "hsla(0,0%,40%,100%)",
  borderColor = "hsla(0,0%,40%,30%)",
  bgColor = "hsla(0,0%,0%,6%)",
  solid = "false",
}) {
  const labelStyle = {
    width: "100%",
    // height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: ".8rem",
  };
  return (
    <ChipTag
      textColor={textColor}
      borderColor={borderColor}
      bgColor={bgColor}
      solid={solid}
    >
      <RiDeviceLine
        style={{
          // width: "18px",
          //height: "24px",
          flexGrow: 0,
          flexShrink: 0,
        }}
      />{" "}
      {devices.map((item, index) => (
        <span
          key={index}
          style={{
            ...labelStyle,
            gridColumn: "1 / span 1",
          }}
        >
          {item}{" "}
        </span>
      ))}{" "}
    </ChipTag>
  );
});

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
      style={{background: background, color: color, ...style}}
      onClick={() => {
        if (collapse) {
          setOpen(!open);
        }
      }}
    >
      <h4> {title} </h4>{" "}
      <span style={{position: "relative", overflow: "hidden"}}>
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
    <div className="image" style={{...containerStyle}}>
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

export const Column = memo(function Column({children, style}) {
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

export const Group = memo(function Group({children, className, style}) {
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
      <span style={{display: "flex", flexFlow: "column nowrap"}}>
        <h1 style={{color: color}}>
          {" "}
          {title2 ? (
            <Fragment>
              <span style={{display: "flex", flexFlow: "row wrap"}}>
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
        <h3 style={{color: color}}> {subtitle} </h3>{" "}
      </span>{" "}
      {children}{" "}
    </div>
  );
});

export const ButtonLink = memo(function ButtonLink({line1, line2, url, color}) {
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
        width: "max-content",
        height: "min-content",
      }}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <span
        style={{
          color: {color},
          fontFamily: text.fontFamily,
          fontSize: `${text.size1}px`,
          width: "auto",
        }}
      >
        {line1}{" "}
      </span>{" "}
      <span
        style={{
          color: {color},
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
            color: {color},
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
