import {memo} from "react";
import "./styles.css";
import "./styles-keyframes.css";

export const HeroCalendar = memo(function HeroCalendar() {
  const positionScreen = {
    x: "60",
    y: "270",
  };

  const coverFill = [
    "hsla(0,0%,0%,50%)",
    "hsla(0,0%,0%,65%)",
    "hsla(0,0%,0%,80%)",
  ];

  const text = {
    fill: "#000",
    fontFamily: "sans-serif",
    fontSize: "40px",
    //textLength: "500"
  };
  const lineHeight = 50;
  const caption1 = {
    x: 240,
    y: 160,
  };
  const caption2 = {
    x: 240,
    y: 260,
  };
  const caption3 = {
    x: 240,
    y: 75,
  };

  const textNum = {
    fill: "#000",
    fontFamily: "sans-serif",
    fontSize: "64px",
    fontWeight: "bold",
  };
  const Device = () => (
    <svg
      viewBox="0 0 968 561"
      preserveAspectRatio="xMidYMin meet"
      style={{
        position: "relative",
        zIndex: 5,
        width: "100%",
        height: "auto",
        minWidth: 0,
        maxWidth: "100%",
        minHeight: 0,
        maxHeight: "100%",
        overflow: "hidden",
      }}
    >
      <image
        href="./img/frame-calendar-tv.png"
        width="968"
        height="561"
        alt=""
      />
      <g className="cycle-20s keyframe show-only3" transform="translate(0,0)">
        <rect
          className="cover-area-2"
          x="215"
          y="22"
          width="731"
          height="182"
          fill={coverFill[2]}
        />{" "}
        <rect
          className="cover-area-1"
          x="22"
          y="22"
          width="193"
          height="517"
          fill={coverFill[2]}
        />{" "}
        <rect
          className="caption-3"
          rx="20"
          x="215"
          y="22"
          width="450"
          height="185"
          fill="#fff"
        />
        <circle cx="300" cy="280" r="50" fill="#fff" />
        <text
          x="282"
          y="305"
          fontFamily={textNum.fontFamily}
          fill={textNum.fill}
          fontSize={textNum.fontSize}
          fontWeight={textNum.fontWeight}
        >
          3{" "}
        </text>{" "}
        <text
          fill={text.fill}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          x={caption3.x}
          y={caption3.y}
        >
          high priority events{" "}
        </text>{" "}
        <text
          fill={text.fill}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          x={caption3.x}
          y={caption3.y}
          dy={lineHeight}
        >
          for upcoming months,{" "}
        </text>{" "}
        <text
          fill={text.fill}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          x={caption3.x}
          y={caption3.y}
          dy={lineHeight * 2}
        >
          grouped by week{" "}
        </text>{" "}
      </g>
      <g className="cycle-20s keyframe show-only2" transform="translate(0,0)">
        <rect
          className="cover-area-3"
          x="215"
          y="204"
          width="731"
          height="334"
          fill={coverFill[1]}
        />{" "}
        <rect
          className="cover-area-1"
          x="22"
          y="22"
          width="193"
          height="517"
          fill={coverFill[1]}
        />
        <rect
          className="caption-2"
          rx="20"
          x="215"
          y="204"
          width="440"
          height="190"
          fill="#fff"
        />
        <circle cx="300" cy="110" r="50" fill="#fff" />
        <text
          x="280"
          y="135"
          fontFamily={textNum.fontFamily}
          fill={textNum.fill}
          fontSize={textNum.fontSize}
          fontWeight={textNum.fontWeight}
        >
          2{" "}
        </text>{" "}
        <text
          fill={text.fill}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          x={caption2.x}
          y={caption2.y}
        >
          daily forecast graph{" "}
        </text>{" "}
        <text
          fill={text.fill}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          x={caption2.x}
          y={caption2.y}
          dy={lineHeight}
        >
          in relation to medium{" "}
        </text>{" "}
        <text
          fill={text.fill}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          x={caption2.x}
          y={caption2.y}
          dy={lineHeight * 2}
        >
          priority events{" "}
        </text>{" "}
      </g>{" "}
      <g className="cycle-20s keyframe show-only1" transform="translate(0,0)">
        <rect
          className="cover-area-3"
          x="215"
          y="204"
          width="731"
          height="334"
          fill={coverFill[0]}
        />{" "}
        <rect
          className="cover-area-2"
          x="215"
          y="22"
          width="731"
          height="182"
          fill={coverFill[0]}
        />
        <rect
          className="caption-1"
          rx="20"
          fill="#fff"
          x="215"
          y="105"
          width="330"
          height="185"
        />
        <circle cx="130" cy="160" r="50" fill="#fff" />
        <text
          x="110"
          y="185"
          fontFamily={textNum.fontFamily}
          fill={textNum.fill}
          fontSize={textNum.fontSize}
          fontWeight={textNum.fontWeight}
        >
          1{" "}
        </text>{" "}
        <text
          fill={text.fill}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          x={caption1.x}
          y={caption1.y}
        >
          hourly forecast{" "}
        </text>{" "}
        <text
          fill={text.fill}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          x={caption1.x}
          y={caption1.y}
          dy={lineHeight}
        >
          in relation to{" "}
        </text>{" "}
        <text
          fill={text.fill}
          fontFamily={text.fontFamily}
          fontSize={text.fontSize}
          x={caption1.x}
          y={caption1.y}
          dy={lineHeight * 2}
        >
          daily events{" "}
        </text>{" "}
      </g>{" "}
    </svg>
  );

  return <Device />;
});

const screen =