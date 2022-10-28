import * as React from "react"
import Link from "next/link"
import styles from "./Hero.module.css"
import startAnim from "../components/AnimStencil.js"
import { useEffect } from "react"

export default function Hero() {
  
  useEffect(() => {
    startAnim()
  },[]);


  return (


    <div className={styles.hContainer}>
        <div className={styles.hTextContainer}>
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

        <div id="animContainer" className={styles.hAnimContainer} />
    </div>

    
  )
}