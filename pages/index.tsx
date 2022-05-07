import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <Layout>
      <Cursor />
      {/* SideBar Component */}
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
