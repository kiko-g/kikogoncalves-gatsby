import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Layout } from '../layout'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout location="Home">
    <Seo title="Home" />
    <div className="bg-[url('../../static/images/hero.jpg')]">1</div>
  </Layout>
)

export default IndexPage
