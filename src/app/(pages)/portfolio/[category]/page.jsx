import Button from "@/components/button/button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2>test</h2>
          <p>descr</p>
          <Button href="/" title="See more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt="qwe"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2>test</h2>
          <p>descr</p>
          <Button href="/" title="See more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt="qwe"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
