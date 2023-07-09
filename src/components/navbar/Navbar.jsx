import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

import { lincsArr } from "@/data/linksArr";
import Button from "../button/button";
import DarkModeToddle from "../DarkModeToddle/DarkModeToddle";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="/">logo</Link>
      <DarkModeToddle />
      <ul className={styles.lincsArr}>
        {lincsArr.map(({ id, title, url }) => {
          return (
            <li key={id}>
              <Link href={url}>{title}</Link>
            </li>
          );
        })}
      </ul>

      <Button href="/" className={styles.navBtn} title="log out" />
      {/* <button className={styles.navBtn}>Logout</button> */}
    </header>
  );
};

export default Navbar;
