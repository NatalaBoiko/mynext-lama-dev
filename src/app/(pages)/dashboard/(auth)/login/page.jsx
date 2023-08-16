"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const session = useSession();

  console.log(session);

  return (
    <>
      <h1 className={styles.main}>Login</h1>
      <br />
      <button onClick={() => signIn("google")}>Log in with Google</button>
      <br />
      <button onClick={() => signOut("google")}>Log out </button>
    </>
  );
};

export default Login;
