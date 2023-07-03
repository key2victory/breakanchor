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
          dates: [2006, 2010],
        },
        {
          title: "Governor’s School for the Arts",
          subtitle: "Middle Tennessee State University",
          dates: [2005],
        },
      ],
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
                "ITLP",
              ],
            },
          ],
        },
        {
          title: "Bechtel National",
          subtitle: "UX/UI Information Systems Senior",
          dates: [2016, 2019],
          details: [
            {
              items: [
                "Collaborated with developers and business analysts to produce user-centric software solutions for web, iOS,  Android, and Windows",
              ],
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
                "UPF",
              ],
            },
            {
              label: "Awards",
              items: [
                "LeadR+ award for “Best Pitch Delivery” for IS&T Hackathon presentation",
                "LeadR+2 award for ES&H interactive reporting materials",
                "LeadeR+4 award for PD@Bechtel designs and contributions",
                "LeadeR+2 award for delivering UI design in record time for iHUB project",
              ],
            },
          ],
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
                "Illustration designs and apparel",
              ],
            },
          ],
        },
        {
          title: "Audiohand",
          subtitle: "Lead UX Designer",
          dates: [2014, 2016],
          details: [
            { items: ["UX conceptual design", "UI design for mobile software"] },
          ],
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
                "Branding, advertising, and sales materials",
              ],
            },
          ],
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
                "Met with clients for sales and support",
              ],
            },
          ],
        },
      ],
    },
    {
      section: "Community",
      items: [
        {
          title: "What Makes UI Intuitive?",
          subtitle: "Event Speaker for CodeStock",
          dates: [2022],
        },
        {
          title: "The UX Stack",
          subtitle: "Event Speaker for Scenic City Summit",
          dates: [2019],
        },
        {
          title: "Design Mentor for What’s the Big Idea",
          subtitle: "Knoxville Entrepreneur Center",
          dates: [2015, 2016, 2017, 2019],
        },
        {
          title:
            "UX Design: Bridging the Gap Between Expectations and Development",
          subtitle: "Event Speaker for CodeStock",
          dates: [2016],
        },
        {
          title: "Design Mentor for CodeWorks",
          subtitle: "Knoxville Entrepreneur Center",
          dates: [2015],
        },
        {
          title: "Design Mentor for MediaWorks",
          subtitle: "Knoxville Entrepreneur Center",
          dates: [2015],
        },
      ],
    },
  ],
};

export const pages = [
  {
    title: "Priority Calendar",
    subtitle: "Weather and events in perspective",
    description: "A calendar app I designed and built using react-js",
    path: "calendar",
    url: "",
    image: "./img/calendar-room.png",
    devices: ["S", "M", "L"],
    tags: ["reactjs", "responsive"],
    level: 1
  },
  {
    title: "ASL Flashcards",
    subtitle: "",
    description: "A flashcard app I designed and built using react-js",
    path: "calendar",
    url: "",
    image: "./img/asl.png",
    devices: ["S", "M", "L"],
    tags: ["reactjs", "responsive"],
    level: 1
  },
  {
    title: "Lock Out, Tag Out",
    subtitle: "Electrical safety tracking",
    path: "loto",
    src: "./img/loto-01.png",
    devices: ["S"],
    tags: ["mobile"],
    level: 2
  },
  {
    title: "Conference Manager",
    path: "conference-manager",
    src: "./samples/ConferenceManagerUnframed/index.html",
    image: "./img/[].png",
    aspectRatio: "1680 / 1105",
    devices: ["L"],
    tags: ["desktop"],
    level: 3
  },
  {
    title: "Compliance Works",
    path: "compliance",
    src: "./samples/ComplianceUnframed/index.html",
    image: "./img/[].png",
    aspectRatio: "1640 / 1024",
    devices: ["L"],
    tags: ["desktop"],
    level: 3
  },

  {
    title: "Clearance Tracker",
    path: "clearance-tracker",
    src: "./samples/ClearanceTrackerUnframed/index.html",
    image: "./img/[].png",
    aspectRatio: "1678 / 1153",
    devices: ["L"],
    tags: ["desktop"],
    level: 3
  },
  {
    title: "Audiohand",
    subtitle: "Mobile music studio",
    path: "audiohand",
    image: "./img/audiohand-bg.png",
    devices: ["S"],
    tags: ["mobile"],
    level: 2
  },
  {
    title: "Interview Kiosk",
    path: "interview-kiosk",
    src: "./samples/InterviewKioskUnframed/index.html",
    image: "./img/[].png",
    aspectRatio: "3 / 2", //"2048 / 1536",
    devices: ["M"],
    tags: ["tablet"],
    level: 3
  },
];
