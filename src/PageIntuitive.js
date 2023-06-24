import { memo, useState, useEffect, Fragment } from "react";
import { HeroIntuitive } from "./HeroIntuitive";
import {
  Header,
  ButtonLink,
  Note,
  Caption,
  Column,
  Row,
  Group
} from "./PageElements";
//import CardCol from "./CardCol";
//import CardRow from "./CardRow";
import { Slide } from "./Slides";

export const PageIntuitive = memo(function PageIntuitive({
  title,
  subtitle,
  background,
  row,
  column
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
      background2: "hsl(218,77%,88%)" //"hsl(228,55%,32%)",
    }
  ];
  const cardHeader = {
    // background: "hsl(240, 18%, 58%)",
    // background: "hsl(240, 80%, 95%)",
    background: "hsla(240, 80%, 90%, 10%)",
    color: "hsl(240,30%,50%)",
    padding: "1rem 1rem",
    borderRadius: ".5rem"
  };
  const cardSection = {
    // borderLeft: "10px solid hsl(240,50%,60%)",
    borderRadius: "1rem",
    padding: "1rem",
    background: "hsla(240,20%,100%,100%)"
  };
  const color1 = "hsl(240, 60%, 80%)";
  const color2 = "hsl(240, 80%, 85%)"; //"hsl(240, 40%, 83%)";
  return (
    <div className="main-content">
      <div
        className="page-bg"
        style={{
          background: `linear-gradient(45deg, ${color1} 25%, ${color2} 0, ${color2} 50%, ${color1} 0, ${color1} 75%, ${color2} 0) center / 30px 30px`
        }}
      />
      <div className="scroll-zone">
        {/* <div
          className="page-bg"
          style={{
            background:
              "linear-gradient(90deg, hsl(256, 30%, 60%) 0%, hsl(228, 40%, 70%) 40%)"
          }}
        />*/}
        <Header
          title={title}
          title1="What Makes"
          title2="UI Intuitive?"
          subtitle="Codestock Speaker Session"
          color="hsl(0,0%,0%)"
        />
        <Group className="desktop-row tablet-row mobile-col">
          <Note
            title="Synopsis"
            description="Computers aren’t natural, yet people use the word “intuitive” to describe great software – It’s not a mistake. In this session, we'll examine how design interfaces with the human brain."
            background="hsl(240, 80%, 90%)"
            collapse={false}
            style={{ maxWidth: "500px" }}
          />
        </Group>
        <Group
          className="card col"
          style={{
            ...cardSection
          }}
        >
          <Group className="col" style={{ ...cardHeader }}>
            <h2>1. Cognitive Load</h2>
          </Group>
          <Group>
            <img
              className="image"
              src="./img/intuitive-42.png"
              alt=""
              style={{
                borderRadius: borderRadius,
                filter: "drop-shadow(2px 2px 0px hsla(0, 0%, 0%, 20%))"
              }}
            />

            {/* <Group>
            <img
              className="image"
              src="./img/intuitive-41.png"
              alt=""
              style={{ borderRadius: borderRadius }}
            />
          </Group>*/}
          </Group>
        </Group>
        <Group
          className="card col"
          style={{
            ...cardSection
          }}
        >
          <Group className="col" style={{ ...cardHeader }}>
            <h2>2. Implicit Memory</h2>
            <span>
              Conceptual model from psychology used to describe how human
              thought processing can be categorized into two main types
            </span>
          </Group>
          <Group>
            <img
              className="image"
              src="./img/intuitive-44.png"
              alt=""
              style={{
                borderRadius: borderRadius
              }}
              width="100%"
            />
          </Group>
          {/*  <Group
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              columnGap: "1rem",
              width: "100%",
              height: "auto",
              minWidth: 0,
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0
            }}
          >
            <img
              className="image"
              src="./img/split-form.png"
              alt=""
              style={{
                borderRadius: borderRadius,
                gridColumn: "1 / span 1",
                gridRow: "1 / span 1",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0
              }}
              width="100%"
            />
            <img
              className="image"
              src="./img/intuitive-26.png"
              alt=""
              style={{
                borderRadius: borderRadius,
                gridColumn: "2 / span 1",
                gridRow: "1 / span 1",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0
                //height: "1"
              }}
              width="100%"
            />
          </Group>*/}
        </Group>
        <Group className="card col" style={{ ...cardSection }}>
          <Group style={{ ...cardHeader }}>
            <h2>3. Semiotics</h2>
          </Group>
          <Group>
            <img
              className="image"
              src="./img/intuitive-12.png"
              alt=""
              //style={{ borderRadius: borderRadius }}
            />
          </Group>
        </Group>
        <Group className="card col" style={{ ...cardSection }}>
          <Group className="col" style={{ ...cardHeader }}>
            <h2>Session Feedback</h2>
            <h3>What part was most memorable? Did you learn something new?</h3>
          </Group>

          {/* <span
            style={{
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0
            }}
          >*/}
          <Group
            className="desktop-row tablet-row mobile-col"
            style={{ padding: "0 1rem 1rem 1rem" }}
          >
            <span
              style={{
                display: "flex",
                flexFlow: "column nowrap",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0
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
                    background: "hsl(240, 80%, 92%)"
                    //  "linear-gradient(90deg, hsl(280,30%,88%),hsl(255,30%,88%),hsl(230,30%,88%))" //"#DBD6E9"
                  }}
                >
                  {item}
                </span>
              ))}
            </span>
            <span
              style={{
                display: "flex",
                flexFlow: "column nowrap",
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0
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
                    // maxWidth: "400px",
                    // width: "auto",
                    // margin: ".3rem 0",
                    // padding: ".5rem .8rem",
                    // borderRadius: ".3rem",
                    background: "hsl(240, 80%, 92%)"
                    // "linear-gradient(90deg, hsl(280,30%,88%),hsl(255,30%,88%),hsl(230,30%,88%))" //"#DBD6E9"
                  }}
                >
                  {item}
                </span>
              ))}
            </span>
          </Group>
        </Group>
        <HeroIntuitive />
      </div>
    </div>
  );
});

