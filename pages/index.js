import Head from 'next/head'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/Whatwedo'
import Footer from '../components/Footer'
import SocialBanner from '../components/SocialBanner'
import ClearNavbar from '../components/ClearNavBar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>GroupLabs | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="GroupLabs" />
        <meta property="og:type" content="home page" />
        <meta property="og:description" content="Open collaboration on projects. Impact on local communities. Building the future together." />
        <meta property="og:image" content="https://grouplabs.ca/hero.jpg" />
        <meta property="og:url" content="https://www.grouplabs.ca" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div style={{height: "100vh"}}>
        <div style={{zIndex:"10"}}>
          <ClearNavbar/>
        </div>
        <div style={{zIndex:"0", position: "absolute", top: "0"}}>
          <Hero/>
        </div>
      </div>


      <WhatWeDo />
      <Footer />
    </div>
  )
}
