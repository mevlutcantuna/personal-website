import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import SideBar from '../components/SideBar'

import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Home: NextPage = () => {

  useEffect(() => {
    AOS.init({duration:1000});
  }, []);

  return (
    <Layout>
      <SideBar />
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Layout>

  )
}

export default Home
