import React from "react";
import styles from "./page.module.css";

const layout = ({ children }) => {
  return (
    <>
      <h1 className={styles.mainTitle}>Our works</h1>
      {children}
    </>
  );
};

export default layout;
