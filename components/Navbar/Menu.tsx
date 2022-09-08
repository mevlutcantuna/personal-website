import styles from "./Menu.module.css";

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__links}>
        <a className={`${styles.menu__links__item} hover-this`} href="#">
          Home
        </a>
        <a className={`${styles.menu__links__item}`} href="#about">
          About
        </a>
        <a className={`${styles.menu__links__item}`} href="#projects">
          Projects
        </a>
        <a className={`${styles.menu__links__item}`} href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
