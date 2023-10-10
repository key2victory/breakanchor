'use client'

import Link from 'next/link';
import Image from 'next/image'
import { memo, useState } from "react";
//import { motion } from "framer-motion";
/*import { CgMenu, CgClose } from "react-icons/cg";
import {
  RiDeviceLine,
  RiSlideshow3Line,
  RiReactjsFill,
  RiLayout5Line,
  RiLayoutTopLine,
  RiEdit2Line,
  RiCalendarTodoFill,
  RiStackFill,
  RiStackshareLine,
  RiMapPinUserFill,
  RiMapPinUserLine,
  RiBox2Fill,
  RiBox2Line
} from "react-icons/ri";*/






export default function SidePanel({// showNav, media, onClickExit, borderStyle="none" 
}) {
const [isOpen, setIsOpen] = useState(true);

   
        const styleOption = {
          small: {
            color: "hsl(0,0%,70%)",
            textDecoration: "none",
            fontSize: "1.25rem",
            gap: "1rem",
            padding: "1rem"
          },
          large: {
            color: "hsl(0,0%,70%)",
            textDecoration: "none",
            fontSize: "1.25rem",
            gap: "1rem",
            padding: "1rem 2rem 1rem 1rem"
          }
        };

  return (
    <div
    className={`flyout ${isOpen ? "open" : "closed"}`}>
  <div
      className="panel"
        style={{/*
          position: "relative",
          display: "flex",
          flexFlow: "column nowrap",
          minWidth: "220px",
          width: "100%",
          height: "100%",
          maxWidth: "300px",
          background: "hsl(0,50%,50%)",
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: "auto",
         // transitionProperty: "transform, box-shadow",
         // transitionDuration: "0.5s, .2s",
          gap: 0,
       // boxShadow: showNav === true ? "-2px 2px 6px 4px hsla(0, 0%, 0%, 20%), -2px 2px 50px 4px hsla(0, 0%, 0%, 50%)" : "-2px 2px 6px 4px hsla(0, 0%, 0%, 0%), -2px 2px 50px 4px hsla(0, 0%, 0%, 0%)",
          zIndex: 10*/
        }}
        onClick={() => {
          onClickExit();
        }}
      >
         <Image
           style={{clipPath: "polygon(5% 25%, 5% 75%, 50% 100%, 95% 75%, 95% 25%, 50% 0%)"}}
             // width={size === "small" ? "56" : "120"}
              src="/./profile.png"
              alt=""
                width={120}
                height={140}
               // priority
              />
      </div>
<div className="overlay" />
</div>
  );
}

/* <div
      style={{
        gridColumn: "1 / span 1",
        width: "100%",
        height: "100%",
        justifyContent: "stretch",
        alignItems: "stretch",
        zIndex: 10
      }}
    >
      <div
      //  className={`app-nav ${showNav === true ? "show" : "hide"}`}
        style={{
          position: "relative",
          display: "flex",
          flexFlow: "column nowrap",
          minWidth: "220px",
          width: "100%",
          height: "100%",
          maxWidth: "300px",
          background: "hsl(0,50%,50%)",
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: "auto",
         // transitionProperty: "transform, box-shadow",
         // transitionDuration: "0.5s, .2s",
          gap: 0,
        boxShadow: showNav === true ?
            "-2px 2px 6px 4px hsla(0, 0%, 0%, 20%), -2px 2px 50px 4px hsla(0, 0%, 0%, 50%)" : "-2px 2px 6px 4px hsla(0, 0%, 0%, 0%), -2px 2px 50px 4px hsla(0, 0%, 0%, 0%)",
          zIndex: 10
        }}
        onClick={() => {
          onClickExit();
        }}
      >

            <Image
           // className={hexagonClip}
             // width={size === "small" ? "56" : "120"}
              src="./profile.png"
              alt=""
                width={120}
                height={140}
               // priority
              />
        
              <h3
                className="center"
                style={{
                  color: "hsl(0,0%,90%)",
                }}
              >
                Janna Curtis
              </h3>
              <h5>break anchor design</h5>  
      <div
        //motion.div 
      style={{ 
        display: "grid", 
        gridTemplateColumns: "[gutter] minmax(0,1fr) [label] auto [gutter] minmax(0,1fr)", 
        gridAutoRows: "min-content" 
        }}>
<Link>Linked In</Link>
<Link>Resume</Link>
<Link>Contact</Link>
      </div>
    </div>
    </div>*/