const comments = [
  "The graphics were really helpful in understanding the concepts and I could tell you put a lot of effort into the flow of the presentation! I second the comment about how interesting it was to link the research with UX design.",
  "I liked the initial questions and detailed explanation of how the process works.",
  "The science was super cool!",
  //"The charts relating and comparing implicit vs explicit memory and recollection",
  "Really enjoyed the pre survey and the a/b test surprise and results",
  "Great examples and live data",
  "The surveys were a great interest grabber and were still relevant to the actual talk!",
  "Semiotic section. I felt like it was really well explained with practical examples",

  "I enjoyed your talk and examples, very interesting as a whole ",
  "You did awesome. It was a very interesting and engaging talk",
  "I really liked the examples of how to apply what you were discussing and wished there were a few more in there especially for the stuff towards the end of the presentation. ",
  "You did an excellent job!",
  "Great presentation! Your nerves disappeared less than 1 minute after mentioning it.",
  "The presentation was great. I actually came in with a UX issue I wasn’t sure how to solve, and settled on the answer during the presentation, so thanks."
];

const memorableComments = [
  "I liked the initial questions and detailed explanation of how the process works. ",
  "The functions of the brain",
  "The charts relating and comparing implicit vs explicit memory and recollection",
  "interaction - graphs ",
  "The quiz answer.",
  "The quiz",
  "Really enjoyed the pre survey and the a/b test surprise and results",
  "The A/B survey results",
  "The quiz and reviewing the answers ",
  "The surveys",
  "Great examples and live data",
  "The surveys were a great interest grabber and were still relevant to the actual talk!",
  "Interactive quiz and results",
  "Definitely the interactive portion",
  "The AB test reveal",
  "The different examples of priming",
  "Semiotics",
  "Discussion of semitotics",
  "Semiosis",
  "Semiotic section. I felt like it was really well explained with practical examples",
  "Interpreting signs",
  "The example of talking about Sushi",
  "All of it",
  "The importance of priming",
  "I did learn. I liked that the results didn’t match what I had expected so it really got my attention.",
  "Brain functions play a big role in UX. ",
  "Everyone interprets everything differently ",
  "That intuitive UI is difficult. What you commonly associate with an image might be interpreted completely different by someone else. That you husband has a mohawk.",
  "Difference in context changes interpretation so it's important to consider where a user is coming from when choosing words to use",
  "Yes, I have a better understanding of mental models, priming, and semiotics",
  "UX is complicated. ",
  "The science was super cool!",
  "Design takes a lot of careful thought and research to Jedi mind trick your users into what you want",
  "My own intuition doesn’t automatically apply to users. The context comes into play.",
  "The discussion about context and different users and there’s unique shared understanding",
  "Intuitive is based on the audience you are trying to reach not just your idea of it.",
  "Being more mindful of audience in ui",
  "The recipient matters ",
  "What is intuitive depends on the person using it",
  "I have a much better understanding of what semiotics is,  though I don't know if I'm any better at explaining it!",
  "I enjoyed the demonstration of the importance of context using sushi the cat"
];

