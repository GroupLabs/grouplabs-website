import * as React from "react"
import Link from "next/link"
import styles from "./Hero.module.css"
import Image from "next/image"
import HeroImage from "../public/Hero.jpg"
import { BiChevronRight } from 'react-icons/bi';

export default function Hero() {
  return (
    <div className={styles.hContainer}>

        <div className={styles.hTextContainer} style={{zIndex: "1"}}>
            <h1 className={styles.hText}>Community-driven impact through open protocols.</h1>
            <br/> 
            <h2 className={styles.h2Text}>
            This is a place for people to build together. 

            We believe that in a future full of new problem spaces with unprecedented complexity, it is essential that
            we remain cooperative and inclusive.
            </h2>
            <Link href="https://discord.gg/AvktyUz3v6">
                <div className={styles.hButton}>Join</div>
            </Link>
        </div>
        <div style={{zIndex: "-1"}}>
          <Image style={{filter: "brightness(0.8)"}} alt="" src={HeroImage} height={6000} width={4000} priority placeholder="blur"/>
        </div>
        <Link href="https://discord.gg/AvktyUz3v6">
            <div className={styles.mobileJoin}>Join <BiChevronRight /></div>
        </Link>
    </div>

    
  )
}