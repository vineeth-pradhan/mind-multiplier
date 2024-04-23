import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// import NewTable from './../components/tables/new.js'
import Menu from '../components/menu.js'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <>
        <Menu />
      </>
    </Layout>
  )
}
