import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
        optio cum maiores asperiores. Harum commodi voluptas magni non neque ab
        placeat tenetur nam reiciendis. Similique dolorem unde neque doloribus?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        libero eius natus id iure dignissimos tempora laboriosam pariatur
        consectetur, similique eligendi nisi explicabo quos ab architecto
        consequatur a doloremque dolorum!
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}> See Ninja Listing</a>
      </Link>
    </div>
  );
}
