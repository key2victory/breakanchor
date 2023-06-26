import {memo, useState, useEffect, Fragment} from "react";
import HeroAbout from "./HeroAbout";
import {Header, ButtonLink, Note, Caption, Column, Row} from "./PageElements";

const present = new Date().getFullYear();

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
        ...style,
      }}
    >
      <h3 style={{color: "hsl(0,0%,100%)"}}> {title} </h3> {children}{" "}
    </div>
  );
}

const CardSummary = ({content, style}) => (
  <div
    style={{
      display: "flex",
      flexFlow: "column nowrap",
      gap: ".25rem",
      ...style,
    }}
  >
    <h4> {content.title} </h4> <span> {content.subtitle} </span>{" "}
    {content.dates.length === 2 ? (
      <span
        style={{
          display: "flex",
          flexFlow: "row wrap",
          color: "hsl(0,0%,60%)",
          gap: ".25rem",
        }}
      >
        <span> {content.dates[0]} </span> <span> - </span>{" "}
        <span> {content.dates[1]} </span>{" "}
      </span>
    ) : (
      <span
        style={{
          display: "flex",
          flexFlow: "row wrap",
          color: "hsl(0,0%,60%)",
        }}
      >
        {content.dates.join(", ")}{" "}
      </span>
    )}{" "}
  </div>
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
    <div
      className="card"
      style={{
        background: "hsl(0,0%,100%)",

        display: "flex",
        flexFlow: "row wrap",
        margin: "1rem 1rem 1.5rem 1rem",
        gap: ".25rem",
      }}
    >
      <CardSummary content={content} style={{minWidth: "45%"}} />{" "}
      <div
        style={{
          minWidth: "300px",
          maxWidth: "400px",
          display: "flex",
          flexFlow: "column nowrap",
          gap: "1rem",
        }}
      >
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
      </div>{" "}
    </div>
  );
};

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
          {" "}
          {resume.education.map((item, index) => (
            <div
              key={`resume-edu-${index}`}
              className="card"
              style={{background: "hsl(0,0%,100%)", maxWidth: "400px"}}
            >
              <CardSummary key={index} content={item} />{" "}
            </div>
          ))}{" "}
        </CardSection>
        <CardSection title="Experience">
          {" "}
          {resume.experience.map((item, index) => (
            <CardDetails key={`resume-xp-${index}`} content={item} />
          ))}{" "}
        </CardSection>{" "}
      </div>{" "}
    </div>
  );
}

