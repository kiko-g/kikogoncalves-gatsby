import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../layout/Layout'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const coverImage = getImage(frontmatter.featuredImage)
  deckDeckGoHighlightElement()

  return (
    <Layout location="Blogpost">
      <main className="blogpost">
        <header>
          <h1>{frontmatter.title}</h1>
        </header>

        <article dangerouslySetInnerHTML={{ __html: html }} />

        <footer>
          <span>{frontmatter.title}</span>
          <span>{frontmatter.date}</span>
        </footer>
      </main>
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
            gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
          publicURL
          extension
        }
      }
    }
  }
`
