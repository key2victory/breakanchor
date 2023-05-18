export const pages = [
  {
    title: "Priority Calendar",
    path: "/calendar",
    subtitle: "Weather and events in perspective",
    hero: "Sonim",
    background: "linear-gradient(90deg, #9971B7 0%, #9971B7 100%)",
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
    title: "Audiohand",
    subtitle: "Mobile music studio",
    path: "/audiohand",
    hero: "ApplePhone",
    background:
      "linear-gradient(90deg, hsla(337,86%,51%,100%) 0%, hsla(338,100%,61%,100%) 100%)",
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
            "I designed and built a React web app that pulls weather and calendar information into a single prioritized view. To make sure my calendar app would be visible to me when the information was most relevant, I used a single board tiny computer to automate turning on the bedroom TV to display my app each morning. The style is dark to counter the brightness of the TV screen."
        }
      ],
      [
        {
          type: "image",
          src: "./img/audiohand-01.png",
          aspectRatio: "289 / 495",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-02.png",
          aspectRatio: "289 / 495",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-03.png",
          aspectRatio: "289 / 495",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-04.png",
          aspectRatio: "289 / 495",
          caption: ""
        }
      ],
      [
        {
          type: "image",
          src: "./img/audiohand-05.png",
          aspectRatio: "289 / 495",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-06.png",
          aspectRatio: "289 / 495",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-07.png",
          aspectRatio: "289 / 495",
          caption: ""
        }
      ],
      [
        {
          type: "image",
          src: "./img/audiohand-08.png",
          aspectRatio: "289 / 495",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-09.png",
          aspectRatio: "289 / 495",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-10.png",
          aspectRatio: "289 / 495",
          caption: ""
        }
      ],
      [
        {
          type: "image",
          src: "./img/audiohand-11.png",
          aspectRatio: "289 / 495",
          caption: "",
          gridColumn: "1 / span 1",
          gridRow: "1 / span 2"
        },
        {
          type: "image",
          src: "./img/audiohand-12.png",
          aspectRatio: "495 / 289",
          caption: "",
          gridColumn: "2 / span 1",
          gridRow: "1 / span 1"
        },
        {
          type: "image",
          src: "./img/audiohand-13.png",
          aspectRatio: "495 / 289",
          caption: "",
          gridColumn: "2 / span 1",
          gridRow: "2 / span 1"
        }
      ]
    ]
  },
  {
    title: "Lock Out, Tag Out",
    subtitle: "Electrical safety tracking",
    path: "/loto",
    hero: "Sonim",
    background: "linear-gradient(90deg, #f9b446 0%, #FEC107 100%)",
    content: [
      [
        {
          type: "note",
          title: "Problem",
          description:
            "To ensure safety during electrical system maintenance and repairs, a permit must be requested, and an authorized technician must go out on site, manually shut off each system circuit, and place a physical ID tagged lock on each one. Each permit request may contain a dozen or more different equipment, lock, and tag IDs to correctly associate with one another."
        },
        {
          type: "note",
          title: "Solution",
          description:
            "Mobile app allows them to scan tag ID bar codes without connectivity so they can capture each completed tag as they go. Bar code scanning would allow technicians a convenient checklist, improving efficiency and reducing risk of error associated with hand-written or manual entry record-keeping. Printed bar codes sometimes get damaged and may fail to scan, so I included design flows for manually selecting (rather than manual entering) tag numbers so workers could toggle tag states with a confirmation button, to avoid the hassle and errors with recording long strings of numbers from a smart phone touch screen."
        }
      ]
    ]
  }
];
