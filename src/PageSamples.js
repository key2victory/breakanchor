import { memo, useState, useEffect } from "react";

export const samplePages = [
  {
    title: "Clearance Tracker",
    path: "clearance-tracker",
    src: "./samples/ClearanceTrackerUnframed/index.html",
    devices: ["desktop"],
  },
  {
    title: "Compliance",
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

function PageSample({ index }) {
  return (
    <div className="main-content">
      <iframe
        title="Sample"
        name="mockframe"
        className=""
        style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
        src={samplePages[index].src}
      />{" "}
    </div>
  );
}

export const PageSample0 = () => <PageSample index={0} />;

export const PageSample1 = () => <PageSample index={1} />;

export const PageSample2 = () => <PageSample index={2} />;

export const PageSample3 = () => <PageSample index={3} />;

export const PageSample4 = () => <PageSample index={4} />;
