import styles from "./About.module.css"
import Timeline from "./Timeline";
import { AboutText } from "../../data";

const About: React.FC = () => {
    return (
        <div id="about" className={styles.about}>
            <div data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
                className={styles.about__main} >
                <h1>About Me</h1>
                <p>
                    {AboutText.about}
                </p>
                <a>
                    Resume
                </a>
            </div>
            <div data-aos="fade-down"
                data-aos-anchor-placement="top-bottom">
                <Timeline />
            </div>
        </div>
    )
}

export default About;