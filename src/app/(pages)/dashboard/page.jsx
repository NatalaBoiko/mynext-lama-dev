"use client";

import React from "react";
import styles from "./page.module.css";

import { useSession } from "next-auth/react";

const Dashboard = () => {
  // const session = useSession();
  // console.log(session);

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

//===..... instedd of useEffect

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
