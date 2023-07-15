import { memo, useState, useEffect, Fragment } from "react";
import {
  Header,
  ButtonLink,
  Note,
  Group,
  BulletList,
} from "./PageElements";
import { Hero } from "./Hero";
import { PageContainer } from "./PageContainer";
import { useOutletContext } from "react-router-dom";

import "./styles.css";

export const PageAudiohand = memo(function Page_Audiohand({
  title,
  subtitle,
  background,
  row,
  column,
}) {
  const [media, setMedia] = useOutletContext();

  const portraitStyle = {
    // minWidth: "190px",
    maxWidth: "100%",
    maxHeight: "100%",//"400px",
    gridColumn: "auto / span 1",
    gridRow: "auto / span 1"
  }
  const mediaSize = ["xs"].includes(media) ? "small" : ["sm"].includes(media) ? "medium" : "large";
  const autoStyleGrid = {
    small: { gridTemplateColumns: "1fr", gridAutoRows: "min-content" },
    medium: { gridTemplateColumns: "1fr 1fr", gridAutoRows: "min-content" },
    large: { gridTemplateColumns: "1fr 1fr 1fr", gridAutoRows: "min-content", gridColumnGap: "1rem" },
  }

  const autoStyleSpan2 = {
    small: { gridColumn: "auto / span 1", gridRow: "auto / span 1" },
    medium: { gridColumn: "auto / span 2", gridRow: "auto / span 1" },
    large: { gridColumn: "auto / span 2", gridRow: "auto / span 1" },
  }
  const autoStyleSpan3 = {
    small: { gridColumn: "auto / span 1", gridRow: "auto / span 1" },
    medium: { gridColumn: "auto / span 2", gridRow: "auto / span 1" },
    large: { gridColumn: "auto / span 3", gridRow: "auto / span 1" },
  }


  return (
    <PageContainer layout="hero" heroComponent="audiohand" heroInteraction={false}
    >

      <Header
        title="Audiohand"
        subtitle="Mobile music studio"
        color="hsl(0,0%,0%)"
      //background={background}
      >
        <ButtonLink
          color="black"
          line1="see it on the"
          line2="App Store"
          url="https://apps.apple.com/us/app/audiohand/id973166513?platform=iphone"
        />
      </Header>
      <Group className="grid"/*"desktop-row laptop-col tablet-row phablet-col mobile-col"*/
        style={autoStyleGrid[mediaSize]}
      >
        <Group className="row wrap" style={{
          //  gridTemplateColumns: mediaSize === "large" ? "1fr 1fr" : "1fr",
          ...autoStyleSpan3[mediaSize]
        }}>
          <Note title="Problem"
          >
            Musicians and other audio artists don't have a convenient way to record their creative ideas quickly and easily on the spot. Bands wanting to pitch their ideas to record studios have a hard time just getting started since they need a studio to make quality demos.
          </Note>
          <Note
            title="Solution">
            Audiohand allows people to produce near studio quality recordings from the convenience of their own smart phone. With 2 or more mobile devices, they can record simultaneously, and the software can blend them together, filtering out impurities to produce even better results.

          </Note>
        </Group>

        <img className="image shadow" src="./img/audiohand-01.png" alt="" style={portraitStyle} />
        <img className="image shadow" src="./img/audiohand-02.png" alt="" style={portraitStyle} />
        <img className="image shadow" src="./img/audiohand-03.png" alt="" style={portraitStyle} />

        <img className="image shadow" src="./img/audiohand-04.png" alt="" style={portraitStyle} />
        <Note style={autoStyleSpan2[mediaSize]}><BulletList items={[
          "Upon tapping 'Record' button, button changes to black and the button label changes to 'Stop'",
          "The background of the recording screen changes colors in response to the devicee's microphone audio detection",
          "The screen turns green when reception is good, and turns red/hot-pink when it detects too much interference",
          "After tapping 'Stop' button, a black modal overlay displays confirmation of successful recording capture"]} /></Note>

        <img className="image shadow" src="./img/audiohand-05.png" alt="" style={portraitStyle} />
        <img className="image shadow" src="./img/audiohand-06.png" alt="" style={portraitStyle} />
        <img className="image shadow" src="./img/audiohand-07.png" alt="" style={portraitStyle} />

        <img className="image shadow" src="./img/audiohand-08.png" alt="" style={portraitStyle} />
        <img className="image shadow" src="./img/audiohand-09.png" alt="" style={portraitStyle} />
        <img className="image shadow" src="./img/audiohand-10.png" alt="" style={portraitStyle} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 57%",
            gridTemplateRows: "1fr 1fr",
            gridRowGap: "1rem",
            gridColumnGap: "1rem",
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 0,
            ...autoStyleSpan3[mediaSize]
          }}
        >
          <img
            src="./img/audiohand-11.png"
            alt=""
            className="image shadow"
            style={{
              //aspectRatio: "189 / 325"
              gridColumn: "1 / span 1",
              gridRow: "1 / span 2",
            }}
            width="100%"
          />
          <img
            src="./img/audiohand-12.png"
            alt=""
            className="image shadow"
            style={{
              //aspectRatio: "189 / 325"
              gridColumn: "2 / span 1",
              gridRow: "1 / span 1",
            }}
            width="100%"

          />
          <img
            src="./img/audiohand-13.png"
            alt=""
            className="image shadow"
            style={{
              //aspectRatio: "189 / 325"
              gridColumn: "2 / span 1",
              gridRow: "2 / span 1",
            }}
            width="100%"


          />
        </div>


        <Group
          style={{
            width: "100%",
            minWidth: 0,
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 0,
            backgroundColor: "hsl(0,0%,70%)",
            padding: "1rem",
            margin: "1rem 0 0 0",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "auto",
            ...autoStyleSpan3[mediaSize]
          }}
        >
          <div role="img" className="image shadow animate-flow audiohand" style={{
            backgroundImage: "url(./img/audiohand-14.png)",
            backgroundColor: "hsl(0,0%,90%)",
            backgroundRepeat: "no-repeat",
            width: "100%", height: "200px"
          }} //ariaLabel="" 
          />

        </Group>
      </Group>
      <Hero component="audiohand"
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          maxHeight: "60vh",
          display: ["xl", "lg"].includes(media) ? "none" : "flex"
        }}
      />
    </PageContainer >
  );
});
