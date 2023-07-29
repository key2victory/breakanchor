import { memo, useState, useEffect, Fragment } from "react";
import { Hero } from "./Hero";
import { useOutletContext } from "react-router-dom";
import { GeistProvider, CssBaseline, Page, Image, Grid, Collapse, Card, Text } from '@geist-ui/core';
import ReactMarkdown from 'react-markdown'
import data from "./collections/case-calendar.json";

const present = new Date().getFullYear();

/*const JsonContent = ({ title }) => {
  const pageList = {
    audiohand: PageAudiohand,
    calendar: PageCalendar,
    loto: PageLockOut,
    projects: PageProjects,
    presentations: PagePresentations,
    asl: PageFlashcards,
    finance: PageFinance,
    conference: PageConference
  }
  const Content = pageList[title];
  return (<Content />)
}*/

export const PageContent = memo(function PageContent({ className = "col nowrap top stretch", heroComponent = "", heroInteraction = false, children }) {
  const [media, setMedia] = useOutletContext();
  useEffect(() => {
    console.log("detected media change in PageContainer")
  }, [media])

  return (
    <div //className="page-container col top center"
      style={{
        position: "relative",
        gridColumn: "content / span 1",
        gridRow: "content / span 1",
        width: "100%",
        height: "100%",
        minHeight: 0,
        minWidth: 0,
        background: "linear-gradient(180deg, hsla(0,0%,20%,10%) 20%, transparent 20%)",
        transitioProperty: "padding, margin",
        transitionDuration: "2s",
        transitionTimingFunction: "linear",
        transitionOrigin: "center",
        overflowY: "scroll"
      }}
    >
      <GeistProvider>
        <CssBaseline />
        <Page style={{}}>
          <Page.Header />
          <Page.Content>
            <Grid.Container >
              <Grid xl={14} direction="column">
                <Grid.Container>
                  <Grid xs={24}>
                    <h1>{data.title}</h1></Grid>
                  <Grid xs={24}> <h3>{data.title}</h3></Grid>
                </Grid.Container>
                {data.pageContent.map((row_v, row_i) => (
                  <Grid.Container key={`row${row_i}`} width="100%" height="100%" gap={2} >
                    {row_v.gridContainer.map((cell_v, cell_i) => (
                      <Grid
                        xs={cell_v.xs !== undefined ? ell_v.xs : false}
                        sm={cell_v.xs !== undefined ? ell_v.sm : false}
                        md={cell_v.xs !== undefined ? ell_v.md : false}
                        lg={cell_v.xs !== undefined ? ell_v.lg : false}
                        xl={cell_v.xs !== undefined ? ell_v.xl : false}
                        height="auto"
                      >
                        {cell_v.type === "collapse" ? (<Card>
                          <Collapse title={cell_v.cardTitle} width="100%" initialVisible={cell_v.initialVisible}>

                            <ReactMarkdown
                              components={{
                                p: ({ node, ...props }) => <Text {...props} />,
                                //img: ({ node, ...props }) => <Image style={{ maxHeight: "40vh" }} {...props} />
                              }}>
                              {cell_v.markdown}
                            </ReactMarkdown>
                          </Collapse></Card>) : cell_v.type === "image" ? (<Image width={cell_v.width} height={cell_v.height}
                            src={cell_v.image} alt={cell_v.alt} />
                          ) : cell_v.type === "card" ? (<Card><Image width={cell_v.width} height={cell_v.height}
                            src={cell_v.image} alt={cell_v.alt} />
                            <ReactMarkdown
                              components={{
                                p: ({ node, ...props }) => <Text {...props} />,
                                //img: ({ node, ...props }) => <Image style={{ maxHeight: "40vh" }} {...props} />
                              }}>
                              {cell_v.markdown}
                            </ReactMarkdown>
                          </Card>) : null
                        }
                      </Grid>)
                    )}

                  </Grid.Container>
                ))}
              </Grid>
            </Grid.Container>

          </Page.Content>
          <Page.Footer />

        </Page>
      </GeistProvider>
      {
        data.layout === "hero" ? (
          <div className="grid-hero grid"// tablet-hide phablet-hide mobile-hide"
            style={{
              display: ["xl", "lg"].includes(media) ? "grid" : "none",
              position: "absolute",
              pointerEvents: "none",
              width: "100%",
              height: "auto",
              // alignItems: "start",
              //  minWidth: 0,
              //...pageLayout[layout][media]
            }}>
            <div className="col top center" style={{
              gridColumn: "hero / span 1", gridRow: "1 / span 1", padding: "calc(64px + 2rem) 0 0 0",
              pointerEvents: heroInteraction === false ? "none" : "auto",
              //background: "linear-gradient(90deg,transparent 20%, hsl(0,0%,80%) 20%,transparent)" 
            }}>
              <Hero component={heroComponent} className="" />
            </div>
          </div>) : null
      }
    </div >

  )

});


