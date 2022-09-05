import * as React from "react"
import Link from "next/link"
import styles from "./AnimButton.module.css"

export default function AnimButton(props) {
  return (
    <div className={styles.moduleborderwrap}>
        <Link 
            aria-label={'Join'}
            href={props.link}>
                <div className={styles.module}>{props.label}</div>
        </Link>
    </div>

    
  )
}