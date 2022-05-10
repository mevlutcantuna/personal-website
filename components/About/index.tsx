import styles from "./About.module.css"
import Timeline from "./Timeline";
 
const About: React.FC = () => {
    return (
        <div id="about" className={styles.about}>
            <div data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
                className={styles.about__main} >
                <h1>About Me</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab et recusandae dolorem labore consequatur rerum modi omnis voluptatibus inventore saepe eligendi, voluptates voluptatum dolor officiis tempore aspernatur repellat tempora libero excepturi sequi? Dicta, quia provident a laboriosam suscipit, esse porro eum, deleniti et iste perferendis minima quas quidem! Nostrum, magnam?
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