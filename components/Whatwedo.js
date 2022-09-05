import * as React from "react"
import Link from "next/link"
import styles from "./Whatwedo.module.css"
import peer from '../public/1.svg'
import group from '../public/2.svg'
import onboard from '../public/3.svg'
import Image from 'next/image'

export default function WhatWeDo() {
  return (
    <div className={styles.wContainer}>
        <div className={styles.wHeader}>What we do</div>
        <div className={styles.wElement}>
            <div className={styles.wElementImage}>
            <Image
                src={peer}
                alt="Picture of the author"
                width={300}
                height={200}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
            </div>
            <div className={styles.wElementTextContainer}>
                <div className={styles.wElementText}>Peer-to-peer Networking</div>
                <div className={styles.wElementSubText}>Find like minded individuals in the local community. Engage and collaborate on projects with provided resources. Let's build something together today.</div>
            </div>
        </div>
        <div className={styles.wElement}>
            <div className={styles.wElementImage}>
            <Image
                src={group}
                alt="Picture of the author"
                width={300} 
                height={200}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
            </div>
            <div className={styles.wElementTextContainer}>
                <div className={styles.wElementText}>Group Projects</div>
                <div className={styles.wElementSubText}>Learn and use technologies found in industry. Build with a sense of  purpose and the knowledge that the work you here do has real potential for positive impact.</div>
            </div>
        </div>
        <div className={styles.wElement}>
            <div className={styles.wElementImage}>
            <Image
                src={onboard}
                alt="Picture of the author"
                width={300}
                height={200}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
            </div>
            <div className={styles.wElementTextContainer}>
                <div className={styles.wElementText}>Seamless Project Onboarding</div>
                <div className={styles.wElementSubText}>Need a team for a project? With our integrated onboarding approaches this becomes a breeze. All the while, you're helping people learn about the tech in your field.</div>
            </div>
        </div>
    </div>

    
  )
}