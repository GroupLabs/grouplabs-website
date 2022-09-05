import Head from 'next/head'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GroupLabs | About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="GroupLabs | About" />
        <meta property="og:type" content="about page" />
        <meta property="og:description" content="Open collaboration on projects. Impact on local communities. Building the future together." />
        <meta property="og:image" content="https://grouplabs.ca/GL.png" />
        <meta property="og:url" content="https://www.grouplabs.ca" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar/>
      <About />
      <Footer />
    </div>
  )
}
