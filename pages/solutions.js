import Head from 'next/head'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/Whatwedo'
import Footer from '../components/Footer'
import SocialBanner from '../components/SocialBanner'
import Solutions from '../components/Solutions'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GroupLabs | Solutions</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="GroupLabs" />
        <meta property="og:type" content="solutions page" />
        <meta property="og:description" content="Open collaboration on projects. Impact on local communities. Building the future together." />
        <meta property="og:image" content="https://grouplabs.ca/GL.png" />
        <meta property="og:url" content="https://www.grouplabs.ca" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar/>
      <Solutions/>
      <SocialBanner />
      <Footer />
    </div>
  )
}