export const resume = {
  title: "Janna Curtis",
  path: "/",
  subtitle: "Product Designer",
  background1: "hsl(0,0%,90%)",
  background2: "hsl(0,0%,10%)",
  content: [
    {
      section: "Education",
      items: [
        {
          title: "Watkins College of Art, Design, & Film",
          subtitle: "Bachelor of Fine Arts, Graphic Design",
          dates: [2006, 2010],
        },
        {
          title: "Governor’s School for the Arts",
          subtitle: "Middle Tennessee State University",
          dates: [2005],
        },
      ],
    },
    {
      section: "Experience",
      items: [
        {
          title: "Cadre5",
          subtitle: "Sr. Product Designer",
          dates: [2019, present],
          details: [
            {
              label: "Projects",
              items: [
                "RESolution",
                "Sandia National Lab",
                "Los Alamos National Lab",
                "Oak Ridge National Lab",
                "Landscan",
                "ITLP",
              ],
            },
          ],
        },
        {
          title: "Bechtel National",
          subtitle: "UX/UI Information Systems Senior",
          dates: [2016, 2019],
          details: [
            {
              items: [
                "Collaborated with developers and business analysts to produce user-centric software solutions for web, iOS,  Android, and Windows",
              ],
            },
            {
              label: "Projects",
              items: [
                "MMI",
                "SPECS",
                "Arnold",
                "iHUB",
                "Security Clearance Tracker",
                "ES&H",
                "BoltBot",
                "LOTO Safety Tracker",
                "PD@Bechtel",
                "Digital Supply Chain",
                "UPF",
              ],
            },
            {
              label: "Awards",
              items: [
                "LeadR+ award for “Best Pitch Delivery” for IS&T Hackathon presentation",
                "LeadR+2 award for ES&H interactive reporting materials",
                "LeadeR+4 award for PD@Bechtel designs and contributions",
                "LeadeR+2 award for delivering UI design in record time for iHUB project",
              ],
            },
          ],
        },
        {
          title: "Break Anchor",
          subtitle: "Owner, Lead Designer, Mentor",
          dates: [2009, 2017],
          details: [
            {
              items: [
                "Conceptual design, graphics, and presentations",
                "UI design for mobile and web-based software",
                "Logo, branding, advertising, and sales materials",
                "Vectorizations and screen print formatting",
                "Illustration designs and apparel",
              ],
            },
          ],
        },
        {
          title: "Audiohand",
          subtitle: "Lead UX Designer",
          dates: [2014, 2016],
          details: [
            { items: ["UX conceptual design", "UI design for mobile software"] },
          ],
        },
        {
          title: "Connection Point",
          subtitle: "Creative Director, UX Design",
          dates: [2014],
          details: [
            {
              items: [
                "UX conceptual design",
                "UI design for web-based software",
                "Branding, advertising, and sales materials",
              ],
            },
          ],
        },
        {
          title: "K-Town Apartments, LLC",
          subtitle: "Chief Creative Officer, UX Design",
          dates: [2012, 2014],
          details: [
            {
              items: [
                "UX conceptual design",
                "UI design for mobile and web-based software",
                "Branding, advertising, and sales materials",
                "Represented company for presentations and events",
                "Met with clients for sales and support",
              ],
            },
          ],
        },
      ],
    },
    {
      section: "Community",
      items: [
        {
          title: "What Makes UI Intuitive?",
          subtitle: "Event Speaker for CodeStock",
          dates: [2022],
        },
        {
          title: "The UX Stack",
          subtitle: "Event Speaker for Scenic City Summit",
          dates: [2019],
        },
        {
          title: "Design Mentor for What’s the Big Idea",
          subtitle: "Knoxville Entrepreneur Center",
          dates: [2015, 2016, 2017, 2019],
        },
        {
          title:
            "UX Design: Bridging the Gap Between Expectations and Development",
          subtitle: "Event Speaker for CodeStock",
          dates: [2016],
        },
        {
          title: "Design Mentor for CodeWorks",
          subtitle: "Knoxville Entrepreneur Center",
          dates: [2015],
        },
        {
          title: "Design Mentor for MediaWorks",
          subtitle: "Knoxville Entrepreneur Center",
          dates: [2015],
        },
      ],
    },
  ],
};

