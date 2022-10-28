import * as React from "react"
import BlogCard from "./BlogCard"
import styles from "./Solutions.module.css"
import SolutionCard from "./SolutionCard"

import peer from '../public/1.svg'

export default function Solutions() {
  return (
    <div className={styles.sContainer}>
        <SolutionCard title="Rapid Onboarding" tag="Hello" image={peer} desc="huioewvwie" />

    </div>

    
  )
}