import Link from 'next/link'
import styles from './BlogCard.module.css'
import imageUrlBuilder from '@sanity/image-url'
import client from './client'
import Image from 'next/image'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}  

export default function BlogCard({title, category, date, image, link}) {
  return (
    <Link href={link}>
        <div className={styles.bcContainer}>
            <div className={styles.bcImage}>
              <Image  width={320} height={300} src={urlFor(image).url()} alt="Blog Hero Image" />
            </div>
            <div className={styles.bcTextContainer}>
                <div className={styles.bcTitle}>{title}</div>
                <div className={styles.bcPublishDate}>{date}</div>
                {/* <div className={styles.bcTag}>{category}</div> */}
            </div>
        </div>
    </Link>
  )
}