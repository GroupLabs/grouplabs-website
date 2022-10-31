import styles from './SolutionCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function SolutionCard({title, image, desc, buttonLabel, buttonLink, comingSoon}) {

  var showComingSoon = "none";

  if (comingSoon == "true"){
    showComingSoon = "block"
  }

  var color = "black"

  if (buttonLabel == "Learn more"){
    color = "#2C7235"
  }
  else if(buttonLabel == "Request a quote"){
    color = "#0e4726"
  }

  return (
    <div className={styles.sContainer}>
        <div className={styles.sImage}>
          <Image  width={350} height={350} src={image} alt={desc}/>
        </div>
        <div className={styles.sTextContainer}>
            <div className={styles.sTitle}>{title}</div>
            <div style={{display: `${showComingSoon}`}} className={styles.comingSoon}>Coming Soon</div>
            <div className={styles.sDesc}>{desc}</div>
            <Link href={buttonLink}>
              <div className={styles.sButton} style={{backgroundColor: `${color}`}}>
                {buttonLabel}
              </div>
            </Link>
        </div>
    </div>
  )
}