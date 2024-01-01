import {
  mobile,
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
  threejs,
  vbc,
  boxcom,
  akka,
  todo,
  jobs,
  movies,
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
];

const services = [
  {
    title: "React Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Vision Business Consulting",
    icon: vbc,
    iconBg: "#383E56",
    date: "October 2021 - Present",
    points: [
      "Developing and maintaining web & mobile applications using React.js & React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Boxcom",
    icon: boxcom,
    iconBg: "#383E56",
    date: "May 2021 - August 2021",
    points: [
      "Developing mobile application user interface using Ionic and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Akka Technologies",
    icon: akka,
    iconBg: "#E6DEDD",
    date: "November 2020 - May 2021",
    points: [
      "Developing web applications user interfaces using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Job IT",
    description:
      "Mobile app that enables users to search, apply, and manage job opportunities. It provides a convenient platform for job seekers to browse listings and submit applications",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobs,
    source_code_link: "https://github.com/Dulahta/jobs_mobile_app",
  },
  {
    name: "To-Do List",
    description:
      "Web app that enables users to organize tasks, prioritize activities, and track their progress efficiently. It helps in managing time, staying organized, and increasing productivity..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "jsonserver",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Dulahta/To-do-list-repo",
  },
  {
    name: "MovieLand",
    description:
      "Web App that enables users to browse, search, and stream content anytime, anywhere and enjoy an immersive entertainment experience from the comfort of their devices.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/Dulahta/movies_app",
  },
];

export { services, technologies, experiences, projects };
