import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import {
  // createHashRouter,
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import PageAbout from "./PageAbout";
import { PageAudiohand } from "./PageAudiohand";
import { PageCalendar } from "./PageCalendar";
import { PageLockOut } from "./PageLockOut";
import { PageProjects } from "./PageProjects";
import { PagePresentations } from "./PagePresentations";
import { PageLearning } from "./PageLearning";
import { PageFlashcards } from "./PageFlashcards";
import { PageFinance } from "./PageFinance";
import { PageConference } from "./PageConference";
//import { PageContainer } from "./PageContainer";
import { PageClearanceTracker } from "./PageClearanceTracker";
import { PageResearcherTools } from "./PageResearcherTools";
import { Page404 } from "./Page404";
import { PageContent } from "./Pages";
/*
import { pages } from "./Pages";

const Page = (index) => (pages[index].component);
const router = createHashRouter(
  createRoutesFromElements(

    <Route path="*" element={<App />}>
      <Route path="/" element={<App />}>
        {pages.slice(0, 2).map((item, index) => {
          <Route key={`route-${index}`} path={item.path} element={<PageContainer><Page index={index} /></PageContainer>} />
        })}
      </Route>
    </Route>
  )
);*/
const router = createBrowserRouter([
  {
    path: "*",
    Component: App,
    children: [
      {
        Component: Page404,
      },
    ],
  },
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: PageProjects,
      },
      { path: "geist", Component: PageContent, },
      { path: "about", Component: PageAbout, },
      { path: "projects", Component: PageProjects, },
      { path: "presentations", Component: PagePresentations },
      { path: "learning", Component: PageLearning },
      { path: "projects/audiohand", Component: PageAudiohand },
      { path: "projects/calendar", Component: PageCalendar },// handle: { crumb: () => <Link to="/projects">Projects</Link>, current: "Calendar" } },
      { path: "projects/clearance-tracker", Component: PageClearanceTracker },
      { path: "projects/finance", Component: PageFinance },
      { path: "projects/flashcards", Component: PageFlashcards },
      { path: "projects/gbc", Component: PageConference },
      { path: "projects/loto", Component: PageLockOut },
      { path: "projects/researcher-tools", Component: PageResearcherTools },



    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RouterProvider router={router}>
  <App />
</RouterProvider>);
