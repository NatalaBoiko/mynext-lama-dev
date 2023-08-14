import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { portfolioData } from "@/data/portfolioData";
import { notFound } from "next/navigation";

// console.log(portfolioData);

const getData = (cat) => {
  const data = portfolioData[cat];

  if (!data) {
    return notFound();
  } else {
    return data;
  }
};

export async function generateMetadata({ params }) {
  // console.log(params);
  const data = await getData(params.category);
  const descr = data
    .map((item) => {
      // console.log(item.title);
      return [item.title];
    })
    .join(". ");

  return {
    title: params.category,
    description: descr,
  };
}

const Category = ({ params }) => {
  const data = getData(params.category);
  // console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>
      <ul>
        {data.map(({ id, title, desc, image }) => {
          return (
            <li key={id} className={styles.item}>
              <div className={styles.content}>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
              <div className={styles.imgContainer}>
                <Image
                  src={image}
                  alt={title}
                  fill={true}
                  className={styles.image}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
