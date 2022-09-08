import styles from "./Footer.module.css";
import { ProfileInfo } from "../../data";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <span data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        created by {ProfileInfo.name}
      </span>
    </div>
  );
};

export default Footer;
