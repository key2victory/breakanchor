import { memo, useState, useEffect, Fragment } from "react";
import {
  Header,
  ButtonLink,
  Note,
  Caption,
  Column,
  Row,
  Group,
  PageContainer,
  BulletList,
} from "./PageElements";
//import CardCol from "./CardCol";
//import CardRow from "./CardRow";

import { AppHeader } from "./AppNav";
import { HeroAudiohand } from "./HeroAudiohand";
import "./styles.css";

export const PageAudiohand = memo(function Page_Audiohand({
  title,
  subtitle,
  background,
  row,
  column,
}) {
  const bg = {
    cream: `linear-gradient(90deg, hsla(39, 0%, 100%, 0%) 0%, hsla(40, 0%, 100%, 100%) 100%), linear-gradient(45deg, hsl(39, 14%, 80%) 0%, hsl(40, 7%, 60%) 100%)`,
    gradient: "linear-gradient(90deg, hsla(337,86%,51%,100%) 0%, hsla(338,100%,61%,100%) 100%)",
    background1: "hsla(337,86%,51%,100%)",
    background2: "hsla(338,100%,61%,100%)",
  };

  return (
    <div className="main-content">
      {/* <div
        className="page-bg"
        style={{
          background: bg.cream,
        }}
      />*/}
      <div className="scroll-zone">

        <Header
          title="Audiohand"
          subtitle="Mobile music studio"
          color="hsl(0,0%,0%)"
        //background={background}
        >
          <ButtonLink
            color="white"
            line1="see it on the"
            line2="App Store"
            url="https://apps.apple.com/us/app/audiohand/id973166513?platform=iphone"
          />
        </Header>
        <Group className="desktop-row laptop-col tablet-row phablet-col mobile-col">
          <Note title="Problem"
          >
            Musicians and other audio artists don't have a convenient way to record their creative ideas quickly and easily on the spot. Bands wanting to pitch their ideas to record studios have a hard time just getting started since they need a studio to make quality demos.
          </Note>
          <Note
            title="Solution">
            Audiohand allows people to produce near studio quality recordings from the convenience of their own smart phone. With 2 or more mobile devices, they can record simultaneously, and the software can blend them together, filtering out impurities to produce even better results.

          </Note>
        </Group>
        <Group className="desktop-row tablet-row mobile-col">
          <Group className="row">

            <img className="image shadow" src="./img/audiohand-01.png" alt="" />



            <img className="image shadow" src="./img/audiohand-02.png" alt="" />


          </Group>
          <Group className="row">
            <img className="image shadow" src="./img/audiohand-03.png" alt="" />
            <img className="image shadow" src="./img/audiohand-04.png" alt="" />
          </Group>

        </Group>
        <Group className="col">
          <img className="image shadow" src="./img/audiohand-01.png" alt="" />
          <Note><BulletList items={[
            "Upon tapping 'Record' button, button changes to black and the button label changes to 'Stop'",
            "The background of the recording screen changes colors in response to the devicee's microphone audio detection",
            "The screen turns green when reception is good, and turns red/hot-pink when it detects too much interference",
            "After tapping 'Stop' button, a black modal overlay displays confirmation of successful recording capture"]} /></Note>
        </Group>
        <Group>
          <img className="image shadow" src="./img/audiohand-05.png" alt="" />
          <img className="image shadow" src="./img/audiohand-06.png" alt="" />
          <img className="image shadow" src="./img/audiohand-07.png" alt="" />
        </Group>
        <Group>
          <img className="image shadow" src="./img/audiohand-08.png" alt="" />
          <img className="image shadow" src="./img/audiohand-09.png" alt="" />
          <img className="image shadow" src="./img/audiohand-10.png" alt="" />
        </Group>
        <Group>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 60%",
              gridTemplateRows: "1fr 1fr",
              gridRowGap: "1rem",
              gridColumnGap: "1rem",
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0,
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
            // width="135"
            //height="76"
            // width="675"
            // height="389"
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
            //width="675"
            //height="389"
            />
          </div>

        </Group>
        <Group>
          <div
            //className="box-shadow"// grid"
            style={{
              width: "100%",
              minWidth: 0,
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0,
              //  background: "hsla(0,0%,100%,80%)",
              padding: ".8rem",
              margin: "2rem 0 0 0",
              gridTemplateColumns: "1fr",
              gridTemplateRows: "auto",
              // overflow: "hidden"

            }}
          >
            <div role="img" className="image shadow animate-flow audiohand" style={{
              backgroundImage: "url(./img/audiohand-14.png)",
              backgroundColor: "hsl(0,0%,80%)",
              backgroundRepeat: "no-repeat",
              width: "100%", height: "200px"
            }} ariaLabel="" />
          </div>
        </Group>
        <HeroAudiohand />
      </div>
    </div>
  );
});
