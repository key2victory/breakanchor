import { memo, useEffect, useRef, forwardRef } from "react";
import { Header, ButtonLink, NoteCard, Group, ChipTag, PageContainer } from "./PageElements";
import { FaRegSmileWink } from "react-icons/fa";


export const PageFinance = memo(function PageFinance({
    title,
    subtitle,
    background,
    row,
    column
}) {
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
        minWidth: "48%",
        width: "100%",
        display: "flex",
        flexFlow: "column nowrap",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        gap: ".75rem"
    };

    return (
        <PageContainer layout="center">

            <Header
                title="Finance Monitoring"
                subtitle="Animated sign language card deck"
                color="hsl(0,0%,0%)"
            >
            </Header>

            <Group className="p col" style={{
                gap: "2rem", margin: 0, padding: "0 0 2rem 0"
            }}>


            </Group>


        </PageContainer >
    );
});