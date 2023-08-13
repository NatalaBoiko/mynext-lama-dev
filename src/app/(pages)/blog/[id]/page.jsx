import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  // console.log(res.json());

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  console.log(params);
  const { username, title, content, img } = await getData(params.id);
  console.log(username);

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
