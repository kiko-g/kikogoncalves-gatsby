import React, { useState } from 'react'
import { Layout, Seo, PageVisits } from '../components/layout'
import { About, Skills } from '../components/home'
import Cv from '../components/cv/cv'
import usePageVisits from '../hooks/usePageVisits'
import '../styles/pages/home.css'
import '../styles/pages/cv.css'

const IndexPage = () => {
  const domainVisits = usePageVisits('')

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
        </header>

        <About />
        <Skills />
        <Cv />
      </main>
    </Layout>
  )
}

export default IndexPage
