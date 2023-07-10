import { memo } from "react";
import { Header, ButtonLink, Note, Group, PageContainer, BulletList } from "./PageElements";

import { HeroCalendar } from "./HeroCalendar";
import { MdOutlineHeight } from "react-icons/md";

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
  const notecardStyle = { background: "hsl(274,0%,70%)", padding: "1rem 1.5rem" };

  return (
    <PageContainer layout="hero" maxWidth={`${800}px`}>
      <Header
        title="Priority Calendar"
        subtitle="Weather and events in perspective"
        color="hsl(0,0%,0%)"
        style={{ width: "100%" }}
      >
        <ButtonLink
          color="black"
          line1="see the"
          line2="live code"
          url="https://tczkr5.csb.app/"
        />
      </Header>
      <Group className="desktop-row laptop-col tablet-row phablet-col mobile-col">
        <Note>
          <h3>Problem</h3>
          When I wake up, I need to be aware of the day's agenda, so I can be in the right place at the right time. I also need to see the hourly weather forecast in relation to my scheduled appointments to determine what to wear, and I want to plan breaks to walk outside with my dog when the weather is nice enough between appointments. I may want to postpone if another day this week is expected to be nicer.
        </Note>
        <Note>
          <h3>Solution</h3>
          I designed and built a React web app that pulls weather and calendar information into a single prioritized view. To make sure my calendar app would be visible to me when the information was most relevant, I used a single board tiny computer to automate turning on the bedroom TV to display my app each morning. The style is dark to counter the brightness of the TV screen.
        </Note>
      </Group>

      <Group className="col">
        <HeroCalendar />
        <Note>
          <BulletList title="Features" items={[
            "Daily agenda in relation to hourly weather",
            "6-day forecast in relation to this week's events",
            "6-month rolling view of upcoming significant events",
            "Dark theme to counter the brightness of TV LEDs"
          ]} />
        </Note>
      </Group>


      <Group className="col" style={{
        /* gridTemplateColumns: "3fr 2fr",*/
        width: "100%",
      }}>



        <Note>
          <BulletList title="How It Works"
            items={[
              "Events are created and stored in Google Calendars",
              "I set up a Google Apps Script to automatically import events from calendars into Google Sheets",
              "I used Sheets functions to filter, sort, & prioritize events, remove private details, and publish a sanitized CSV endpoint",
              "PapaParse.js converts my CSV data from sheets into JSON data, and Open Meteo's free weather API provides local forecast data",
              "I designed and built a React web app to render weather and calendar information into a single prioritized view",
              "Libre Potato (tiny single-board computer, similar to Raspberry Pi) automatically turns on the bedroom TV to display my app each morning, so the information is visible to me when it's most relevant"
            ]} />
        </Note>
        <img className="shadow desktop-hide laptop-hide tablet-hide phablet-hide" src="./img/calendar-diagram-v.png" alt="" width="100%" height="auto" style={{ flexShrink: 2 }} />
        <img className="shadow mobile-hide" src="./img/calendar-diagram-h.png" alt="" width="100%" height="auto" style={{ flexShrink: 2 }} />




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

        </div>
      </div>
    </PageContainer >
  );
});
/*          React JS
          web app renders prioritized visual hierarchy of calendar events and weather data

          Libre Potato
          (Raspberry Pi alternative)
          shell script opens web app on boot, cron script sends CEC commands via HDMI cable to turn on bedroom TV and switch to the correct input source to display calendar each morning*/