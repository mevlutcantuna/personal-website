import { useEffect, useState } from "react";
import Menu from "./Menu";
import styles from "./Navbar.module.css"
import MenuIcon from "../../assets/menu.svg"
import CloseIcon from "../../assets/close.svg"

import Image from "next/image"
import DrawerMenu from "./DrawerMenu";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
    const [bgChange, setBgChange] = useState<boolean>(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

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
    })

    return (
        <motion.div animate={{ y: "0%", opacity: 1 }} initial={{ y: "-100%" }} transition={{ duration: .2 }} className={`${styles.navbar} ${bgChange && styles.navbar__scrolled}`}>
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
            <div className={styles.navbar__drawer__menu}>
                <DrawerMenu isDrawerOpen={isDrawerOpen} />
            </div>
        </motion.div>
    )
}

export default Navbar;