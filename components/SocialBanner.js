import * as React from "react"
import Link from "next/link"
import styles from "./SocialBanner.module.css"
import { Github, Discord } from '@icons-pack/react-simple-icons';

export default function SocialBanner() {
  return (
    <div className={styles.sContainer}>
      <Link href='/'>
        <div className={styles.DiscordContainer}>
            <Discord />
            Discord
        </div>
      </Link>
      <Link href='/'>
        <div className={styles.GitHubContainer}>
          <Github />
          GitHub
        </div>
      </Link>
    </div>

    
  )
}