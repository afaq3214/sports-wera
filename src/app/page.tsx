import Image from "next/image";
import Head from 'next/head';
import styles from "../page.module.css";
import '../page.module.css'
import '../globals.css';
import HomePage from "./Home/page";
export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <></>
      </Head>
      <HomePage />
    </main>
  );
}
