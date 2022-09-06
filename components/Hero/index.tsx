import styles from "./Hero.module.css";
import Image from "next/image";
import ScrollDown from "../../assets/icons/scroll-down.svg"

import { useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import Skills from "./Skills";
import { ProfileInfo } from "../../data";

import { useEffect, useRef, useState } from "react";
// @ts-ignore
import GLOBE from "vanta/dist/vanta.globe.min";
// @ts-ignore
import * as THREE from 'three'

const Main: React.FC = () => {

    const [vantaEffect, setVantaEffect] = useState<any>(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                GLOBE({
                    el: vantaRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x76a0a7,
                    color2: 0x9b9898,
                    backgroundColor: 0x0
                })
            );
        }
        return () => {
            if (vantaEffect) return vantaEffect?.destory();
        };
    }, [vantaEffect]);



    const position = useTypewriter({
        words: [...ProfileInfo.titles],
        loop: 0,
        delaySpeed: 1000,
        typeSpeed: 130,
    });

    const title = useTypewriter({
        words: [ProfileInfo.name],
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
        <div ref={vantaRef} id="#" className={styles.main}>
            <div className={styles.main__texts}>
                <motion.h1 variants={variants} transition={{ duration: .5 }} initial='hidden' animate='visible' className={styles.main__texts__title}>{title.text}</motion.h1>
                <motion.div variants={variants} transition={{ duration: .5 }} initial='hidden' animate='visible' className={styles.main__texts_position}>
                    {position.text}
                </motion.div>
            </div>
            <div>
                <Skills />
            </div>
            <motion.button onClick={clickScrollDown} animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1 }} className={styles.main__scroll__down}>
                <Image src={ScrollDown} alt="scroll" width={40} height={40} />
                <span>Scroll Down</span>
            </motion.button>
        </div>
    )
}

export default Main;