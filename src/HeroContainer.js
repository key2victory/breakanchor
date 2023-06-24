import { Fragment } from "react";

import { Sonim } from "./Sonim";
//import { ApplePhone } from "./ApplePhone";
import { DeviceFrame } from "./DeviceFrame";
import Room from "./Room";
import { Header, ButtonLink } from "./PageElements";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { pages } from "./Pages";

//export const HeroContainer = memo(function HeroContainer(props) {
export default function HeroContainer({ children }) {
  return (
    <div className="hero">
      {children}
      {/*  <Routes>
        <Route exact path={"/"} element={<About />} />
        <Route exact path={pages[0].path} element={<Room />} />
        <Route
          exact
          path={pages[1].path}
          element={
            <iframe
              title={pages[1].title}
              src="https://docs.google.com/presentation/d/e/2PACX-1vRJZQGOASDM7XWmFRaq4Oc_qd6sVKGX6NThZ4oV7XouyA0tL0C1Cjndh4RUMkgXmUDybimNRvd1kJVc/embed?start=true&loop=false&delayms=3000"
              frameborder="0"
              width="100%"
              // height="299"
              style={{ aspectRatio: "480 / 299" }}
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          }
        />
        <Route exact path={pages[2].path} element={<ApplePhone />} />
        <Route exact path={pages[3].path} element={<Sonim />} />
      </Routes>*/}
    </div>
  );
}
