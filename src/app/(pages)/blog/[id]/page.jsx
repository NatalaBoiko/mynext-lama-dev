import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const BlogPost = ({ testId1 }) => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            corporis, voluptates aut eveniet animi libero fugit vitae maiores
            veritatis dolor.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/101667/pexels-photo-101667.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="hourse"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            s
            src="https://images.pexels.com/photos/101667/pexels-photo-101667.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="hourse"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          nostrum eius quia molestiae quos reprehenderit. Voluptates provident
          ratione distinctio nemo asperiores? Error doloremque iure dolorum
          soluta, amet repellat harum explicabo quis voluptatem? Repudiandae
          enim sit debitis culpa id facere quis aliquam dicta tenetur reiciendis
          harum, nulla maiores omnis recusandae ipsa.
        </p>
      </div>
    </>
  );
};

export default BlogPost;
