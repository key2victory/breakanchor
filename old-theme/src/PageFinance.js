import { memo, useEffect, useRef, forwardRef } from "react";
import { Header, ButtonLink, NoteCard, Group, ChipTag, } from "./PageElements";
import { PageContainer } from "./PageContainer";



export const PageFinance = memo(function PageFinance({
    title,
    subtitle,
    background,
    row,
    column
}) {
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