const resume = {
  education: [
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
  experience: [
    {
      title: "Cadre5",
      subtitle: "Sr. Product Designer",
      dates: [2019, present],
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
        {items: ["UX conceptual design", "UI design for mobile software"]},
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

/*
const CardDetails1 = ({ content }) => {
  return (
    <Fragment>
      <CardItem content={content} />
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          padding: "1rem",
          background: "hsl(0,0%,100%)",
          gap: ".25rem"
        }}
      >
        {content.details.map((v_detail, i_detail) => (
          <Fragment>
            {v_detail.label ? (
              <span
                key={i_detail}
                style={{
                  marginTop: ".25rem"
                }}
              >
                {v_detail.label}
              </span>
            ) : null}
            {v_detail.label && v_detail.label === "Projects" ? (
              <span>{v_detail.items.join(" • ")}</span>
            ) : (
              <ul
                style={{
                  margin: 0
                }}
              >
                {v_detail.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

const CardTimeline1 = ({ content }) => {
  return (
    <Fragment>
      <span
        style={{
          gridColumn: "1 / span 1",
          gridRow: "auto / span 1",
          display: "flex",
          flexFlow: "column nowrap",
          color: "hsl(0,0%,60%)",
          padding: "0 .5rem .5rem 0",
          borderBottom: "2px dotted hsl(0,0%,80%)"
        }}
      >
        {content.dates.length > 1 ? (
          <Fragment>
            <span>{content.dates[content.dates.length - 1]}</span>
            <span>{content.dates[0]}-</span>
          </Fragment>
        ) : (
          content.dates[0]
        )}
      </span>

      <span
        style={{
          gridColumn: "2 / span 1",
          gridRow: "auto / span 1",
          padding: "0 0 .5rem .5rem",
          // margin: "0 0 .5rem 0",
          borderLeft: "2px dotted hsl(0,0%,80%)",
          borderBottom: "2px dotted hsl(0,0%,80%)"
        }}
      >
        <h4>{content.title}</h4>
        <span>{content.subtitle}</span>
        {content.dates.length > 2 ? (
          <span
            style={{
              color: "hsl(0,0%,60%)"
            }}
          >
            {content.dates.join(", ")}
          </span>
        ) : null}
      </span>
      <div
        style={{
          gridColumn: "2 / span 1",
          gridRow: "auto / span 1",
          display: "flex",
          flexFlow: "column nowrap",
          background: "hsl(0,0%,100%)",
          gap: ".25rem",

          borderLeft: "2px dotted hsl(0,0%,80%)",
          padding: ".5rem 0 2rem .25rem"
        }}
      >
        {content.details
          ? content.details.map((v_detail, i_detail) => (
              <Fragment>
                {v_detail.label ? (
                  <span
                    key={i_detail}
                    style={{
                      color: "hsl(0,0%,60%)"
                      // fontSize: ".9rem"
                    }}
                  >
                    {v_detail.label}
                  </span>
                ) : null}
                <ul
                  style={{
                    margin: "0 0 .5rem 0",
                    paddingLeft: "1.25rem",
                    fontSize: ".9rem"
                  }}
                >
                  {v_detail.label && v_detail.label === "Projects" ? (
                    <li>{v_detail.items.join(" • ")}</li>
                  ) : (
                    v_detail.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  )}
                </ul>
              </Fragment>
            ))
          : null}
      </div>
    </Fragment>
  );
};

const CardTimeline = ({ content }) => {
  return (
    <Fragment>
      <span
        style={{
          gridColumn: "1 / span 1",
          gridRow: "auto / span 1",
          display: "flex",
          flexFlow: "column nowrap",
          color: "hsl(0,0%,60%)",
          padding: "0 .5rem .5rem 0"
          // borderBottom: "2px dotted hsl(0,0%,80%)"
        }}
      >
        {content.dates.length > 1 ? (
          <Fragment>
            <span>{content.dates[content.dates.length - 1]}</span>
            <span>{content.dates[0]}-</span>
          </Fragment>
        ) : (
          content.dates[0]
        )}
      </span>

      <span
        style={{
          gridColumn: "2 / span 1",
          gridRow: "auto / span 1",
          padding: "0 0 .5rem .5rem"
          // margin: "0 0 .5rem 0",
          // borderLeft: "2px dotted hsl(0,0%,80%)",
          // borderBottom: "2px dotted hsl(0,0%,80%)"
        }}
      >
        <h4>{content.title}</h4>
        <span>{content.subtitle}</span>
        {content.dates.length > 2 ? (
          <span
            style={{
              color: "hsl(0,0%,60%)"
            }}
          >
            {content.dates.join(", ")}
          </span>
        ) : null}
      </span>
      <div
        style={{
          gridColumn: "2 / span 1",
          gridRow: "auto / span 1",
          display: "flex",
          flexFlow: "column nowrap",
          background: "hsl(0,0%,100%)",
          gap: ".25rem",
          padding: ".5rem 0 2rem .25rem"
        }}
      >
        {content.details
          ? content.details.map((v_detail, i_detail) => (
              <div
                style={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  borderLeft: "4px solid hsl(0,0%,80%)",
                  margin: "0 0 1rem 0",
                  gap: ".25rem"
                }}
              >
                {v_detail.label ? (
                  <span
                    key={i_detail}
                    style={{
                      padding: "0 0 0 .5rem",
                      color: "hsl(0,0%,60%)"
                      // fontSize: ".9rem"
                    }}
                  >
                    {v_detail.label}
                  </span>
                ) : null}

                {v_detail.label && v_detail.label === "Projects" ? (
                  <div
                    style={{
                      // margin: "0 0 .5rem 0",
                      paddingLeft: ".25rem",
                      fontSize: ".9rem",
                      display: "flex",
                      flexFlow: "row wrap"
                    }}
                  >
                    {v_detail.items.map((v_item, i_item) => (
                      <span
                        style={{
                          background: "hsl(0,0%,92%)",
                          padding: ".25rem .5rem",
                          borderRadius: ".25rem",
                          margin: ".2rem"
                        }}
                      >
                        {v_item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ul
                    style={{
                      padding: "0 0 0 1.25rem",
                      margin: 0,
                      fontSize: ".9rem"
                    }}
                  >
                    {v_detail.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          : null}
      </div>
    </Fragment>
  );
};*/
