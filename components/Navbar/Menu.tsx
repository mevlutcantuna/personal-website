import styles from "./Menu.module.css"

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__links}>
                <a className={`${styles.menu__links__item}`} href="#"><span className="hover-this">Home</span></a>
                <a className={`${styles.menu__links__item}`} href="#about"><span className="hover-this">About</span> </a>
                <a className={`${styles.menu__links__item}`} href="#projects"><span className="hover-this">Projects</span></a>
                <a className={`${styles.menu__links__item}`} href="#contact"><span className="hover-this"> Contact</span></a>
            </div>
        </div>
    )
}

export default Menu;