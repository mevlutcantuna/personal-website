import styles from "./DrawerMenu.module.css";
import Menu from "./Menu";

import { motion } from "framer-motion";

type PropsType = {
  isDrawerOpen: boolean;
};

const DrawerMenu: React.FC<PropsType> = ({ isDrawerOpen }) => {

  const variants = {
    hidden: {
      opacity: 0,
      right: "100%",
      x: 375
    },
    show: {
      opacity: 1,
      right: 0,
      x: 0
    }
  }

  return (
    <motion.div variants={variants} transition={{ type: 'spring', duration: .5 }} initial="hidden" animate={isDrawerOpen ? "show" : "hidden"} className={styles.drawer__menu}>
      <Menu />
    </motion.div>
  );
};

export default DrawerMenu;
