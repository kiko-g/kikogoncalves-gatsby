import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import Seo from '../components/Seo'
import { HeroTabs } from '../components/HeroTabs'
import { HeroSidebar } from '../components/HeroSidebar'

const IndexPage = () => (
  <Layout location="Home">
    <Seo title="Home" />
    <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
      <HeroSidebar />
      <div className="col-span-1 md:col-span-3">
        <HeroTabs />
      </div>
    </div>
  </Layout>
)

export default IndexPage
