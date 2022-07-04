import React from 'react'
import Seo from '../components/Seo'
import { Tabs } from '../components/home'
import { Layout } from '../layout/Layout'
import './styles/home.css'

const IndexPage = () => {
  return (
    <Layout location="Home" liquid>
      <Seo title="Home" />
      <main className="home">
        <header>
          <h2>Francisco Gonçalves</h2>
          <p>Welcome to my website. Here you can find more about me. Take a look around! 😄</p>
        </header>

        <Tabs />
      </main>
    </Layout>
  )
}

export default IndexPage
