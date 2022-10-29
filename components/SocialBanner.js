import * as React from "react"
import Link from "next/link"
import styles from "./SocialBanner.module.css"
import { Github, Discord } from '@icons-pack/react-simple-icons';
import Blob from "./Blob";

export default function SocialBanner() {
  return (
    <div>
      <h1 className={styles.sTitle}>Join our community</h1>
      <Blob>
        <div className={styles.sContainer}>
          <Link href='https://discord.gg/AvktyUz3v6'>
            <div className={styles.DiscordContainer}>
                <Discord />
                Discord
            </div>
          </Link>
          <Link href='https://github.com/GroupLabs'>
            <div className={styles.GitHubContainer}>
              <Github />
              GitHub
            </div>
          </Link>
        </div>
      </Blob>
    </div>
  )
}