"use client";

import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Button = ({ className, title, href }) => {
  return (
    <Link href={href}>
      <button
        className={`${styles.button} ${className}`}
        onClick={() => {
          console.log("logged out");
        }}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
