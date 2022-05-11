import { StaticImageData } from "next/image";

export interface TimelineDataType {
    id:string,
    title:string,
    subtitle:string,
    date:string,
    note:string | null
}

export interface AboutType {
    about:string
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