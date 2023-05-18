//import { memo } from "react";
//role="img" attribute and a descriptive aria-label or title attribute
//export const Card = memo(function Card(props) {
const Note = ({ content, style }) => (
  <div className="note" style={{ ...style }}>
    <h4>{content.title}</h4>
    <span>{content.description}</span>
  </div>
);
const Image = ({ content, style }) => (
  <div>
    <img
      className="image"
      src={`${content.src}`}
      width="100%"
      style={{
        // backgroundImage: `url(${content.src})`,
        // aspectRatio: content.aspectRatio,
        ...style
      }}
      alt=""
    />
  </div>
);

const Column = ({ content }) => (
  <div
    //className="column"
    style={{
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: `repeat(${content.length}, 1fr)`,
      rowGap: "1rem",
      minWidth: 0,
      flexGrow: 2,
      flexShrink: 2,
      flexBasis: 1
    }}
  >
    {content.map((item, index) =>
      item.type === "note" ? (
        <Note
          key={index}
          content={item}
          style={{ minWidth: 0, alignSelf: "stretch" }}
        />
      ) : (
        <div>
          <img
            //className="image"
            key={index}
            src={`${item.src}`}
            width="100%"
            style={{
              margin: 0,
              padding: 0
              // backgroundImage: `url(${content.src})`,
              // aspectRatio: content.aspectRatio,
              // ...style
            }}
            alt=""
          />
        </div>
      )
    )}
  </div>
);

/*
  <Image
          key={index}
          content={item}
          style={{
            minWidth: 0
            //alignSelf: "stretch"
          }}
        />

 <div
        className={item.type}
        style={{
          backgroundImage: `url(${item.src})`,
          aspectRatio: item.aspectRatio
        }}
      >
*/

export default function CardRow({ content }) {
  // console.log(content);

  /*content.type === "colunn" ? (
      <Column content={content} colContent={content.colContent} />
    ) :*/
  const gridTemplateColumns = content
    .map((item, index) => (item.type === "column" ? item.width : "1fr"))
    .join(" ");

  return (
    <div
      style={{
        // display: "flex",
        // flexFlow: "row wrap",
        //  justifyContent: "stretch",
        //  alignItems: "stretch",
        //   gap: "1rem",
        display: "grid",
        gridTemplateRows: "auto",
        gridTemplateColumns: gridTemplateColumns, //`repeat(${content.length}, minmax(auto, 1fr))`,
        columnGap: "1rem",
        height: "auto",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0
      }}
    >
      {content.map((item, index) =>
        item.type === "note" ? (
          <Note key={index} content={item} />
        ) : item.type === "image" ? (
          <Image key={index} content={item} />
        ) : (
          <Column key={index} content={item.content} />
        )
      )}
    </div>
  );
}
