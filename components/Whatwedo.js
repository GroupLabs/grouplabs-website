import * as React from "react"
import Link from "next/link"
import styles from "./Whatwedo.module.css"

import contract from '../public/Contract.png'
import community from '../public/Community.png'
import lightning from '../public/Lightning.png'
import people from '../public/People.png'
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
                        src={contract}
                        alt=""
                        width={300}
                        height={300}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                    />
                    </div>
                    <div className={styles.wElementTextContainer}>
                        <div className={styles.wElementText}>Contract Projects</div>
                        <div className={styles.wElementSubText}>
                            Need something done? Our eclectic and talented teams of developers have 
                            the skills needed to take on about any project.
                        </div>
                    </div>
                </div>
                <div className={styles.wElement}>
                    <div className={styles.wElementImage}>
                    <Image
                        src={lightning}
                        alt=""
                        width={300}
                        height={300}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                    />
                    </div>
                    <div className={styles.wElementTextContainer}>
                        <div className={styles.wElementText}>Rapid Onboarding</div>
                        <div className={styles.wElementSubText}>
                            We will handle codifying your processes, creating documentation, 
                            and building an onboarding plan to help your team take on new members without hassle.
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.ContentSubHeader}>For Community</div>
                <div className={styles.wElement}>
                    <div className={styles.wElementImage}>
                    <Image
                        src={community}
                        alt=""
                        width={300} 
                        height={300}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                    />
                    </div>
                    <div className={styles.wElementTextContainer}>
                        <div className={styles.wElementText}>Community Projects</div>
                        <div className={styles.wElementSubText}>
                        Engage in projects aimed to support the local community. 
                        Build your skillset, grow your circle, and take advantage of resources specially 
                        provided for these efforts.
                        </div>
                    </div>
                </div>
                <div className={styles.wElement}>
                    <div className={styles.wElementImage}>
                    <Image
                        src={people}
                        alt=""
                        width={300} 
                        height={300}
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                    />
                    </div>
                    <div className={styles.wElementTextContainer}>
                        <div className={styles.wElementText}>Events</div>
                        <div className={styles.wElementSubText}>
                        Get exposed to the local community and beyond through professional and social events. 
                        Learn about projects, opportunities, and have some fun!
                        </div>
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