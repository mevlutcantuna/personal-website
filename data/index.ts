import { nanoid } from "nanoid";
import {
  TimelineDataType,
  GithubReposType,
  TechDataType,
  ProfileInfoType,
} from "../types";

import BlogImage from "../assets/repos/blog-project.png";
import CryptoExchangeImage from "../assets/repos/crypto-exchange.png";
import SlotMachineImage from "../assets/repos/slot-machine.png";
import ShoppingImage from "../assets/repos/shopping.png";
import MovieAppImage from "../assets/repos/movie-app.png";
import MessageAppImage from "../assets/repos/message-app.png";

import CSS3 from "../assets/tech-icons/css3.svg";
import HTML5 from "../assets/tech-icons/html5.svg";
import JS from "../assets/tech-icons/javascript.svg";
import MongoDB from "../assets/tech-icons/mongodb.svg";
import NextJS from "../assets/tech-icons/nextjs.svg";
import NodeJS from "../assets/tech-icons/nodejs.svg";
import ReactIcon from "../assets/tech-icons/react.svg";
import Redux from "../assets/tech-icons/redux.svg";
import TypeScript from "../assets/tech-icons/typescript.svg";
import Express from "../assets/tech-icons/expressjs.svg";

import Cypress from "../assets/tech-icons/cypress.svg";
import TestingLibrary from "../assets/tech-icons/testing-library.png";
import Jest from "../assets/tech-icons/jest.png";
import Apollo from "../assets/tech-icons/apollo.png";
import Graphql from "../assets/tech-icons/graphql.svg";

export const TimelineData: TimelineDataType[] = [
  {
    id: nanoid(),
    title: "Frontend Developer",
    subtitle: "Code2.io",
    date: "01.2022 - Current",
    note: "I am developing templates and supporting customers to develop their websites without code. I am working with ReactJS, Redux, Javascript... ",
  },
  {
    id: nanoid(),
    title: "Frontend Development Student",
    subtitle: "Kodluyoruz Frontend Web Development Bootcamp",
    date: "06.2020 - 08.2020",
    note: "Mainly, in this bootcamp I've learnt Javascript,ReactJS,Redux,TypeScript",
  },
  {
    id: nanoid(),
    title: "Mechanical Engineering Student",
    subtitle: "Eskişehir Osmangazi University",
    date: "06.2018 - 06-2021",
    note: "Dropped out in sophomore year. I got english course english preparatory class for a year.",
  },
];

export const GithubRepos: GithubReposType[] = [
  {
    id: nanoid(),
    image: BlogImage,
    title: "Blog Project",
    text: "It's a Fullstack blog project. Users can create, delete and update a blog, update user's profile and search blogs by name and tag.",
    github: "https://github.com/mevlutcantuna/next-fullstack-blog",
    demo: "https://next-fullstack-blog.vercel.app/",
    tech: ["ReactJS", "NextJS", "Redux", "SCSS", "MongoDB", "..."],
  },
  {
    id: nanoid(),
    image: CryptoExchangeImage,
    title: "Crypto Exchange",
    text: "Users can exchange their money and it saves on the table with all details, filter the table which has ten fake values, by date and type of saved.",
    github: "https://github.com/mevlutcantuna/crypto-exchage",
    demo: "https://crypto-exchage-mct.netlify.app/",
    tech: ["ReactJS", "Styled-Components", "Hooks", "Axios", "..."],
  },
  {
    id: nanoid(),
    image: SlotMachineImage,
    title: "Slot Machine Game",
    text: "User can signup,login with validations and play game. When users spend or win coins, database updates. Every user has 20 coins before starting.",
    github: "https://github.com/mevlutcantuna/mern-slot-machine",
    demo: "https://slot-machine-mct.netlify.app/",
    tech: [
      "ReactJS",
      "Redux",
      "SCSS",
      "MongoDB",
      "Mongoose",
      "NodeJS",
      "ExpressJS",
      "...",
    ],
  },
  {
    id: nanoid(),
    image: ShoppingImage,
    title: "Shopping App",
    text: "Users can filter products by tags, brands and sort products by old to new, new to old, price high to low...Users can add products to basket and remove products from basket.",
    github: "https://github.com/mevlutcantuna/shopping",
    demo: "https://shopping-mevlutcantuna.netlify.app/",
    tech: ["ReactJS", "Styled-Components", "Redux", "Hooks", "..."],
  },
  {
    id: nanoid(),
    image: MessageAppImage,
    title: "Message App",
    text: "Authentication with email and password and with google account. Send message and get message in realtime.",
    github: "https://github.com/mevlutcantuna/realtime-message-app",
    demo: "https://message-app-realtime-mct.netlify.app/",
    tech: [
      "ReactJS",
      "Typescript",
      "PrimeFlex",
      "Redux",
      "ExpressJs",
      "Socket.io",
      "...",
    ],
  },
  {
    id: nanoid(),
    image: MovieAppImage,
    title: "Movie App",
    text: "User can search movies by type,name and year and add movies to favorites which keep in local storage and see detail of movies.",
    github: "https://github.com/mevlutcantuna/movie-app",
    demo: "",
    tech: [
      "ReactJS",
      "Styled-Components",
      "Redux",
      "React-Router",
      "ReduxThunk",
      "Axios",
      "...",
    ],
  },
];

export const TechData: TechDataType[] = [
  {
    id: nanoid(),
    image: HTML5,
  },
  {
    id: nanoid(),
    image: CSS3,
  },
  {
    id: nanoid(),
    image: JS,
  },
  {
    id: nanoid(),
    image: ReactIcon,
  },
  {
    id: nanoid(),
    image: Redux,
  },
  {
    id: nanoid(),
    image: NextJS,
  },
  {
    id: nanoid(),
    image: TypeScript,
  },
  {
    id: nanoid(),
    image: NodeJS,
  },
  {
    id: nanoid(),
    image: MongoDB,
  },
  {
    id: nanoid(),
    image: Express,
  },
  {
    id: nanoid(),
    image: Graphql,
  },
  {
    id: nanoid(),
    image: Apollo,
  },
  {
    id: nanoid(),
    image: Cypress,
  },
  {
    id: nanoid(),
    image: TestingLibrary,
  },
  {
    id: nanoid(),
    image: Jest,
  },
];

export const ProfileInfo: ProfileInfoType = {
  name: "Mevlüt Can Tuna",
  titles: [
    "FRONTEND DEVELOPER",
    "WORKS ? FRONTEND DEVELOPER : LEARNER",
    "WEB DEVELOPER",
  ],
  about:
    "Enthusiastic Frontend Developer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills.",
  github: "https://github.com/mevlutcantuna",
  linkedin: "https://www.linkedin.com/in/mevlutcantuna/",
  twitter: "https://twitter.com/mevlt_tuna",
  instagram: "https://www.instagram.com/mevlutcantuna1/",
  resume: "https://www.mevlutcantuna.com/mevlutcantuna.pdf",
  email: "mttuna90@gmail.com",
  phone_number: "+90 553 044 78 52",
};
