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
        imageBackground = "hsl(0,0%,80%)",
        title,
        subtitle,
        description,
        order,
        style,
        children
    }) => {

        const linkStyle = {
            position: "relative",
            //gridTemplateRows: "1fr auto",
            // gridTemplateColumns: "1fr",
            background: "hsl(0,0%,100%)",
            width: "280px",
            height: "326px",
            //aspectRatio: "6 / 7",
            minWidth: "280px",
            maxWidth: order === 1 ? "600px" : order === 2 ? "400px" : "300px",//`calc(${minImgSize}px + 38rem)`,
            maxHeight: "326px",
            overflow: "hidden",
            gap: "1.5rem",
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: order === 1 ? "500px" : order === 2 ? "400px" : "300px",
            borderRadius: ".5rem",
            order: order,
            // margin: "0 0 1rem 0"
        }

        return (
            <Link className="nav-link project col box-shadow"
                to={`/${path}`}
                style={linkStyle}
            >
                <div className="col center"
                    style={{
                        flexBasis: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        background: `url(${src}) ${imageBackground}`,
                        flexGrow: 1,
                        flexShrink: 3,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        ...style,
                        //margin: "1rem"
                        // boxShadow: "2px 2px 2px 4px hsla(0, 0%, 0%, 20%)"
                    }}>
                    {/* <img src={src} alt="" width="100%" height="auto" />*/}
                </div >

                <div className="label col top" style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "auto",
                    // minWidth: "60%",
                    // maxWidth: "100%",
                    minHeight: "auto",
                    maxHeight: "auto",
                    gap: ".5rem",
                    flexGrow: 3,
                    flexShrink: 0,
                    flexBasis: "300px",

                    padding: "1rem"
                }}>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    {/* <span style={{ margin: ".5rem 0" }}>
                        {description}
                    </span>*/}
                    {children}
                </div>
            </Link>

        )
    };

    return (
        <PageContainer maxWidth="1200px">
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
                <Group className="row wrap top" style={{
                    gridColumn: "content / span 1",
                    gridRowStart: "content",
                    padding: "0 0 2rem 0",
                    width: "fit-content"
                }}>
                    <div
                        className="page-bg"
                        style={{
                            background: `linear-gradient(90deg, ${colorA} 0%, ${colorB} 100%,)`
                        }}
                    />

                    {pages.map((item, index) => (

                        <ImageCard
                            key={`${item.path}-${index}`}
                            path={item.path}
                            src={item.image}
                            order={item.level}
                            color1="hsl(240,30%,50%)"
                            color2="hsl(250,50%,82%)"
                            color3="hsl(250,50%,90%)"
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                        >

                            <span className="row wrap shadow" style={{ gap: ".5rem" }}>
                                {item.tags !== undefined && item.tags.length > 0
                                    ? item.tags.map((v_tag, i_tag) => (
                                        <IconTag
                                            key={`device-${i_tag}`}
                                            icon={v_tag}
                                            textColor="hsla(0,0%,30%,100%)"
                                            borderColor="hsla(0,0%,80%,30%)"
                                            bgColor="hsla(0,0%,80%,100%)"
                                        />
                                    ))
                                    : null}

                            </span>
                        </ImageCard>))}
                </Group>
            </Group>
        </PageContainer>
    );
}


