"use client";

import React from "react";
import styles from "./page.module.css";

const Button = ({ className }) => {
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={() => {
        console.log("logged out");
      }}
    >
      log out
    </button>
  );
};

export default Button;
