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
            <h1 className={styles.hText}>Open collaboration on projects. Impact on local communities. Talk more Hereerer</h1>
            <Link href="/join">
                <div className={styles.hButton}>Join</div>
            </Link>
        </div>
        <div id="animContainer" className={styles.hAnimContainer}></div>
    </div>

    
  )
}