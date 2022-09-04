import Link from 'next/link'
import styles from './BlogCard.module.css'
import imageUrlBuilder from '@sanity/image-url'
import client from '../pages/client'

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}  

export default function BlogCard({title, tag, date, image, link}) {
  return (
    <Link href={link}>
        <div className={styles.bcContainer}>
            <img className={styles.bcImage} src={urlFor(image).url()} alt="Blog Hero Image" />
            <div className={styles.bcTextContainer}>
                <div className={styles.bcTitle}>{title}</div>
                <div className={styles.bcPublishDate}>{date}</div>
                <div className={styles.bcTag}>{tag}</div>
            </div>
        </div>
    </Link>
  )
}