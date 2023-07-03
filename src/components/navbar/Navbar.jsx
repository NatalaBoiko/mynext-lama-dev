import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

import { lincsArr } from "@/data/linksArr";
import Button from "../button/button";
// console.log(lincsArr);

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="/">logo</Link>
      <ul className={styles.lincsArr}>
        {lincsArr.map(({ id, title, url }) => {
          return (
            <li key={id}>
              <Link href={url}>{title}</Link>
            </li>
          );
        })}
      </ul>

      <Button className={styles.navBtn} />
    </header>
  );
};

export default Navbar;
