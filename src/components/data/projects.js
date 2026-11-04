import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/projectImg5.png";
import projImg6 from "../assets/img/MEMCRM.png";
import projImg7 from "../assets/img/amazona1.png";

// Tab keys must stay "first" | "second" | "third" (CSS targets them).
export const tabs = [
  { key: "first", label: "Front-End" },
  { key: "second", label: "Full-Stack" },
  { key: "third", label: "Freelance" },
];

/*
  HOW TO ADD A PROJECT (including freelance work):
  Copy one object, give it a new unique `id`, and set `category`
  to "first" (Front-End), "second" (Full-Stack) or "third" (Freelance).
  - description : short text shown on the card
  - overview    : longer text shown on the details page
  - tech        : list of technologies (shown as badges)
  - liveUrl     : live demo link (optional)
  - repoUrl     : GitHub link (optional)
  - clientName  : optional, shown for freelance work
*/
export const projects = [
  {
    id: 1,
    title: "Professional Landing Page",
    description: "HTML + CSS + Bootstrap + JavaScript + animation libraries",
    overview:
      "A responsive, professional landing page with smooth animations and a clean layout. Built to practice pixel-accurate front-end work and scroll animations.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    imgUrl: projImg1,
    liveUrl: "https://maryamalkurd.github.io/Pro.-Landing-Page/",
    category: "first",
  },
  {
    id: 2,
    title: "Portfolio Site",
    description: "Full-stack development React js + Express js + PostgreSQL",
    overview:
      "This portfolio: a React front end with an Express and PostgreSQL back end for the contact form and data.",
    tech: ["React", "Express", "PostgreSQL"],
    imgUrl: projImg2,
    repoUrl: "https://github.com/Maryamalkurd/Personal-Portfolio",
    category: "second",
  },
  {
    id: 3,
    title: "Front-End Dashboard",
    description: "HTML + CSS + Bootstrap + JavaScript",
    overview:
      "An admin dashboard UI with cards, charts and a responsive sidebar layout.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    imgUrl: projImg3,
    liveUrl: "https://maryamalkurd.github.io/Dashboard/",
    category: "first",
  },
  {
    id: 4,
    title: "Control Panel Dashboard",
    description: "HTML + CSS + JS + Bootstrap",
    overview:
      "A control panel style dashboard focused on clear information layout and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imgUrl: projImg4,
    liveUrl: "https://maryamalkurd.github.io/Control-Panel/",
    category: "first",
  },
  {
    id: 5,
    title: "CRM System",
    description: "Full-stack CRM website with PHP + MySQL",
    overview:
      "A full-stack customer relationship management system for managing customers and records, built with PHP and MySQL.",
    tech: ["PHP", "MySQL"],
    imgUrl: projImg6,
    repoUrl: "https://github.com/Maryamalkurd/MEM_CRM",
    category: "second",
  },
  {
    id: 6,
    title: "E-commerce Website",
    description: "MERN stack e-commerce website, similar to Amazon",
    overview:
      "A fully-functional e-commerce website built with the MERN stack: product listing, cart, checkout and an admin side.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    imgUrl: projImg7,
    repoUrl: "https://github.com/Maryamalkurd/Ecommerce-website-with-nodejs",
    category: "second",
  },
  {
    id: 7,
    title: "Real-Time Live Chat",
    description: "Real-time chat with socket.io + Node.js",
    overview:
      "A simple real-time chat application where messages are delivered instantly using WebSockets.",
    tech: ["Node.js", "socket.io"],
    imgUrl: projImg5,
    repoUrl: "https://github.com/Maryamalkurd/RealTime_simple_chatApp",
    category: "second",
  },

  // ---- FREELANCE: replace this example with your real client project ----
  // {
  //   id: 8,
  //   title: "Client Project Name",
  //   description: "One-line summary",
  //   overview: "What the client needed, what you built, the result.",
  //   tech: ["React", "Node.js"],
  //   imgUrl: freelanceImg1,        // import it at the top of this file
  //   liveUrl: "https://client-site.com",
  //   clientName: "Client Name",
  //   category: "third",
  // },
];
