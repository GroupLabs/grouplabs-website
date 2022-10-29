import * as React from "react"
import styles from "./Solutions.module.css"
import SolutionCard from "./SolutionCard"

import peer from '../public/1.svg'

export default function Solutions() {
  return (
    <div className={styles.sContainer}>
      <h1 className={styles.sHeader}>For Community</h1>
      <div className={styles.sCardContainer}>
          <SolutionCard title="Networking Events" image={peer} desc="huioewvwie" buttonLabel="Learn more" buttonLink="contact" />
          <SolutionCard title="Community Projects" image={peer} desc="huioewvwie" buttonLabel="Learn more" buttonLink="contact" />
          <SolutionCard title="Workshops" image={peer} desc="huisdgdsdgdsgsdgdsgsdgdsgsd ds sdgs gsdg dgsgdsg dsg sdgds dsoewvwie" buttonLabel="Learn more" buttonLink="contact" />
          <SolutionCard title="Tutorials" image={peer} desc="huioewvwie" buttonLabel="Learn more" buttonLink="contact" />
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