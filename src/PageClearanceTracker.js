import { memo, useState, useEffect } from "react";
import { Header, ButtonLink } from "./PageElements";
import { PageContainer } from "./PageContainer";
import { useOutletContext } from "react-router-dom";




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
    title: "Conference Manager",
    path: "conference-manager",
    src: "./samples/ConferenceManagerUnframed/index.html",
    image: "./img/[].png",
    aspectRatio: "1680 / 1105",
    devices: ["L"],
    tags: ["high"],
  },


];

//export const samplePaths = samplePages.map((item, index) => item.path);

export function PageClearanceTracker(props) {
  const [media, setMedia] = useOutletContext();
  const mediaSize = ["xs", "sm"].includes(media) ? "small" : ["md"].includes(media) ? "medium" : "large";

  return (
    <PageContainer layout="center"
    >
      <Header
        title="Clearance Tracker"
        subtitle="for Global Bechtel Conference"
        color="hsla(0,0%,0%,50%)"
        style={{
          gridColumn: "content / span 1",
          gridRowStart: "title",
          padding: "0 0 1rem 0"
        }}
      ></Header>

      <div
        style={{
          gridRow: "content / span 1",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            aspectRatio: "1678 / 1153",
            margin: "0 auto auto 0",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <iframe
            title="Clearance Tracker"
            name="mockframe"
            className="sample"
            style={{}}
            width="100%"
            height="100%"
            src="./samples/ClearanceTrackerUnframed/index.html"
            allowtransparency="true"
            background="none"
          />
        </div>
      </div>
    </PageContainer>
  );
}