export const pages = [
  {
    title: "Priority Calendar",
    subtitle: "Weather and events in perspective",
    description: "A calendar app I designed and built using react-js",
    path: "projects/calendar",
    component: "PageCalendar",
    url: "",
    image: "./img/calendar-room.png",
    backgroundSize: "130%",
    backgroundPosition: "90% 100%",
    color: "hsl(274,33%,55%)",
    devices: ["S", "M", "L"],
    tags: ["responsive"],
    level: 1
  },

  {
    title: "Lock Out, Tag Out",
    subtitle: "Electrical safety tracking",
    path: "projects/loto",
    component: "PageCalendar",
    image: "./img/loto-02.png",
    backgroundSize: "cover",
    backgroundPosition: "50% 55%",
    filter: "grayscale(100%) contrast(110%) brightness(70%)",
    color: "hsl(37,95%,63%)",//"linear-gradient(to bottom right, hsl(37,95%,63%), hsl(33,100%,48%))",
    devices: ["S"],
    tags: ["mobile"],
    level: 1
  },
  {
    title: "Researcher Tools",
    subtitle: "",
    description: "",
    path: "projects/researcher-tools",
    component: "PageResearcherTools",
    url: "",
    image: "./hub/hub-06.png",
    backgroundSize: "200%",
    backgroundPosition: "50% 15%",
    filter: "grayscale(100%) brightness(50%) contrast(120%)", // ",
    color: "hsl(187,57%,66%)",//"hsl(200,95%,63%)",
    devices: ["S", "M", "L"],
    tags: ["components", "research"],
    level: 2
  },
  {
    title: "ASL Flashcards",
    subtitle: "",
    description: "A flashcard app I designed and built using react-js",
    path: "projects/flashcards",
    component: "PageCalendar",
    url: "",
    image: "./img/asl.png",
    backgroundSize: "100%",
    backgroundPosition: "50% 60%",
    filter: "grayscale(100%) contrast(50%) brightness(100%)", //"grayscale(100%) contrast(80%) brightness(70%)",
    color: "hsl(274,33%,55%)",//"hsl(187,57%,66%)",//"hsl(200,95%,63%)",
    devices: ["S", "M", "L"],
    tags: ["responsive"],
    level: 2
  },
  {
    title: "Conference Manager",
    path: "projects/gbc",
    src: "./samples/ConferenceManagerUnframed/index.html",
    image: "./samples/ConferenceManagerUnframed/images/fcebc055e0b4dac937421e1a6bb3fe6.png",
    backgroundSize: "400%",
    backgroundPosition: "51% 32%",
    filter: "grayscale(100%) contrast(80%) brightness(70%)",
    color: "hsl(220,50%,60%)",
    aspectRatio: "1680 / 1105",
    devices: ["L"],
    tags: ["desktop"],
    level: 2
  },
  {
    title: "Clearance Tracker",
    path: "projects/clearance-tracker",
    src: "./samples/ClearanceTrackerUnframed/index.html",
    image: "./samples/ClearanceTrackerUnframed/images/5d6591a4b284913a47913e632eb1d52.png",
    backgroundSize: "300%",
    backgroundPosition: "22% 20%",
    color: "hsl(37,95%,63%)",//"hsl(274,33%,55%)",
    aspectRatio: "1678 / 1153",
    devices: ["L"],
    tags: ["desktop"],
    level: 2
  },
  {
    title: "Audiohand",
    subtitle: "Mobile music studio",
    path: "projects/audiohand",
    image: "./img/audiohand-14.png",
    backgroundSize: "cover",
    backgroundPosition: "0% 32%",
    color: "hsl(337,86%,70%)",//"hsl(337,86%,60%)",
    // filter: "grayscale(100%)",
    devices: ["S"],
    tags: ["mobile"],
    level: 2
  },
];
