import ProjectItem from "./ProjectItem";
import styles from "./Projects.module.css"

const Projects: React.FC = () => {
    return <div id="projects" className={styles.projects}>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>

    </div>
}

export default Projects; 