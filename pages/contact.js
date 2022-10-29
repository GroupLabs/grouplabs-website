import Head from 'next/head'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/Whatwedo'
import Footer from '../components/Footer'
import Image from 'next/image'
import SocialBanner from '../components/SocialBanner'

import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GroupLabs | Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="GroupLabs" />
        <meta property="og:type" content="contact page" />
        <meta property="og:description" content="Open collaboration on projects. Impact on local communities. Building the future together." />
        <meta property="og:image" content="https://grouplabs.ca/GL.png" />
        <meta property="og:url" content="https://www.grouplabs.ca" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar/>
      <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center", width: "100%", height: "calc(100vh - 80px)", margin: "auto", padding: "32px"}}>
        <div style={{minWidth: "400px", width: "30%", maxWidth: "450px"}}>
            <ContactForm />
        </div>
        <div style={{minWidth: "400px", width: "60%", maxWidth: "600px", zIndex: "-1"}}>
            <Image
                alt="Earth"
                src="/Earth.png"
                width={2360}
                height={1640}
            />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <SocialBanner />
      <Footer />
    </div>
  )
}