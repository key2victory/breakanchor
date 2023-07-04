import { memo, useState, useEffect } from "react";
import { Header, ButtonLink } from "./PageElements";

export const samplePages = [
  {
    title: "Clearance Tracker",
    path: "clearance-tracker",
    src: "./samples/ClearanceTrackerUnframed/index.html",
    image: "./img/[].png",
    aspectRatio: "1678 / 1153",
    devices: ["L"],
    tags: ["med"],
  },
  {
    title: "Compliance Works",
    path: "compliance",
    src: "./samples/ComplianceUnframed/index.html",
    image: "./img/[].png",
    aspectRatio: "1640 / 1024",
    devices: ["L"],
    tags: ["med"],
  },
  {
    title: "Conference Manager",
    path: "conference-manager",
    src: "./samples/ConferenceManagerUnframed/index.html",
    image: "./img/[].png",
    aspectRatio: "1680 / 1105",
    devices: ["L"],
    tags: ["high"],
  },
  {
    title: "Interview Kiosk",
    path: "interview-kiosk",
    src: "./samples/InterviewKioskUnframed/index.html",
    image: "./img/[].png",
    aspectRatio: "3 / 2", //"2048 / 1536",
    devices: ["M"],
    tags: ["high"],
  },
  {
    title: "Lead Time Manager",
    path: "lead-time-manager",
    src: "./samples/LTMUnframed/index.html",
    image: "./img/[].png",
    aspectRatio: "1280 / 800", //357/224 //100% /62.5%
    devices: ["L"],
    tags: ["low"],
  },
];

export const samplePaths = samplePages.map((item, index) => item.path);

function PageSample(props) {
  const color1 = "hsl(0,0%,100%)";
  const color2 = "hsl(0,0%,95%)";
  return (
    <div className="sample-content">
      <Header
        title={samplePages[props.index].title}
        subtitle=""
        color="hsla(0,0%,0%,40%)"
        style={{
          gridColumn: "content / span 1",
          gridRowStart: "title",
          padding: "0 0 1rem 0",
        }}
      ></Header>
      {/* <div
        className="page-bg"
        style={{
          background: `linear-gradient(31deg, ${color1} 25%, ${color2} 0, ${color2} 50%, ${color1} 0, ${color1} 75%, ${color2} 0) center / 50px 30px`,
        }}
      />*/}
      <div
        style={{
          gridRow: "content / span 1",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            aspectRatio: samplePages[props.index].aspectRatio,
            margin: "0 auto auto 0",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <iframe
            title="Sample"
            name="mockframe"
            className="sample"
            style={{}}
            width="100%"
            height="100%"
            src={samplePages[props.index].src}
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export const PageSample0 = () => <PageSample index={0} />;

export const PageSample1 = () => <PageSample index={1} />;

export const PageSample2 = () => <PageSample index={2} />;

export const PageSample3 = () => <PageSample index={3} />;

export const PageSample4 = () => <PageSample index={4} />;
