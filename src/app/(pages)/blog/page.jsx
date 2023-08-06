import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <ul>
      {data.map(({ body, id, title, userId }) => {
        return (
          <li key={id}>
            <Link href={`/blog/${userId}`} className={styles.container}>
              <div className={styles.imageContainer}>
                <Image
                  src="https://images.pexels.com/photos/1317559/pexels-photo-1317559.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="wow"
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.desc}>{body}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Blog;
