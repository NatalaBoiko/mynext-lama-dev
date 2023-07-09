import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Blog = () => {
  return (
    <>
      <Link href="/blog/testId1" className={styles.container}>
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
          <h2 className={styles.title}>Test</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            libero modi autem beatae animi impedit soluta hic vel corporis natus
            illo nostrum incidunt quis iste, ut nam cumque quasi expedita. Ipsam
            tenetur optio soluta quisquam, autem vel voluptatibus perspiciatis
            iusto voluptas eos id numquam repellat doloremque! Est tempore
            accusantium commodi?
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
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
          <h2 className={styles.title}>Test</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            libero modi autem beatae animi impedit soluta hic vel corporis natus
            illo nostrum incidunt quis iste, ut nam cumque quasi expedita. Ipsam
            tenetur optio soluta quisquam, autem vel voluptatibus perspiciatis
            iusto voluptas eos id numquam repellat doloremque! Est tempore
            accusantium commodi?
          </p>
        </div>
      </Link>{" "}
      <Link href="/blog/testId" className={styles.container}>
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
          <h2 className={styles.title}>Test</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            libero modi autem beatae animi impedit soluta hic vel corporis natus
            illo nostrum incidunt quis iste, ut nam cumque quasi expedita. Ipsam
            tenetur optio soluta quisquam, autem vel voluptatibus perspiciatis
            iusto voluptas eos id numquam repellat doloremque! Est tempore
            accusantium commodi?
          </p>
        </div>
      </Link>{" "}
      <Link href="/blog/testId" className={styles.container}>
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
          <h2 className={styles.title}>Test</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            libero modi autem beatae animi impedit soluta hic vel corporis natus
            illo nostrum incidunt quis iste, ut nam cumque quasi expedita. Ipsam
            tenetur optio soluta quisquam, autem vel voluptatibus perspiciatis
            iusto voluptas eos id numquam repellat doloremque! Est tempore
            accusantium commodi?
          </p>
        </div>
      </Link>
    </>
  );
};

export default Blog;
