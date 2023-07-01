import { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, ButtonLink, Group } from "./PageElements";
import { RiCalendarTodoFill, RiStackFill } from "react-icons/ri";
import { MdWavingHand } from "react-icons/md";

export function PageProjects(props) {
    const colorA = "hsl(0,0%,40%)";
    const colorB = "hsl(0,0%,35%)"; //"hsl(0,0%,95%)";

    const AppCard = ({
        className,
        path,
        icon,
        color1 = "hsl(0,0%,30%)",
        color2 = "hsl(0,0%,80%)",
        color3 = "hsl(0,0%,80%)",
        title,
        description
    }) => {
        const IconRender = icon;
        return (
            <Link
                className={`nav-link page card row center left ${className}`}
                to={`/${path}`}
                style={{
                    textDecoration: "none",
                    fontSize: "1.25rem",
                    padding: "1.25rem 1rem",
                    width: "100%",
                    maxWidth: "400px",
                    minHeight: "max-content",
                    gap: "1rem",
                    color: "hsl(0,0%,30%)",
                    background: color3
                }}
            >
                <div
                    className="row center"
                    style={{
                        width: "64px",
                        height: "64px",
                        // minHeight: "max-content",
                        padding: "0.6rem",
                        margin: 0,
                        gap: "1rem",
                        borderRadius: ".5rem",
                        color: color1,
                        background: color2
                    }}
                >
                    <IconRender size={48} />
                </div>
                <h3>{title}</h3>
            </Link>
        );
    };
    return (
        <div
            className="sample-content"
            style={{ background: colorA, padding: "2rem" }}
        >
            <Header
                title="Projects"
                subtitle=""
                color="hsl(0,0%,70%)"
                style={{
                    gridColumn: "content / span 1",
                    gridRowStart: "title",
                    padding: "0 0 1rem 0"
                }}
            ></Header>
            <div
                className="page-bg"
                style={{
                    background: `linear-gradient(31deg, ${colorA} 25%, ${colorB} 0, ${colorB} 50%, ${colorA} 0, ${colorA} 75%, ${colorB} 0) center / 50px 30px`
                }}
            />
            <Group
                className="col top"
                style={{
                    gridRow: "content / span 1",
                    width: "100%",
                    height: "100%"
                }}
            >
                <AppCard
                    path="calendar"
                    icon={RiCalendarTodoFill}
                    color1="hsl(240,30%,50%)"
                    color2="hsl(250,50%,82%)"
                    color3="hsl(250,50%,90%)"
                    title="Priority Calendar"
                    description=""
                />

                <AppCard
                    path="flashcards"
                    icon={MdWavingHand}
                    color1="hsl(20,70%,50%)"
                    color2="hsl(40,100%,80%)"
                    color3="hsl(40,100%,90%)"
                    title="ASL Flashcards"
                    description=""
                />
            </Group>
        </div>
    );
}