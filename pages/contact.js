import Head from 'next/head'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Image from 'next/image'
import SocialBanner from '../components/SocialBanner'
import Earth from '../public/Earth.png'

import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GroupLabs | Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="GroupLabs" />
        <meta property="og:type" content="contact page" />
        <meta property="og:description" content="This is a place for people to build together. 
        We believe that in a future full of new problem spaces with unprecedented complexity, it is essential that
        we remain cooperative and inclusive." />
        <meta property="og:image" content="https://grouplabs.ca/OGImage.jpg" />
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
                src={Earth}
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