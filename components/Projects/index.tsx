import ProjectItem from "./ProjectItem";
import styles from "./Projects.module.css"

const Projects: React.FC = () => {
    return <div id="projects" className={styles.projects}>
        <h1 className={styles.projects__title}>
            Projects
        </h1>
        <div className={styles.projects__items}>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
        </div>


    </div>
}

export default Projects; 