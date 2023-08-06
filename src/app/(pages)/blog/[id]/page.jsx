import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const { userId, title, body } = await getData(params.id);

  return (
    <>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{body}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/101667/pexels-photo-101667.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="hourse"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{userId}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/101667/pexels-photo-101667.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="hourse"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{body}</p>
      </div>
    </>
  );
};

export default BlogPost;
