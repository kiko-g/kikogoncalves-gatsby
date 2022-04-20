import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Seo from '../components/Seo'
import { Main } from '../layout/home/Main'
import { Sidebar } from '../layout/home/Sidebar'
import { Layout } from '../layout/Layout'
import '../styles/pages/index.css'

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout location="Home" home={true}>
      <Seo title="Home" />
      <Sidebar title={data.site.siteMetadata.title} />
      <Main title={data.site.siteMetadata.title} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
