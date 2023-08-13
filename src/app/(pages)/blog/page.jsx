import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  // console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <ul>
      {data.map(({ _id, title, description, img }) => {
        return (
          <li key={_id}>
            <Link href={`/blog/${_id}`} className={styles.container}>
              <div className={styles.imageContainer}>
                <Image
                  src={img}
                  alt="wow wow"
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.desc}>{description}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Blog;
