import { memo } from "react";
//import { base64_calendar } from "./HeroCalendar";
import { base64_iphone } from "./HeroAudiohand";
import { base64_sonim } from "./HeroLockOut";

export const Hero = memo(function Hero({ component, className, style }) {

    const HeroList = {
        audiohand: HeroAudiohand,
        calendar: HeroCalendar,
        loto: HeroLockOut,
        room: HeroRoom,
        asl: HeroFlashcards,
    };

    const Visual = HeroList[component] !== undefined ? HeroList[component] : HeroPlaceholder;
    return (
        <Visual className={className} style={style} />
    )
})

const HeroPlaceholder = memo(function HeroPlaceholder({ className }) {
    return (<div className={`flex top center ${className}`} style={{ width: "500px", height: "500px", background: "hsl(0,0%,50%)", flexBasis: "0" }} />)
})


const HeroRoom = memo(function HeroRoom({ className }) {
    return (
        <div className={className}>
            <img
                width="100%"
                src="./img/calendar-room.png"
                // style={{ margin: "0 2rem" }}
                alt=""
            />
        </div>
    );
});

const HeroLockOut = memo(function HeroLockOut({/* className,*/style }) {
    const positionScreen = {
        x: "40",
        y: "120",
        w: "205", //480
        h: "342", //800
    };

    const Device = () => (
        <svg
            // className={/* loto */`shadow ${className}`}
            viewBox="0 0 284 578"
            preserveAspectRatio="xMidYMin meet"
            style={{
                boxSizing: "border-box",
                position: "relative",
                zIndex: 1,
                minWidth: "248px",
                minHeight: "300px",
                // minWidth: "284px",
                // maxWidth: "100%",
                // minHeight: "100%",
                // maxHeight: "578px",
                overflow: "hidden",
            }}

            height="100%"
        >
            <rect
                width={positionScreen.w}
                height={positionScreen.h}
                x="0" //{positionScreen.x}
                y="0" //{positionScreen.y}
                transform={`translate(${positionScreen.x},${positionScreen.y})`}
                fill="#000"
            />
            <image
                href="./img/loto-17a.png"
                alt=""
                className="image cycle keyframe3"
                width={positionScreen.w}
                height={positionScreen.h}
                x="0" //{positionScreen.x}
                y="0" //{positionScreen.y}
                transform={`translate(${positionScreen.x},${positionScreen.y})`}
            />
            <image
                href="./img/loto-15a.png"
                alt=""
                className="image cycle keyframe2"
                width={positionScreen.w}
                height={positionScreen.h}
                x="0" //{positionScreen.x}
                y="0" //{positionScreen.y}
                transform={`translate(${positionScreen.x},${positionScreen.y})`}
            />
            <image
                href="./img/loto-14a.png"
                alt=""
                className="image cycle keyframe1"
                width={positionScreen.w}
                height={positionScreen.h}
                x="0" //{positionScreen.x}
                y="0" //{positionScreen.y}
                transform={`translate(${positionScreen.x},${positionScreen.y})`}
            />
            {/*<image href={glare} width="284" height="578" alt="" opacity=".2" />*/}
            <image href={base64_sonim} width="284" height="578" alt="" />
        </svg>
    );

    return (<div className="col top center shadow"
        style={{
            minWidth: "248px",
            minHeight: "300px",
            ...style
        }}><Device /></div>);
});

const HeroFlashcards = memo(function HeroFlashcards({ className, style = { width: "100%" } }) {
    return (
        <iframe src="https://codesandbox.io/embed/asl-flashcards-s6t7to?fontsize=14&hidenavigation=1&theme=dark&view=preview"
            className={className}
            style={{
                border: "none",
                borderRadius: "1rem",
                outline: "none",
                // width: "100%",
                height: "500px",
                maxWidth: "100%",
                maxHeight: "500px",
                aspectRatio: "1/1",//"3 / 4",
                overflow: "hidden",
                ...style
            }}
            title="ASL Flashcards"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>

   /* <iframe src="https://codesandbox.io/embed/asl-flashcards-s6t7to?fontsize=14&hidenavigation=1&theme=dark"
        className={className}
        style={{
            border: "none",
            borderRadius: "1rem",
            outline: "none",
            width: "100%", 
            height: "500px", 
            maxWidth: "100%", 
            maxHeight: "500px", 
            aspectRatio: "1/1",//"3 / 4",
            overflow: "hidden"
        }}
        title="ASL Flashcards"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"
    />*/)
})

