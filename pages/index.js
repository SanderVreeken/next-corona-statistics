import Head from 'next/head'
import { colors } from '../lib/constants'

import Card from '../components/Card'
import Graph from '../components/Graph'
import Select from '../components/Select'
import styles from '../styles/Home.module.css'

export default function Home({ stats, historical }) {
  const cards = [{
    title: 'cases',
    sinceYesterday: 'todayCases'
  }, {
    title: 'deaths',
    sinceYesterday: 'todayDeaths'
  }, {
    title: 'recovered',
    sinceYesterday: 'todayRecovered'
  }]

  return (
    <div className={styles.home}>
      <Head>
        <title>Statistics COVID-19</title>
      </Head>
      <h1>COVID-19</h1>
      <div className={styles.home__cards}>
        {cards.map((card, index) => <Card card={card} color={colors[index]} stats={stats} />)}
      </div>
      <Graph historical={historical} />
    </div>
  )
}

// Function to fetch data from an external source by passing the url.
const fetchData = async (url) => {
  const res = await fetch(url)
  return await res.json()
}

export async function getStaticProps() {
  const historical = await fetchData('https://disease.sh/v3/covid-19/historical/all')
  const stats = await fetchData('http://disease.sh/v3/covid-19/all')

  return {
    props: {
      historical,
      stats
    }
  }
}
