import { nanoid } from 'nanoid'
import { TimelineDataType,AboutType,GithubReposType } from '../types'
import BlogImage from "../assets/blog-project.png"

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
        tech:["ReactJS","NextJS","Redux","SCSS","MongoDB"]

    },
    {
        id: nanoid(),
        image:BlogImage,
        title: "Blog Project",
        text:"It's a Fullstack blog project. Users can create, delete and update a blog, update user's profile and search blogs by name and tag.",
        github:"https://github.com/mevlutcantuna/next-fullstack-blog",
        demo:"https://next-fullstack-blog.vercel.app/",
        tech:["ReactJS","NextJS","Redux","SCSS","MongoDB"]
    },
    {
        id: nanoid(),
        image:BlogImage,
        title: "Blog Project",
        text:"It's a Fullstack blog project. Users can create, delete and update a blog, update user's profile and search blogs by name and tag.",
        github:"https://github.com/mevlutcantuna/next-fullstack-blog",
        demo:"https://next-fullstack-blog.vercel.app/",
        tech:["ReactJS","NextJS","Redux","SCSS","MongoDB"]
    },
    {
        id: nanoid(),
        image:BlogImage,
        title: "Blog Project",
        text:"It's a Fullstack blog project. Users can create, delete and update a blog, update user's profile and search blogs by name and tag.",
        github:"https://github.com/mevlutcantuna/next-fullstack-blog",
        demo:"https://next-fullstack-blog.vercel.app/",
        tech:["ReactJS","NextJS","Redux","SCSS","MongoDB"]
    },
    {
        id: nanoid(),
        image:BlogImage,
        title: "Blog Project",
        text:"It's a Fullstack blog project. Users can create, delete and update a blog, update user's profile and search blogs by name and tag.",
        github:"https://github.com/mevlutcantuna/next-fullstack-blog",
        demo:"https://next-fullstack-blog.vercel.app/",
        tech:["ReactJS","NextJS","Redux","SCSS","MongoDB"]
    },
    {
        id: nanoid(),
        image:BlogImage,
        title: "Blog Project",
        text:"It's a Fullstack blog project. Users can create, delete and update a blog, update user's profile and search blogs by name and tag.",
        github:"https://github.com/mevlutcantuna/next-fullstack-blog",
        demo:"https://next-fullstack-blog.vercel.app/",
        tech:["ReactJS","NextJS","Redux","SCSS","MongoDB"]
    }
]