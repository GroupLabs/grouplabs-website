import * as React from "react"
import Link from "next/link"
import styles from "./MiniFooter.module.css"

export default function MiniFooter() {
  return (
    <div>
        <div className={styles.mfContainer}>
            <div className={styles.mfTextContainer}>
                GL
            </div>
        </div>
        <div className={styles.mfMessage}>
            Made with love.
        </div>
    </div>    
  )
}