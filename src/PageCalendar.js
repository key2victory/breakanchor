import {memo} from "react";
import {Header, ButtonLink, Note, Group} from "./PageElements";

import {HeroCalendar} from "./HeroCalendar";
import {MdOutlineHeight} from "react-icons/md";

export const PageCalendar = memo(function PageCalendar({
  title,
  subtitle,
  background,
  row,
  column,
}) {
  const pages = [
    {
      title: "Priority Calendar",
      path: "/calendar",
      subtitle: "Weather and events in perspective",
      hero: "Sonim",
      background: "linear-gradient(90deg, #9971B7 40%, #9971B7 100%)",
    },
  ];

  const color1 = "hsl(274,33%,55%)"; //"#9971B7",
  const color2 = "hsl(274,33%,52%)";

  return (
    <div className="main-content">
      <div
        className="page-bg"
        style={{
          background: `linear-gradient(37deg, ${color1} 25%, ${color2} 0, ${color2} 50%, ${color1} 0, ${color1} 75%, ${color2} 0) center / 52px 39px`,
        }}
      />{" "}
      <div className="scroll-zone">
        <Header
          title="Priority Calendar"
          subtitle="Weather and events in perspective"
          color="hsl(0,0%,100%)"
        >
          <ButtonLink
            color="white"
            line1="see the"
            line2="live code"
            url="https://tczkr5.csb.app/"
          />
        </Header>{" "}
        <Group className="desktop-row laptop-col tablet-row phablet-col mobile-col">
          <Note
            title="Problem"
            description="When I wake up, I need to be aware of the day's agenda, so I can be in the right place at the right time. I also need to see the hourly weather forecast in relation to my scheduled appointments to determine what to wear, and I want to plan breaks to walk outside with my dog when the weather is nice enough between appointments. I may want to postpone if another day this week is expected to be nicer."
            background="hsl(274,50%,75%)" //"hsl(274,33%,70%)"
          />
          <Note
            title="Solution"
            description="I designed and built a React web app that pulls weather and calendar information into a single prioritized view. To make sure my calendar app would be visible to me when the information was most relevant, I used a single board tiny computer to automate turning on the bedroom TV to display my app each morning. The style is dark to counter the brightness of the TV screen."
            background="hsl(274,50%,75%)"
          />
        </Group>{" "}
        <Group>
          <HeroCalendar />
        </Group>{" "}
        <Group>
          <img className="" src="" alt="" width="" height="" />
        </Group>
        <div
          className="hero mobile-min-height-300 tablet-min-height-500"
          style={
            {
              //width: "100%",
              //height: "100%"
            }
          }
        >
          <div
            className="hero-margins"
            style={{
              aspectRatio: "369 / 319",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            <img
              width="100%"
              src="./img/calendar-room.png"
              // style={{ margin: "0 2rem" }}
              alt=""
            />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
});
