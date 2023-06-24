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
import { Sonim } from "./Sonim";
import "./styles.css";

export const PageLockOut = memo(function PageLockOut({
  title,
  subtitle,
  background,
  row,
  column
}) {
  const pages = [
    {
      title: "Lock Out, Tag Out",
      subtitle: "Electrical safety tracking",
      path: "/loto",
      hero: "Sonim",
      background: "linear-gradient(90deg, #f9b446 0%, #FEC107 100%)",
      background1: "#f9b446",
      background2: "#FEC107" //hsla(45,100%,50%,100%)
    }
  ];
  return (
    <div className="main-content">
      <div
        className="page-bg"
        style={{
          background: "linear-gradient(90deg, #f9b446 0%, #FEC107 100%)"
        }}
      />
      <div className="scroll-zone">
        <Header
          title={title}
          title1="Lock Out,"
          title2="Tag Out"
          subtitle="Electrical safety tracking"
          color="hsl(0,0%,0%)"
        />
        <Group className="desktop-row tablet-row mobile-col">
          <Note
            title="Problem"
            description="To ensure safety during electrical system maintenance and repairs, a permit must be requested, and an authorized technician must go out on site, manually shut off each system circuit, and place a physical ID tagged lock on each one. Each permit request may contain a dozen or more different equipment, lock, and tag IDs to correctly associate with one another."
            background="hsl(42,100%,70%)"
          />
          <Note
            title="Solution"
            description="Mobile app allows them to scan tag ID bar codes without connectivity so they can capture each completed tag as they go. Bar code scanning would allow technicians a convenient checklist, improving efficiency and reducing risk of error associated with hand-written or manual entry record-keeping. Printed bar codes sometimes get damaged and may fail to scan, so I included design flows for manually selecting (rather than manual entering) tag numbers so workers could toggle tag states with a confirmation button, to avoid the hassle and errors with recording long strings of numbers from a smart phone touch screen."
            background="hsl(42,100%,70%)"
            //color="white"
          />
        </Group>
        <Group>
          <div
            className="shadow"
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              background: "hsla(0,0%,100%,50%)",
              padding: ".5rem",
              width: "100%",
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0
            }}
          >
            <img
              className="image"
              src="./img/loto-00.png"
              alt=""
              // aspectRatio="1895 / 612"
            />
            <span>
              p.31,
              <a href="https://www.bechtel.com/getmedia/0f83daae-baa4-4124-b84b-bdea6c861bfc/2018-bechtel-report-final-ns.pdf">
                Bechtel 2018 Annual Report ↗
              </a>
            </span>
          </div>
        </Group>
        <Group>
          <img className="image shadow" src="./img/loto-01.png" alt="" />
          <img className="image shadow" src="./img/loto-02.png" alt="" />
          <img className="image shadow" src="./img/loto-03.png" alt="" />
        </Group>
        <Group>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gridRowGap: 0,
              gridColumnGap: "1rem",
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: 0
            }}
          >
            <img
              className="image shadow"
              src="./img/loto-04.png"
              alt=""
              style={{
                gridColumn: "1 / span 1",
                gridRow: "1 / span 2"
              }}
              width="100%"
            />
            <img
              className="image shadow"
              src="./img/loto-05.png"
              alt=""
              style={{
                gridColumn: "2 / span 1",
                gridRow: "1 / span 1"
              }}
              width="100%"
            />
            <img
              className="image shadow"
              src="./img/loto-06.png"
              alt=""
              style={{
                gridColumn: "2 / span 1",
                gridRow: "2 / span 1"
              }}
              width="100%"
            />
          </div>
        </Group>
        <Group>
          <img className="image shadow" src="./img/loto-07.png" alt="" />
          <img className="image shadow" src="./img/loto-08.png" alt="" />
          <img className="image shadow" src="./img/loto-09.png" alt="" />
        </Group>
        <Group>
          <img className="image shadow" src="./img/loto-10.png" alt="" />
          <img className="image shadow" src="./img/loto-11.png" alt="" />
          <img className="image shadow" src="./img/loto-12.png" alt="" />
        </Group>
        <Group>
          <img className="image shadow" src="./img/loto-13.png" alt="" />
        </Group>
        <div className="hero bottom">
          <Sonim />
        </div>
      </div>
    </div>
  );
});
