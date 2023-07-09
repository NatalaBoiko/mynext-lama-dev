"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import styles from "./DarkModeToddle.module.css";

const DarkModeToddle = () => {
  //   const mode = "dark";
  const { toggleMode, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>&#127769;</div>
      <div className={styles.icon}>&#127774;</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToddle;
