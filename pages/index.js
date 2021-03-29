import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Grid from '../components/Grid'
import Header from '../components/Header'
import Hero from '../components/Hero'

import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>A/B Sandbox</title>
      </Head>
      <Header />
      <Hero />
      <Feature />
      <Grid />
      <Footer />
    </>
  )
}
