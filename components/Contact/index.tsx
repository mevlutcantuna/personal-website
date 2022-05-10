import React from "react"
import styles from "./Contact.module.css"

const Contact: React.FC = () => {

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }


    return <div id="contact" className={styles.contact}>
        <h1 className={styles.contact__title}>Contact</h1>
        <div className={styles.contant__container}>
            <div data-aos="fade-down"
                data-aos-anchor-placement="top-bottom" className={styles.contact__infos}>
                <div className={styles.contact__infos__item}>
                    <span>Email:</span>
                    <span>mttuna90@gmail.com</span>
                </div>
                <div className={styles.contact__infos__item}>
                    <span>Phone Number:</span>
                    <span>+90 553 044 78 52</span>
                </div>
            </div>
            <div data-aos="fade-down"
                data-aos-anchor-placement="top-bottom" className={styles.contact__form}>
                <form onSubmit={sendMessage}>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Your Message" />
                    <button>{"Let's Talk"}</button>
                </form>
            </div>
        </div>
    </div>
}

export default Contact; 