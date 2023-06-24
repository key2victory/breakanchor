import { useState, useEffect } from "react";
import "./styles-shuffle.css";

function getRandomWithOneExclusion(lengthOfArray, indexToExclude) {
  var rand = null; //an integer
  while (rand === null || rand === indexToExclude) {
    rand = Math.round(Math.random() * (lengthOfArray - 1));
  }
  console.log("App.js __ returned getRandomWithExclusion", rand);
  return rand;
}

export default function Shuffle(props) {
  //const [index, setIndex] = useState(0);
  const [topCard, setTopCard] = useState(getRandomWithOneExclusion(5, 6));
  const [bottomCard, setBottomCard] = useState(0);
  const [animationState, setAnimationState] = useState("pause");
  const [frontSide, setFrontSide] = useState(true);
  const photo = [
    "./img/shuffle00001.jpg",
    "./img/shuffle00002.jpg",
    "./img/shuffle00003.jpg",
    "./img/shuffle00004.jpg",
    "./img/shuffle00005.jpg",
    "./img/shuffle00006.jpg"
  ];
  /*
  useEffect(() => {
    if (bottomCard === topCard) {
      let rand = getRandomWithOneExclusion(5, topCard);
      // setBottomCard(topCard);
      setTopCard(rand);
      setAnimationState("play");
    }
  }, [bottomCard, topCard]);*/

  useEffect(() => {
    console.log("Card.js __ AnimationState:", animationState);
    animationState === "play"
      ? setTimeout(() => {
          setAnimationState("pause");
          console.log("Card.js __ AnimationState:", animationState);
        }, 1000 * 3)
      : null; //1 sec
  }, [animationState]);

  useEffect(() => {
    if (animationState === "pause") {
      setTimeout(() => {
        let rand = getRandomWithOneExclusion(5, topCard);
        setBottomCard(topCard);
        setTopCard(rand);
        setAnimationState("play");
        console.log("set bottomCard value to topCard value");
      }, 1000 * 3);
    } //1 sec
  }, [animationState]);

  return (
    <div
      className="card-container"
      onClick={() => {
        setBottomCard(topCard);
        console.log("set bottomCard value to topCard value");

        //props.onCardChange(index);
      }}
    >
      <div className={`card top ${animationState}`}>
        <img
          className="photo"
          src={photo[topCard]}
          alt=""
          style={{
            objectFit: "cover",
            objectPosition: "center",
            aspectRatio: "1 / 1"
            // backgroundImage: `url(${photo[topCard]})`
          }}
        />
      </div>

      {/* ---PREV CARD--- */}

      <div className={`card bottom ${animationState}`}>
        <img
          className="photo"
          src={photo[bottomCard]}
          alt=""
          style={{
            objectFit: "cover",
            objectPosition: "center",
            aspectRatio: "1 / 1"
            // backgroundImage: `url(${photo[topCard]})`
          }}
        />
        {/*<div
          className="photo"
          style={{
            backgroundImage: `url(${photo[bottomCard]})`
          }}
        />*/}
      </div>
    </div>
  );
}

Shuffle.defaultProps = {
  //  card: { text: "", hint: "", sign: [""] }
};
