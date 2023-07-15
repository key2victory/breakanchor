import { memo, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Header, ButtonLink, Group, Note } from "./PageElements";
import { PageContainer } from "./PageContainer";
import { RiCalendarTodoFill, RiStackFill } from "react-icons/ri";
import { MdWavingHand } from "react-icons/md";
import { useOutletContext } from "react-router-dom";

export function PagePresentations(props) {
    const [media, setMedia] = useOutletContext();

    const colorA = "hsl(40,100%,80%)";
    const colorB = "hsl(30,100%,80%)"; //"hsl(0,0%,95%)";


    const EmbedFrame = () => {
        const iframeSize = {
            width: "100%",
            height: "auto",
            minWidth: "280px",
            maxWidth: "400px",
            maxHeight: "262px",
            aspectRatio: "400 / 262"
        }
        return (
            <iframe className="card" style={{
                background: "#fff",
                minWidth: iframeSize.minWidth,
                maxWidth: iframeSize.maxWidth,
                minHeight: iframeSize.minHeight,
                maxHeight: iframeSize.maxHeight,
                aspectRatio: iframeSize.aspectRatio,
                flexGrow: 1,
                flexShrink: 3,
                //flexBasis: 0,
                padding: 0
            }} src="https://docs.google.com/presentation/d/e/2PACX-1vRJZQGOASDM7XWmFRaq4Oc_qd6sVKGX6NThZ4oV7XouyA0tL0C1Cjndh4RUMkgXmUDybimNRvd1kJVc/embed?slide=6" frameborder="0" width={iframeSize.width} height={iframeSize.height} allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        );
    }

    const EmbedImage = ({ src, minImgSize = 200, imageBackground = "hsl(0,0%,80%)", style }) => {
        return (
            <div className="col center"
                style={{
                    // flexBasis: 0,
                    width: media === "xs" ? "100%" : `${minImgSize}px`,
                    height: media !== "xs" ? "100%" : `${minImgSize}px`,
                    minWidth: `${minImgSize}px`,
                    maxWidth: "100%",
                    minHeight: `${minImgSize}px`,
                    //  maxHeight: "100px",
                    overflow: "hidden",
                    // borderRadius: ".5rem",
                    background: `url(${src}), ${imageBackground}`,
                    backgroundSize: media === "xs" ? "auto 100%" : "100% auto",// 100% 100%",

                    backgroundRepeat: "no-repeat",
                    backgroundPosition: media === "xs" ? "top right" : "center",
                    flexGrow: 1,
                    flexShrink: 3,
                    ...style
                    //margin: "1rem"
                    // boxShadow: "2px 2px 2px 4px hsla(0, 0%, 0%, 20%)"
                }}>
                {/* <img className="image" src={src} alt="" width="auto" height="auto" />*/}
            </div>)
    };

    const ImageCard = memo(function ImageCard({
        embedType = EmbedImage,
        src,
        minImgSize = 248,
        children,
        imageBackground = "hsl(0,0%,80%)",
        imageStyle
    }) {



        const EmbeddedItem = embedType;

        return (
            <div className="grid box-shadow"//row top wrap
                style={{
                    background: "hsla(40,5%,90%,100%)",
                    width: "100%",
                    height: "auto",
                    maxWidth: "800px",//`calc(${minImgSize}px + 38rem)`,
                    minHeight: "auto",
                    gridTemplateColumns: media === "xs" ? "100%" : "auto 1fr",
                    // overflow: "hidden",
                    // gap: "1.5rem",
                    flexShrink: 0,
                    borderTop: "1px solid hsla(0,0%,0%,20%)",
                    padding: 0,//"1.5rem",//"1.5rem 0 0 0",
                    margin: "0 0 .5rem 0"
                }}>

                <EmbedImage src={src} imageBackground={imageBackground} minImgSize={minImgSize} style={imageStyle} />

                <div className="col top" style={{

                    width: "100%",
                    height: "max-content",
                    minWidth: "60%",
                    maxWidth: "100%",
                    padding: "1.2rem 1.5rem",
                    minHeight: "max-content",

                    // padding: "1rem",
                    gap: ".5rem",
                    flexGrow: 3,
                    flexShrink: 0,
                    flexBasis: "300px"
                }}>
                    {children}


                </div>
            </div >

        )
    });

    return (
        <PageContainer layout="center"
        >
            <Header
                title="Presentations"
                subtitle=""
                color="hsla(0,0%,0%,50%)"
                style={{
                    gridColumn: "content / span 1",
                    gridRowStart: "title",
                    padding: "0 0 1rem 0"
                }}
            ></Header>
            {/*  <div
                className="page-bg"
                style={{
                    background: `linear-gradient(90deg, ${colorA} 0%, ${colorB} 100%,)`
                }}
            />*/}

            <ImageCard
                // src="https://docs.google.com/presentation/d/e/2PACX-1vRJZQGOASDM7XWmFRaq4Oc_qd6sVKGX6NThZ4oV7XouyA0tL0C1Cjndh4RUMkgXmUDybimNRvd1kJVc/embed?slide=6"
                src="./img/prime-example.png"
                imageBackground={`linear-gradient(to bottom, hsl(269,54%,92%) 53.75%, hsl(266,28%,75%) 53.75%)
                    `}
            >

                <h2>What Makes UI Intuitive?</h2>
                <h3>CodeStock 2022</h3>

                <span style={{ margin: ".5rem 0" }}>Computers aren’t natural, yet people use the word “intuitive” to describe great software – It’s not a mistake. In this session, we'll examine how design interfaces with the human brain.
                </span>
                <span className="row right">
                    <a className="button lightgray box-shadow-shallow" href="https://docs.google.com/presentation/d/1sX_i-tTYVkihPYqb25-01_tm7hDQsf-zdyhIPcvHed8/edit?usp=sharing" target="_blank"
                        rel="noreferrer">slide deck ↗</a>
                </span>
            </ImageCard>


            <ImageCard
                src="./img/toolbox.png"
                imageBackground="linear-gradient(to bottom right, hsl(0,100%,75%), hsl(30,100%,75%))"
            >
                <h2>The UX Stack</h2>
                <h3>Scenic City Summit 2019</h3>
                <span style={{ margin: ".5rem 0" }}>
                    User experience is the bread and butter of successful technology, but what are the ingredients? For developers, designers, or project managers who are curious about the different layers of the UX stack. This presentation covers various tools and methodologies from the designer’s toolbox. Includes research, heuristics, principles of design, wireframing and prototyping tools (Sketch, Adobe XD, Figma, Framer, etc.), patterns, and frameworks.
                </span>
                <span className="row right">  <a className="button lightgray box-shadow-shallow" href="https://docs.google.com/presentation/d/1PE_Fx5LP3cq0JnYROtTiWgLajQSqTIo9zpyP5ySruco/edit?usp=sharing" target="_blank"
                    rel="noreferrer">slide deck ↗</a>       </span>
            </ImageCard>

            <ImageCard
                src="./img/pencil-placeholder.jpeg"
                imageBackground="#63C8DA"
                imageStyle={{
                    filter: "sepia(100%) contrast(90%)",
                    //"overlay"

                }}
            >

                <h2>Bridging the Gap</h2>
                <h3>CodeStock 2016</h3>
                <span style={{ margin: ".5rem 0" }}>User experience design is essential to development, but there is often a lot of confusion about the process. The session will include an explanation of UX design and the process, why it is necessary and beneficial to developers, and how it can bridge the gap between expectations and reality.
                </span>

            </ImageCard>


            <div className="col left" style={{
                borderTop: "1px solid hsla(0,0%,0%,20%)", padding: "1rem 0 0 0", gap: "1.5rem", maxWidth: "800px",
                filter: "sepia(100%) brightness(50%)",
            }}>
                <div className="col left">
                    <img src="./img/codestock-logo.png" alt="" width="auto" height="auto" style={{
                        maxWidth: "200px",
                        margin: "0 0 .75rem 0"
                    }} />
                    <span>CodeStock is an annual technology conference for developers, IT professionals, and entrepreneurs held in Knoxville, TN. The conference is run by the CodeStock Corporation, a 501(c)(3) organization. The conference spans two full days and is packed with technical & entrepreneurial content.
                    </span>
                </div>
                <div className="col left">
                    <img src="./img/scs-logo.png" alt="" width="auto" height="auto" style={{
                        maxWidth: "300px",
                        margin: "0"
                    }} />
                    <span>Scenic City Summit is the largest local IT professional development program in Chattanooga! Brought to you by ChaTech and premier sponsor, Red Hat, this conference brings together coders, designers, database administrators, web developers, project managers and IT professionals to share real-world business problems, best practices and emerging technologies.
                    </span>
                </div>
            </div>



        </PageContainer>
    );
}

