import { memo, useState, useEffect } from "react";

export const samplePages = [{
        title: "Clearance Tracker",
        path: "/clearance-tracker",
        src: "./samples/ClearanceTrackerUnframed/index.html",
        devices: ["desktop"]
    },
    {
        title: "Compliance",
        path: "/compliance",
        src: "./samples/ComplianceUnframed/index.html",
        devices: ["desktop"],
        tags: ["med"]
    },
    {
        title: "Conference Manager",
        path: "/conference-manager",
        src: "./samples/ConferenceManagerUnframed/index.html",
        devices: ["desktop"],
        tags: ["high"]
    },
    {
        title: "Interview Kiosk",
        path: "/interview-kiosk",
        src: "./samples/InterviewKioskUnframed/index.html",
        devices: ["tablet"],
        tags: ["high"]
    },
    {
        title: "Lead Time Manager",
        path: "/lead-time-manager",
        src: "./samples/LTMUnframed/index.html",
        devices: ["desktop"],
        tags: ["low"]
    }
];

export const PageSample = memo(function PageSample({ index }) {
    return ( <
        div className = "main-content" >
        <
        iframe name = "mockframe"
        className = ""
        style = {
            { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 } }
        src = { sample[index].src }
        />  < /
        div >
    );
});