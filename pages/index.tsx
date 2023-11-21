import { useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import SideBar from "../components/SideBar";

import AOS from "aos";
import "aos/dist/aos.css";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      <Head>
        <title></title>
      </Head>
      <div>Updating</div>
      {/*
      <SideBar />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      */}
    </Layout>
  );
};

export default Home;
