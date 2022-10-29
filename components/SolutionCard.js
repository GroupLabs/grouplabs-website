import styles from './SolutionCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function SolutionCard({title, image, desc, buttonLabel, buttonLink}) {

  var color = "black"

  if (buttonLabel == "Learn more"){
    color = "#2C7235"
  }
  else if(buttonLabel == "Request a quote"){
    color = "#B87106"
  }

  return (
    <div className={styles.sContainer}>
        <div className={styles.sImage}>
          <Image  width={320} height={300} src={image} alt={desc}/>
        </div>
        <div className={styles.sTextContainer}>
            <div className={styles.sTitle}>{title}</div>
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