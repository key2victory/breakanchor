import React from "react";
import ReactGA from "react-ga4";

export const TRACKING_ID = "G-NP5NG2BWZT"; // OUR_TRACKING_ID
ReactGA.initialize([{ trackingId: TRACKING_ID }])

export function scrollDistance(callback, refresh = 66) {

    // Make sure a valid callback was provided
    if (!callback || typeof callback !== 'function') return;

    // Variables
    let isScrolling, start, end, distance;

    // Listen for scroll events
    window.addEventListener('scroll', function (event) {

        // Set starting position
        if (!start) {
            start = window.pageYOffset;
        }

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function () {

            // Calculate distance
            end = window.pageYOffset;
            distance = end - start;

            // Run the callback
            callback(distance, start, end);

            // Reset calculations
            start = null;
            end = null;
            distance = null;

        }, refresh);

    }, false);

}
const totalDistance = 6674;
scrollDistance(function (distance) {
    console.log('You travelled ' + parseInt(Math.abs(distance), 10) + 'px ' + (distance < 0 ? 'up' : 'down'));
});

export function useUmami(name, dataObj) {
    const obj = Object.assign({
        timestamp: new Date(),
        userAgent: window.navigator.userAgent,
    }, dataObj);
    console.log("attempting to send metrics to umami")
    return window.umami.track(name, dataObj);
}
    /*window.umami.track({ url: '/page-view', referrer: 'https://www.google.com' });
window.umami.track('track-event-no-data');
window.umami.track('track-event-with-data', {
test: 'test-data',
boolean: true,
booleanError: 'true',
time: new Date(),
number: 1,
number2: Math.random() * 100,
time2: new Date().toISOString(),
nested: {
test: 'test-data',
number: 1,
object: {
test: 'test-data',
},
},
array: [1, 2, 3],
});
const programmaticPayload = {
payload: {
hostname: window.location.hostname,
language: navigator.language,
referrer: document.referrer,
screen: `${window.screen.width}x${window.screen.height}`,
title: document.title,
url: window.location.pathname,
website: "your-website-id",
name: "event-name",
},
type: "event"
}*/
    //default payload
    // hostname: Hostname of server
    // language: Browser language
    // referrer: Page referrer
    // screen: Screen dimensions (eg. 1920x1080)
    // title: Page title
    // url: Page url
    // website: Website ID (required)
