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
          <div className={styles.scrollCompat} />
        <div className={styles.hTextContainer}>
            <h1 className={styles.hText}>Open collaboration on projects. Impact on local communities. Building the future together.</h1>
            <Link href="https://discord.gg/AvktyUz3v6">
                <div className={styles.hButton}>Join</div>
            </Link>
        </div>

        <div id="animContainer" className={styles.hAnimContainer} />

        <style>{`
          .scrollCompat{
            position:relative;
            z-index:98;
            width:100%;
            height:100%;
            background-color:red;
          }
          `}
        </style>
    </div>

    
  )
}