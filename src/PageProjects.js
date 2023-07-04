import { memo, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { pages } from "./Pages";
import { samplePages } from "./PageSamples";
import { Header, ButtonLink, Group, Note, PageContainer, IconTag, DeviceSizes } from "./PageElements";
import { RiCalendarTodoFill, RiStackFill } from "react-icons/ri";
import { MdFilterList } from "react-icons/md";
//import { MdWavingHand } from "react-icons/md";

export function PageProjects(props) {
    const colorA = "hsl(40,100%,80%)";
    const colorB = "hsl(30,100%,80%)"; //"hsl(0,0%,95%)";



    const ImageCard = ({
        className,
        path,
        src,
        imageBackground = "hsla(0,0%,100%,0%)",
        backgroundSize = "cover",
        backgroundPosition = "center",
        filter = "grayscale(100%) contrast(80%)",
        title,
        subtitle,
        description,
        order,
        style,
        children
    }) => {

        const Label = (props) => (<div className={`${props.className}  col`}
            style={{
                background: props.background,
                color: "hsl(0,0%,100%)",
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "auto",
                minHeight: "auto",
                maxHeight: "auto",
                gap: ".25rem",
                flexGrow: 3,
                flexShrink: 0,
                flexBasis: "200px",
                padding: "1rem",
                // mixBlendMode: "darken",
                zIndex: props.zIndex
            }}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <span className="row wrap shadow" style={{
                gap: ".5rem",
                width: "100%",
                height: "auto",
                padding: ".5rem 0 0 0"
            }}>
                {children}</span>
        </div>);

        const linkStyle = {
            position: "relative",
            // gridTemplateRows: "1fr auto",
            // gridTemplateColumns: "1fr",
            background: "hsl(0,0%,100%)",
            width: "200px",
            height: "326px",
            //aspectRatio: "6 / 7",
            minWidth: "200px",
            maxWidth: "600px",//`calc(${minImgSize}px + 38rem)`,
            maxHeight: "326px",
            overflow: "hidden",
            // gap: "1rem",
            flexGrow: order === 1 ? 3 : order === 2 ? 2 : 1,
            flexShrink: order,
            flexBasis: order === 1 ? "40%" : order === 2 ? "35%" : "25%",
            borderRadius: ".5rem",
            order: order,
            // margin: "0 0 1rem 0"
        }

        return (
            <Link className="nav-link project grid box-shadow"
                to={`/${path}`}
                style={linkStyle}
            >

                <Label className="label" zIndex={4} />
                <div className="overlay" style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",

                    zIndex: 3,
                }} />

                <div className="col center"
                    style={{
                        position: "relative",
                        // gridRow: "1 / -1",
                        flexBasis: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        background: `${imageBackground}`,

                        ...style,

                        zIndex: 2,
                        //margin: "1rem"
                        // boxShadow: "2px 2px 2px 4px hsla(0, 0%, 0%, 20%)"
                    }} >
                    <div
                        // className="col"
                        style={{
                            width: "100%",
                            height: "100%",
                            background: `url(${src})`,//  ${imageBackground}`,
                            backgroundSize: backgroundSize,
                            backgroundPosition: backgroundPosition,
                            backgroundRepeat: "no-repeat",
                            mixBlendMode: "overlay",
                            filter: filter,
                            zIndex: 1,
                        }} >
                        <Label background="linear-gradient(to bottom, hsla(0,0%,30%,80%) 50%, hsla(0,0%,30%,0%)" zIndex={1} />
                    </div>
                </div>



            </Link>

        )
    };

    return (
        <PageContainer layout="center" maxWidth="1200px">
            {/* <div className="grid" style={{
                gridTemplateColumns: "1fr [content] auto 1fr",
                gridTemplateRows: "[title] auto [content] auto", width: "100%"
            }}>*/}
            <Group className="col left" style={{ margin: "0 auto 0 auto" }}>
                <Header
                    title="Projects"
                    subtitle=""
                    color="hsla(0,0%,0%,50%)"
                    style={{
                        gridColumn: "content / span 1",
                        gridRowStart: "title",
                        padding: "0 0 1rem 0"
                    }}
                >      <div
                    className="nav-link center"
                    style={{
                        display: "none",
                        width: "48px",
                        height: "48px",
                        fontSize: "2rem",
                        cursor: "pointer",
                        // padding: ".25rem .5rem",
                        margin: "0",
                        borderRadius: "2rem",
                        aspectRatio: "1 / 1"
                    }}
                    onClick={() => {
                        //onClickExit();
                    }}
                >
                        <MdFilterList
                        //size="18"
                        />
                    </div></Header>

                <div
                    className="page-bg"
                    style={{
                        background: `linear-gradient(90deg, ${colorA} 0%, ${colorB} 100%,)`
                    }}
                />
                <Group className="row wrap top" style={{
                    gridColumn: "content / span 1",
                    gridRowStart: "content",
                    padding: "0 0 2rem 0",
                    width: "fit-content",
                    gap: "1.5rem"
                }}>
                    {pages.map((item, index) => (

                        <ImageCard
                            key={`${item.path}-${index}`}
                            path={item.path}
                            src={item.image}
                            backgroundSize={item.backgroundSize}
                            backgroundPosition={item.backgroundPosition}
                            imageBackground={item.color}
                            filter={item.filter}
                            order={item.level}
                            color1="hsl(240,30%,50%)"
                            color2="hsl(250,50%,82%)"
                            color3="hsl(250,50%,90%)"
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                        >


                            {item.tags !== undefined && item.tags.length > 0
                                ? item.tags.map((v_tag, i_tag) => (
                                    <IconTag
                                        key={`device-${i_tag}`}
                                        icon={v_tag}
                                        textColor="hsla(0,0%,0%,100%)"
                                        borderColor="hsla(0,0%,80%,30%)"
                                        bgColor="hsla(0,0%,100%,100%)"//"hsla(0,0%,80%,100%)"
                                    />
                                ))
                                : null}


                        </ImageCard>))}
                </Group>
            </Group>
        </PageContainer>
    );
}


