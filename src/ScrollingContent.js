import CardCol from "./CardCol";
import CardRow from "./CardRow";
/*
const pages = [
  {
    title: "Audiohand",
    subtitle: "Mobile music studio",
    content: [
      [
        {
          type: "note",
          title: "Problem",
          description:
            "Musicians and other audio artists don't have a convenient way to record their creative ideas quickly and easily on the spot. Bands wanting to pitch their ideas to record studios have a hard time just getting started since they need a studio to make quality demos."
        },
        {
          type: "note",
          title: "Solution",
          description:
            "Audiohand allows people to produce near studio quality recordings from the convenience of their own smart phone. With 2 or more mobile devices, they can record simultaneously, and the software can blend them together, filtering out impurities to produce even better results."
        }
      ],
      [
        {
          type: "image",
          src: "",
          aspectRatio: "",
          caption: ""
        },
        {
          type: "image",
          src: "",
          aspectRatio: "",
          caption: ""
        }
      ]
    ]
  },
  {
    title: "Lock Out, Tag Out",
    subtitle: "Mobile music studio",
    content: [
      [
        { type: "note", title: "Problem", description: "" },
        { type: "note", title: "Solution", description: "" }
      ]
    ]
  }
];
console.log(pages[0].content[0]);*/
export default function ScrollingContent({
  title,
  subtitle,
  background,
  row,
  column
}) {
  return (
    <div className="main-content">
      {row ? (
        <div
          style={{
            /* position: "absolute",
            top: 0,
            left: 0,
            right: 0,*/
            height: "auto",
            padding: ".5rem 0 1rem 0",
            color: "hsl(0,0%,100%)",
            //background: `linear-gradient(0deg, transparent 0%, ${background} 20%)`,
            zIndex: 10,
            overflow: "visible"
          }}
        >
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      ) : null}
      {column ? (
        <div
          style={{
            height: "1rem",
            padding: ".5rem 0 1rem 0",
            background: `linear-gradient(0deg, transparent 0%, ${background} 80%)`,
            zIndex: 10
          }}
        />
      ) : null}
      <div
        style={{
          overflow: "visible",
          height: "1px",
          width: "auto",
          zIndex: 10
        }}
      >
        <div
          style={{
            height: "1rem",
            background: `linear-gradient(0deg, transparent 0%, ${background} 90%)`
          }}
        />
      </div>
      <div className="scroll-zone">
        {row
          ? row.map((rowItem, rowIndex) => (
              <CardRow key={rowIndex} content={rowItem} />
            ))
          : null}
        {column
          ? column.map((colItem, colIndex) => (
              <CardCol key={colIndex} content={colItem} />
            ))
          : null}
      </div>
    </div>
  );
}

/*
{row.content.map((rowItem, rowIndex) => (
  <div
    key={rowIndex}
    className="row"
    // style={{ display: "flex", flexFlow: "row wrap" }}
  >
    {rowItem.map((cardItem, cardIndex) => (
      <Card key={cardIndex} content={cardItem} />
    ))}
  </div>
))}
*/
