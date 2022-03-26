import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout } from '../layout'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout location="Home" homepage={true}>
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
