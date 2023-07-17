import { memo } from "react";
import { Header, ButtonLink, Note, Group, BulletList, ImageCard, ImageCard2, ButtonAction } from "./PageElements";
import { PageContainer } from "./PageContainer";
import { Hero } from "./Hero";
import { useOutletContext } from "react-router-dom";

export const PageCalendar = memo(function PageCalendar({
  title,
  subtitle,
  background,
  row,
  column,
}) {
  const [media, setMedia] = useOutletContext();


  const mediaSize = ["xs", "sm"].includes(media) ? "small" : "large";
  const autoStyleGrid = {
    small: { gridTemplateColumns: "1fr", gridAutoRows: "min-content", gridColumnGap: "1rem", gridRowGap: "1rem", maxWidth: "100%" },
    large: { gridTemplateColumns: "1fr 1fr", gridAutoRows: "min-content", gridColumnGap: "1rem", gridRowGap: "1rem", maxWidth: "100%" },
  }

  const autoStyleGridFlush = {
    small: { gridTemplateColumns: "1fr", gridAutoRows: "min-content", gridColumnGap: 0, gridRowGap: 0, maxWidth: "100%" },
    large: { gridTemplateColumns: "1fr 1fr", gridAutoRows: "min-content", gridColumnGap: 0, gridRowGap: 0, maxWidth: "100%" },
  }

  const styleSpan1 = {
    height: "100%",
    minWidth: 0,
    maxWidth: "100%",
    maxHeight: "100%",//"400px",
    gridColumn: "auto / span 1",
    gridRow: "auto / span 1"
  }
  const styleImageSmall = {
    minWidth: 0,
    maxWidth: "100%",
    maxHeight: "100%",//"400px",
    gridColumn: "auto / span 1",
    gridRow: "auto / span 1"
  }
  const styleSpan2 = {
    small: { gridColumn: "auto / span 1", gridRow: "auto / span 1" },
    large: { gridColumn: "auto / span 2", gridRow: "auto / span 1" },
  }

  const ImageCell = ({ src, background = "hsl(0,0%,100%)", style = { styleSpan1 } }) => {
    return (<div
      className="col center"
      style={{ background: background, justifySelf: "stretch", alignSelf: "stretch", zIndex: 1, ...style }}>
      <div
        className="col center"
        style={{
          height: "100%",
          //   boxSizing: "border-box",
          maxHeight: "50vh"
        }}>

        <img src={src} alt="" //width="546" height="517" 
          width="100%"
          height="auto"
          style={{
            //  flexGrow: 1, flexShrink: 1, flexBasis: "0", 
            maxWidth: "100%", maxHeight: "100%",
            margin: "auto"
          }} />
      </div>
    </div>)
  }


  return (
    <PageContainer layout="hero" heroComponent="room" //maxWidth={`${800}px`}
    >
      <Header
        title="Priority Calendar"
        subtitle="Weather and events in perspective"
        color="hsl(0,0%,0%)"
        style={{ width: "100%" }}
      >
        <ButtonAction

          url="https://tczkr5.csb.app/"
          color="hsla(0,0%,100%,100%)"
          backgroundColor="hsla(265,0%,20%,100%)"
          hoverColor="hsla(275,70%,60%,100%)"
        >Code Sandbox ↗
        </ButtonAction>

      </Header>
      {/*  <Group className="row wrap">
        <Note>
          This case study focuses on the design and development of a React web app that combines weather and calendar information into a single prioritized view. The goal of the project is to provide users with a convenient way to see their daily agenda in relation to the hourly weather forecast, enabling them to plan their activities accordingly.
        </Note>
      </Group>
      <h2 style={{ margin: "1rem 0 0 0" }}>Problem</h2>*/}
      <Group className="row wrap">
        <Note >
          <BulletList title="Problem" items={[
            "It's difficult to view weather and calendar information simultaneously for comparison",
            "Significant events become lost among the clutter of less significant events",
            "Poor visual hierarchy and context-switching between multiple apps increases cognitive load",
          ]}
          />
        </Note>
        <Note >
          <BulletList title="Use Cases" items={[
            "I need to decide what to wear today based on the times I will be exposed to the weather or indoor temperatures I can't control.",
            "I want to know if there any opportunities to between appointments when the weather is nice, so I can plan breaks to go for a walk outside with my dog. I may want to postpone if another day this week is expected to be nicer.",
            "Birthdays, holidays, and other significant future events have a bad habit of sneaking up on me. I wish I could bring upcoming events to my awareness more gradually."]}
          />
        </Note>
      </Group>





      <h2 style={{ margin: "2rem 0 0 0", ...styleSpan2[mediaSize] }}>Research and Analysis</h2>
      <Group className="grid"
        style={{ ...autoStyleGridFlush[mediaSize], ...styleSpan2[mediaSize] }} >
        <Note style={styleSpan2[mediaSize]}>
          When using traditional hand-written paper or dry-erase calendars, people tend to emphasize significant events with color highlighting, circling,or simply writing in big, bold letters, and they use more subtle styling such as smaller handwriting for events that are less significant. This creates a natural visual hierarchy that is lost when digital calendars represent events with equal emphasis.
        </Note>


        <ImageCell src="./img/calendar-03.png" background="hsla(46,0%,0%,20%)" />
        <ImageCell src="./img/calendar-04.png" background="hsla(46,0%,0%,20%)" />
      </Group>

      <Group className="grid"
        style={autoStyleGrid[mediaSize]} >
        <Note style={styleSpan1}>
          In Google Calendar's month view, all-day events are highlighted with color blocks, while timed events are displayed with equal visual emphasis and may be hidden to conserve space. I noticed that timed significant events were being hidden to make room for displaying insignificant events just because they were all-day.
        </Note>
        <Note style={styleSpan1}>
          While it's true that many significant events happen to be all-day, there is a fatal flaw with this logic. Birthdays, holidays, festivals, business conferences, etc. are not significant because they occur all day – they're significant because they occur once a year.
        </Note>
        <Group className="grid"
          style={{ ...autoStyleGridFlush[mediaSize], ...styleSpan2[mediaSize] }} >

          <ImageCell src="./img/calendar-05.png" />
          <Note style={styleSpan1}>
            <BulletList ordered={true} items={[
              "Non-recurring significant appointment has low visual emphasis",
              "Non-recurring significant appointment is hidden",
              "Insignificant recurring weekly all-day events are emphasized months in advance"]} />
          </Note>
        </Group>



        <Group className="grid"
          style={{ ...autoStyleGridFlush[mediaSize], ...styleSpan2[mediaSize] }} >
          <Note style={styleSpan1}>
            I discovered an inverse relationship between recurrence and significance – the most important events occur the least frequently, and time-sensitive appointments with no recurrence may be more significant than all-day events.
            Rarity can be calculated based on recurrence patterns, which means significance can be detected more predictably and styled with appropriate emphasis in the visual hierarchy.

          </Note>
          <ImageCell src="./img/calendar-02.png" />

        </Group>

        <img className="shadow" src="./img/calendar-01.png" alt="" width="100%" height="auto" style={styleSpan2[mediaSize]} />

      </Group>

      <h2 style={{ margin: "2rem 0 0 0" }}>Solution</h2>

      <Group className="row wrap">
        <Note>
          I designed and built a React web app that pulls weather and calendar information into a single prioritized view. To make sure the calendar app would be visible when the information is most relevant, I used a single-board tiny computer to automate turning on the bedroom TV to display the app each morning.
        </Note>
        <Note>
          <BulletList title="Key Features" items={[
            "Hourly weather forecast graph in relation to daily events",
            "6-Day weather forecast graph in relation to weekly events",
            "6-month rolling view of significant events grouped by week",
            "Dark theme to reduce screen brightness during morning hours"]}
          />
        </Note>

      </Group>
      <Group className="col">
        <Hero component="calendar" />

      </Group >

      <Group className="grid shadow"
        style={{ ...autoStyleGridFlush[mediaSize], ...styleSpan2[mediaSize] }} >
        <Note style={styleSpan1}>
          <BulletList title="Technical implementation" items={[
            "Events are created and stored in Google Calendars.",
            "A Google Apps Script imports events into Google Sheets, where data is filtered, sorted, and prioritized.",
            "A sanitized CSV endpoint is generated from the Sheets data using functions and published.",
            "CSV data is converted to JSON using PapaParse.js, while weather data is obtained from Open Meteo's API.",
            "The React web app renders the integrated weather and calendar information.",
            "A small single-board computer automatically turns on the bedroom TV to display the app each morning."]} />
        </Note>
        <ImageCell src="./img/calendar-diagram-v.png" background="hsla(46,0%,0%,20%)" style={{ padding: "1rem" }} />
        {/* <img className="shadow"//desktop-hide laptop-hide tablet-hide phablet-hide" 
          src="./img/calendar-diagram-v.png" alt="" width="100%" height="auto" style={{ flexGrow: 1, flexShrink: 2, flexBasis: "40%", minWidth: "200px" }} />
         <img className="shadow mobile-hide" src="./img/calendar-diagram-h.png" alt="" width="100%" height="auto" style={{ flexShrink: 2 }} />*/}





      </Group>


      <Group className="row wrap center" style={{
        /* gridTemplateColumns: "3fr 2fr",*/
        width: "100%",
        padding: "2rem 0 2rem 0"
      }}>


        <h5 style={{ width: "fit-content" }}>See the live app on</h5>
        <ButtonAction

          url="https://tczkr5.csb.app/"
          color="hsla(0,0%,100%,100%)"
          backgroundColor="hsla(265,0%,20%,100%)"
          hoverColor="hsla(275,70%,60%,100%)"
        >Code Sandbox ↗
        </ButtonAction>





      </Group>


    </PageContainer >
  );
});
/*          React JS
          web app renders prioritized visual hierarchy of calendar events and weather data

          Libre Potato
          (Raspberry Pi alternative)
          shell script opens web app on boot, cron script sends CEC commands via HDMI cable to turn on bedroom TV and switch to the correct input source to display calendar each morning*/