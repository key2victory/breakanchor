import { memo, useState, useEffect, Fragment } from "react";

import { AppHeader, NavPanel } from "./AppNav";
import { HeroAbout } from "./HeroAbout";
import { Logo } from "./Logo";
import { Header, ButtonLink, Note, Group, Counter } from "./PageElements";
import { PageContainer } from "./PageContainer";
import { FaFigma } from "react-icons/fa";
import { RxFramerLogo } from "react-icons/rx";
import {
  MdCircle,
} from "react-icons/md";
import { RiReactjsFill } from "react-icons/ri";
import { useOutletContext } from "react-router-dom";


const present = new Date().getFullYear();

/*export const PageAbout = memo(function PageAbout({
  title,
  subtitle,
  background,
  row,
  column
}) {*/

const maxCardWidth = 600;//"590px";

const iconDefs = {
  Figma: FaFigma,
  Framer: RxFramerLogo,
  React: RiReactjsFill,
}
//   Sketch:,
//   Marvel:,
//   InVision:,
//   XD:,
//   "Photoshop",
//   "Illustrator",
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "Bootsrap",
//   "VisualStudio""

// }

const Skill = (label) => {
  const Icon = iconDefs[label];
  return (<span><Icon />{label}</span>)
}

export default function PageAbout(props) {
  const [media, setMedia] = useOutletContext();
  const mediaSize = ["xs", "md"].includes(media) ? "small" : "large";

  const borderRadius = ".5rem";
  // const color1 = "hsl(0,0%,80%)";
  // const color2 = "hsl(0,0%,90%)";
  const color1 = "hsla(0,0%,0%,0%)";
  const color2 = "hsla(0,0%,0%,10%)";
  const cardColor = "#111";
  return (
    <PageContainer layout="center" maxWidth={maxCardWidth}
    >
      {/*      <div
        className="page-bg"
        style={{
          // position: "absolute",
          // top: 0,
          // left: 0,
          // right: 0,
          background: `linear-gradient(31deg, ${color1} 25%, ${color2} 0, ${color2} 50%, ${color1} 0, ${color1} 75%, ${color2} 0) center / 50px 30px`,
          zIndex: 0
        }}
      />*/}

      {/*   <Counter number="14" label="year professional designer" duration="2" />
      <Counter number="11" label="year UX and product design" duration="2" />
      <Counter number="6" label="time design mentor for KEC" duration="2" />
      <Counter number="4" label="time event speaker" duration="2" />
   
      */}
      <Header title="About Me"
        color="hsl(167,64%,45%)" style={{
          margin: "0 0 0 0", width: "100%", //maxWidth: maxCardWidth 
        }} />

      <Group className="grid"//"col nowrap" 
        style={{
          gridTemplateColumns: "100%", //["xs", "sm"].includes(media) ? "100%" : "1fr 1fr",
          //    maxWidth: maxCardWidth,
        }}>
        <HeroAbout hide={["xl", "lg", "md"].includes(media)} deviceSize="small" />
        <Group className={`row wrap top ${["lg", "md"].includes(media) ? "left" : "center"}`} style={{ width: "100%" }}>
          <Group
            className="col shadow"
            style={{
              //  padding: "1.5rem 2rem",
              //  background: cardColor,
              //color: "hsla(0,0%,100%,80%)",
              width: "100%",
              // maxWidth: maxCardWidth,
              gap: 0,
            }}
          >
            <h4 style={{ marginBottom: "1rem", lineHeight: "1.5" }}>
              Speaker, mentor, adventurer, and casual gamer. Living life one pixel at a time in Knoxville with my loving family and our four-legged friends.
            </h4>
          </Group>

          <CardSection title="Education" style={{
            background: "none"//cardColor, 
          }}>

            {resume.education.map((item, index) => (

              <CardDetails key={`resume-edu-${index}`} content={item} media="small"/*mediaSize*/ />

            ))}

          </CardSection>
        </Group>
        <Group className="col nowrap" >
          <CardSection title="Experience" style={{
            background: "none"//cardColor, 
          }}>

            {resume.experience.map((item, index) => (

              <CardDetails key={`resume-exp-${index}`} content={item} media="small"
              /*mediaSize*/
              />

            ))}
          </CardSection>
        </Group>
      </Group>

    </PageContainer >
  );
}

function CardSection({ title, children, style }) {
  const textColor = "hsl(167,64%,45%)"//"hsl(0,0%,50%)"
  return (
    <div
      className="col nowrap shadow"
      style={{
        // display: "flex",
        // flexFlow: "column nowrap",
        gap: 0,
        // background: "hsl(0,0%,40%)",

        padding: "1rem 0",//".5rem 1rem .5rem .5rem",
        width: "100%",

        // maxWidth: maxCardWidth,
        // minWidth: "300px",
        // maxWidth: "600px",
        ...style,
      }}
    >
      <h2 style={{
        color: textColor, margin: "0 0 1rem 0",// padding: "0 0 .5rem 0", //borderBottom: `1px solid ${textColor}`, 
      }}> {title} </h2>
      {children}
    </div>
  );
}










