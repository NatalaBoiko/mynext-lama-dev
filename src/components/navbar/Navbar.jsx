"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

import { lincsArr } from "@/data/linksArr";
import Button from "../button/button";
import DarkModeToddle from "../DarkModeToddle/DarkModeToddle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

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

      <Button
        href="/dashboard/register"
        className={styles.navBtn}
        title="log out"
        onClick={signOut}
      />
    </header>
  );
};

export default Navbar;
