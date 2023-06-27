import {memo, useState, useEffect, Fragment} from "react";

import {AppHeader} from "./AppNav";
import HeroAbout from "./HeroAbout";
import {Logo} from "./Logo";
import {Header, ButtonLink, Note, Group} from "./PageElements";
import {
  // MdSchool,
  // MdOutlineSchool,
  // MdWork,
  // MdWorkOutline,
  // MdEmojiEvents,
  // MdOutlineEmojiEvents,
  MdCircle,
} from "react-icons/md";

const present = new Date().getFullYear();

/*export const PageAbout = memo(function PageAbout({
  title,
  subtitle,
  background,
  row,
  column
}) {*/
export default function PageAbout(props) {
  const borderRadius = ".5rem";
  const color1 = "hsl(0,0%,80%)";
  const color2 = "hsl(0,0%,90%)";
  return (
    <div className="main-content">
      <div
        className="page-bg"
        style={{
          // background: "linear-gradient(90deg, #f9b446 0%, #FEC107 100%)"
          background: `linear-gradient(45deg, ${color1} 25%, ${color2} 0, ${color2} 50%, ${color1} 0, ${color1} 75%, ${color2} 0)`,
          backgroundSize: "30px 30px",
          //   "repeating-linear-gradient(30deg, hsla(0,0%,100%,.1), hsla(0,0%,100%,.1) 15px, transparent 0, transparent 30px)"
        }}
      />{" "}
      <div
        className="page-bg"
        style={{
          background: `linear-gradient(31deg, ${color1} 25%, ${color2} 0, ${color2} 50%, ${color1} 0, ${color1} 75%, ${color2} 0) center / 50px 30px`,
        }}
      />{" "}
      <div className="scroll-zone">
        <HeroAbout />
        <CardSection title="Education">
          <Group
            className="resume-timeline" //desktop-col tablet-col mobile-col"
            style={
              {
                // background: "hsl(0,0%,100%)"
              }
            }
          >
            {resume.education.map((item, index) => (
              <CardDetails key={`resume-edu-${index}`} content={item} />
            ))}{" "}
          </Group>{" "}
        </CardSection>
        <CardSection title="Experience">
          <Group
            className="resume-timeline desktop-resume tablet-resume mobile-resume"
            style={
              {
                //  background: "hsl(0,0%,100%)"
              }
            }
          >
            {resume.experience.map((item, index) => (
              <CardDetails key={`resume-xp-${index}`} content={item} />
            ))}{" "}
          </Group>{" "}
        </CardSection>{" "}
      </div>{" "}
    </div>
  );
}

function CardSection({title, children, style}) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        gap: "1rem",
        background: "hsl(0,0%,40%)",
        padding: "1rem",
        minWidth: "300px",
        maxWidth: "600px",
        ...style,
      }}
    >
      <h3 style={{color: "hsl(0,0%,100%)"}}> {title} </h3> {children}{" "}
    </div>
  );
}

const CardDates = ({content}) => (
  <div
    style={{
      gridColumn: "1 / span 1",
      display: "flex",
      flexFlow: "row nowrap",
      width: "100%",
      height: "100%",
    }}
  >
    <span
      style={{
        width: "100%",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        color: "hsl(0,0%,100%)",
        //gap: ".25rem",
        padding: ".5rem 0 0 0",

        // textAlign: "right"
      }}
    >
      {content.dates.length === 2 ? (
        <Fragment>
          <span
            style={{
              fontSize: "1rem",
              width: "min-content",
              height: "min-content",
            }}
          >
            {content.dates[0]}
            <span
              style={{
                fontSize: "1rem",
                width: "auto",
                height: "min-content",
                margin: "0 .2rem",
              }}
            >
              -
            </span>{" "}
          </span>{" "}
          <span
            style={{
              fontSize: "1.3rem",
              width: "min-content",
              height: "min-content",
            }}
          >
            {content.dates[1]}{" "}
          </span>{" "}
        </Fragment>
      ) : (
        <span
          style={{fontSize: "1.3rem", width: "min-content", height: "auto"}}
        >
          {content.dates.join(", ")}{" "}
        </span>
      )}{" "}
    </span>{" "}
    <span
      style={{
        width: "2px",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
        borderRight: "2px solid hsl(0,0%,80%)",
        padding: ".7rem 0 0 0",
        margin: "0 1rem 0 1rem",
        color: "hsl(0,0%,100%)",
        // gap: "0"
      }}
    >
      <MdCircle style={{transform: "translateX(1px)"}} />{" "}
    </span>{" "}
  </div>
);

