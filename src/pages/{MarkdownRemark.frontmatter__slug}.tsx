import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import '../styles/blogpost.css'

export default function Template({ data }) {
  const post = data.markdownRemark
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout location={frontmatter.title}>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
