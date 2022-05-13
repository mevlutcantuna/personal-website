import styles from "./Skills.module.css"
import Image from "next/image"

import CSS3 from "../../assets/tech-icons/css3.svg"

const Skills = () => {
    return <div className={styles.skills}>
        <span>
            <Image src={CSS3} width={60} height={60} alt="tech-icon" />
        </span>
    </div>
}

export default Skills;