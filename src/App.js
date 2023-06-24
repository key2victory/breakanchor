import { useState } from "react";
import AppNav, { AppHeader } from "./AppNav";

import ScrollingContent from "./ScrollingContent";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Outlet
} from "react-router-dom";
/*import { resume, pages } from "./Pages";
import { Page_PriorityCalendar } from "./PagePriorityCalendar";
import { Page_Audiohand } from "./PageAudiohand";
import { Page_LockOut } from "./PageLockOut";
import { Page_Intuitive } from "./PageIntuitive";
import PageAbout from "./PageAbout";*/
import "./styles.css";
import "./styles_mobile.css";
import "./styles_tablet.css";
import "./styles_desktop.css";

export default function App(props) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      className="App"
      style={
        {
          //background: "hsl(0,0%,100%)"
          //  "linear-gradient(0deg, hsl(0,0%,100%) 30%, hsl(0,0%,50%) 30%)"
        }
      }
    >
      <AppHeader
        onMenuClick={() => {
          setShowNav(true);
        }}
      />
      <AppNav
        showNav={showNav}
        onClickExit={() => {
          setShowNav(false);
        }}
      />

      <Outlet />

      {/* <HeroContainer />

      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <PageAbout />
   
          }
        />
        <Route
          exact
          path={pages[0].path}
          element={
            <Page_PriorityCalendar
              title={pages[0].title}
              subtitle={pages[0].subtitle}
              background={pages[0].background1}
            />
          }
        />
        <Route
          exact
          path={pages[1].path}
          element={
            <Page_Intuitive
              title={pages[1].title}
              subtitle={pages[1].subtitle}
              background={pages[1].background1}
            />
          }
        />
        <Route
          exact
          path={pages[2].path}
          element={
            <Page_Audiohand
              title={pages[2].title}
              subtitle={pages[2].subtitle}
              background={pages[2].background1}
            />
          }
        />
        <Route
          exact
          path={pages[3].path}
          element={
            <Page_LockOut
              title={pages[3].title}
              subtitle={pages[3].subtitle}
              background={pages[3].background1}
              row={pages[3].content}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <div
              style={{
                background: resume.background1,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 0,
                height: "70%"
              }}
            />
          }
        />
        {pages.map((item, index) => (
          <Route
            key={index}
            exact
            path={item.path}
            element={
              <div
                key={`navs${index}`}
                style={{
                  background: pages[index].background,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 0,
                  //  width: "40%"
                  height: "60%"
                }}
              />
            }
          />
        ))}
      </Routes>
          */}
    </div>
  );
}
