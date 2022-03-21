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
      <div className="blogpost">
        <header>{frontmatter.title}</header>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <footer>
          <span>{frontmatter.title}</span>
          <span>{frontmatter.date}</span>
        </footer>
      </div>
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
          extension
        }
      }
    }
  }
`
