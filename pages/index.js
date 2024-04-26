import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Menu from '../components/menu.js'
import Game from '../components/game.js'
import Score from '../components/score.js'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="relative">
        <Menu />
        <Game />
        <Score />
      </div>
    </Layout>
  )
}
