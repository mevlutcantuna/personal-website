import styles from "./project-item.module.css"
import Image from "next/image"

import BlogImage from "../../assets/blog-project.png"
import DemoIcon from "../../assets/demo.png"
import GithubIcon from "../../assets/social/github-black.svg"
import { GithubReposType } from "../../types"

type PropTypes = {
    item: GithubReposType
}

const ProjectItem: React.FC<PropTypes> = ({ item }) => {
    return (
        <div data-aos="fade-right"
            data-aos-anchor-placement="top" className={styles.project__item}>
            <div className={styles.project__item__image}>
                <Image src={item.image} layout="fill" alt="blog-image" />
            </div>
            <div className={styles.project__item__details}>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <div>
                    {item.tech.map((item: string, index: number) => <span key={index}>{item}</span>)}
                </div>
                <div className={styles.project__item__details__bottom}>
                    <a href={item.demo} target="_blank" rel="noreferrer">
                        <Image src={DemoIcon} width={32} height={32} alt="demo" />
                    </a>
                    <a href={item.demo} target="_blank" rel="noreferrer">
                        <Image src={GithubIcon} width={32} height={32} alt="github" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem