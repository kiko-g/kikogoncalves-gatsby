import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout } from '../layout/Layout'
import { Hero } from '../components/Hero'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout location="Home" homepage={true}>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
