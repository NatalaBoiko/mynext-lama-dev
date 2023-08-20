"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const session = useSession();
  // console.log(session);

  const router = useRouter();

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts",
  //   fetcher
  // );
  // console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return (
      <>
        <h1 className={styles.main}>Dashboard</h1>
      </>
    );
  }

  return (
    <>
      <h1 className={styles.main}>Dashboard</h1>
    </>
  );
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
