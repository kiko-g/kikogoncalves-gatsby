import React, { useState } from 'react'
import { Layout, Seo, PageVisits } from '../layout'
import { Content, ViewToggler } from '../components/home'
import usePageVisits from '../hooks/usePageVisits'
import '../styles/pages/home.css'

const IndexPage = () => {
  const pageVisits = usePageVisits('')
  const [condensed, setCondensed] = useState(() =>
    typeof window !== 'undefined' ? !window.matchMedia('(max-width: 1024px)').matches : false
  )

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

        <Content condensed={condensed} />
        <PageVisits count={pageVisits} />
      </main>
    </Layout>
  )
}

export default IndexPage
