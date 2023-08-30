import { memo, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { pages } from "./Pages";
import { Header, ButtonLink, Group, Note, IconTag } from "./PageElements";
import { PageContainer } from "./PageContainer";
import { motion } from "framer-motion";

/*import {
    RiCalendarTodoFill, RiStackFill,
    RiBox2Line
} from "react-icons/ri";*/
import { MdFilterList } from "react-icons/md";
import ReactGA from "react-ga4";
//import { TRACKING_ID } from "./AnalyticsTracker";
//ReactGA.initialize([{ trackingId: TRACKING_ID }])

export function PageProjects(props) {

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

        const transition = { duration: 1, type: "tween" };

        const Label = (props) => (
            <motion.div
                className={`${props.className}  col umami--click--ProjectsTile${path}`}
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
                    padding: "1rem 1rem 1rem 1rem",
                    zIndex: props.zIndex
                }}
                onClick={() => {
                    ReactGA.event({
                        category: "jmc_project",
                        action: `jmc_click_project`,
                        label: `clicked ${title} from Projects page`, // optional
                        //value: 99, // optional, must be a number
                        //  nonInteraction: true, // optional, true/false
                        // transport: "xhr", // optional, beacon/xhr/image
                    });
                }}
                transition={{ duration: .5, type: "ease-in" }}
                variants={{
                    default: {}, hover: {
                        padding: "1rem 1rem 2rem 1rem"
                    }
                }}
            >
                <h2 style={{
                    //textShadow: "2px 2px 2px hsla(0,0%,0%,30%), 3px 3px 10px hsla(0,0%,0%,20%)"
                }}>{title}</h2>
                <h3 style={{
                    // textShadow: "3px 3px 5px hsla(0,0%,0%,100%)"
                }}>{subtitle}</h3>
                <span className="row wrap shadow" style={{
                    gap: ".5rem",
                    width: "100%",
                    height: "auto",
                    padding: ".5rem 0 0 0"
                }}>
                    {children}</span>
                <motion.div className="overlay"
                    style={{
                        position: "absolute",
                        // top: 0,
                        bottom: "-5%",
                        left: "-5%",
                        width: "110%",
                        height: "110%",
                        //background: "hsla(0,0%,0%,30%)",//"linear-gradient(0deg, hsla(0,0%,0%,50%) 30%, hsla(0,0%,0%,0%) 50%)",
                        //background: "linear-gradient(90deg, hsla(0,0%,0%,10%) 0%, hsla(0,0%,0%,0%) 70%)",
                        // filter: "blur(20px)",
                        backdropFilter: "blur(5px) contrast(60%) saturate(1.8) brightness(.9)",
                        zIndex: -1//3,
                    }}
                    transition={transition}
                    variants={{ default: {}, hover: { backdropFilter: "blur(20px) contrast(60%) saturate(1.8) brightness(.7)", } }}
                />
            </motion.div >);

        const tileStyle = {
            position: "relative",
            background: "hsl(0,0%,100%)",
            width: "200px",
            height: "326px",
            minWidth: "200px",
            maxWidth: "600px",
            maxHeight: "326px",
            overflow: "hidden",
            flexGrow: order === 1 ? 3 : order === 2 ? 2 : 1,
            flexShrink: order,
            flexBasis: order === 1 ? "40%" : "25%",
            order: order,
            boxShadow: "0px 0px 10px 2px hsla(0, 0%, 0%, 20%)",
            display: "grid",

            //outline: `3px solid hsla(0, 0%, 40%, ${hover ? 100 : 0}%)`,

        }

        const linkStyle = {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            overflow: "hidden",
        }

        return (
            <motion.div
                variants={{ default: {}, hover: {} }}
                initial="default"
                whileHover="hover"
                style={tileStyle}

            >
                <Link //className="grid" //nav-link project grid"// box-shadow"
                    to={`/${path}`}
                    style={linkStyle}
                >

                    <Label
                        //className="label" 
                        //  background="linear-gradient(90deg, hsla(0,0%,0%,30%) 50%, hsla(0,0%,0%,0%) 100%)"
                        zIndex={4} />


                    <motion.div
                        variants={{ default: {}, hover: {} }}

                        className="col center"
                        style={{
                            position: "relative",
                            // gridRow: "1 / -1",
                            flexBasis: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            background: `${imageBackground}`,
                            // transform: "scale(110%)",
                            ...style,

                            zIndex: 2,
                            //margin: "1rem"
                            // boxShadow: "2px 2px 2px 4px hsla(0, 0%, 0%, 20%)"
                        }}

                    // whileHover={{ transform: "scale(100%)" }}
                    >
                        <motion.div
                            // className="col"
                            style={{
                                width: "100%",
                                height: "100%",
                                background: `url(${src})`,//  ${imageBackground}`,
                                backgroundSize: "cover",//backgroundSize,
                                backgroundPosition: backgroundPosition,
                                backgroundRepeat: "no-repeat",
                                mixBlendMode: "overlay",
                                filter: filter,
                                zIndex: 1,


                            }}
                            transition={transition}
                            variants={{ default: {}, hover: { scale: 1.2 } }}

                        >
                        </motion.div>
                    </motion.div>



                </Link>
            </motion.div>
        )
    };

    return (
        <PageContainer layout="center">

            <Group className="col left" style={{ margin: "0 auto 0 auto" }}>
                <Header
                    title="Projects"
                    subtitle=""
                    color="hsl(220,50%,60%)"//"hsl(274,0%,40%)"//"hsl(274,33%,55%)"
                    style={{
                        gridColumn: "content / span 1",
                        gridRowStart: "title",
                        width: "100%",
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
                    </div> </Header>


                <Group className="row wrap top" style={{
                    gridColumn: "content / span 1",
                    gridRowStart: "content",
                    padding: "0 0 2rem 0",
                    width: "fit-content",
                    gap: "1rem"
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
                                        hoverColor="hsla(0,0%,100%,100%)"
                                    />
                                ))
                                : null}


                        </ImageCard>))}
                </Group>
            </Group>
        </PageContainer>
    );
}


