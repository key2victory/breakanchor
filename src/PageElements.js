import { memo, useState, useEffect, Fragment } from "react";
import { useHover } from "@uidotdev/usehooks";

import {
  MdOutlineSmartphone,
  MdOutlineTablet,
  MdOutlineLaptop,
  MdOutlineComputer,
  MdDevices,
  // MdOutlineDesignServices,
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
  hoverColor = "hsla(0,0%,0%,10%)",
  solid = "false",
  style,
  children,
  onClick
}) {
  const [ref, hover] = useHover();
  const chipStyle = solid
    ? {
      border: "none",
      background: hover ? hoverColor : bgColor,
      color: textColor,
    } : {
      border: `2px solid ${borderColor}`,
      background: hover ? hoverColor : "hsla(0,0%,0%,0%)",
      color: textColor,
    };
  return (
    <div
      ref={ref}
      className="row nowrap center left"
      style={{
        width: "fit-content",
        flexGrow: 0,
        flexShrink: 0,
        gap: ".25rem", //   gap: ".5rem",
        borderRadius: "2rem",
        padding: ".2rem .6rem",
        fontSize: "1rem",
        cursor: onClick !== undefined ? "pointer" : "auto",
        ...chipStyle,
        ...style
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

export const IconTag = memo(function IconTag({
  icon,
  label,
  textColor = "hsla(0,0%,40%,100%)",
  borderColor = "hsla(0,0%,40%,30%)",
  bgColor = "hsla(0,0%,0%,6%)",
  hoverColor = "hsla(0,0%,0%,10%)",
  solid = true,
  style,
  onClick,
}) {
  const IconList = {
    mobile: MdOutlineSmartphone,
    tablet: MdOutlineTablet,
    laptop: MdOutlineLaptop,
    desktop: MdOutlineComputer,
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
  const iconLabel = labelList[icon] !== undefined ? labelList[icon] : icon;

  return (
    <ChipTag
      textColor={textColor}
      borderColor={borderColor}
      bgColor={bgColor}
      hoverColor={hoverColor}
      solid={solid}
      onClick={onClick}
      style={style}
    >
      <Icon />
      <span> {label !== undefined ? label : iconLabel} </span>
    </ChipTag>
  );
});




export const Note = memo(function Note({
  title,
  description,
  hsize = 4,
  children,
  background = "hsl(40,10%,90%)",//hsl(39, 14%, 80%) 0%, hsl(40, 7%, 60%) 100%)
  color = "black",
  collapse = false,
  container = true,
  style = { gap: ".5rem" },
}) {
  const [open, setOpen] = useState(false);
  const notecardStyle = {
    container: {
      minWidth: "260px",
      flexGrow: 1,
      flexShrink: 1,
      //  flexBasis: "auto",
      flexBasis: "30%",
      background: background, color: color, //padding: "1rem 1.5rem" 
    },
    unbound: { background: "hsl(0,0%,0%,0%)", color: color, padding: "0rem" },
  };
  const H = `h${hsize}`;
  return (
    <section
      className={`col responsive-padding ${container === true ? "shadow" : ""} ${!collapse ? "open" : open ? "open" : ""}`}
      style={{
        ...notecardStyle[`${container === true ? "container" : "unbound"}`], //background: background, color: color, 
        ...style
      }}
      onClick={() => {
        if (collapse) {
          setOpen(!open);
        }
      }}
    >
      {title !== "" && title !== undefined ? (<H>{title}</H>) : null}
      {collapse === true ? (<span style={{ position: "relative", overflow: "hidden" }}>
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
        {children !== "undefined" ? children : description}
      </span>) : children !== "undefined" ? children : description}
    </section>
  );
});

/*export const NoteCard = memo(function NoteCard({
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
});*/

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
      />
      {alt}
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
        // zIndex: 10,
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

export const BulletList = memo(function BulletList({ title, hsize = 4, items, children }) {
  const H = `h${hsize}`;
  return (
    <section className="p col" style={{
      gap: ".75rem", margin: 0, padding: 0
    }}>
      {title !== "" && title !== undefined ? (<H>{title}</H>) : null}
      <ul className="col" style={{
        gap: ".5rem", margin: 0, padding: "0 0 0 1.5rem"
      }}>
        {items !== undefined ? items.map((v, k) => (<li key={k}>{v}</li>)) : children}
      </ul>
    </section >
  )
})
