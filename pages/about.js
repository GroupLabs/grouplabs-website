import Head from 'next/head'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <About />
      <Footer />
    </div>
  )
}
