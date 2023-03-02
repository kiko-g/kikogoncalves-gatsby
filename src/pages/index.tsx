import React, { useState } from 'react'
import { Layout, Seo, PageVisits } from '../components/layout'
import { Content, ViewToggler } from '../components/home'
import usePageVisits from '../hooks/usePageVisits'
import '../styles/pages/home.css'

const IndexPage = () => {
  const domainVisits = usePageVisits('')
  const [condensed, setCondensed] = useState(false)

  return (
    <Layout location="Home" liquid>
      <Seo title="Home" />
      <main className="home">
        <header>
          <div className="body">
            <h2>Francisco Gonçalves</h2>
            <p>
              Welcome to my website. Take a look around to find more about me. Hope you enjoy your
              stay! 😄
            </p>
          </div>
          <div className="buttons">
            <ViewToggler hook={[condensed, setCondensed]} />
          </div>
        </header>
        <Content condensed={condensed} visits={domainVisits} />
      </main>
    </Layout>
  )
}

export default IndexPage
