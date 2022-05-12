import { useEffect, useState, useRef } from "react";
import Menu from "./Menu";
import styles from "./Navbar.module.css"
import MenuIcon from "../../assets/icons/menu.svg"
import CloseIcon from "../../assets/icons/close.svg"

import Image from "next/image"
import DrawerMenu from "./DrawerMenu";
import { motion } from "framer-motion";

import { useOnClickOutside } from "use-hooks";


const Navbar: React.FC = () => {
    const [bgChange, setBgChange] = useState<boolean>(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

    const ref = useRef<any>();

    //@ts-ignore
    useOnClickOutside(ref, () => setIsDrawerOpen(false));

    const handleDrawerChange = (value: boolean) => {
        setIsDrawerOpen(value)
    }

    const changeBackgroundColor = () => {
        if (window.scrollY > 64) {
            setBgChange(true)
        } else setBgChange(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackgroundColor)
        if (window.scrollY > 64) {
            setBgChange(true)
        } else setBgChange(false)
    }, [])


    

    return (
        <motion.div ref={ref} animate={{ y: "0%", opacity: 1 }} initial={{ y: "-100%" }} transition={{ duration: .2 }} className={`${styles.navbar} ${bgChange && styles.navbar__scrolled}`}>
            <div className={styles.navbar__logo}>MCT</div>
            <div className={styles.navbar__menu__links}>
                <Menu />
            </div>
            <div className={styles.navbar__icons}>
                {!isDrawerOpen ?
                    <Image onClick={() => handleDrawerChange(true)} src={MenuIcon} width={40} height={40} alt="menuicon" />
                    :
                    <Image onClick={() => handleDrawerChange(false)} src={CloseIcon} width={40} height={40} alt="closeicon" />
                }
            </div>
            <div className={isDrawerOpen ? styles.navbar__drawer__menu : styles.navbar__drawer__menu__hidden}>
                <DrawerMenu isDrawerOpen={isDrawerOpen} />
            </div>
        </motion.div>
    ) 
}

export default Navbar;