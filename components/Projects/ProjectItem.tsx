import styles from "./project-item.module.css"
import Image from "next/image"

import BlogImage from "../../assets/blog-project.png"
import DemoIcon from "../../assets/demo.png"
import GithubIcon from "../../assets/social/github-black.svg"

const ProjectItem = () => {
    return (
        <div data-aos="fade-right"
            data-aos-anchor-placement="top" className={styles.project__item}>
            <div className={styles.project__item__image}>
                <Image src={BlogImage} layout="fill" alt="blog-image" />
            </div>
            <div className={styles.project__item__details}>
                <h1>Blog Project</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, necessitatibus?</p>
                <div>
                    <span>ReactJS</span>
                    <span>ReactJS</span>
                    <span>ReactJS</span>
                    <span>ReactJS</span>
                    <span>ReactJS</span>
                    <span>ReactJS</span>
                </div>
                <div className={styles.project__item__details__bottom}>
                    <a>
                        <Image src={DemoIcon} width={32} height={32} alt="demo" />
                    </a>
                    <a>
                        <Image src={GithubIcon} width={32} height={32} alt="github" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem