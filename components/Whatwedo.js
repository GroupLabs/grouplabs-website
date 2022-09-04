import * as React from "react"
import Link from "next/link"
import styles from "./Whatwedo.module.css"

export default function WhatWeDo() {
  return (
    <div className={styles.wContainer}>
        <div className={styles.wHeader}>What we do</div>
        <div className={styles.wElement}>
            <div className={styles.wElementImage}></div>
            <div className={styles.wElementTextContainer}>
                <div className={styles.wElementText}>Peer-to-peer Networking</div>
                <div className={styles.wElementSubText}>Find like minded individuals in the local community. Collaborate and build something special.</div>
            </div>
        </div>
        <div className={styles.wElement}>
            <div className={styles.wElementImage}></div>
            <div className={styles.wElementTextContainer}>
                <div className={styles.wElementText}>Exposure</div>
                <div className={styles.wElementSubText}>Find like minded individuals in your community</div>
            </div>
        </div>
        <div className={styles.wElement}>
            <div className={styles.wElementImage}></div>
            <div className={styles.wElementTextContainer}>
                <div className={styles.wElementText}>Seamless Onboarding</div>
                <div className={styles.wElementSubText}>Find like minded individuals in your community</div>
            </div>
        </div>
    </div>

    
  )
}