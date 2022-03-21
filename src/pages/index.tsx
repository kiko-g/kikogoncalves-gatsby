import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout } from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout location="Home" padding={false}>
    <Seo title="Home" />
    <StaticImage src="../../static/images/hero.jpg" alt="Francisco Gonçalves" />
  </Layout>
)

export default IndexPage
