import styles from "./Skills.module.css"
import Image from "next/image"

import CSS3 from "../../assets/tech-icons/css3.svg"
import HTML5 from "../../assets/tech-icons/html5.svg"
import JS from "../../assets/tech-icons/javascript.svg"
import MongoDB from "../../assets/tech-icons/mongodb.svg"
import NextJS from "../../assets/tech-icons/nextjs.svg"
import NodeJS from "../../assets/tech-icons/nodejs.svg"
import ReactIcon from "../../assets/tech-icons/react.svg"
import Redux from "../../assets/tech-icons/redux.svg"
import TypeScript from "../../assets/tech-icons/typescript.svg"
import Express from "../../assets/tech-icons/expressjs.svg"

import { motion } from "framer-motion"
import { TechData } from "../../data"
import { TechDataType } from "../../types"

const Skills = () => {

    const variants = {
        hidden: {
            opacity: 0,
            y: '-100%'
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <motion.div variants={variants} initial='hidden' animate='visible' transition={{ duration: .5 }} className={styles.skills}>
            <div className={styles.skills__wrapper}>
                {TechData.map((item: TechDataType) =>
                    <div key={item.id} className={styles.skills__wrapper__item}>
                        <Image src={item.image} width={80} height={80} alt="tech-icon" />
                    </div>
                )}
                {TechData.map((item: TechDataType) =>
                    <div key={item.id} className={styles.skills__wrapper__item}>
                        <Image src={item.image} width={80} height={80} alt="tech-icon" />
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default Skills;