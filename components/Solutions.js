import * as React from "react"
import styles from "./Solutions.module.css"
import SolutionCard from "./SolutionCard"

import lightning from '../public/Lightning.png'
import questionmark from '../public/QuestionMark.png'
import peer from '../public/1.svg'

export default function Solutions() {
  return (
    <div className={styles.sContainer}>
      <h1 className={styles.sHeader}>For Community</h1>
      <div className={styles.sCardContainer}>
          <SolutionCard title="Community Projects" image={peer} 
          desc="Engage in projects aimed to support the local community.
          Build your skillset, grow your circle, and take advantage of resources
          specially provided for these efforts." 
          buttonLabel="Learn more" buttonLink="/contact" />
          <SolutionCard title="Events" image={peer} 
          comingSoon="true"
          desc="Get exposed to the local community and beyond through professional and social events.
          Learn about projects, opportunities, and have some fun!" 
          buttonLabel="Learn more" buttonLink="/contact" />
          <SolutionCard title="Workshops" image={peer} 
          comingSoon="true"
          desc="Work with industry and academia in workshops where the latest technologies, tools,
          and practices are showcased." 
          buttonLabel="Learn more" buttonLink="/contact" />
          <SolutionCard title="Tutorials" image={questionmark}
          comingSoon="true"
          desc="Learn the microscopic details of different computer science and engineering concepts
          through various resources." 
          buttonLabel="Learn more" buttonLink="/contact" />
      </div>
      <br />
      <br />
      <br />
      <br />

      <h1 className={styles.sHeader}>For Organizations</h1>
      <div className={styles.sCardContainer}>
          <SolutionCard title="Contract Projects" image={peer}
          desc="Need something done? Our eclectic and talented teams of developers have the 
          skills needed to take on about any project." 
          buttonLabel="Request a quote" buttonLink="contact" />
          <SolutionCard title="Rapid Onboarding" image={lightning} 
          desc="We will handle codifying your processes, creating documentation, and building
          an onboarding plan to help your team take on new members without hassle." 
          buttonLabel="Request a quote" buttonLink="contact" />
          <SolutionCard title="Training" image={peer} 
          desc="Help your team get up to speed on the latest technologies, and tools with our training
          sessions." 
          buttonLabel="Request a quote" buttonLink="contact" />
          <SolutionCard title="Mesh Computing" image={peer} 
          comingSoon="true"
          desc="Take advantage of dynamic compute tools designed to assign tasks to different resources automatically." 
          buttonLabel="Request a quote" buttonLink="contact" />
      </div>
    </div>

  )
}