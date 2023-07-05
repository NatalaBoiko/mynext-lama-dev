"use client";

import React from "react";
import styles from "./page.module.css";

const Button = ({ className, title }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={() => {
        console.log("logged out");
      }}
    >
      {title}
    </button>
  );
};

export default Button;
