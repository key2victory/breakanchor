import { memo, useState, useEffect, Fragment } from "react";
import { Header, ButtonLink, Group, Note } from "./PageElements";
import { PageContainer } from "./PageContainer";
import { useOutletContext } from "react-router-dom";

export function PageConference(props) {
    const [media, setMedia] = useOutletContext();
    const mediaSize = ["xs", "sm"].includes(media) ? "small" : ["md"].includes(media) ? "medium" : "large";


    const landscapeStyle = {
        // minWidth: "40%",
        maxWidth: "100%",
        maxHeight: "100%",//"400px",
        gridColumn: mediaSize === "small" ? "auto / span 1" : "auto / span 2",
        gridRow: "auto / span 1"
    }
    const portraitStyle = {
        //  minWidth: "20%",
        maxWidth: "100%",
        maxHeight: "400px",
        gridColumn: "auto / span 1",
        gridRow: "auto / span 1"
    }

    const autoStyleGrid = {
        small: { gridTemplateColumns: "1fr", gridAutoRows: "min-content" },
        medium: { gridTemplateColumns: "1fr 1fr", gridAutoRows: "min-content" },
        large: { gridTemplateColumns: "1fr 1fr 1fr 1fr", gridAutoRows: "min-content", gridColumnGap: "1rem" },
    }

    const autoStyleSpan2 = {
        small: { gridColumn: "auto / span 1", gridRow: "auto / span 1" },
        medium: { gridColumn: "auto / span 2", gridRow: "auto / span 1" },
        large: { gridColumn: "auto / span 2", gridRow: "auto / span 1" },
    }
    const autoStyleSpan3 = {
        small: { gridColumn: "auto / span 1", gridRow: "auto / span 1" },
        medium: { gridColumn: "auto / span 2", gridRow: "auto / span 1" },
        large: { gridColumn: "auto / span 3", gridRow: "auto / span 1" },
    }

    return (
        <PageContainer layout="center"
        >
            <Header
                title="Conference Manager"
                subtitle="for Global Bechtel Conference"
                color="hsla(190,60%,50%,100%)"//"hsla(199,42%,41%,100%)"
                style={{
                    gridColumn: "content / span 1",
                    gridRowStart: "title",
                    padding: "0 0 1rem 0"
                }}
            ></Header>

            <Group className="grid"/*"desktop-row laptop-col tablet-row phablet-col mobile-col"*/
                style={autoStyleGrid[mediaSize]}
            >

                {/*  <Note title="Note">
                    <h5>July 15, 2023</h5>
                    Sanitized details to be added soon.
                </Note>*/}



                <img className="image shadow" src="./img/gbc-01.png" alt="" style={landscapeStyle} />
                <img className="image shadow" src="./img/gbc-02.png" alt="" style={landscapeStyle} />
                <img className="image shadow" src="./img/gbc-03.png" alt="" style={landscapeStyle} />
                <img className="image shadow" src="./samples/ConferenceManagerUnframed/images/b2648602f9204c9abec3e76677855a0b.png" alt="" style={landscapeStyle} />
                <img className="image shadow" src="./samples/ConferenceManagerUnframed/images/c32a422ea5d444818a423dbc19a17822.png" alt="" style={landscapeStyle} />
                <img className="image shadow" src="./samples/ConferenceManagerUnframed/images/03c55590829a497cb7bc06c616c3efa2.png" alt="" style={portraitStyle} />
                <img className="image shadow" src="./samples/ConferenceManagerUnframed/images/027788a91e1648dcbdffebd631dd78a2.png" alt="" style={portraitStyle} />


            </Group>


        </PageContainer >
    );
}