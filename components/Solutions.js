import * as React from "react"
import styles from "./Solutions.module.css"
import SolutionCard from "./SolutionCard"

import peer from '../public/1.svg'

export default function Solutions() {
  return (
    <div className={styles.sContainer}>
      <h1 className={styles.sHeader}>For Community</h1>
      <div className={styles.sCardContainer}>
          <SolutionCard title="Events" image={peer} 
          desc="Get exposed to the local community and beyond through professional and social events. 
          Engage in group activities designed to " 
          buttonLabel="Learn more" buttonLink="/contact" />
          <SolutionCard title="Community Projects" image={peer} 
          desc="Engage in projects aimed to support the local community.
          Build your skillset, grow your circle, and take advantage of resources
          specially provided for these efforts." 
          buttonLabel="Learn more" buttonLink="/contact" />
          <SolutionCard title="Workshops" image={peer} 
          desc="Work with industry and academia on special " 
          buttonLabel="Learn more" buttonLink="/contact" />
          <SolutionCard title="Tutorials" image={peer} 
          desc="huioewvwie" 
          buttonLabel="Learn more" buttonLink="/contact" />
      </div>
      <br />
      <br />
      <br />
      <br />

      <h1 className={styles.sHeader}>For Organizations</h1>
      <div className={styles.sCardContainer}>
          <SolutionCard title="Contract Projects" image={peer} desc="huioewvwie" buttonLabel="Request a quote" buttonLink="contact" />
          <SolutionCard title="Rapid Onboarding" image={peer} desc="huioewvwie" buttonLabel="Request a quote" buttonLink="contact" />
          <SolutionCard title="Secure Modules" image={peer} desc="huioewvwie" buttonLabel="Request a quote" buttonLink="contact" />
          <SolutionCard title="Secure Modules" image={peer} desc="huioewvwie" buttonLabel="Request a quote" buttonLink="contact" />

      </div>
    </div>

  )
}