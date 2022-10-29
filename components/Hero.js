import * as React from "react"
import Link from "next/link"
import styles from "./Hero.module.css"
import Image from "next/image"
import HeroImage from "../public/Hero.jpg"

export default function Hero() {
  return (


    <div className={styles.hContainer}>

        <div className={styles.hTextContainer} style={{zIndex: "1"}}>
            <h1 className={styles.hText}>Community-driven impact through open protocols.</h1>
            <br/> 
            <h2 className={styles.h2Text}>
            This is a space for people to build together. As we navigate a future with novel problem spaces, it is essential for people to be develop cooperatively. 
            Our platform enables secure integration, mesh computing, and community uIEVuiIUHVUOEVI
            </h2>
            <Link href="https://discord.gg/AvktyUz3v6">
                <div className={styles.hButton}>Join</div>
            </Link>
        </div>
        <div style={{zIndex: "-1"}}>
          <Image style={{filter: "brightness(0.4)"}} src={HeroImage} height={6000} width={4000} priority placeholder="blur"/>
        </div>
        <Link href="https://discord.gg/AvktyUz3v6">
            <div className={styles.mobileJoin}>Join {`>>`}</div>
        </Link>
    </div>

    
  )
}