import styles from "./Menu.module.css"

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__links}>
                <a className={`${styles.menu__links__item} ${styles.hover__item}`} href="#">Home</a>
                <a className={`${styles.menu__links__item} ${styles.hover__item}`} href="#about">About</a>
                <a className={`${styles.menu__links__item} ${styles.hover__item}`} href="#projects">Projects</a>
                <a className={`${styles.menu__links__item} ${styles.hover__item}`} href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Menu;