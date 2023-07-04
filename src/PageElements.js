import { memo, useState, useEffect, Fragment } from "react";

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
      border: "none",
      background: bgColor,
      color: textColor,
    } : {
      border: `2px solid ${borderColor}`,
      background: "hsla(0,0%,0%,0%)",
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
  solid = true,
}) {
  const IconList = {
    mobile: MdOutlineSmartphone,
    tablet: MdOutlineTablet,
    desktop: MdOutlineLaptop,
    // L: MdOutlineComputer,
    responsive: MdDevices,
    presentation: RiLayoutTopLine, // RiSlideshow3Line,
    reactjs: RiReactjsFill,
    showcase: RiLayout5Line,
    high: RiEdit2Line, //RiLayout5Line,
    med: RiEdit2Line, //RiLayout5Line,
    low: RiEdit2Line, //RiLayout5Line
  };
  const labelList = {
    reactjs: "react app",
    presentation: "speaker presentation",
    high: "hi-fi mock",
    med: "med-fi mock",
    low: "lo-fi mock",
    sm: "mobile",
    md: "tablet",
    lg: "desktop"
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
      <span> {label} </span>
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

  const IconList = {
    presentation: RiLayoutTopLine, // RiSlideshow3Line,
    reactjs: RiReactjsFill,
    showcase: RiLayout5Line,
    high: RiEdit2Line, //RiLayout5Line,
    med: RiEdit2Line, //RiLayout5Line,
    low: RiEdit2Line, //RiLayout5Line
  };

  const Icon = (icon) => IconList[icon] !== undefined ? IconList[icon] : RiDeviceLine;
  const labelList = {
    S: "mobile",
    M: "tablet",
    L: "desktop",
  };
  const getLabel = (icon) => labelList[icon] !== undefined ? labelList[icon] : icon;
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
      />
      {devices.map((item, index) => (
        <span
          key={index}
          style={{
            ...labelStyle,
            gridColumn: "1 / span 1",
          }}
        >
          {getLabel(item)}
        </span>
      ))}
    </ChipTag>
  );
});

export const Note = memo(function Note({
  title,
  description,
  children,
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
      <h4> {title} </h4>
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
        />
        {description}
      </span>
    </div>
  );
});

export const NoteCard = memo(function NoteCard({
  title,
  children,
  background,
  color = "black",
  className,
  style,
}) {
  return (
    <div
      className={`card ${className}`}
      style={{ background: background, color: color, ...style }}
    >
      <h4> {title} </h4>
      {children}
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

export const ImageCard = memo(function ImageCard({
  imgSrc,
  children,
  imageBackground = "hsl(0,0%,80%)"
}) {

  return (
    <div className="card row wrap" style={{
      background: "hsl(0,0%,100%)",
      width: "100%",
      height: "auto",
      maxWidth: "900px",
      minHeight: "auto",
      overflow: "hidden",
      gap: "1rem",
      flexShrink: 0
    }}>

      <div className="col center" style={{
        flexBasis: 0,
        width: "200px",
        height: "200px",
        minWidth: "200px",
        maxWidth: "100%",
        minHeight: "200px",
        //  maxHeight: "100px",
        overflow: "hidden",
        background: imageBackground,
        // backgroundSize: "cover",
        flexGrow: 1,
        flexShrink: 3,
      }}>
        <img className="image" src={imgSrc} alt="" width="auto" height="auto" />
      </div>

      <div className="col top" style={{
        width: "100%",
        height: "max-content",
        minWidth: "60%",
        maxWidth: "100%",

        minHeight: "max-content",

        // padding: "1rem",
        gap: ".5rem",
        flexGrow: 3,
        flexShrink: 0,
        flexBasis: "300px"
      }}>
        {children}


      </div>
    </div >

  )
});

export const PageContainer = memo(function PageContainer({ layout = "hero", maxWidth = "800px", background = "cream", className = "col nowrap top stretch", children }) {
  const swatches = {
    cream: `linear-gradient(90deg, hsla(39, 0%, 100%, 0%) 0%, hsla(40, 0%, 100%, 100%) 100%), linear-gradient(45deg, hsl(39, 14%, 80%) 0%, hsl(40, 7%, 60%) 100%)`,
    beige: "linear-gradient(45deg, hsl(39, 14%, 80%) 0%, hsl(40, 7%, 60%) 100%)",
    mocha: "linear-gradient(45deg, hsl(39, 14%, 72%) 0%, hsl(40, 7%, 39%) 100%)"
  }
  const pageLayout = {
    hero: "main-content",
    center: "listpage-content",
  }
  return (
    <div
      className="listpage-content"
      style={{ background: swatches[background] !== undefined ? swatches[background] : background }}
    >
      <div className="scroll-zone">
        <div className={`scroll-content ${className}`} style={{
          width: "100%",
          minWidth: 0,
          maxWidth: maxWidth,
          margin: "0 auto 0 auto",
          // gap: "inherit"
        }}>
          {children}
        </div>
      </div>
    </div>)

});

export const Group = memo(function Group({ children, className, style }) {
  return (
    <div
      className={`group ${className}`}
      style={{
        ...style,
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
          {title2 ? (
            <Fragment>
              <span style={{ display: "flex", flexFlow: "row wrap" }}>
                <span
                  style={{
                    marginRight: ".6rem",
                    color: color,
                  }}
                >
                  {title1}
                </span>
                <span
                  style={{
                    color: color,
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
        <h3 style={{ color: color }}> {subtitle} </h3>
      </span>
      {children}
    </div>
  );
});

export const ButtonLink = memo(function ButtonLink({ line1, line2, url, color }) {
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
          color: color,
          fontFamily: text.fontFamily,
          fontSize: `${text.size1}px`,
          width: "auto",
        }}
      >
        {line1}
      </span>
      <span
        style={{
          color: color,
          fontFamily: text.fontFamily,
          fontSize: `${text.size2}px`,
          width: "auto",
          marginLeft: ".1rem",
        }}
      >
        {line2}
        <span
          style={{
            width: "min-content",
            color: color,
            fontFamily: text.fontFamily,
            fontSize: `${text.size1}px`,
            margin: "0 0.1rem 0 .2rem",
          }}
        >
          ↗
        </span>
      </span>
    </a>
  );
});

