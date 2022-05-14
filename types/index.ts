import { StaticImageData } from "next/image";

export interface TimelineDataType {
    id:string,
    title:string,
    subtitle:string,
    date:string,
    note:string | null
}

export interface GithubReposType {
    id:string,
    image:StaticImageData,
    title: string,
    text:string,
    github:string,
    demo:string,
    tech:string[]
}

export interface TechDataType {
    id:string,
    image:StaticImageData
}

export interface ProfileInfoType {
    name:string,
    titles:string[],
    about:string,
    github:string,
    linkedin:string,
    twitter:string,
    instagram:string,
    resume:string,
    email: string,
    phone_number: string
}