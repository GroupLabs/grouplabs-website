import * as React from "react"
import Link from "next/link"
import styles from "./About.module.css"

export default function About() {
  return (
    <div className={styles.aContainer}>
        <div className={styles.aMessage}>
            <div style={{maxWidth:"500px", textAlign:"center"}}>
                "Building a tightly integrated ecosystem in Calgary’s tech space by bridging the gap between education and industry, and creating a developer network."
            </div>
        </div>
        <div className={styles.aStoryContainer}>
            <div className={styles.aStoryHeader}>
                Our Story
            </div>
            <div className={styles.aStory}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra urna nec sem pretium laoreet. Maecenas vitae tempor massa. Aenean condimentum posuere magna ac mollis. Duis at bibendum elit. Curabitur dui elit, sagittis consectetur lectus tempus, porta vulputate ex. Pellentesque varius interdum nunc ornare semper. Morbi a metus sed nisl sagittis ornare. Duis facilisis magna urna, sit amet molestie purus aliquam in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sit amet varius nulla, eget accumsan ipsum.
            </div>
        </div>
    </div>

    
  )
}