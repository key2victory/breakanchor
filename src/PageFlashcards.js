import { memo, useEffect, useRef, forwardRef } from "react";
import { Header, ButtonLink, Note, Group, ChipTag } from "./PageElements";
import { FaRegSmileWink } from "react-icons/fa";
import { Hero } from "./Hero";
import { PageContainer } from "./PageContainer";
import { useOutletContext } from "react-router-dom";

export const PageFlashcards = memo(function PageFlashcards({
    title,
    subtitle,
    background,
    row,
    column
}) {
    const [media, setMedia] = useOutletContext();
    const pages = [
        {
            title: "ASL Flashcards",
            path: "flascard",
            src: "https://s6t7to.csb.app/",

            background: "linear-gradient(90deg, #9971B7 40%, #9971B7 100%)"
        }
    ];

    const color1 = "hsl(40,80%,70%)"; //"#9971B7",
    const color2 = "hsl(40,80%,80%)";
    const noteStyle = {
        //  minWidth: "30%",
        //width: "100%",
        maxWidth: "100%",
        // gridColumnEnd: "span 1",
        boxSizing: "border-box"
        // maxWidth: "30%",
        // display: "flex",
        // flexFlow: "column nowrap",
        // flexGrow: 1,
        // flexShrink: 1,
        // flexBasis: "20%",
        // gap: ".75rem"
    };

    return (
        <PageContainer layout="hero" heroComponent="asl" heroInteraction={true}
        >

            <Group className="p col" style={{
                gap: "1rem", margin: "0 auto 0 auto", padding: "0 0 2rem 0",
                // gridTemplateColumns: "1fr 1fr 1fr",
                // gridAutoFlow: "row",
                // gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
                // gridAutoFlow: "column"
                // justifyContent: "stretch",
                // alignItems: "stretch"
            }}>
                <Header
                    title="ASL Flash Cards"
                    subtitle="Animated sign language card deck"
                // color="hsl(0,0%,0%)"
                >
                </Header>


                <Note>
                    <span>My husband and I wanted to try learning a second language together. We chose American Sign Language because we thought it would be handy <FaRegSmileWink size=".9rem" style={{ transform: "translateY(.1rem)", opacity: ".5" }} /> to be able to communicate visually as an alternative to speaking.</span>
                </Note>

                <Hero component="asl" //className="desktop-hide laptop-hide" 
                    style={{
                        width: "100%",
                        display: ["xl", "lg"].includes(media) ? "none" : "block"
                    }}
                />

                {/* <Group
                    className="col"//"desktop-row laptop-row tablet-row phablet-col mobile-col"
                    style={{
                        flexGrow: 1,
                        flexShrink: 1,
                        flexBasis: 0,
                        minWidth: "45%"
                    }}
                >*/}

                <Note>
                    <h4>Use Cases</h4>
                    <ul className="col" style={{
                        gap: ".5rem", margin: 0, padding: "0 0 0 1.5rem"
                    }}>
                        <li>During quiet situations when we don't want to disturb other people by making noise</li>
                        <li>In crowded places or noisy environments when we don't want to shout over competing sounds</li>
                        <li>When friends are having a group conversation and we want to communicate something briefly without interrupting other people who are talking</li>
                    </ul>
                </Note>
                <Note>
                    <h4>Criteria</h4>
                    <ul className="col" style={{
                        gap: ".5rem", margin: 0, padding: "0 0 0 1.5rem"
                    }}>
                        <li>A way to track new words we learn from various sources</li>
                        <li>Quiz or flash cards that allow us to practice words from our learned vocabulary</li>
                        <li>Free or inexpensive</li>
                    </ul>
                </Note>
                <Note>
                    <h4>Problems</h4>
                    <ul className="col" style={{
                        gap: ".5rem", margin: 0, padding: "0 0 0 1.5rem"
                    }}>
                        <li> The ASL learning tools didn't make it easy to track learned vocabulary or add new words from multiple resources. </li>
                        <li>Custom flashcard building tools required multiple UI steps and uploading photos to create each card one at a time.</li>
                        <li> I found one tool that featured spreadsheet integration for bulk entry, but it was very expensive. </li>
                    </ul>
                </Note>
                <Note>
                    <span> I looked for tools to help us learn and practice, wasn't able to find any that met our needs. It occurred to me that I could probably write an easier app myself for quicker and cheaper than I could buy one.</span>
                </Note>

            </Group>

            {/*  <section className="p">
                <p style={{
                    // fontSize: "1.2rem"
                }} >
                    For the first iteration, I forked a flashcard app from <a href="https://codepen.io/dylangggg/pen/YmGMew" target="_blank"
                        rel="noreferrer"><strong>codepen</strong></a> and replaced the text with my own. It was much faster and easier to use urls of images that are already publicly hosted on free ASL learning websites. After test-driving the concept, I wrote my own flashcard app in React, adding filtering and shuffle features.</p>

            </section>*/}

        </PageContainer >
    );
});
 //"https://key2victory.github.io/csb-s6t7to/"//"https://key2victory.github.io/csb-s6t7to/"
/*
              <iframe width="100%" height="500" scrolling="no" title="ReactJS Flashcards - Sign Language" src="https://codepen.io/key2victory/embed/KKxzNMP?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" style={{
                   border: "none",
                   borderRadius: ".5rem",
                   outline: "none",
                   width: "100%", height: "auto", maxWidth: "100%", maxHeight: "500px", aspectRatio: "3 / 4"
               }}>
                   See the Pen <a href="https://codepen.io/key2victory/pen/KKxzNMP">
                       ReactJS Flashcards - Sign Language</a> by Janna (<a href="https://codepen.io/key2victory">@key2victory</a>)
                   on <a href="https://codepen.io">CodePen</a>.
               </iframe>*/