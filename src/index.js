import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import {
    createBrowserRouter,
    Link,
    Route,
    RouterProvider,
    Routes
} from "react-router-dom";
import PageAbout from "./PageAbout";
import { PageAudiohand } from "./PageAudiohand";
import { PageCalendar } from "./PageCalendar";
import { PageIntuitive } from "./PageIntuitive";
import { PageLockOut } from "./PageLockOut";
import { samplePages, PageSample0, PageSample1, PageSample2, PageSample3, PageSample4 } from "./PageSamples";

const router = createBrowserRouter([{
        path: "*",
        Component: App
    },
    {
        path: "/",
        Component: App,
        children: [{
                index: true,
                Component: PageAbout
            },
            { path: "calendar", Component: PageCalendar },
            { path: "audiohand", Component: PageAudiohand },
            { path: "intuitive", Component: PageIntuitive },
            { path: "loto", Component: PageLockOut },
            { path: samplePages[0], Component: PageSample0 },
            { path: samplePages[1], Component: PageSample1 },
            { path: samplePages[2], Component: PageSample2 },
            { path: samplePages[3], Component: PageSample3 },
            { path: samplePages[4], Component: PageSample4 },
        ]
    },
    { path: "about", Component: PageAbout }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render( < RouterProvider router = { router }
        />);

        /*
        <RouterProvider router={router} />
        import React from "react";
        import ReactDOM from "react-dom";
        import { StrictMode } from "react";
        import { createRoot } from "react-dom/client";
        import { BrowserRouter as Router, Route, Link } from "react-router-dom";

        import App from "./App";

        //const rootElement = document.getElementById("root");
        //const root = createRoot(rootElement);


        /*root.render(
          <StrictMode>
            <Router>
              <App />
            </Router>
          </StrictMode>
        );
        */