import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Layout from '../components/Layout/Layout'
import Skills from '../components/Skills/Skills'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kartik Koul | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main className={styles.main}>
          <Hero/>
          <About/>
          <Skills/>
      </main>
    </div>
  )
}
