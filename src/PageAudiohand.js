import { memo, useState, useEffect, Fragment } from "react";
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

import { AppHeader } from "./AppNav";
import { HeroAudiohand } from "./HeroAudiohand";
import "./styles.css";

export const PageAudiohand = memo(function Page_Audiohand({
  title,
  subtitle,
  background,
  row,
  column
}) {
  const bg = {
    background:
      "linear-gradient(90deg, hsla(337,86%,51%,100%) 0%, hsla(338,100%,61%,100%) 100%)",
    background1: "hsla(337,86%,51%,100%)",
    background2: "hsla(338,100%,61%,100%)"
  };

  return (
    <div className="main-content">
      <div
        className="page-bg"
        style={{
          background:
            "linear-gradient(90deg, hsla(337,86%,51%,100%) 0%, hsla(338,100%,61%,100%) 100%)"
        }}
      />
      <div className="scroll-zone">
        <Header
          title="Audiohand"
          subtitle="Mobile music studio"
          color="hsl(0,0%,100%)"
          //background={background}
        >
          <ButtonLink
            color="white"
            line1="see it on the"
            line2="App Store"
            url="https://apps.apple.com/us/app/audiohand/id973166513?platform=iphone"
          />
        </Header>

        <Group className="desktop-row tablet-row mobile-col">
          <Note
            title="Problem"
            description="Musicians and other audio artists don't have a convenient way to record their creative ideas quickly and easily on the spot. Bands wanting to pitch their ideas to record studios have a hard time just getting started since they need a studio to make quality demos."
            background="hsl(338,100%,80%)"
            // color="black"
          />
          <Note
            title="Solution"
            description="Audiohand allows people to produce near studio quality recordings from the convenience of their own smart phone. With 2 or more mobile devices, they can record simultaneously, and the software can blend them together, filtering out impurities to produce even better results."
            background="hsl(338,100%,80%)"
            //background="hsl(338,100%,90%)"
            //background="hsl(338,80%,86%)"
          />
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
              flexBasis: 0
            }}
          >
            <img
              src="./img/audiohand-11.png"
              alt=""
              className="image shadow"
              style={{
                //aspectRatio: "189 / 325"
                gridColumn: "1 / span 1",
                gridRow: "1 / span 2"
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
                gridRow: "1 / span 1"
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
                gridRow: "2 / span 1"
              }}
              width="100%"
              //width="675"
              //height="389"
            />
          </div>
        </Group>
        <HeroAudiohand />
      </div>
    </div>
  );
});
