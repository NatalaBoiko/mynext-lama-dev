"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/button/button";

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  console.log(session?.data?.user);

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submited");

    const title = e.target[0].value;
    const description = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return (
      <>
        <div className={styles.container}>
          <ul className={styles.posts}>
            {isLoading
              ? "loading"
              : data?.map(({ _id, title, description, img, content }) => (
                  <li key={_id} className={styles.post}>
                    <div className={styles.imgContainer}>
                      <Image
                        src={img}
                        alt={title}
                        fill={true}
                        className={styles.img}
                      />
                    </div>
                    <h2 className={styles.postTitle}>{title}</h2>
                    <span
                      className={styles.delete}
                      onClick={() => handleDelete(_id)}
                    >
                      x
                    </span>
                  </li>
                ))}
          </ul>

          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Add new post</h1>
            <input type="text" placeholder="Title" className={styles.input} />
            <input type="text" placeholder="Desc" className={styles.input} />
            <input type="text" placeholder="Image" className={styles.input} />

            <textarea
              placeholder="Content"
              className={styles.input}
              cols="30"
              rows="10"
            ></textarea>
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </>
    );
  }
};

export default Dashboard;

//=== better use swr hook ===
//in 'use client' component....

// import useSWR from "swr";

//const Dashboard = () => {
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const { data, error, isLoading } = useSWR(
//   "https://jsonplaceholder.typicode.com/posts",
//   fetcher
// );
// console.log(data);
// return (
//   <>
//     <h1 className={styles.main}>Dashboard</h1>
//   </>
// );
// };

//===..... insted of useEffect

// const [data, setData] = useState([]);
// const [err, setErr] = useState(false);
// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   const getData = async () => {
//     setIsLoading(true);
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       setErr(true);
//     }
//     const data = await res.json();

//     setData(data);
//     setIsLoading(false);
//   };
//   getData();
// }, []);
