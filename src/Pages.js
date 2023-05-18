const present = new Date().getFullYear();

export const resume = {
  title: "Janna Curtis",
  path: "/",
  subtitle: "Product Designer",
  background1: "hsl(0,0%,90%)",
  background2: "hsl(0,0%,10%)",
  content: [
    {
      section: "Education",
      items: [
        {
          title: "Watkins College of Art, Design, & Film",
          subtitle: "Bachelor of Fine Arts, Graphic Design",
          dates: [2006, 2010]
        },
        {
          title: "Governor’s School for the Arts",
          subtitle: "Middle Tennessee State University",
          dates: [2005]
        }
      ]
    },
    {
      section: "Experience",
      items: [
        {
          title: "Cadre5",
          subtitle: "Sr. Product Designer",
          dates: [2019, present],
          details: [
            {
              label: "Projects",
              items: [
                "RESolution",
                "Sandia National Lab",
                "Los Alamos National Lab",
                "Oak Ridge National Lab",
                "Landscan",
                "ITLP"
              ]
            }
          ]
        },
        {
          title: "Bechtel National",
          subtitle: "UX/UI Information Systems Senior",
          dates: [2016, 2019],
          details: [
            {
              items: [
                "Collaborated with developers and business analysts to produce user-centric software solutions for web, iOS,  Android, and Windows"
              ]
            },
            {
              label: "Projects",
              items: [
                "MMI",
                "SPECS",
                "Arnold",
                "iHUB",
                "Security Clearance Tracker",
                "ES&H",
                "BoltBot",
                "LOTO Safety Tracker",
                "PD@Bechtel",
                "Digital Supply Chain",
                "UPF"
              ]
            },
            {
              label: "Awards",
              items: [
                "LeadR+ award for “Best Pitch Delivery” for IS&T Hackathon presentation",
                "LeadR+2 award for ES&H interactive reporting materials",
                "LeadeR+4 award for PD@Bechtel designs and contributions",
                "LeadeR+2 award for delivering UI design in record time for iHUB project"
              ]
            }
          ]
        },
        {
          title: "Break Anchor",
          subtitle: "Owner, Lead Designer, Mentor",
          dates: [2009, 2017],
          details: [
            {
              items: [
                "Conceptual design, graphics, and presentations",
                "UI design for mobile and web-based software",
                "Logo, branding, advertising, and sales materials",
                "Vectorizations and screen print formatting",
                "Illustration designs and apparel"
              ]
            }
          ]
        },
        {
          title: "Audiohand",
          subtitle: "Lead UX Designer",
          dates: [2014, 2016],
          details: [
            { items: ["UX conceptual design", "UI design for mobile software"] }
          ]
        },
        {
          title: "Connection Point",
          subtitle: "Creative Director, UX Design",
          dates: [2014],
          details: [
            {
              items: [
                "UX conceptual design",
                "UI design for web-based software",
                "Branding, advertising, and sales materials"
              ]
            }
          ]
        },
        {
          title: "K-Town Apartments, LLC",
          subtitle: "Chief Creative Officer, UX Design",
          dates: [2012, 2014],
          details: [
            {
              items: [
                "UX conceptual design",
                "UI design for mobile and web-based software",
                "Branding, advertising, and sales materials",
                "Represented company for presentations and events",
                "Met with clients for sales and support"
              ]
            }
          ]
        }
      ]
    },
    {
      section: "Community",
      items: [
        {
          title: "What Makes UI Intuitive?",
          subtitle: "Event Speaker for CodeStock",
          dates: [2022]
        },
        {
          title: "The UX Stack",
          subtitle: "Event Speaker for Scenic City Summit",
          dates: [2019]
        },
        {
          title: "Design Mentor for What’s the Big Idea",
          subtitle: "Knoxville Entrepreneur Center",
          dates: [2015, 2016, 2017, 2019]
        },
        {
          title:
            "UX Design: Bridging the Gap Between Expectations and Development",
          subtitle: "Event Speaker for CodeStock",
          dates: [2016]
        },
        {
          title: "Design Mentor for CodeWorks",
          subtitle: "Knoxville Entrepreneur Center",
          dates: [2015]
        },
        {
          title: "Design Mentor for MediaWorks",
          subtitle: "Knoxville Entrepreneur Center",
          dates: [2015]
        }
      ]
    }
  ]
};

