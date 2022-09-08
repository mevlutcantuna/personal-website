import React from 'react';
import ProjectItem from './ProjectItem';
import styles from './Projects.module.css';
import { GithubRepos } from '../../data';
import { GithubReposType } from '../../types';

const Projects: React.FC = () => {
    return (
        <div id="projects" className={styles.projects}>
            <h1 className={styles.projects__title}>Projects</h1>
            <div className={styles.projects__items}>
                {GithubRepos.map((item: GithubReposType) => (
                    <ProjectItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
