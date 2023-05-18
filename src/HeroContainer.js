//import { memo } from "react";
import { About } from "./About";
import { Sonim } from "./Sonim";
import { ApplePhone } from "./ApplePhone";
import Room from "./Room";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { pages } from "./Pages";

//export const HeroContainer = memo(function HeroContainer(props) {
export default function HeroContainer({ children }) {
  return (
    <div className="hero">
      <Routes>
        <Route exact path={"/"} element={<About />} />
        <Route exact path={pages[0].path} element={<Room />} />
        <Route exact path={pages[1].path} element={<ApplePhone />} />
        <Route exact path={pages[2].path} element={<Sonim />} />
      </Routes>
    </div>
  );
}
