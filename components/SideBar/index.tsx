import React from "react";
import styles from "./SideBar.module.css";
import Image from "next/image";

import GithubIcon from "../../assets/social/github-white.svg";
import LinkedinIcon from "../../assets/social/linkedin.svg";
import TwitterIcon from "../../assets/social/twitter.svg";
import InstagramIcon from "../../assets/social/instagram.svg";

import { motion } from "framer-motion";
import { ProfileInfo } from "../../data";

const SideBar: React.FC = () => {
  const variants = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className={styles.sidebar}
    >
      <a
        className={styles.sidebar__item}
        href={ProfileInfo.github}
        target="_blank"
        rel="noreferrer"
      >
        <Image src={GithubIcon} width={48} height={48} alt="github" />
      </a>
      <a
        className={styles.sidebar__item}
        href={ProfileInfo.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <Image src={LinkedinIcon} width={48} height={48} alt="linkedin" />
      </a>
      <a
        className={styles.sidebar__item}
        href={ProfileInfo.twitter}
        target="_blank"
        rel="noreferrer"
      >
        <Image src={TwitterIcon} width={48} height={48} alt="twitter" />
      </a>
      <a
        className={styles.sidebar__item}
        href={ProfileInfo.instagram}
        target="_blank"
        rel="noreferrer"
      >
        <Image src={InstagramIcon} width={48} height={48} alt="instagram" />
      </a>
    </motion.div>
  );
};

export default SideBar;
