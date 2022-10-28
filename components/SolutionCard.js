import styles from './SolutionCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function SolutionCard({title, image, desc}) {
  return (
    <div className={styles.sContainer}>
        <div className={styles.sImage}>
          <Image  width={320} height={300} src={image} alt={desc}/>
        </div>
        <div className={styles.sTextContainer}>
            <div className={styles.sTitle}>{title}</div>
            {desc}
            <br />
            <Link href="about">
              Button
            </Link>
        </div>
    </div>
  )
}