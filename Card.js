//import { memo } from "react";
//role="img" attribute and a descriptive aria-label or title attribute
//export const Card = memo(function Card(props) {
const Note = ({ content }) => (
  <div
    className={content.type}
    style={{
      gridColumn: content.gridColumn || "auto / auto",
      gridRow: content.gridRow || "auto / auto"
    }}
  >
    <h4>{content.title}</h4>
    <span>{content.description}</span>
  </div>
);
const Image = ({ content }) => (
  <div
    className={content.type}
    style={{
      backgroundImage: `url(${content.src})`,
      aspectRatio: content.aspectRatio,
      gridColumn: content.gridColumn || "auto / span 1",
      gridRow: content.gridRow || "1 / span 1"
    }}
  ></div>
);
/*
const Column = ({ content, colContent }) => (
  <div className={content.type}>
    {colContent.map((item, index) => (
      <div
        className={item.type}
        style={{
          backgroundImage: `url(${item.src})`,
          aspectRatio: item.aspectRatio
        }}
      >
        why tf won't this work??
      </div>
    ))}
  </div>
);*/

export default function Card({ content }) {
  console.log(content, content.colContent);

  /*content.type === "colunn" ? (
    <Column content={content} colContent={content.colContent} />
  ) :*/
  return content.type === "note" ? (
    <Note content={content} />
  ) : (
    <Image content={content} />
  );
}
