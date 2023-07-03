import { memo, useEffect, useRef, forwardRef } from "react";
import { Header, ButtonLink, Note, Group, ChipTag, PageContainer } from "./PageElements";
import { MdOutlineHeight } from "react-icons/md";

export const PageFlashcards = memo(function PageFlashcards({
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

    return (
        <PageContainer>

            <Header
                title="ASL Flash Cards"
                subtitle="Animated sign language card deck"
                color="hsl(0,0%,0%)"
            >
                <ButtonLink
                    color="black"
                    line1="see the"
                    line2="live code"
                    url="https://tczkr5.csb.app/"
                />
            </Header>
            <Group
                className="desktop-row laptop-row tablet-row phablet-col mobile-col"
                style={{ padding: "1rem 0" }}
            >
                <Note
                    title="Problem"
                    description="Performing maintenance and repairs on electrical systems is dangerous work. To ensure safety, an isolation permit must be requested, and an authorized technician must go out on site, manually shut off each system circuit, and place a physical ID tagged lock on each one. After the work has been performed, a de-isolation permit is requested for a technician to unlock the breaker box and turn the circuits back on. Each permit request may contain a dozen or more different equipment, lock, and tag IDs to correctly associate with one another."
                    background="hsl(42,100%,70%)"
                />
                <Note
                    title="Problem"
                    description="Performing maintenance and repairs on electrical systems is dangerous work. To ensure safety, an isolation permit must be requested, and an authorized technician must go out on site, manually shut off each system circuit, and place a physical ID tagged lock on each one. After the work has been performed, a de-isolation permit is requested for a technician to unlock the breaker box and turn the circuits back on. Each permit request may contain a dozen or more different equipment, lock, and tag IDs to correctly associate with one another."
                    background="hsl(42,100%,70%)"
                />
            </Group>
            <Group>
                <iframe src="https://key2victory.github.io/csb-s6t7to/" style={{ width: "auto", height: "500px", aspectRatio: "3 / 5" }} />
            </Group>
        </PageContainer>
    );
});
