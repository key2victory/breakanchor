import {memo} from "react";
import {HeroIntuitive} from "./HeroIntuitive";
import {Header, ButtonLink, Note, Group} from "./PageElements";

export const PageIntuitive = memo(function PageIntuitive({
  title,
  subtitle,
  background,
  row,
  column,
}) {
  const borderRadius = ".5rem";
  const pages = [
    {
      title: "What Makes UI Intuitive?",
      path: "/intuitive",
      subtitle: "Speaker Session",
      hero: "iframe",
      background:
        "linear-gradient(90deg, hsl(256, 30%, 60%) 0%, hsl(228, 40%, 70%) 40%)",
      background1: "hsl(228, 40%, 70%)", //"hsl(258, 34%, 87%)", //"hsl(256, 60%, 29%)",
      background2: "hsl(218,77%,88%)", //"hsl(228,55%,32%)",
    },
  ];
  const cardHeader = {
    // background: "hsl(240, 18%, 58%)",
    // background: "hsl(240, 80%, 95%)",
    background: "hsla(240, 80%, 90%, 10%)",
    color: "hsl(240,30%,50%)",
    padding: "1rem 1rem",
    borderRadius: ".5rem",
  };
  const cardSection = {
    // borderLeft: "10px solid hsl(240,50%,60%)",
    borderRadius: "1rem",
    padding: "1rem",
    background: "hsla(240,20%,100%,100%)",
  };
  //const color1 = "hsl(0,0%,80%)";
  //const color2 = "hsl(0,0%,90%)";
  const color1 = "hsl(245, 60%, 62%)"; //"hsl(240, 80%, 92%)";
  const color2 = "transparent"; //"hsl(235, 60%, 64%)"; //"hsl(240, 80%, 95%)";
  const color3 = "hsl(235, 60%, 64%)";
  const color4 = "hsl(235, 40%, 62%)";

  return (
    <div className="main-content">
      <div
        className="page-bg"
        style={{
          background: `linear-gradient(45deg, ${color1} 25%, ${color2} 0, ${color2} 50%, ${color1} 0, ${color1} 75%, ${color2} 0) center / 30px 30px`,
        }}
      />{" "}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,

          zIndex: "-11",
          background: `linear-gradient(${color3} 50%,${color4} 80%)`,
        }}
      />{" "}
      <div className="scroll-zone">
        {" "}
        {/* <div
                      className="page-bg"
                      style={{
                        background:
                          "linear-gradient(90deg, hsl(256, 30%, 60%) 0%, hsl(228, 40%, 70%) 40%)"
                      }}
                    />*/}{" "}
        <Header
          title={title}
          title1="What Makes"
          title2="UI Intuitive?"
          subtitle="Codestock Speaker Session"
          color="hsl(0,0%,100%)"
        >
          <ButtonLink
            color="white"
            line1="see the full"
            line2="slide deck"
            url="https://docs.google.com/presentation/d/1sX_i-tTYVkihPYqb25-01_tm7hDQsf-zdyhIPcvHed8/edit?usp=sharing"
          />
        </Header>{" "}
        <Group className="desktop-row tablet-row mobile-col">
          <Note
            title="Synopsis"
            description="Computers aren’t natural, yet people use the word “intuitive” to describe great software – It’s not a mistake. In this session, we'll examine how design interfaces with the human brain."
            background="hsl(240, 80%, 90%)"
            collapse={false}
            style={{maxWidth: "500px"}}
          />{" "}
        </Group>{" "}
        <Group
          className="card col"
          style={{
            ...cardSection,
          }}
        >
          <Group className="col" style={{...cardHeader}}>
            <h2> 1. Cognitive Load </h2>{" "}
          </Group>{" "}
          <Group>
            <img
              className="image"
              src="./img/intuitive-42.png"
              alt=""
              style={{
                borderRadius: borderRadius,
                filter: "drop-shadow(2px 2px 0px hsla(0, 0%, 0%, 20%))",
              }}
            />{" "}
          </Group>{" "}
        </Group>{" "}
        <Group
          className="card col"
          style={{
            ...cardSection,
          }}
        >
          <Group className="col" style={{...cardHeader}}>
            <h2> 2. Implicit Memory </h2>{" "}
            <span>
              Conceptual model from psychology used to describe how human
              thought processing can be categorized into two main types{" "}
            </span>{" "}
          </Group>{" "}
          <Group>
            <img
              className="image"
              src="./img/intuitive-44.png"
              alt=""
              style={{
                borderRadius: borderRadius,
              }}
              width="100%"
            />
          </Group>{" "}
        </Group>{" "}
        <Group className="card col" style={{...cardSection}}>
          <Group style={{...cardHeader}}>
            <h2> 3. Semiotics </h2>{" "}
          </Group>{" "}
          <Group>
            <img className="image" src="./img/intuitive-12.png" alt="" />
          </Group>{" "}
        </Group>{" "}
        <Group className="card col" style={{...cardSection}}>
          <Group className="col" style={{...cardHeader}}>
            <h2> Session Feedback </h2>{" "}
            <h3>
              {" "}
              What part was most memorable ? Did you learn something new ?{" "}
            </h3>{" "}
          </Group>
          <Group
            className="desktop-row tablet-row mobile-col"
            style={{padding: "0 1rem 1rem 1rem"}}
          >
            <span
              style={{
                display: "flex",
                flexFlow: "column nowrap",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
              }}
            >
              {comments.slice(0, 7).map((item, index) => (
                <span
                  key={index}
                  className="text-bubble"
                  style={{
                    fontSize: "18px",
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                    background: "hsl(240, 80%, 92%)",
                    //  "linear-gradient(90deg, hsl(280,30%,88%),hsl(255,30%,88%),hsl(230,30%,88%))" //"#DBD6E9"
                  }}
                >
                  {item}{" "}
                </span>
              ))}{" "}
            </span>{" "}
            <span
              style={{
                display: "flex",
                flexFlow: "column nowrap",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
              }}
            >
              {comments.slice(7).map((item, index) => (
                <span
                  key={index}
                  className="text-bubble"
                  style={{
                    fontSize: "18px",
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 0,
                    background: "hsl(240, 80%, 92%)",
                    // "linear-gradient(90deg, hsl(280,30%,88%),hsl(255,30%,88%),hsl(230,30%,88%))" //"#DBD6E9"
                  }}
                >
                  {item}{" "}
                </span>
              ))}{" "}
            </span>{" "}
          </Group>{" "}
        </Group>{" "}
        <HeroIntuitive />
      </div>{" "}
    </div>
  );
});

const comments = [
  "The graphics were really helpful in understanding the concepts and I could tell you put a lot of effort into the flow of the presentation! I second the comment about how interesting it was to link the research with UX design.",
  "I liked the initial questions and detailed explanation of how the process works.",
  "The science was super cool!",
  "Really enjoyed the pre survey and the a/b test surprise and results",
  "Great examples and live data",
  "The surveys were a great interest grabber and were still relevant to the actual talk!",
  "Semiotic section. I felt like it was really well explained with practical examples",
  "I enjoyed your talk and examples, very interesting as a whole ",
  "You did awesome. It was a very interesting and engaging talk",
  "I really liked the examples of how to apply what you were discussing and wished there were a few more in there especially for the stuff towards the end of the presentation. ",
  "You did an excellent job!",
  "Great presentation! Your nerves disappeared less than 1 minute after mentioning it.",
  "The presentation was great. I actually came in with a UX issue I wasn’t sure how to solve, and settled on the answer during the presentation, so thanks.",
];
