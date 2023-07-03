import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { socialLinksArr } from "@/data/socialLinksArr";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://webevery.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        made by Webevery
      </Link>
      <ul className={styles.socialLincs}>
        {socialLinksArr.map(({ id, src, href }) => {
          return (
            <li key={id} className={styles.socialLincItem}>
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <Image src={src} fill={true} />
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