const keyTakeAwayComments = [
  "The importance of priming",
  "I did learn. I liked that the results didn’t match what I had expected so it really got my attention.",
  "Brain functions play a big role in UX. ",
  "Everyone interprets everything differently ",
  "That intuitive UI is difficult. What you commonly associate with an image might be interpreted completely different by someone else. That you husband has a mohawk.",
  "Difference in context changes interpretation so it's important to consider where a user is coming from when choosing words to use",
  "Yes, I have a better understanding of mental models, priming, and semiotics",
  "UX is complicated. ",
  "The science was super cool!",
  "Design takes a lot of careful thought and research to Jedi mind trick your users into what you want",
  "My own intuition doesn’t automatically apply to users. The context comes into play.",
  "The discussion about context and different users and there’s unique shared understanding",
  "Intuitive is based on the audience you are trying to reach not just your idea of it.",
  "Being more mindful of audience in ui",
  "The recipient matters ",
  "What is intuitive depends on the person using it",
  "I have a much better understanding of what semiotics is,  though I don't know if I'm any better at explaining it!",
  "I enjoyed the demonstration of the importance of context using sushi the cat"
];

const additionalComments = [
  "I enjoyed your talk and examples, very interesting as a whole ",
  "You did awesome. It was a very interesting and engaging talk",
  "Great presentation! The graphics were really helpful in understanding the concepts and I could tell you put a lot of effort into the flow of the presentation! I second the comment about how interesting it was to link the research with UX design.",
  "I really liked the examples of how to apply what you were discussing and wished there were a few more in there especially for the stuff towards the end of the presentation. ",
  "You did an excellent job!",
  "Great presentation! Your nerves disappeared less than 1 minute after mentioning it. ",
  "The presentation was great. I actually came in with a UX issue I wasn’t sure how to solve, and settled on the answer during the presentation, so thanks."
];

/**
 *          <Note
            title="in·tu·i·tive" //"/inˈt(y)o͞oədiv/"
            description="adjective:
          using or based on what one feels to be true even without conscious reasoning; instinctive.
          "
          />
          <Note
            title="Solution"
            description="Why do we keep using words that imply “instinctive” in our descriptions of software, when there is nothing natural or innate about it? I don’t think this is actually by mistake. I’m reading between the lines that there is a common denominator between these words that fits the intention of what we really mean. "
          />
 * const memorableComments = [
  "Semiotics",
  "interaction - graphs ",
  "Discussion of semitotics",
  "The quiz answer.",
  "All of it",
  "Semiosis",
  "The different examples of priming",
  "The example of talking about Sushi",
  "Interpreting signs",
  "Semiotic section. I felt like it was really well explained with practical examples",
  "The quiz",
  "Really enjoyed the pre  survey and the a/b test surprise and results",
  "The charts relating and comparing implicit vs explicit memory and recollection",
  "I liked the initial questions and detailed explanation of how the process works. ",
  "The A/B survey results",
  "The quiz and reviewing the answers ",
  "The surveys",
  "Great examples and live data",
  "The surveys were a great interest grabber and were still relevant to the actual talk!",
  "Interactive quiz and results",
  "Definitely the interactive portion",
  "The AB test reveal ",
  "The functions of the brain "
];
 */
