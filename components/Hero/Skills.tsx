import styles from "./Skills.module.css";
import Image from "next/image";

import { motion } from "framer-motion";
import { TechData } from "../../data";
import { TechDataType } from "../../types";

const Skills = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "-100%",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className={styles.skills}
    >
      <div className={styles.skills__wrapper}>
        {TechData.map((item: TechDataType) => (
          <div key={item.id} className={styles.skills__wrapper__item}>
            <Image src={item.image} width={80} height={80} alt="tech-icon" />
          </div>
        ))}
        {TechData.map((item: TechDataType) => (
          <div key={item.id} className={styles.skills__wrapper__item}>
            <Image src={item.image} width={80} height={80} alt="tech-icon" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
