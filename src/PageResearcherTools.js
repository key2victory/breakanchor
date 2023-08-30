import { memo, useEffect, useRef, forwardRef } from "react";
import { Header, ButtonLink, NoteCard, Group, Note, ImageCell } from "./PageElements";
import { PageContainer } from "./PageContainer";
import { useOutletContext } from "react-router-dom";

export const PageResearcherTools = memo(function PageResearcherTools({
    title,
    subtitle,
    background,
    row,
    column
}) {
    const [media, setMedia] = useOutletContext();
    const mediaSize = ["xs", "sm"].includes(media) ? "small" : ["md"].includes(media) ? "medium" : "large";



    const landscapeStyle = {
        // minWidth: "40%",

        maxWidth: "100%",
        maxHeight: "100%",//"400px",
        gridColumnEnd: mediaSize === "small" ? "span 1" : "span 2",
        gridRow: "auto / span 1"
    }


    const autoStyleGrid = {
        small: { gridTemplateColumns: "100%", gridAutoRows: "min-content", },
        medium: { gridTemplateColumns: "1fr 1fr", gridAutoRows: "min-content", },
        large: { gridTemplateColumns: "1fr 1fr 1fr", gridAutoRows: "min-content", gridColumnGap: "1rem", },
    }

    const autoStyleSpan1 = { gridColumn: "auto / span 1", gridRow: "auto / span 1" }
    const autoStyleSpan2 = {
        small: { gridColumn: "auto / span 1", gridRow: "auto / span 1" },
        medium: { gridColumn: "auto / span 2", gridRow: "auto / span 1" },
        large: { gridColumn: "auto / span 2", gridRow: "auto / span 1" },
    }
    const autoStyleSpan3 = {
        small: { gridColumn: "auto / span 1", gridRow: "auto / span 1" },
        medium: { gridColumn: "auto / span 2", gridRow: "auto / span 1" },
        large: { gridColumn: "auto / span 3", gridRow: "auto / span 1" },
    }


    return (
        <PageContainer layout="center"
        >
            <Header
                title="Researcher Tools"
                subtitle="for National Labs"
                // color="hsla(0,0%,0%,100%)"
                style={{
                    gridColumn: "content / span 1",
                    gridRowStart: "title",
                    padding: "0 0 1rem 0"
                }}
            ></Header>


            <Group className="grid"/*"desktop-row laptop-col tablet-row phablet-col mobile-col"*/
                style={autoStyleGrid[mediaSize]}
            >
                <Note title="Risk Checklist Form" style={autoStyleSpan1}>
                    The original form included 12 assessment items that were visually difficult to answer or review because everything was so close together. The options nested in dropdown selection means it takes at least 24 clicks to complete, making it feel even more tedious.
                </Note>

                <ImageCell className="shadow" src="./img/risk-checklist-before.png" style={{ ...autoStyleSpan2[mediaSize] }} />

                <Note title="">The redesign checklist made it much faster to complete (only 12 clicks) and the color coding on hover helps users recognize the value distinctions slightly faster than the labels alone. Each selected value becomes a read-friendly bar chart that makes it easier to visually scan for review.</Note>
                <div className="col shadow" style={{ gap: "1rem", height: "auto", ...autoStyleSpan1 }}>
                    <ImageCell src="./img/risk-checklist-after1.png" style={{ maxWidth: "500px" }} />
                    <ImageCell src="./img/risk-checklist-after2.png" style={{ maxWidth: "500px" }} />
                    <ImageCell src="./img/risk-checklist-after3.png" style={{ maxWidth: "500px" }} />


                    <iframe src="https://codesandbox.io/embed/bold-sound-lj6bw?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                        className=""
                        style={{
                            border: "none",
                            borderRadius: "1rem",
                            outline: "none",
                            // width: "100%",
                            height: "500px",
                            maxWidth: "500px",
                            maxHeight: "500px",
                            aspectRatio: "1/1",//"3 / 4",
                            overflow: "hidden",
                            background: "hsl(0,0%,0%)",

                        }}
                        title="Risk Checklist"
                        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    />
                </div>
            </Group>

            <Group className="grid"/*"desktop-row laptop-col tablet-row phablet-col mobile-col"*/
                style={autoStyleGrid[mediaSize]}
            >
                <h2 style={{ margin: "2rem 0 0 0", ...autoStyleSpan3[mediaSize] }}>User Interviews & Analysis</h2>
                <ImageCell className="shadow" src="./hub/hub-01.png" style={{ ...autoStyleSpan3[mediaSize] }} />

                <ImageCell className="shadow" src="./hub/hub-02.png" style={{ ...autoStyleSpan2[mediaSize] }} />


                <ImageCell className="shadow" src="./hub/hub-06.png" background="hsl(220,8%,100%)" style={{ ...autoStyleSpan1, height: "100%" }} />
                <ImageCell className="shadow" src="./hub/hub-07.png" background="hsl(220,8%,92%)" style={{ ...autoStyleSpan1, height: "100%" }} />
                <ImageCell className="shadow" src="./hub/hub-08.png" background="hsl(220,8%,92%)" style={{ ...autoStyleSpan1, height: "100%" }} />
                <ImageCell className="shadow" src="./hub/hub-09.png" background="hsl(220,8%,92%)" style={{ ...autoStyleSpan1, height: "100%" }} />
                <ImageCell className="shadow" src="./hub/hub-10.png" background="hsl(220,8%,92%)" style={{ ...autoStyleSpan1, height: "100%" }} />
                <ImageCell className="shadow" src="./hub/hub-11.png" background="hsl(220,8%,92%)" style={{ ...autoStyleSpan1, height: "100%" }} />

            </Group>
        </PageContainer >
    );
})