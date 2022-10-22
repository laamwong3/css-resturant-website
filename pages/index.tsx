import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutUs from "../components/AboutUs/AboutUs";
import Chef from "../components/Chef/Chef";
import FindUs from "../components/FindUs/FindUs";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Laurels from "../components/Laurels/Laurels";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Restuarant</title>
        <meta name="description" content="resturant website" />
      </Head>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Introduction />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
};

export default Home;
