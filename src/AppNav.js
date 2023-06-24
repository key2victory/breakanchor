import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { memo, useState, useEffect, Fragment } from "react";
import { pages } from "./Pages";
import { samplePages } from "./PageSamples";
import "./styles.css";

export const AppHeader = memo(function AppHeader({ onMenuClick }) {
    return ( <
        div className = "header" >
        <
        h3 >
        break anchor design < /h3> <
        span className = "pointer"
        style = {
            {
                fontSize: "1.5rem"
            }
        }
        onClick = {
            () => {
                onMenuClick();
            }
        } >
        menu <
        /span> <
        /div>
    );
});

export default function AppNav({ showNav, onClickExit }) {
    const linkStyle = {
        textDecoration: "none",
        padding: "1rem 0",
        fontSize: "1.25rem"
    };
    return ( <
        div className = { `overlay ${showNav === true ? "show" : "hide"}` }
        style = {
            {
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                //  background: "hsla(0,0%,0%,80%)",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "stretch",
                alignItems: "stretch",
                // width: "100%",
                zIndex: 10
            }
        } >
        <
        div className = ""
        style = {
            {
                background: "hsla(0,0%,0%,0%)",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
                zIndex: 10
            }
        }
        onClick = {
            () => {
                onClickExit();
            }
        }
        /> <
        div className = { `app-nav ${showNav === true ? "show" : "hide"}` }
        style = {
            {
                display: "flex",
                flexFlow: "column nowrap",
                width: "280px",
                padding: "2rem",
                background: "hsl(0,0%,80%)",
                boxShadow: "-2px 2px 6px 4px hsla(0, 0%, 0%, 20%), -2px 2px 50px 4px hsla(0, 0%, 0%, 50%)",
                zIndex: 10
            }
        }
        onClick = {
            () => {
                onClickExit();
            }
        } >
        <
        Link to = { "/" }
        style = { linkStyle } >
        About Me <
        /Link> {
            pages.map((item, index) => ( <
                Link key = { index }
                to = { item.path }
                style = { linkStyle } > { item.title } <
                /Link>
            ))
        } {
            samplePages.map((item, index) => ( <
                Link key = { index }
                to = { item.path }
                style = { linkStyle } > { item.title } <
                /Link>
            ))
        } <
        /div> <
        /div>
    );
}