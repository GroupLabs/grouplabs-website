import * as React from "react"
import styles from "./About.module.css"
import Blob from "./Blob"

export default function About() {
  return (
    <div className={styles.aContainer}>
        <div className={styles.aStoryContainer}>
            <div className={styles.aStoryHeader}>
                Our Story
            </div>
            <div className={styles.aStory}>
            GroupLabs began to bring local tech enthusiasts together for social events, peer networking opportunities, and to make a space where people can build impactful solutions together. We believe that collaboration is fundamental to the development of functional engineering and computer science knowledge. Under this umbrella, we aim to provide a pragmatic, thorough, and comprehensive approach to computer science and software engineering. Let&apos;s build something together today!
            With the 
            
            </div>
        </div>
        <div className={styles.aTeamContainer}>
            <div className={styles.aTeamHeader}>
                Team
            </div>
            <Blob>
                <div style={{padding:"80px", backgroundColor: "black", color: "white", textAlign: "center"}}>
                We're still taking pictures... Come back later to meet the team!
                </div>
            </Blob>
        </div>
        <div className={styles.aMessage}>
            <div style={{maxWidth:"80%", textAlign:"center", width: "500px"}}>
                &ldquo;Building a tightly integrated ecosystem in Calgary&apos;s tech space by bridging the gap between education and industry, and creating a developer network.&rdquo;
            </div>
        </div>
    </div>

    
  )
}