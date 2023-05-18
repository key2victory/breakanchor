import { useState } from "react";
import Header from "./Header";
import HeroContainer from "./HeroContainer";
import ScrollingContent from "./ScrollingContent";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { resume, pages } from "./Pages";
import "./styles.css";

export default function App() {
  return (
    <div
      className="App"
      style={{
        background: "hsl(0,0%,100%)"
        //  "linear-gradient(0deg, hsl(0,0%,100%) 30%, hsl(0,0%,50%) 30%)"
      }}
    >
      <Header />
      <HeroContainer />

      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <ScrollingContent
              title={resume.title}
              subtitle={resume.subtitle}
              background={resume.background1}
              column={resume.content}
            />
          }
        />
        {pages.map((item, index) => (
          <Route
            key={index}
            exact
            path={item.path}
            element={
              <ScrollingContent
                title={pages[index].title}
                subtitle={pages[index].subtitle}
                background={pages[index].background1}
                row={pages[index].content}
              />
            }
          />
        ))}
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
                style={{
                  background: pages[index].background1,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 0,
                  //  width: "40%"
                  height: "40%"
                }}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
}
