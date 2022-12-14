import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VALENCE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </div>
  )
}