export const pages = [
  {
    title: "Priority Calendar",
    path: "/calendar",
    subtitle: "Weather and events in perspective",
    hero: "Sonim",
    background: "linear-gradient(90deg, #9971B7 0%, #9971B7 100%)",
    background1: "#9971B7",
    background2: "#9971B7",
    content: [
      [
        {
          type: "note",
          title: "Problem",
          description:
            "When I wake up, I need to be aware of the day's agenda, so I can be in the right place at the right time. I also need to see the hourly weather forecast in relation to my scheduled appointments to determine what to wear, and I want to plan breaks to walk outside with my dog when the weather is nice enough between appointments. I may want to postpone if another day this week is expected to be nicer."
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
    background1: "hsla(337,86%,51%,100%)",
    background2: "hsla(338,100%,61%,100%)",
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
          src: "./img/audiohand-01.png",
          aspectRatio: "377 / 648",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-02.png",
          aspectRatio: "378 / 647",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-03.png",
          aspectRatio: "377 / 648",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-04.png",
          aspectRatio: "377 / 648",
          caption: ""
        }
      ],
      [
        {
          type: "image",
          src: "./img/audiohand-05.png",
          aspectRatio: "378 / 675",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-06.png",
          aspectRatio: "378 / 675",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-07.png",
          aspectRatio: "378 / 675",
          caption: ""
        }
      ],
      [
        {
          type: "image",
          src: "./img/audiohand-08.png",
          aspectRatio: "378 / 675",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-09.png",
          aspectRatio: "378 / 675",
          caption: ""
        },
        {
          type: "image",
          src: "./img/audiohand-10.png",
          aspectRatio: "378 / 675",
          caption: ""
        }
      ],
      [
        {
          type: "image",
          src: "./img/audiohand-11.png",
          aspectRatio: "189 / 325",
          caption: ""
        },
        {
          type: "column",
          width: "58%",
          content: [
            {
              type: "image",
              src: "./img/audiohand-12.png",
              aspectRatio: "135 / 76",
              caption: ""
            },
            {
              type: "image",
              src: "./img/audiohand-13.png",
              aspectRatio: "135 / 76",
              caption: ""
            }
          ]
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
    background1: "#f9b446",
    background2: "#FEC107",
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
      ],
      [
        {
          type: "image",
          src: "./img/loto-00.png",
          aspectRatio: "1895 / 612",
          caption: [
            "p.31,",
            "Bechtel 2018 Annual Report ↗",
            "https://www.bechtel.com/getmedia/0f83daae-baa4-4124-b84b-bdea6c861bfc/2018-bechtel-report-final-ns.pdf"
          ]
        }
      ],
      [
        {
          type: "image",
          src: "./img/loto-01.png",
          aspectRatio: "377 / 648",
          caption: ""
        },
        {
          type: "image",
          src: "./img/loto-02.png",
          aspectRatio: "377 / 648",
          caption: ""
        },
        {
          type: "image",
          src: "./img/loto-03.png",
          aspectRatio: "378 / 647",
          caption: ""
        }
      ],
      [
        {
          type: "image",
          src: "./img/loto-04.png",
          aspectRatio: "377 / 648",
          caption: ""
        },
        {
          type: "column",
          width: "58%",
          content: [
            {
              type: "image",
              src: "./img/loto-05.png",
              aspectRatio: "159/136",
              caption: ""
            },
            {
              type: "image",
              src: "./img/loto-06.png",
              aspectRatio: "159/136",
              caption: ""
            }
          ]
        }
      ],
      [
        {
          type: "image",
          src: "./img/loto-07.png",
          aspectRatio: "377 / 648",
          caption: ""
        },
        {
          type: "image",
          src: "./img/loto-08.png",
          aspectRatio: "377 / 648",
          caption: ""
        },
        {
          type: "image",
          src: "./img/loto-09.png",
          aspectRatio: "378 / 647",
          caption: ""
        }
      ],
      [
        {
          type: "image",
          src: "./img/loto-10.png",
          aspectRatio: "377 / 648",
          caption: ""
        },
        {
          type: "image",
          src: "./img/loto-11.png",
          aspectRatio: "377 / 648",
          caption: ""
        },
        {
          type: "image",
          src: "./img/loto-12.png",
          aspectRatio: "378 / 647",
          caption: ""
        }
      ],
      [
        {
          type: "image",
          src: "./img/loto-13.png",
          aspectRatio: "3634 / 1155",
          caption: ""
        }
      ]
    ]
  }
];
