import { memo, useState, useEffect } from "react";
//import { Anchor, Button, PageHeader } from "grommet";
import { Header, ButtonLink } from "./PageElements";

export const samplePages = [
  {
    title: "Clearance Tracker",
    path: "clearance-tracker",
    src: "./samples/ClearanceTrackerUnframed/index.html",
    devices: ["desktop"],
    tags: ["med"],
  },
  {
    title: "Compliance Works",
    path: "compliance",
    src: "./samples/ComplianceUnframed/index.html",
    devices: ["desktop"],
    tags: ["med"],
  },
  {
    title: "Conference Manager",
    path: "conference-manager",
    src: "./samples/ConferenceManagerUnframed/index.html",
    devices: ["desktop"],
    tags: ["high"],
  },
  {
    title: "Interview Kiosk",
    path: "interview-kiosk",
    src: "./samples/InterviewKioskUnframed/index.html",
    devices: ["tablet"],
    tags: ["high"],
  },
  {
    title: "Lead Time Manager",
    path: "lead-time-manager",
    src: "./samples/LTMUnframed/index.html",
    devices: ["desktop"],
    tags: ["low"],
  },
];

export const samplePaths = samplePages.map((item, index) => item.path);

function PageSample(props) {
  return (
    <div className="sample-content">
      <Header
        title={samplePages[props.index].title}
        subtitle=""
        color="hsl(0,0%,70%)"
        style={{ gridColumn: "content / span 1", gridRowStart: "title" }}
      ></Header>{" "}
      {/* <PageHeader
                    title="Page Title"
                    subtitle="A subtitle for the page."
                    parent={<Anchor label="Parent Page" />}
                    actions={<Button label="Edit" primary />}
                  />*/}{" "}
      <iframe
        title="Sample"
        name="mockframe"
        className=""
        style={{
          gridRow: "content / span 1",
          width: "100%",
          height: "100%",
        }}
        src={samplePages[props.index].src}
      />{" "}
    </div>
  );
}

export const PageSample0 = () => <PageSample index={0} />;

export const PageSample1 = () => <PageSample index={1} />;

export const PageSample2 = () => <PageSample index={2} />;

export const PageSample3 = () => <PageSample index={3} />;

export const PageSample4 = () => <PageSample index={4} />;