import React, { useState } from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { Tabs, ViewToggler } from '../components/home'
import './styles/home.css'

const IndexPage = () => {
  const [condensed, setCondensed] = useState(false)

  return (
    <Layout location="Home" liquid>
      <Seo title="Home" />
      <main className="home">
        <header>
          <div className="body">
            <h2>Francisco Gonçalves</h2>
            <p>Welcome to my website. Take a look around to find more about me. Hope you enjoy your stay! 😄</p>
          </div>
          <div className="buttons">
            <ViewToggler hook={[condensed, setCondensed]} />
          </div>
        </header>

        {condensed ? <Tabs /> : <Tabs />}
      </main>
    </Layout>
  )
}

export default IndexPage
