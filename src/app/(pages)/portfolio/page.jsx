import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { portfolioLinks } from "@/data/portfolioLinks";
import Image from "next/image";

const Portfolio = () => {
  return (
    <>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>

      <ul className={styles.items}>
        {portfolioLinks.map(({ id, title, href, imgSrc }) => {
          return (
            <li key={id} className={styles.item}>
              <Link href={href}>
                <span className={styles.title}>{title}</span>
                <Image
                  src={imgSrc}
                  alt={title}
                  fill={true}
                  className={styles.image}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Portfolio;
