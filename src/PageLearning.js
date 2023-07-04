import { memo, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Header, ButtonLink, PageContainer, Group, Note } from "./PageElements";
import { RiCalendarTodoFill, RiStackFill } from "react-icons/ri";
import { MdWavingHand } from "react-icons/md";

export function PageLearning(props) {
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
                    flexBasis: 0,
                    width: `${minImgSize}px`,
                    height: `${minImgSize}px`,
                    minWidth: `${minImgSize}px`,
                    maxWidth: "100%",
                    minHeight: `${minImgSize}px`,
                    //  maxHeight: "100px",
                    overflow: "hidden",
                    borderRadius: ".5rem",
                    background: `url(${src}), ${imageBackground}`,
                    backgroundSize: "auto 100%, 100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
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
        minImgSize = 200,
        children,
        imageBackground = "hsl(0,0%,80%)",
        imageStyle
    }) {



        const EmbeddedItem = embedType;

        return (
            <div className="card row top wrap box-shadow"
                style={{
                    background: "hsla(0,0%,100%,50%)",
                    width: "100%",
                    height: "auto",
                    maxWidth: "800px",//`calc(${minImgSize}px + 38rem)`,
                    minHeight: "auto",
                    // overflow: "hidden",
                    gap: "1.5rem",
                    flexShrink: 0,
                    borderTop: "1px solid hsla(0,0%,0%,20%)",
                    padding: "1.5rem",//"1.5rem 0 0 0",
                    margin: "0 0 1rem 0"
                }}>

                <EmbedImage src={src} imageBackground={imageBackground} minImgSize={minImgSize} style={imageStyle} />

                <div className="col top" style={{

                    width: "100%",
                    height: "max-content",
                    minWidth: "60%",
                    maxWidth: "100%",

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
        <PageContainer
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
            <div
                className="page-bg"
                style={{
                    background: `linear-gradient(90deg, ${colorA} 0%, ${colorB} 100%,)`
                }}
            />
            <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FHUGK0dIP6KkJYNsWJHB3XV%2FLearning-Connections%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DBq3I8s5Cv6ByPX8A-1" allowfullscreen></iframe>

            <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FA00Fb3qTbXbLa4L8godj4N%2FDesign-Skills%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3Dz051UZ7YFVVvNr6o-1" allowfullscreen></iframe>

            <iframe src="https://codesandbox.io/embed/gestalt-proximity-p3g02l?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                // style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                title="gestalt-proximity"
                // aspectRatio="1 / 1"
                width="500"
                height="800"
            // allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            //sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
            <iframe src="https://codesandbox.io/embed/gestalt-similarity-19vour?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                // style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                title="gestalt-proximity"
                //aspectRatio="1 / 1"
                width="500"
                height="800"
            // allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            //sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
            <ImageCard
                // src="https://docs.google.com/presentation/d/e/2PACX-1vRJZQGOASDM7XWmFRaq4Oc_qd6sVKGX6NThZ4oV7XouyA0tL0C1Cjndh4RUMkgXmUDybimNRvd1kJVc/embed?slide=6"
                src=""//"./img/prime-example.png"
                imageBackground={`linear-gradient(to bottom, hsl(269,54%,92%) 53.75%, hsl(266,28%,75%) 53.75%)
                    `}
            >

                <h2>Design Skills</h2>
                <h3>Kumu Node Mapping</h3>

                <span style={{ margin: ".5rem 0" }}>...
                </span>
                <span className="row right">
                    <a className="button lightgray box-shadow-shallow" href="https://embed.kumu.io/9e4a755207372e1bbe56ee611f16dae8" target="_blank"
                        rel="noreferrer">see map ↗</a>
                </span>
            </ImageCard>








        </PageContainer>
    );
}