const CardHeader = ({content}) => (
  <span
    style={{
      display: "flex",
      flexFlow: "column nowrap",
      gap: ".25rem",
      padding: "0",
    }}
  >
    <h4> {content.title} </h4> <h5> {content.subtitle} </h5>{" "}
  </span>
);

const TimelineBubble = ({content, children, style}) => {
  const bubbleStyle = [
    {
      background: "hsl(0,0%,100%)",
      padding: "1rem",
      zIndex: 1,
    },
    {
      borderRadius: "0", // 0 1rem 1rem",
      background: "hsl(0,0%,90%)",
      padding: "2rem 2rem 2rem 2rem",
      margin: "-1rem 0 0 0",
      zIndex: 0,
    },
  ];
  if (children) {
    return (
      <div
        className="box-shadow"
        style={{
          ...style,
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexFlow: "column nowrap",
          // columnGap: ".5rem",
          // rowGap: ".75rem",
          margin: "1rem 0",
          borderRadius: "0rem 1rem 1rem 1rem",
          overflow: "hidden",
          //  ...bubbleStyle
        }}
      >
        <div
          style={{
            //...style,
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            columnGap: ".8rem",
            rowGap: ".75rem",
            borderRadius: "0rem 1rem 0rem 0rem",
            ...bubbleStyle[0],
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "stretch",
              width: "48px",
              height: "48px",
              background: "hsl(0,0%,90%)",
              borderRadius: ".5rem",
              // padding: ".1rem",
              aspectRatio: "1/1",
            }}
          >
            <Logo name={content.logo} />{" "}
          </span>{" "}
          <CardHeader content={content} />{" "}
        </div>{" "}
        <div
          className="box-shadow"
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            gap: ".75rem",
            ...bubbleStyle[1],
          }}
        >
          {children}{" "}
        </div>{" "}
      </div>
    );
  } else {
    return (
      <div
        className="box-shadow"
        style={{
          width: "100%",

          maxWidth: "400px",
          margin: "1rem 0",
          borderRadius: "0rem 1rem 1rem 1rem",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          columnGap: ".8rem",
          rowGap: ".75rem",
          //  margin: ".5rem 0",
          ...bubbleStyle[0],
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "stretch",
            width: "48px",
            height: "48px",
            background: "hsl(0,0%,90%)",
            borderRadius: ".5rem",
            // padding: ".1rem",
            aspectRatio: "1/1",
          }}
        >
          <Logo name={content.logo} />{" "}
        </span>{" "}
        <CardHeader content={content} />{" "}
      </div>
    );
  }
};

const CardSummary = ({content, style}) => (
  <Fragment>
    <CardDates content={content} />
    <TimelineBubble content={content} />{" "}
  </Fragment>
);

const CardDetails = ({content}) => {
  const ProjectDetails = ({content, style}) => (
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
          {content.label}{" "}
        </span>
      ) : null}{" "}
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
            {item}{" "}
          </span>{" "}
        </span>
      ))}{" "}
    </span>
  );

  return (
    <Fragment>
      <CardDates content={content} />
      <TimelineBubble content={content}>
        {" "}
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
          : null}{" "}
      </TimelineBubble>{" "}
    </Fragment>
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
            "Collaborated with developers and business analysts to produce user-centric software solutions for web, iOS,  Android, and Windows",
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
        {items: ["UX conceptual design", "UI design for mobile software"]},
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
};
