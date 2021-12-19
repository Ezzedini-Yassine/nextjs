import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem
        optio cum maiores asperiores. Harum commodi voluptas magni non neque ab
        placeat tenetur nam reiciendis. Similique dolorem unde neque doloribus?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        libero eius natus id iure dignissimos tempora laboriosam pariatur
        consectetur, similique eligendi nisi explicabo quos ab architecto
        consequatur a doloremque dolorum!
      </p>
      <Footer />
    </div>
  );
}
