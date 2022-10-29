import * as React from "react"
import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.head}></div>
        <div className={styles.anim_container}>
            <div className={styles.background}>
                <div className={`${styles.rect_1} ${styles.rotating_1}`}></div>
                <div className={`${styles.rect_2} ${styles.rotating_2}`}></div>
                <div className={`${styles.rect_3} ${styles.rotating_3}`}></div>
            </div>
            <div className={styles.fContainer}>
                <div className={styles.fTextContainer}>
                    GL
                </div>
                <div className={styles.fMapContainer}>
                    <div className={styles.fMapElement}>
                     <Link href='/about'>About</Link>
                    </div>
                    <div className={styles.fMapElement}>
                     <Link href='/solutions'>Solutions</Link>
                    </div>
                    <div className={styles.fMapElement}>
                     <Link href='/blog'>Blog</Link>
                    </div>
                    <div className={styles.fMapElement} style={{cursor: "not-allowed", opacity: "0.5"}}>
                     <h1>Partners</h1>
                    </div>
                    <div className={styles.fMapElement}>
                     <Link href='/contact'>Contact</Link>
                    </div>
                    <br />
                    <div className={styles.fMapElement2}>
                     <Link href='https://discord.gg/AvktyUz3v6'>Discord</Link>
                    </div>
                    <div className={styles.fMapElement2}>
                     <Link href='https://discord.gg/sf'>GitHub</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.fMessage}>
            Made with love.
        </div>
    </div>    
  )
}