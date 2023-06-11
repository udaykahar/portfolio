import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ggits,
  neunetics,
  unelix,
  carrent,
  jobit,
  tripguide,
  astrology,
  dataanalytics,
  soundscape,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    URL_link: "https://drive.google.com/file/d/1BpqJnLFN1jqKZ88FkukHWHWRSGQ3ptKp/view?usp=sharing",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Reactjs Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Mongodb",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Student | CS'24",
    company_name: "GGITS",
    icon: ggits,
    iconBg: "#fff",
    date: "June 2020 - Present",
    points: [
      "Learned various computer science skills and subjects, Participated in hackathons, Led web master club.",
      "Worked on multiple projects with different teams and solo, demonstrating ability to work independently and as part of a team, as well as ability to learn new technologies quickly.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Unilex Consultants",
    icon: unelix,
    iconBg: "#14212A",
    date: "March 2021 - June 2021",
    points: [
      "Developed and maintained website using javascript and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Neunetics",
    icon: neunetics,
    iconBg: "#000000",
    date: "Augest 2021 - July 2022",
    points: [
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Uday proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Uday does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Uday optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Book Appointments",
    description:
      "Web-based platform that allows users to book appointments for astrology consultations. This is a convenient and efficient way for users to get the advice and guidance they need from an astrologer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "clendlyapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: astrology,
    source_code_link: "https://github.com/udaykahar/RJK",
    web_link : "https://richaanshastrology.netlify.app/",
  },
  {
    name: "Sound Scape",
    description:
      "An online store offering a wide range of headphones, catering to various preferences and budgets, with detailed product descriptions, user reviews, and seamless purchasing experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: soundscape,
    source_code_link: "https://github.com/udaykahar/headphone-store",
    web_link : "https://soundscapestore.vercel.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
9