const HeroAudiohand = memo(function HeroAudiohand({ style }) {
    const positionScreen = {
        x: "50",
        y: "188",
    };

    const screenWidth = "498";
    const screenHeight = "854";

    const Device = () => (
        <svg
            // className="audiohand"
            viewBox="0 0 591 1243" //"0 0 779 1513"
            preserveAspectRatio="xMidYMin meet"
            style={{
                boxSizing: "border-box",
                position: "relative",
                minWidth: "248px",
                minHeight: "300px",
                aspectRatio: "591 / 1243", //"779 / 1513",
                overflow: "hidden",
            }}

            height="100%"
        //height="auto"
        >

            <image
                className="device-frame"
                href={base64_iphone} //"./img/frame-iphone.png"
                width="591" //"779"
                height="1243" //"1513"
                alt=""
            />
            <image
                href="./img/audiohand-01.png"
                width={screenWidth} //"668" //"380"
                height={screenHeight} // height="655"
                x="0" //{positionScreen.x}
                y="0" //{positionScreen.y}
                transform={`translate(${positionScreen.x},${positionScreen.y})`}
                //aspectRatio="378 / 648"
                alt=""
                className="image cycle keyframe3"
            />
            <image
                href="./img/audiohand-02.png"
                width={screenWidth} //"668"
                height={screenHeight} //height="auto"
                x="0" //{positionScreen.x}
                y="0" //{positionScreen.y}
                transform={`translate(${positionScreen.x},${positionScreen.y})`}
                // aspectRatio="378 / 648"
                alt=""
                className="image cycle keyframe2"
            />
            <image
                href="./img/audiohand-00.png"
                width={screenWidth} //"668" //"380"
                height={screenHeight} //height="655"
                x="0" //{positionScreen.x}
                y="0" //{positionScreen.y}
                transform={`translate(${positionScreen.x},${positionScreen.y})`}
                //aspectRatio="378 / 648"
                alt=""
                className="image cycle keyframe1"
            />
        </svg>
    );

    return (
        <div
            className="col top center shadow"
            style={{
                minWidth: "248px",
                minHeight: "300px",
                ...style
            }}
        >
            <Device />
        </div>
    );
});

const HeroCalendar = memo(function HeroCalendar() {
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
                //  width: "100%",
                //  height: "auto",
                minWidth: 0,
                maxWidth: "100%",
                minHeight: 0,
                maxHeight: "100%",
                overflow: "hidden",
            }}
        >
            <defs>
                <rect
                    id="cover-area-1"
                    className="cover-area-1"
                    x="22"
                    y="22"
                    width="193"
                    height="517"
                />
                <rect
                    id="cover-area-2"
                    className="cover-area-2"
                    x="215"
                    y="22"
                    width="731"
                    height="182"
                />
                <rect
                    id="cover-area-3"
                    className="cover-area-3"
                    x="215"
                    y="204"
                    width="731"
                    height="334"
                />
                <g id="caption-3">
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
                        3
                    </text>
                    <text
                        fill={text.fill}
                        fontFamily={text.fontFamily}
                        fontSize={text.fontSize}
                        x={caption3.x}
                        y={caption3.y}
                    >
                        high priority events
                    </text>
                    <text
                        fill={text.fill}
                        fontFamily={text.fontFamily}
                        fontSize={text.fontSize}
                        x={caption3.x}
                        y={caption3.y}
                        dy={lineHeight}
                    >
                        for upcoming months,
                    </text>
                    <text
                        fill={text.fill}
                        fontFamily={text.fontFamily}
                        fontSize={text.fontSize}
                        x={caption3.x}
                        y={caption3.y}
                        dy={lineHeight * 2}
                    >
                        grouped by week
                    </text>
                </g>
                <g id="caption-2">
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
                        2
                    </text>
                    <text
                        fill={text.fill}
                        fontFamily={text.fontFamily}
                        fontSize={text.fontSize}
                        x={caption2.x}
                        y={caption2.y}
                    >
                        daily forecast graph
                    </text>
                    <text
                        fill={text.fill}
                        fontFamily={text.fontFamily}
                        fontSize={text.fontSize}
                        x={caption2.x}
                        y={caption2.y}
                        dy={lineHeight}
                    >
                        in relation to medium
                    </text>
                    <text
                        fill={text.fill}
                        fontFamily={text.fontFamily}
                        fontSize={text.fontSize}
                        x={caption2.x}
                        y={caption2.y}
                        dy={lineHeight * 2}
                    >
                        priority events
                    </text>
                </g>
                <g id="caption-1">
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
                        1
                    </text>
                    <text
                        fill={text.fill}
                        fontFamily={text.fontFamily}
                        fontSize={text.fontSize}
                        x={caption1.x}
                        y={caption1.y}
                    >
                        hourly forecast
                    </text>
                    <text
                        fill={text.fill}
                        fontFamily={text.fontFamily}
                        fontSize={text.fontSize}
                        x={caption1.x}
                        y={caption1.y}
                        dy={lineHeight}
                    >
                        in relation to
                    </text>
                    <text
                        fill={text.fill}
                        fontFamily={text.fontFamily}
                        fontSize={text.fontSize}
                        x={caption1.x}
                        y={caption1.y}
                        dy={lineHeight * 2}
                    >
                        daily events
                    </text>
                </g>
            </defs>
            <image
                href="./img/frame-calendar-tv.png"
                width="968"
                height="561"
                alt=""
            />
            <g className="cycle-20s keyframe show-only3" transform="translate(0,0)">
                <use href="#cover-area-2" fill={coverFill[2]} />
                <use href="#cover-area-1" fill={coverFill[2]} />
                <use href="#caption-3" />
            </g>
            <g className="cycle-20s keyframe show-only2" transform="translate(0,0)">
                <use href="#cover-area-3" fill={coverFill[1]} />
                <use href="#cover-area-1" fill={coverFill[1]} />
                <use href="#caption-2" />
            </g>
            <g className="cycle-20s keyframe show-only1" transform="translate(0,0)">
                <use href="#cover-area-3" fill={coverFill[0]} />
                <use href="#cover-area-2" fill={coverFill[0]} />
                <use href="#caption-1" />
            </g>
        </svg>
    );

    return <Device />;
});