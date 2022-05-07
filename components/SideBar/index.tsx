import styles from './SideBar.module.css'
import Image from 'next/image';

import GithubIcon from "../../assets/github.svg"
import LinkedinIcon from "../../assets/linkedin.svg"
import TwitterIcon from "../../assets/twitter.svg"
import InstagramIcon from "../../assets/instagram.svg"


const SideBar: React.FC = () => {
    return <div className={styles.sidebar}>
        <a className={styles.sidebar__item} href='https://github.com/mevlutcantuna' target="_blank" rel="noreferrer">
            <Image src={GithubIcon} width={48} height={48} alt='github' />
        </a>
        <a className={styles.sidebar__item} href='https://www.linkedin.com/in/mevlutcantuna/' target="_blank" rel="noreferrer">
            <Image src={LinkedinIcon} width={48} height={48} alt='linkedin' />
        </a>
        <a className={styles.sidebar__item} href='https://twitter.com/mevlt_tuna' target="_blank" rel="noreferrer">
            <Image src={TwitterIcon} width={48} height={48} alt='twitter' />
        </a>
        <a className={styles.sidebar__item} href='https://www.instagram.com/mevlutcantuna1/' target="_blank" rel="noreferrer">
            <Image src={InstagramIcon} width={48} height={48} alt='instagram' />
        </a>

    </div>
}

export default SideBar;