const CardDates = ({ content, media, lineColor = "hsl(167,40%,30%)", markerColor = "hsl(167,64%,45%)", datesColor = "hsla(0,0%,100%,60%)" }) => {
  // gridColumn: "1 / span 1",
  // display: "flex",
  // width: "100%",
  // height: "100%",
  const responsiveDates = {
    small: {
      gridColumn: "details / span 1",
      gridRow: "1 / span 1",
      textAlign: "left",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      alignItems: "center",
    },
    large: {
      gridColumn: "date / span 1",
      gridRow: "1 / span 1",
      textAlign: "right",

      display: "flex",
      flexFlow: "row wrap",

      justifyContent: "flex-end",
      alignContent: "flex-start"

    }
  }


  const responsiveMarker = {
    small: {
      gridColumn: "marker span 1",
      gridRow: "1 / span 2"
    },
    large: {
      gridColumn: "marker span 1",
      gridRow: "1 / span 1"
    }
  }
  return (
    <Fragment>
      <span
        // className="resume-dates responsive"
        style={{
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          color: datesColor,
          padding: ".7rem 0 0 1rem",
          ...responsiveDates[media]
        }}
      >
        {content.dates.length === 2 ? (
          <Fragment>
            <span
              style={{
                fontSize: "1rem",
                width: "auto",
                height: "auto",
                // flexGrow: 0,
                // flexShrink: 0,

              }}
            >
              {content.dates[0]}
              <span
                style={{
                  fontSize: "1rem",
                  width: "auto",
                  height: "auto",
                  margin: "0 .2rem",
                }}
              >
                -
              </span>
            </span>
            <span
              style={{
                fontSize: "1.3rem",
                // width: "min-content",
                // height: "min-content",
                width: "auto",
                height: "auto",
              }}
            >
              {content.dates[1]}
            </span>
          </Fragment>
        ) : (
          <span
            style={{ fontSize: "1.3rem", width: "min-content", height: "auto" }}
          >
            {content.dates.join(", ")}
          </span>
        )}
      </span>
      <span

        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          ...responsiveMarker[media]
        }}>
        <span
          //className="resume-marker responsive"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "32%",
            width: "2px",
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "center",
            justifyContent: "flex-start",
            //height: "100%",
            borderRight: `4px solid ${lineColor}`,
            padding: ".7rem 0 0 0",
            margin: "0 1rem 0 auto",
            //  color: markerColor,
            //    ...responsiveMarker[media]
            // gap: "0"
          }}
        />
        <span
          //   className="logo"
          style={{
            position: "absolute",
            display: "flex",
            width: "100%",
            padding: ".2rem",
            background: markerColor,//"hsl(167,72%,60%)",//"hsl(0,0%,50%)",
            borderRadius: "100%",
            aspectRatio: "1/1",
            transform: "translate(0, .5rem)",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          <Logo name={content.logo} />
        </span>

      </span>

    </Fragment >
  )
};

const CardHeader = ({ content }) => (
  <span
    style={{
      display: "flex",
      flexFlow: "column nowrap",
      gap: ".25rem",
      padding: "0",
      width: "100%",
      minWidth: "100px",
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "100px"
    }}
  >
    <h4> {content.title} </h4> <h5> {content.subtitle} </h5>
  </span>
);

const TimelineBubble = ({ content, children = { undefined }, style }) => {
  const bubbleStyle = [
    {
      borderRadius: "0rem 1rem 1rem 1rem",
      background: "hsl(0,0%,7%)",//"hsl(0,0%,100%)",
      padding: "1.25rem 1.5rem 1.25rem 2rem",
      zIndex: 1,
    },
    {

      background: "hsl(0,0%,7%)",//"hsl(0,0%,90%)",
      padding: "2rem 2rem 2rem 2rem",
      margin: "-1rem 0 0 0",
      zIndex: 0,
    },
  ];
  return (
    <div
      className="col nowrap box-shadow"
      style={{
        ...style,
        width: "100%",
        maxWidth: "100%",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        margin: "0.5rem 0 1rem 0",
        borderRadius: "0rem 1rem 1rem 1rem",
        overflow: "hidden",
        transform: "translate(-1rem, 0)"
      }}
    >
      <div
        className="row wrap"
        style={{
          columnGap: ".8rem",
          rowGap: ".75rem",

          ...bubbleStyle[0],
        }}
      >

        <CardHeader content={content} />
      </div>
      {children !== undefined && children !== null ?
        <div
          className="box-shadow"
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            gap: ".75rem",
            ...bubbleStyle[1],
          }}
        >
          {children}
        </div> : null}
    </div>
  );

};
/*
const CardSummary = ({content, style}) => (
        <Fragment>
          <CardDates content={content} />
          <TimelineBubble content={content} />
        </Fragment>
        );*/

