"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // console.log(email, password);

    signIn("credentials", { email, password });
  };

  return (
    <>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />

        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />

        <button type="submit" className={styles.btn}>
          Log in
        </button>
      </form>
      <button onClick={() => signIn("google")} className={styles.btn}>
        Log in with Google
      </button>
      {/* <Button
        href="/dashboard/register"
        className={styles.navBtn}
        title="log out"
        onClick={() => signOut("google")}
      /> */}
    </>
  );
};

export default Login;
