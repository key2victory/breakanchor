import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import PageAbout from "./PageAbout";
import { PageAudiohand } from "./PageAudiohand";
import { PageCalendar } from "./PageCalendar";
import { PageIntuitive } from "./PageIntuitive";
import { PageLockOut } from "./PageLockOut";
import { PageProjects } from "./PageProjects";
import { PagePresentations } from "./PagePresentations";
import { PageLearning } from "./PageLearning";
import { PageFlashcards } from "./PageFlashcards";
import { PageFinance } from "./PageFinance";
import {
  samplePaths,
  PageSample0,
  PageSample1,
  PageSample2,
  PageSample3,
  PageSample4,
} from "./PageSamples";

const router = createHashRouter([
  {
    path: "*",
    Component: App,
    children: [
      {
        index: true,
        Component: PageAbout,
      },
      { path: "projects", Component: PageProjects, },
      { path: "projects/calendar", Component: PageCalendar, handle: { crumb: () => <Link to="/projects">Projects</Link>, current: "Calendar" } },
      { path: "projects/flashcards", Component: PageFlashcards },
      { path: "presentations", Component: PagePresentations },
      { path: "learning", Component: PageLearning },
      { path: "audiohand", Component: PageAudiohand },
      { path: "intuitive", Component: PageIntuitive },
      { path: "loto", Component: PageLockOut },
      { path: "finance", Component: PageFinance },
      { path: samplePaths[0], Component: PageSample0 },
      { path: samplePaths[1], Component: PageSample1 },
      { path: samplePaths[2], Component: PageSample2 },
      { path: samplePaths[3], Component: PageSample3 },
      { path: samplePaths[4], Component: PageSample4 },
    ],
  },
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: PageAbout,
      },
      { path: "calendar", Component: PageCalendar },
      { path: "audiohand", Component: PageAudiohand },
      { path: "intuitive", Component: PageIntuitive },
      { path: "loto", Component: PageLockOut },
      { path: samplePaths[0], Component: PageSample0 },
      { path: samplePaths[1], Component: PageSample1 },
      { path: samplePaths[2], Component: PageSample2 },
      { path: samplePaths[3], Component: PageSample3 },
      { path: samplePaths[4], Component: PageSample4 },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RouterProvider router={router} />);
