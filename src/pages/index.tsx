import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout location="Home" padding={false}>
    <Seo title="Home" />
    <div className="grid grid-cols-12">
      <div className="min-h-adjusted col-span-3" />
      <div className="col-span-9"></div>
    </div>
  </Layout>
)

export default IndexPage
