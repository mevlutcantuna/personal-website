import styles from "./Main.module.css";
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollDown from "../../assets/scroll-down.svg"

const Main: React.FC = () => {
    const position = useTypewriter({
        words: ["Works ? Frontend Developer : Learner", "Web Developer", "Frontend Developer"],
        loop: 0,
        delaySpeed: 1000,
        typeSpeed: 130,
    });

    const title = useTypewriter({
        words: ["Mevlüt Can Tuna"],
        loop: 1,
        delaySpeed: 1000,
        typeSpeed: 130,
    });


    const clickScrollDown = () => {
        window.scrollTo(0, window.innerHeight)
    }

    const variants = {
        visible: {
            opacity: 1,
            y: 0,
        },
        hidden: (i: string) => ({
            opacity: 0,
            y: -100
        })
    }

    return (
        <div id="#" className={styles.main}>
            <div className={styles.main__texts}>
                <motion.h1 variants={variants} transition={{ duration: .5 }} initial='hidden' animate='visible' className={styles.main__texts__title}>{title.text}</motion.h1>
                <motion.div variants={variants} transition={{ duration: .5 }} initial='hidden' animate='visible' className={styles.main__texts_position}>
                    {position.text}
                </motion.div>
            </div>
            <motion.button onClick={clickScrollDown} animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1 }} className={styles.main__scroll__down}>
                <Image src={ScrollDown} alt="scroll" width={40} height={40} />
                <span>Scroll Down</span>
            </motion.button>
        </div>
    )
}

export default Main;