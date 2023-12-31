import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`${process.env.DB_URL}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const { title, content } = await getData(params.id);

  return {
    title: title,
    description: content,
  };
}

const BlogPost = async ({ params }) => {
  // console.log(params);

  const { username, title, content, img } = await getData(params.id);

  return (
    <>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{content}</p>
          <div className={styles.author}>
            <Image
              src={img}
              alt={username}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={img} alt={title} fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{content}</p>
      </div>
    </>
  );
};

export default BlogPost;
