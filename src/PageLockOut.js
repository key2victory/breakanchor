import { memo, useState, useEffect, Fragment } from "react";
import {
  Header,
  ButtonLink,
  Note,
  Caption,
  Column,
  Row,
  Group,
} from "./PageElements";
import { HeroLockOut } from "./HeroLockOut";

export const PageLockOut = memo(function PageLockOut({
  title,
  subtitle,
  background,
  row,
  column,
}) {
  const pages = [
    {
      title: "Lock Out, Tag Out",
      subtitle: "Electrical safety tracking",
      path: "/loto",
      hero: "Sonim",
      background: "linear-gradient(90deg, #f9b446 0%, #FEC107 100%)",
      background1: "#f9b446",
      background2: "#FEC107", //hsla(45,100%,50%,100%)
    },
  ];
  return (
    <div className="main-content">
      {/*  <div
        className="page-bg"
        style={{
          background: "linear-gradient(90deg, #f9b446 0%, #FEC107 100%)",
        }}
      />*/}
      <div className="scroll-zone">
        <Header
          title={title}
          title1="Lock Out,"
          title2="Tag Out"
          subtitle="Electrical safety tracking"
          color="hsl(0,0%,0%)"
        />
        <Group className="desktop-col laptop-col tablet-row phablet-col mobile-col">
          <Note container={true}>
            Bechtel is a construction, engineering, and project management company known for prioritizing workplace safety. During my time there, I thoroughly enjoyed the work I was involved in, which often revolved around making the jobs of others easier and safer so they could return home to their families. One prominent example of this commitment to safety is the Lockout-Tagout (LOTO) system. LOTO is essential for performing maintenance and repairs on electrical systems, as it ensures the necessary safety protocols are followed.
          </Note>


        </Group>
        <div
          className="box-shadow grid"
          style={{
            width: "100%",
            minWidth: 0,
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 0,
            background: "hsla(0,0%,100%,80%)",
            padding: ".8rem .8rem .2rem .8rem",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr auto",
            gridRowGap: ".2rem",
          }}
        >
          <img
            className="image"
            src="./img/loto-00.png"
            alt=""
            width="100%"
            height="auto"
            // aspectRatio="1015 / 328" //"1895 / 612"
            style={
              {
                //  gridColumn: "1 / span 1"
              }
            }
          />
          <span
            className="row center right"
            style={{
              gap: ".5rem",
              fontSize: ".9rem",
              margin: 0,
              padding: 0,
            }}
          >
            p .31,
            <a href="https://www.bechtel.com/getmedia/0f83daae-baa4-4124-b84b-bdea6c861bfc/2018-bechtel-report-final-ns.pdf">
              Bechtel 2018 Annual Report↗
            </a>
          </span>
        </div>
        <Note title="Problem">
          To guarantee the safety of electrical systems, an isolation permit must be obtained. An authorized technician is then dispatched to the site, where they manually shut off each system circuit and secure them with ID-tagged locks. This meticulous process requires associating multiple equipment, lock, and tag IDs correctly within each permit request. These measures are crucial as they ensure that the power to the circuit breaker box is unequivocally turned off, preventing any potential hazards.
        </Note>
        <Group>
          <img className="image shadow" src="./img/loto-01.png" alt="" />
          <img className="image shadow" src="./img/loto-02.png" alt="" />
          <img className="image shadow" src="./img/loto-03.png" alt="" />
        </Group>
        <Note title="Process">
          Previously, this process relied on manual or paper-based systems. However, Bechtel has now transitioned to a digital system for increased efficiency. Technicians log the permit details into the digital records, and a trained technician retrieves the permit, identifying the various circuit breaker boxes to be turned off. They employ locks and tags, effectively securing the breaker box to prevent unauthorized access. Once the isolation permit is complete, it is marked as such in the system, granting maintenance and repair personnel access to the systems, knowing they are safe.
        </Note>

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
              flexBasis: 0,
            }}
          >
            <img
              className="image shadow"
              src="./img/loto-04.png"
              alt=""
              style={{
                gridColumn: "1 / span 1",
                gridRow: "1 / span 2",
              }}
              width="100%"
            />
            <img
              className="image shadow"
              src="./img/loto-05.png"
              alt=""
              style={{
                gridColumn: "2 / span 1",
                gridRow: "1 / span 1",
              }}
              width="100%"
            />
            <img
              className="image shadow"
              src="./img/loto-06.png"
              alt=""
              style={{
                gridColumn: "2 / span 1",
                gridRow: "2 / span 1",
              }}
              width="100%"
            />
          </div>
        </Group>
        <Note title="Solution">
          I designed an app to enhance convenience for the technicians responsible for the locking and tagging procedures. The app allows them to mark each step as complete in the digital record as they progress, eliminating the need for manual tracking or later office log-ins. Since cell phone service may be unreliable on job sites, the app was optimized to fit the small screen size of the ruggedized Sonim phones used by Bechtel. It incorporates features such as barcode scanning, which improves efficiency and minimizes errors associated with manual record-keeping. The inclusion of use case flows and tag number selection from a list simplifies the process, reducing entry errors and the need for typing long barcode numbers on a touch screen.
        </Note>
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
            <div role="img" className="image shadow animate-flow loto" style={{
              backgroundImage: "url(./img/loto-13.png)",
              backgroundColor: "hsl(0,0%,80%)",
              backgroundRepeat: "no-repeat",
              width: "100%", height: "200px"
            }} ariaLabel="" />
          </div> </Group>
        <div className="hero loto">
          <HeroLockOut />
        </div>
      </div>
    </div >
  );
});
