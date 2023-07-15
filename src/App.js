import { Fragment, useEffect, useState } from "react";
import AppNav, { AppHeader, AppSizer, NavPanel } from "./AppNav";
import { Outlet } from "react-router-dom";
import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks";
import { IconTag } from "./PageElements";

import "./styles.css";
import "./styles_utility.css";
import "./styles_mobile.css";
import "./styles_phablet.css";
import "./styles_tablet.css";
import "./styles_laptop.css";
import "./styles_desktop.css";

export default function App(props) {
  const [showNav, setShowNav] = useState(false);
  const [media, setMedia] = useState(currentSize);
  const [browserSize, setBrowserSize] = useState();
  const deviceMin = {
    sm: 400,
    md: 800,//768,
    lg: 1100,//992,
    xl: 1400//1200,
  }

  const size = {
    xs: useMediaQuery(`only screen and (max-width : ${deviceMin.sm - 1}px)`),
    sm: useMediaQuery(`only screen and (min-width : ${deviceMin.sm}px) and (max-width :  ${deviceMin.md - 1}px)`),
    md: useMediaQuery(`only screen and (min-width : ${deviceMin.md}px) and (max-width :  ${deviceMin.lg - 1}px)`),
    lg: useMediaQuery(`only screen and (min-width : ${deviceMin.lg}px) and (max-width :  ${deviceMin.xl - 1}px)`),
    xl: useMediaQuery(`only screen and (min-width : ${deviceMin.xl}px)`)
  }

  const currentSize = Object.keys(size)[Object.values(size).indexOf(true)];

  const deviceChips = {
    xs: { icon: "mobile", label: "xsmall", hide: [] },
    sm: { icon: "phablet", label: "small", hide: ["xs"] },
    md: { icon: "tablet", label: "medium", hide: ["xs", "sm"] },
    lg: { icon: "laptop", label: "large", hide: ["xs", "sm", "md"] },
    xl: { icon: "desktop", label: "xlarge", hide: ["xs", "sm", "md", "lg"] },
  }
  const sizeOptions = Object.keys(size).slice(0, Object.keys(size).indexOf(currentSize))
  console.log(currentSize);
  const browserMeasure = useWindowSize();
  useEffect(() => {
    if (media === undefined) {
      setMedia(currentSize)
    } else if (browserSize !== browserMeasure) {
      setBrowserSize(browserMeasure);
      setMedia(currentSize)
    }
  }, [browserMeasure])

  const pageLayout = {
    xl: { gridTemplateColumns: "[side] 300px [content] minmax(0,1fr)", gridTemplateRows: "[content] 100%", maxWidth: "100%", margin: "0 auto 0 auto" },
    lg: { gridTemplateColumns: "[side] 260px [content] minmax(0,1fr)", gridTemplateRows: "[content] 100%", maxWidth: `${deviceMin.xl - 1}px`, margin: "0 auto 0 auto" },
    md: { gridTemplateColumns: "[side] 220px [content] minmax(0,1fr)", gridTemplateRows: "[content] 100%", maxWidth: `${deviceMin.lg - 1}px`, margin: "0 auto 0 auto" },
    sm: { gridTemplateColumns: "[content] 100%", gridTemplateRows: "[header] 64px [content] 1fr", maxWidth: `${deviceMin.md - 1}px`, margin: "0 auto 0 auto" },
    xs: { gridTemplateColumns: "[content] 100%", gridTemplateRows: "[header] 64px [content] 1fr", maxWidth: `${deviceMin.sm - 1}px`, margin: "0 auto 0 auto" },
  }

  //const coolTeal = "hsla(174,57%,58%,100%)";
  //  console.log(pageLayout[media], media);
  return (
    <div //className="App" 
      id="wallpaper"
      style={{
        width: "100vw", height: "100vh",
        backgroundImage: "url(./img/anchor-tile.png)",
        backgroundSize: "5vh",//"48px",// 

        //backgroundColor: "hsl(174,25%,60%)",
      }}>
      <div
        id="app"
        style={{
          position: "relative",
          display: "grid",
          ...pageLayout[media],
          background: "hsl(39, 14%, 80%)",
          transitioProperty: "all",
          transitionDuration: "2s",
          transitionTimingFunction: "linear",
          transitionOrigin: "center",
          overflow: "hidden",
          // filter: "blur(.5rem)",
          boxShadow: "-4px 0px 100px 4px hsla(0, 0%, 0%, 10%), 4px 0px 100px 4px hsla(0, 0%, 0%, 10%)"
        }}>
        <AppHeader
          // hide={[size.xl, size.lg, size.md].some(Boolean)}
          media={media}
          onMenuClick={() => {
            setShowNav(true);
          }} />
        <AppSizer height="64px">
          {sizeOptions.length > 1 ?
            <Fragment>
              {sizeOptions.map((item, index) => (
                < IconTag key={`device-tag-${index}`} icon={deviceChips[item].icon} label={deviceChips[item].label} bgColor={media === sizeOptions[index] ? "hsl(39, 14%, 90%)" : "hsl(39, 14%, 80%)"} hoverColor={media === sizeOptions[index] ? "hsl(39, 14%, 90%)" : "hsl(39, 14%, 85%)"} style={{ display: deviceChips[item].hide.includes(currentSize) ? "none" : "flex" }} onClick={() => {
                  setMedia(item)
                }} />
              ))}
              <IconTag icon={deviceChips[currentSize].icon} label={deviceChips[currentSize].label} bgColor={media === currentSize ? "hsl(39, 14%, 90%)" : "hsl(39, 14%, 80%)"} hoverColor={media === currentSize ? "hsl(39, 14%, 90%)" : "hsl(39, 14%, 85%)"} onClick={() => { setMedia(currentSize) }} />
            </Fragment> : null}
        </AppSizer>

        <NavPanel //background="hsla(0,0%,0%,50%)" 
          media={media}
        />
        <AppNav
          media={media}
          showNav={showNav}
          onClickExit={() => {
            setShowNav(false);
          }}
        />
        <Outlet
          context={[media, setMedia]}
          style={{ gridColumn: "content / span 1", gridRow: "content / span 1" }}
        />
      </div>
    </div>
  );
}
