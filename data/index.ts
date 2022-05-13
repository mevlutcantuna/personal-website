import { nanoid } from 'nanoid'
import { TimelineDataType,AboutType,GithubReposType } from '../types'
import BlogImage from "../assets/repos/blog-project.png"
import CryptoExchangeImage from "../assets/repos/crypto-exchange.png"
import SlotMachineImage from "../assets/repos/slot-machine.png"
import ShoppingImage from "../assets/repos/shopping.png"
import QuizAppImage from "../assets/repos/quiz-app.png"
import MovieAppImage from "../assets/repos/movie-app.png"


export const TimelineData: TimelineDataType[] = [
    {
        id: nanoid(),
        title:"Frontend Developer",
        subtitle:"Code2.io",
        date:"01.2022 - Current",
        note:"I am developing templates and supporting customers to develop their websites without code. I am working with ReactJS, Redux, Javascript... ",
    },
    {
        id: nanoid(),
        title:"Freelance Frontend Developer",
        subtitle:"Remote",
        date:"07.2021 - 12.2021",
        note:"I was developing personal websites for my customers."
    },
    {
        id: nanoid(),
        title:"Frontend Development Student",
        subtitle:"Kodluyoruz Frontend Web Development Bootcamp",
        date:"06.2020 - 08.2020",
        note:"Mainly, in this bootcamp I've learnt Javascript,ReactJS,Redux,TypeScript",
    },
    {
        id: nanoid(),
        title:"Mechanical Engineering Student",
        subtitle:"Eskişehir Osmangazi University",
        date:"06.2018 - 06-2021",
        note:"Dropped out in sophomore year. I got english course english preparatory class for a year.",
    },

]

export const AboutText: AboutType = {
    about: "Enthusiastic Frontend Developer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills."
}

export const GithubRepos:GithubReposType[] = [
    {   
        id: nanoid(),
        image:BlogImage,
        title: "Blog Project",
        text:"It's a Fullstack blog project. Users can create, delete and update a blog, update user's profile and search blogs by name and tag.",
        github:"https://github.com/mevlutcantuna/next-fullstack-blog",
        demo:"https://next-fullstack-blog.vercel.app/",
        tech:["ReactJS","NextJS","Redux","SCSS","MongoDB","..."]

    },
    {
        id: nanoid(),
        image:CryptoExchangeImage,
        title: "Crypto Exchange",
        text:"Users can exchange their money and it saves on the table with all details, filter the table which has ten fake values, by date and type of saved.",
        github:"https://github.com/mevlutcantuna/crypto-exchage",
        demo:"https://crypto-exchage-mct.netlify.app/",
        tech:["ReactJS","Styled-Components","Hooks","Axios","..."]
    },
    {
        id: nanoid(),
        image:SlotMachineImage,
        title: "Slot Machine Game",
        text:"User can signup,login with validations and play game. When users spend or win coins, database updates. Every user has 20 coins before starting.",
        github:"https://github.com/mevlutcantuna/mern-slot-machine",
        demo:"https://slot-machine-mct.netlify.app/",
        tech:["ReactJS","Redux","SCSS","MongoDB","Mongoose","NodeJS","ExpressJS","..."]
    },
    {
        id: nanoid(),
        image:ShoppingImage,
        title: "Shopping App",
        text:"Users can filter products by tags, brands and sort products by old to new, new to old, price high to low...Users can add products to basket and remove products from basket.",
        github:"https://github.com/mevlutcantuna/shopping",
        demo:"https://shopping-mevlutcantuna.netlify.app/",
        tech:["ReactJS","Styled-Components","Redux","Hooks","..."]
    },
    {
        id: nanoid(),
        image:QuizAppImage,
        title: "Quiz App",
        text:"Users can select number of questions and types. When user chooses a option, showing correct and wrong choices. If user knows the correct choice, score board increases.",
        github:"https://github.com/mevlutcantuna/quizapp-typescript",
        demo:"https://quizapp-mct.netlify.app/",
        tech:["ReactJS","Typescript","SCSS","Axios","..."]
    },
    {
        id: nanoid(),
        image: MovieAppImage,
        title: "Movie App",
        text:"User can search movies by type,name and year and add movies to favorites which keep in local storage and see detail of movies.",
        github:"https://github.com/mevlutcantuna/movie-app",
        demo: "",
        tech:["ReactJS","Styled-Components","Redux","React-Router","ReduxThunk","Axios","..."]
    }
]