/* 
User experience design is essential to development, but there is often a lot of confusion about the process. This session will be helpful to both developers and designers who want to better understand UX design; are interested in pursuing a UX role; or would like to glean tips from another designer’s experiences. The session will include an explanation of UX design and the process; why it is necessary and beneficial to developers; how it can bridge the gap between client expectations and the development process; how to bridge the gap between both designers’ and developers’ expectations to improve the development process; good practices and common pitfalls; and how to approach the field of UX design.

What makes UI Intuitive embed
<iframe className="card" style={{
                     background: "#fff",
                     minWidth: iframeSize.minWidth,
                     maxWidth: iframeSize.maxWidth,
                     minHeight: iframeSize.minHeight,
                     maxHeight: iframeSize.maxHeight,
                     aspectRatio: iframeSize.aspectRatio,
                     padding: 0
                 }} src="https://docs.google.com/presentation/d/e/2PACX-1vRJZQGOASDM7XWmFRaq4Oc_qd6sVKGX6NThZ4oV7XouyA0tL0C1Cjndh4RUMkgXmUDybimNRvd1kJVc/embed?slide=6" frameborder="0" width={iframeSize.width} height={iframeSize.height} allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>*/
/* The UX Stack embed
<iframe style={{
                    background: "#fff",
                    minWidth: iframeSize.minWidth,
                    maxWidth: iframeSize.maxWidth,
                    minHeight: iframeSize.minHeight,
                    maxHeight: iframeSize.maxHeight,
                    aspectRatio: iframeSize.aspectRatio,
                    padding: 0
                }} src="https://docs.google.com/presentation/d/e/2PACX-1vSJnMeNttfery3shznK74xmpsgInFQMU4XTxxZDMXChyBwmEIepPq9Qkxt1f7BPY-pSO6Ijps9DmOM_/embed?slide=1" frameborder="0" width={iframeSize.width} height={iframeSize.height} allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>*/