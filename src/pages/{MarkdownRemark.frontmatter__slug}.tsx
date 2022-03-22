import React from 'react'
import '../styles/blogpost.css'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import { StaticImage } from 'gatsby-plugin-image'

export default function Template({ data }) {
  const post = data.markdownRemark
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  deckDeckGoHighlightElement()

  console.log(frontmatter.featuredImage)

  return (
    <Layout location="Blogpost">
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
