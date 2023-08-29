import { memo, Fragment, useEffect, useState, useRef } from "react";
import AppNav, { AppHeader, AppSizer, NavPanel } from "./AppNav";
import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks";
import { IconTag } from "./PageElements";
import { GeistProvider, CssBaseline, Page, Image, Grid, Collapse, Card, Text, useTheme } from '@geist-ui/core';
import "./styles.css";
import "./styles_utility.css";
//import "./styles_mobile.css";
//import "./styles_phablet.css";
//import "./styles_tablet.css";
//import "./styles_laptop.css";
//import "./styles_desktop.css";
import ReactGA from "react-ga4";
import { TRACKING_ID, useUmami } from "./AnalyticsTracker";
//import umami from "https://analytics.umami.is/script.js";


export const App = memo(function App(props) {
  const [showNav, setShowNav] = useState(false);
  const [media, setMedia] = useState(currentSize);
  const [browserSize, setBrowserSize] = useState();
  const scrollProgress = useRef({ scrollProgress: 0 });
  const prefersColorScheme = useMediaQuery(`(prefers-color-scheme: light)`) ? "light" : "dark";
  const manualTheme = useRef('light');
  const [themeType, setThemeType] = useState(manualTheme);
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
    /*    themeType.current === 'dark' ? themeType.current = 'light' : themeType.current = 'dark'*/
  }

  console.log("App", "theme", themeType);

  ReactGA.initialize([{ trackingId: TRACKING_ID }])

  let location = useLocation();
  const titleDef = {
    "/": "BreakAnchor",
    "/about": "BreakAnchor - About",
    "/projects": "BreakAnchor - Projects",
    "/presentations": "BreakAnchor - Presentations",
    "/learning": "BreakAnchor - Learning",
    "/projects/audiohand": "BreakAnchor - Projects / Audiohand",
    "/projects/calendar": "BreakAnchor - Projects / Calendar",
    "/projects/clearance-tracker": "BreakAnchor - Projects / Clearance Tracker",
    "/projects/finance": "BreakAnchor - Projects / Finance Monitor",
    "/projects/flashcards": "BreakAnchor - Projects / ASL Flashcards",
    "/projects/gbc": "BreakAnchor - Projects / Conference Manager",
    "/projects/loto": "BreakAnchor - Projects / Lock Out Tag Out",
    "/projects/researcher-tools": "BreakAnchor - Projects / Researcher Tools"
  }
  let pageLocation = titleDef[location.pathname] !== undefined ? titleDef[location.pathname] : "BreakAnchor";


  const selectScrollContainer = document.querySelector("#scroll-container");
  const selectScrollContent = document.querySelector("#scroll-content")
  // const scrollTop = selectScrollContainer.scrollTop;
  // const scrollHeight = selectScrollContainer.scrollHeight;
  // const scrollClientHeight = selectScrollContainer.clientHeight;
  // const scrollMax = selectScrollContainer.scrollHeight - selectScrollContainer.clientHeight;

  const handleScroll = () => {
    const position = Math.min(Math.ceil((selectScrollContainer.scrollTop / (selectScrollContainer.scrollHeight - selectScrollContainer.clientHeight)) * 100), 100);
    /*console.log(
       "SCROLL-TOP: ", selectScrollContainer.scrollTop,
       "SCROLL-HEIGHT: ", selectScrollContainer.scrollHeight,
       "SCROLL-CLIENT: ", selectScrollContainer.clientHeight,
       "SCROLL MAX? ", selectScrollContainer.scrollHeight - selectScrollContainer.clientHeight,
       "SCROLL PROGRESS: ", scrollProgress.current
     );*/

    if (position > scrollProgress.current) {
      scrollProgress.current = position;
    }
  }


  useEffect(() => {
    // Google Analytics
    document.title = pageLocation;
    scrollProgress.current = 0;
    console.log("detected page change and set scroll progress to ", scrollProgress.current)

    ReactGA.send({ hitType: "pageview", page: pageLocation, title: `${pageLocation}` });
    const events = document.querySelectorAll("[class*=umami--click]")

    events.forEach((e) => {
      const classes = e.className.split("--")
      const value = classes[classes.indexOf("click") + 1]
      e.setAttribute("data-umami-event", value)
      e.classList.remove(`umami--click--${value}`);
    })

    if (selectScrollContainer !== "undefined" && selectScrollContainer !== null && selectScrollContent !== "undefined" && selectScrollContent !== null
    ) {
      selectScrollContainer.addEventListener("scroll", handleScroll);
      //  return () => selectScrollContainer.removeEventListener("scroll", handleScroll);
    }
    if (prefersColorScheme) {
      manualTheme.current =
        setThemeType(prefersColorScheme);
    }
  }, [location]);

  useEffect(() => {
    if (scrollProgress.current > 90) {
      console.log("detected scroll progress > 90%");
      useUmami("scrollProgress", { scrollProgress: scrollProgress.current });
    }
  }, [scrollProgress.current])

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

  const themeColors = {
    light: "hsl(0, 100%, 100%)",
    dark: "hsl(0,0%,0%)",
  }

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
  }, [])

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
    <GeistProvider themeType={themeType}>
      <CssBaseline />
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
            background: useTheme().palette.background,//"hsla(0,0%,0%,50%)",//themeColors[themeType],
            transitioProperty: "max-width",
            transitionDuration: "1s",
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
                    ReactGA.event({
                      category: "jmc_button",
                      action: "jmc_button_click",
                      label: `clicked ${item} from App responsive page sizer`, // optional
                      //value: 99, // optional, must be a number
                      //  nonInteraction: true, // optional, true/false
                      // transport: "xhr", // optional, beacon/xhr/image
                    });
                    // umami.track(`${item} sizer button on ${pageLocation}`);
                    setMedia(item);
                  }}
                    className={`umami--click--size-${item}`}
                  // dataUmamiEvent={`${item} sizer button on ${pageLocation}`} 
                  />
                ))}
                <IconTag icon={deviceChips[currentSize].icon} label={deviceChips[currentSize].label} bgColor={media === currentSize ? "hsl(39, 14%, 90%)" : "hsl(39, 14%, 80%)"} hoverColor={media === currentSize ? "hsl(39, 14%, 90%)" : "hsl(39, 14%, 85%)"} onClick={() => {
                  ReactGA.event({
                    category: "jmc_button",
                    action: "jmc_button_click",
                    label: `clicked ${currentSize} from App responsive page sizer`, // optional
                    //value: 99, // optional, must be a number
                    //  nonInteraction: true, // optional, true/false
                    // transport: "xhr", // optional, beacon/xhr/image
                  });
                  // umami.track(`${item} sizer button on ${pageLocation}`);
                  setMedia(currentSize);
                }}// dataUmamiEvent={`${item} sizer button on ${pageLocation}`} 
                />
                <IconTag onClick={switchThemes}>Switch Themes!</IconTag>
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
    </GeistProvider>
  );
});
