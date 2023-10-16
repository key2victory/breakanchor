---
path: priority-calendar
title: Priority Calendar
order: 0
updated: 2023-10-16T23:08:38.601Z
start: 2023-01-23T00:08:38.611Z
end: 2023-10-16T23:08:38.615Z
thumbnail: /public/img/frame-calendar-tv.png
type:
  - design
---


## Problem Space

* It's difficult to view weather and calendar information simultaneously for comparison
* Significant events become lost among the clutter of less significant events
* Poor visual hierarchy and context-switching between multiple apps increases cognitive load

#### Use Cases

* I need to decide what to wear today based on the times I will be exposed to the weather or indoor temperatures I can't control.
* I want to know if there any opportunities to between appointments when the weather is nice, so I can plan breaks to go for a walk outside with my dog. I may want to postpone if another day this week is expected to be nicer.
* Birthdays, holidays, and other significant future events have a bad habit of sneaking up on me. I wish I could bring upcoming events to my awareness more gradually.

## Research and Analysis

When using traditional hand-written paper or dry-erase calendars, people tend to emphasize significant events with color highlighting, circling,or simply writing in big, bold letters, and they use more subtle styling such as smaller handwriting for events that are less significant. This creates a natural visual hierarchy that is lost when digital calendars represent events with equal emphasis.

![](http://localhost:3000/img/calendar-03.png)

![](http://localhost:3000/img/calendar-04.png)

In Google Calendar's month view, all-day events are highlighted with color blocks, while timed events are displayed with equal visual emphasis and may be hidden to conserve space. I noticed that timed significant events were being hidden to make room for displaying insignificant events just because they were all-day.

![](http://localhost:3000/img/calendar-05.png)

1. Non-recurring significant appointment has low visual emphasis
2. Non-recurring significant appointment is hidden
3. Insignificant recurring weekly all-day events are emphasized months in advance

While it's true that many significant events happen to be all-day, there is a fatal flaw with this logic. Birthdays, holidays, festivals, business conferences, etc. are not significant because they occur all day – they're significant because they occur once a year.

I discovered an inverse relationship between recurrence and significance – the most important events occur the least frequently, and time-sensitive appointments with no recurrence may be more significant than all-day events. Rarity can be calculated based on recurrence patterns, which means significance can be detected more predictably and styled with appropriate emphasis in the visual hierarchy.

![](http://localhost:3000/img/calendar-02.png)

![](http://localhost:3000/img/calendar-01.png)

## Solution

I designed and built a React web app that pulls weather and calendar information into a single prioritized view. To make sure the calendar app would be visible when the information is most relevant, I used a single-board tiny computer to automate turning on the bedroom TV to display the app each morning.

#### Key Features

* Hourly weather forecast graph in relation to daily events
* 6-Day weather forecast graph in relation to weekly events
* 6-month rolling view of significant events grouped by week
* Dark theme to reduce screen brightness during morning hours

#### Technical implementation

* Events are created and stored in Google Calendars.
* A Google Apps Script imports events into Google Sheets, where data is filtered, sorted, and prioritized.
* A sanitized CSV endpoint is generated from the Sheets data using functions and published.
* CSV data is converted to JSON using PapaParse.js, while weather data is obtained from Open Meteo's API.
* The React web app renders the integrated weather and calendar information.
* A small single-board computer automatically turns on the bedroom TV to display the app each morning.