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

];

//export const samplePaths = samplePages.map((item, index) => item.path);

export function PageCulture(props) {
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
                        src="https://sites.google.com/view/culture-analysis/home"
                        allowtransparency="true"
                        background="none"
                    />
                </div>
            </div>
        </PageContainer>
    );
}