const CardDetails = ({ content, media }) => {
  const textColor = "hsla(0,0%,100%,80%)";
  const labelColor = "hsl(0,0%,60%)";
  const ProjectDetails = ({ content, style }) => (
    <span
      style={{
        ...style,
      }}
    >
      {content.label ? (
        <span
          style={{
            width: "100%",
            padding: "0 0 .25rem 0",
            color: labelColor,
            // fontSize: ".9rem"
          }}
        >
          {content.label}
        </span>
      ) : null}
      {content.items.map((item, index) => (
        <span
          key={`content-item-${index}`}
          style={{
            display: "flex",
            flexFlow: "row nowrap",
          }}
        >
          <span
            style={{
              color: labelColor,
              fontSize: "1.5rem",
              lineHeight: "1.2rem",
            }}
          >
            •
          </span>
          <span
            key={index}
            style={{
              fontSize: ".9rem",
              margin: "0 .5rem 0 .5rem",
            }}
          >
            {item}
          </span>
        </span>
      ))}
    </span>
  );
  const responsiveTimeline = {
    small: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "[marker] 56px [details] 1fr",
      gridAutoRows: "minmax(0,fit-content)",
      rowGap: 0,
      columnGap: 0,
      color: textColor
    },
    large: {
      display: "grid",
      gridTemplateColumns: "[date] 60px [marker] 32px [details] 1fr",
      gridAutoRows: "min-content",
      rowGap: 0,
      columnGap: 0,
      color: textColor
    }

  }
  return (
    <div style={responsiveTimeline[media]}>
      <CardDates content={content} media={media} />
      <TimelineBubble content={content}>

        {content.details
          ? content.details.map((v_detail, i_detail) =>
            v_detail.label && v_detail.label === "Projects" ? (
              <ProjectDetails
                key={`content-detail-${i_detail}`}
                content={v_detail}
                style={{
                  fontSize: ".9rem",
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                }}
              />
            ) : (
              <ProjectDetails
                key={`content-detail-${i_detail}`}
                content={v_detail}
                style={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  gap: ".25rem",
                  padding: 0,
                  margin: 0,
                  fontSize: ".9rem",
                }}
              />
            )
          )
          : null}
      </TimelineBubble>
    </div>
  );
};

const resume = {
  education: [
    {
      title: "Watkins College of Art, Design, & Film",
      subtitle: "Bachelor of Fine Arts, Graphic Design",
      dates: [2006, 2010],
      logo: "watkins",
    },
    {
      title: "Governor’s School for the Arts",
      subtitle: "Middle Tennessee State University",
      dates: [2005],
      logo: "gsfta",
    },
  ],
  experience: [
    {
      title: "Human-Centered Designer, Owner, Mentor",
      subtitle: "Break Anchor",
      dates: [2009, present],
      logo: "breakanchor",
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
      title: "Sr. Product Designer",
      subtitle: "Cadre5",
      dates: [2019, 2023],
      logo: "cadre5",
      details: [
        {
          items: [
            "Drove the research and design strategy for RESolution: Researcher Hub and Datasets module for Sandia National Lab",
            "Designed and led the development of RESolution: Projects module at Los Alamos National Lab",
            "Successfully implemented RESolution: Proposals pilot at Oak Ridge National Lab",
            "Standardized and improved the design system for RESolution legacy modules",
          ],
        },
        {
          label: "Projects",
          items: [
            "ITLP",
            "Los Alamos National Lab",
            "Landscan",
            "Oak Ridge National Lab",
            "RESolution",
            "Sandia National Lab",
          ],
        },
      ],
    },
    {

      title: "UX/UI Information Systems Senior",
      subtitle: "Bechtel National",
      dates: [2016, 2019],
      logo: "bechtel",
      details: [
        {
          items: [
            "Collaborated with developers and business analysts to produce user-centric software solutions for web, iOS,  Android, and Windows",
          ],
        },
        {
          label: "Projects",
          items: [
            "Arnold",
            "BoltBot",
            "Digital Supply Chain",
            "ES&H",
            "iHUB",
            "LOTO Safety Tracker",
            "MMI",
            "PD@Bechtel",
            "Security Clearance Tracker",
            "SPECS",
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
      title: "UX Design Lead",
      subtitle: "Audiohand",
      dates: [2014, 2016],
      logo: "audiohand",
      details: [
        { items: ["UX conceptual design", "UI design for mobile software"] },
      ],
    },
    {
      title: "Creative Director, UX Design",
      subtitle: "Connection Point",
      dates: [2014],
      logo: "connectionpoint",
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
      title: "Chief Creative Officer, UX Design",
      subtitle: "K-Town Apartments, LLC",
      dates: [2012, 2014],
      logo: "ktown",
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
  community: [
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
      title: "UX Design: Bridging the Gap Between Expectations and Development",
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
  skills: ["Figma",
    "Framer",
    "React",
    "Sketch",
    "Marvel",
    "InVision",
    "XD",
    "Photoshop",
    "Illustrator",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootsrap",
    "VisualStudio"
  ]
};