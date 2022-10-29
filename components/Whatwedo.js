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
        <div className={styles.wInformation}>
            The next generation of software will be unrecognizable. As the state of technnology evolves, 
            humans will tackle a different set of challenges which will require
            an all-embracing and concerted effort. We are offering a standard to build integrated solutions while 
            maintaining confidentiality and AI-friendliness.
        </div>

        <div className={styles.wContent}>
            <div>
                <div className={styles.ContentSubHeader}>For Organizations</div>
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
                        <div className={styles.wElementText}>Rapid Onboarding</div>
                        <div className={styles.wElementSubText}>Need a team for a project? With our integrated onboarding approach this becomes a breeze. Or, incorporate this with your hiring process to help you find the right team for your codebase.</div>
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
                        <div className={styles.wElementText}>Secure Modules</div>
                        <div className={styles.wElementSubText}>We handle code splitting to protect your confidentiality while still being able to tap into our talented team of developers.</div>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.ContentSubHeader}>For Community</div>
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
                        <div className={styles.wElementText}>Networking Events</div>
                        <div className={styles.wElementSubText}>Find like-minded individuals in the local community. Engage and collaborate on projects with provided resources. Let&apos;s build something together today.</div>
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
                        <div className={styles.wElementText}>Community Projects</div>
                        <div className={styles.wElementSubText}>Learn and use technologies found in industry. Build with a sense of purpose and the knowledge that the work you here do has real potential for positive impact.</div>
                    </div>
                </div>
            </div>
        </div>

        <Link href="/solutions">
            <div className={styles.solutionsLink}>See more solutions</div>
        </Link>
    </div>
  )
}