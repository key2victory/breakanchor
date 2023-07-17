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

const maxCardWidth = "590px";

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

  return (
    <PageContainer layout="center" //maxWidth="1200px"
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
      <HeroAbout hide={["xl", "lg", "md"].includes(media)} deviceSize="small" />
      {/*   <Counter number="14" label="year professional designer" duration="2" />
      <Counter number="11" label="year UX and product design" duration="2" />
      <Counter number="6" label="time design mentor for KEC" duration="2" />
      <Counter number="4" label="time event speaker" duration="2" />
   
      */}
      <Header title="About Me"
        color="hsla(0,0%,0%,50%)" style={{ margin: "0 0 0 0", width: "100%", maxWidth: maxCardWidth }} />
      <Group className="grid"//"col nowrap" 
        style={{
          gridTemplateColumns: ["xs", "sm"].includes(media) ? "100%" : "1fr 1fr", //maxWidth: maxCardWidth 
        }}>
        <Group className={`row wrap top ${["lg", "md"].includes(media) ? "left" : "center"}`} style={{ width: "100%" }}>
          <Group
            className="col shadow"
            style={{
              padding: "1.5rem 2rem",
              background: "hsla(0,0%,30%,85%)",
              color: "hsla(0,0%,100%,80%)",
              width: "100%",
              // maxWidth: maxCardWidth,
              gap: 0,
            }}
          >
            <h5 style={{ marginBottom: ".5rem" }}> I'm a team player</h5>
            <p style={{ marginBottom: "1rem" }}>
              Throughout my career, I've had the pleasure of working on many highly effective teams. I'm used to leveraging the strengths of each individual to work more efficiently and aid each other's personal growth. I understand the power of collaboration and I'm dedicated to the success of the team as a whole. I've spent a lot of time in both startup and enterprise environments.
            </p>
          </Group>
          <Group
            className="col shadow"
            style={{
              padding: "1.5rem 2rem",
              background: "hsla(0,0%,30%,85%)",
              color: "hsla(0,0%,100%,80%)",
              width: "100%",
              //  maxWidth: maxCardWidth,
              gap: 0,
            }}
          >
            <h5 style={{ marginBottom: ".5rem" }}>
              My skills are also my hobbies
            </h5>
            <p style={{ marginBottom: "1rem" }}>
              I'm well-versed in user experience and visual design principles, but have a personal fascination with psychology and reading material on human behavior, social patterns, and research for fun. I am always curious about new technology and always try to stay up-to-date on UX patterns, trends, UI frameworks, and the latest advancements. I've been a speaker at Codestock and Scenic City Summit developer conferences, and I'm comfortable presenting my ideas to clients.
            </p>
          </Group>
          <Group
            className="col shadow"
            style={{
              padding: "1.5rem 2rem",
              background: "hsla(0,0%,30%,85%)",
              color: "hsla(0,0%,100%,80%)",
              width: "100%",
              //  maxWidth: maxCardWidth,
              gap: 0,
            }}
          >
            <h5 style={{ marginBottom: ".5rem" }}>
              It's my personal mission to empower others
            </h5>
            <p style={{ marginBottom: "0rem" }}>
              My degree program at Watkins College of Art taught me how to evaluate my work against the principles of design to make iterative improvements, and how to assist other designers in reaching the full potential of their work through collaborative feedback.I use these techniques often when mentoring for the Knoxville Entrepreneur Center and new designers in my spare time. I am always looking for ways to improve myself and support the success of others.
            </p>
          </Group>
          <CardSection title="Education">

            {resume.education.map((item, index) => (

              <CardDetails key={`resume-edu-${index}`} content={item} media={mediaSize} />

            ))}

          </CardSection>
        </Group>
        <Group className="col nowrap" >
          <CardSection title="Experience">

            {resume.experience.map((item, index) => (

              <CardDetails key={`resume-exp-${index}`} content={item} media={mediaSize} />

            ))}
          </CardSection>
        </Group>
      </Group>

    </PageContainer >
  );
}

function CardSection({ title, children, style }) {
  return (
    <div
      className="col nowrap shadow"
      style={{
        // display: "flex",
        // flexFlow: "column nowrap",
        gap: 0,
        // background: "hsl(0,0%,40%)",
        background: "hsla(0,0%,30%,85%)",
        padding: "1rem 2rem 1rem 1rem",
        width: "100%",
        // maxWidth: maxCardWidth,
        // minWidth: "300px",
        // maxWidth: "600px",
        ...style,
      }}
    >
      <h3 style={{ color: "hsl(0,0%,100%)", margin: "0 0 1rem 0" }}> {title} </h3>
      {children}
    </div>
  );
}










const CardDates = ({ content, media }) => {
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
          color: "hsl(0,0%,100%)",
          padding: ".5rem 0 0 0",
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
        //className="resume-marker responsive"
        style={{
          width: "2px",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          justifyContent: "flex-start",
          //height: "100%",
          borderRight: "2px solid hsl(0,0%,80%)",
          padding: ".7rem 0 0 0",
          margin: "0 1rem 0 auto",
          color: "hsl(0,0%,100%)",
          ...responsiveMarker[media]
          // gap: "0"
        }}
      >
        <MdCircle style={{ transform: "translateX(1px)" }} />
      </span>
    </Fragment>
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

const TimelineBubble = ({ content, children, style }) => {
  const bubbleStyle = [
    {
      borderRadius: "0rem 1rem 1rem 1rem",
      background: "hsl(0,0%,100%)",
      padding: "1rem",
      zIndex: 1,
    },
    {

      background: "hsl(0,0%,90%)",
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
        <span
          className="logo"
          style={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "stretch",
            background: "hsl(0,0%,90%)",
            borderRadius: ".5rem",
            aspectRatio: "1/1",
          }}
        >
          <Logo name={content.logo} />
        </span>
        <CardHeader content={content} />
      </div>
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
      </div>
    </div>
  );

};
/*
const CardSummary = ({ content, style }) => (
  <Fragment>
    <CardDates content={content} />
    <TimelineBubble content={content} />
  </Fragment>
);*/

const CardDetails = ({ content, media }) => {

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
            color: "hsl(0,0%,60%)",
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
              color: "hsl(0,0%,60%)",
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
      display: "grid",
      gridTemplateColumns: "[marker] 28px [details] 1fr",
      gridAutoRows: "minmax(0,fit-content)",
      rowGap: 0,
      columnGap: 0,
    },
    large: {
      display: "grid",
      gridTemplateColumns: "[date] 60px [marker] 32px [details] 1fr",
      gridAutoRows: "min-content",
      rowGap: 0,
      columnGap: 0,
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
      title: "Cadre5",
      subtitle: "Sr. Product Designer",
      dates: [2019, present],
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
      title: "Bechtel National",
      subtitle: "UX/UI Information Systems Senior",
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
      title: "Break Anchor",
      subtitle: "Owner, Lead Designer, Mentor",
      dates: [2009, 2017],
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
      title: "Audiohand",
      subtitle: "Lead UX Designer",
      dates: [2014, 2016],
      logo: "audiohand",
      details: [
        { items: ["UX conceptual design", "UI design for mobile software"] },
      ],
    },
    {
      title: "Connection Point",
      subtitle: "Creative Director, UX Design",
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
      title: "K-Town Apartments, LLC",
      subtitle: "Chief Creative Officer, UX Design",
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