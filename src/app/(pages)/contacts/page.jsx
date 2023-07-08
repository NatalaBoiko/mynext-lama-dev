import Button from "@/components/button/button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import contactImg from "../../../../public/contact.png";

const Contacts = () => {
  return (
    <>
      <h1 className={styles.title}>Let's Keep in Touch &apos; &lsquo; &#39;</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={contactImg}
            alt="contacts image"
            fill={true}
            className={styles.image}
          />
        </div>
        {/* <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <Button href="#" title="Send" />
        </form> */}
      </div>
    </>
  );
};

export default Contacts;
