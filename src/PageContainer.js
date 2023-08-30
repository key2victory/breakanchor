import { memo, useState, useEffect, Fragment } from "react";
import { Hero } from "./Hero";
import { useOutletContext } from "react-router-dom";
import PageAbout from "./PageAbout";
import { PageAudiohand } from "./PageAudiohand";
import { PageCalendar } from "./PageCalendar";

import { PageLockOut } from "./PageLockOut";
import { PageProjects } from "./PageProjects";
import { PagePresentations } from "./PagePresentations";
import { PageLearning } from "./PageLearning";
import { PageFlashcards } from "./PageFlashcards";
import { PageFinance } from "./PageFinance";
import { PageConference } from "./PageConference";
import ReactGA from "react-ga4";


const PageContent = ({ title }) => {
    const pageList = {
        audiohand: PageAudiohand,
        calendar: PageCalendar,
        loto: PageLockOut,
        projects: PageProjects,
        presentations: PagePresentations,
        asl: PageFlashcards,
        finance: PageFinance,
        conference: PageConference
    }
    const Content = pageList[title];
    return (<Content />)
}

export const PageContainer = memo(function PageContainer({ layout = "hero", background = "ice", className = "col nowrap top stretch", heroComponent = "", heroInteraction = false, maxWidth = 1200, children }) {
    const [media, setMedia] = useOutletContext();
    useEffect(() => {
        console.log("detected media change in PageContainer")
    }, [media])

    useEffect(() => {
        // Send pageview with a custom path
        ReactGA.send({ hitType: "pageview", page: "/projects", title: "Projects Page view" });

    }, []);

    const swatches = {
        ice: `linear-gradient(90deg, hsla(0, 0%, 100%, 0%) 0%, hsla(0, 0%, 100%, 100%) 100%), linear-gradient(45deg, hsl(0, 0%, 80%) 0%, hsl(0, 0%, 60%) 100%)`,
        cream: `linear-gradient(90deg, hsla(39, 0%, 100%, 0%) 0%, hsla(40, 0%, 100%, 100%) 100%), linear-gradient(45deg, hsl(39, 14%, 80%) 0%, hsl(40, 7%, 60%) 100%)`,
        beige: "linear-gradient(45deg, hsl(39, 14%, 80%) 0%, hsl(40, 7%, 60%) 100%)",
        mocha: "linear-gradient(45deg, hsl(39, 14%, 72%) 0%, hsl(40, 7%, 39%) 100%)"
    }
    const pageLayout = {
        hero: {
            xl: { gridTemplateColumns: "minmax(0,1fr) [content] minmax(589px,1000px) [hero] minmax(414px,800px) minmax(0,1fr)", gridTemplateRows: "100%", padding: "0 2rem", columnGap: "2rem" },
            lg: { gridTemplateColumns: "[content] minmax(0,60%) [hero] minmax(0,40%)", gridTemplateRows: "100%", maxWidth: "100%", padding: "0 2rem 0rem 2rem", columnGap: "2rem" },
            md: { gridTemplateColumns: "[content] minmax(400px,800px)", gridTemplateRows: "100%", maxWidth: "100%", padding: "0 1.5rem",/*"0 4vw",*/ columnGap: "0" },
            sm: { gridTemplateColumns: "[content] 100%", gridTemplateRows: "100%", maxWidth: "100%", padding: "0 1.5rem",/*"0 4vw 0 4vw",*/ columnGap: "0" },
            xs: { gridTemplateColumns: "[content] 100%", gridTemplateRows: "100%", maxWidth: "100%", padding: "0 1rem 0 1rem", columnGap: "0rem" },
        },
        center: {
            xl: { gridTemplateColumns: "[content] 100%", gridTemplateRows: "100%", padding: "0 2rem", columnGap: "2rem" },
            lg: { gridTemplateColumns: "[content] 100%", gridTemplateRows: "100%", maxWidth: "100%", padding: "0 2rem 0rem 2rem", columnGap: "2rem" },
            md: { gridTemplateColumns: "[content] 100%", gridTemplateRows: "100%", maxWidth: "100%", padding: "0 1.5rem",/*"0 4vw",*/ columnGap: "0" },
            sm: { gridTemplateColumns: "[content] 100%", gridTemplateRows: "100%", maxWidth: "100%", padding: "0 1.5rem",/*"0 4vw 0 4vw",*/ columnGap: "0" },
            xs: { gridTemplateColumns: "[content] 100%", gridTemplateRows: "100%", maxWidth: "100%", padding: "0 1rem 0 1rem", columnGap: "0rem" },
        },
        //center: "listpage-content",
        // left: "listpage-content"
    }

    const scrollContent = {
        hero: {
            xl: { padding: "64px 0 4rem 0", gap: "1rem" },
            lg: { padding: "64px 0 4rem 0", gap: "1rem" },
            md: { padding: "64px 0 4rem 0", gap: "1rem" },
            sm: { padding: "1rem 0 4rem 0", gap: "1rem" },
            xs: { padding: "1rem 0 4rem 0", gap: "1rem" },
        },
        center: {
            xl: { padding: "64px 0 4rem 0", gap: "1rem", margin: "0 auto 0 auto", maxWidth: `${maxWidth}px` },
            lg: { padding: "64px 0 4rem 0", gap: "1rem", margin: "0 auto 0 auto", maxWidth: `${maxWidth}px` },
            md: { padding: "64px 0 4rem 0", gap: "1rem", margin: "0 auto 0 auto", maxWidth: `min(${maxWidth}px,100%)` },
            sm: { padding: "1rem 0 4rem 0", gap: "1rem", margin: "0 auto 0 auto", maxWidth: `min(${maxWidth}px,100%)` },
            xs: { padding: "1rem 0 4rem 0", gap: "1rem", margin: "0 auto 0 auto", maxWidth: `min(${maxWidth}px,100%)` },
        }

        // hero: "scroll-content left",
        // center: "scroll-content",
        // left: "scroll-content left",
    }
    return (
        <div className="page-container col top center"
            style={{
                position: "relative",
                gridColumn: "content / span 1",
                gridRow: "content / span 1",
                minHeight: 0,
                minWidth: 0,
                transitioProperty: "padding, margin",
                transitionDuration: "2s",
                transitionTimingFunction: "linear",
                transitionOrigin: "center",
                color: "hsla(0,0%,100%,80%)"
            }}
        >
            <div className="grid-scroll-zone grid"
                style={{
                    //  position: "absolute",
                    //  top: 0, right: 0, bottom: 0, left: 0,
                    width: "100%",
                    height: "100%",
                    maxHeight: "100%",
                    overflowX: "hidden",
                    overflowY: "scroll",
                    transitioProperty: "padding, margin",
                    transitionDuration: "2s",
                    transitionTimingFunction: "linear",
                    transitionOrigin: "center",
                    // minWidth: 0,
                    ...pageLayout[layout][media]
                }}>
                <div className="col top"//"scroll-content" 
                    style={{
                        gridColumn: "content / span 1", gridRow: "1 / span 1", width: "100%", height: "max-content", ...scrollContent[layout][media]
                    }} >
                    {/* <PageContent title={component} />*/}
                    {children}
                </div>
            </div>
            {layout === "hero" ? (
                <div className="grid-hero grid"// tablet-hide phablet-hide mobile-hide"
                    style={{
                        display: ["xl", "lg"].includes(media) ? "grid" : "none",
                        position: "absolute",
                        pointerEvents: "none",
                        width: "100%",
                        height: "auto",
                        // alignItems: "start",
                        //  minWidth: 0,
                        ...pageLayout[layout][media]
                    }}>
                    <div className="col top center" style={{
                        gridColumn: "hero / span 1", gridRow: "1 / span 1", padding: "calc(64px + 2rem) 0 0 0",
                        pointerEvents: heroInteraction === false ? "none" : "auto",

                    }}>
                        <Hero component={heroComponent} className="" />
                    </div>
                </div>) : null}
        </div >

    )

});