import React, { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";
import { ProfileInfo } from "../../data";

import emailjs from "@emailjs/browser";
import { message } from "antd";

const Contact: React.FC = () => {
  const form = useRef<any>();
  const [formValues, setFormValues] = useState({
    full_name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState<boolean>(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formValues.full_name.trim() === "" ||
      formValues.email.trim() === "" ||
      formValues.message.trim() === ""
    ) {
      return message.error("please provide all inputs..");
    }

    setSending(true);
    //@ts-ignore
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setFormValues({
            ...formValues,
            full_name: "",
            email: "",
            message: "",
          });
          setSending(false);
          return message.success(
            "your message sended.i'll get back to you as sonn as possible..."
          );
        },
        (error) => {
          setSending(false);
          alert(error.text);
        }
      );
  };

  useEffect(() => {
    if (sending) return message.loading("Message is sending...");
  }, [sending]);

  return (
    <div id="contact" className={styles.contact}>
      <h1 className={styles.contact__title}>Contact</h1>
      <div className={styles.contant__container}>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          className={styles.contact__infos}
        >
          <div className={styles.contact__infos__item}>
            <span>Email:</span>
            <span>{ProfileInfo.email}</span>
          </div>
          <div className={styles.contact__infos__item}>
            <span>Phone Number:</span>
            <span>{ProfileInfo.phone_number}</span>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          className={styles.contact__form}
        >
          <form ref={form} onSubmit={sendMessage}>
            <input
              value={formValues.full_name}
              onChange={handleFormChange}
              type="text"
              placeholder="Full Name"
              name="full_name"
            />
            <input
              value={formValues.email}
              onChange={handleFormChange}
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              value={formValues.message}
              onChange={handleFormChange}
              placeholder="Your Message"
              name="message"
            />
            <button disabled={sending} type="submit" value="Send">
              {"Let's Talk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
