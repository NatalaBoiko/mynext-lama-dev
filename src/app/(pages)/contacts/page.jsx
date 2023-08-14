import Button from "@/components/button/button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact page",
  description: "This is the contact page",
};

const Contacts = () => {
  return (
    <>
      <h1>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button href="/" title="Send" />
        </form>
      </div>
    </>
  );
};

export default Contacts;
