import * as React from "react"
import styles from "./Blob.module.css"

export default function Blob({children}) {
  return (
    <div className={styles.outer}>
        <div className={styles.inner}>
            {children}
        </div>
    </div>    
  )
}