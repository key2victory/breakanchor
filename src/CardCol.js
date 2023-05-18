//import { memo } from "react";
//role="img" attribute and a descriptive aria-label or title attribute

import { Fragment } from "react";

const Card1 = ({ content }) => (
  <Fragment>
    <div
      style={{
        //gridColumnEnd: "span 2",
        display: "flex",
        flexFlow: "column nowrap",
        padding: "1rem",
        background: "hsl(0,0%,100%)",
        gap: ".25rem"
      }}
    >
      <h4>{content.title}</h4>
      <span>{content.subtitle}</span>
      {content.dates.length === 2 ? (
        <span
          style={{
            display: "flex",
            flexFlow: "row wrap",
            color: "hsl(0,0%,60%)"
          }}
        >
          <span>{content.dates[0]}-</span>
          <span>{content.dates[1]}</span>
        </span>
      ) : (
        <span
          style={{
            display: "flex",
            flexFlow: "row wrap",
            color: "hsl(0,0%,60%)"
          }}
        >
          {content.dates.join(", ")}
        </span>
      )}
    </div>
    <div
      style={{
        //gridColumnEnd: "span 2",
        display: "flex",
        flexFlow: "column nowrap",
        padding: "1rem",
        background: "hsl(0,0%,100%)",
        gap: ".25rem"
      }}
    >
      {content.details
        ? content.details.map((v_detail, i_detail) => (
            <Fragment>
              {v_detail.label ? (
                <span
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
          ))
        : null}
    </div>
  </Fragment>
);

const Card = ({ content }) => (
  <Fragment>
    <span
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        color: "hsl(0,0%,60%)",
        padding: ".5rem .5rem 0 0",
        borderTop: "2px dotted hsl(0,0%,80%)"
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

    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        background: "hsl(0,0%,100%)",
        gap: ".25rem",
        borderTop: "2px dotted hsl(0,0%,80%)",
        borderLeft: "2px dotted hsl(0,0%,80%)",
        padding: ".5rem 0 2rem 1rem"
      }}
    >
      <span style={{ margin: "0 0 .5rem 0" }}>
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
      {content.details
        ? content.details.map((v_detail, i_detail) => (
            <Fragment>
              {v_detail.label ? (
                <span
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

export default function CardCol({ content }) {
  // console.log(content, content.colContent);

  return (
    <div
      className="card"
      style={{
        display: "grid",
        // flexFlow: "column nowrap",
        gridTemplateColumns: "auto 1fr",
        background: "hsl(0,0%,100%)",
        padding: "1rem"
        //  maxWidth: "500px"
        // gap: ".25rem"
      }}
    >
      <h3 style={{ gridColumn: "1 / span 2", paddingBottom: "1rem" }}>
        {content.section}
      </h3>
      {content.items.map((item, index) => (
        <Card key={index} content={item} />
      ))}
    </div>
  );
}

/*content.dates.map((v_date, i_date) => (
        <span key={i_date}>{v_date}</span>
        ))*/
