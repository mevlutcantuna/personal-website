import styles from "./project-item.module.css"
import Image from "next/image"

import BlogImage from "../../assets/blog-project.png"

const ProjectItem = () => {
    return <div className={styles.project__item}>
        <div className={styles.project__item__image}>
            <Image src={BlogImage} width={320} height={210} alt="imga" />
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
        </div>
    </div>
}

export default ProjectItem