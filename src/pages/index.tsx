import React from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { Hero } from '../components/Hero'
import '../styles/pages/index.css'

const IndexPage = () => (
  <Layout location="Home" homepage={true}>
    <Seo title="Home" />
    <div className="wrapper">
      <Hero />
    </div>
  </Layout>
)

export default IndexPage
