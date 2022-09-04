import * as React from "react"
import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div>
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
                     <Link href='/blog'>Blog</Link>
                    </div>
                    <div className={styles.fMapElement}>
                     <Link href='/'>Partners</Link>
                    </div>
                    <div className={styles.fMapElement}>
                     <Link href='/'>Join</Link>
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