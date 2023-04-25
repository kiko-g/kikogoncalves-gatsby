import React from 'react'
import { Layout, Seo } from '../components/layout'
import { graphql, Link } from 'gatsby'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../styles/journalpage.css'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const coverImage = getImage(frontmatter.featuredImage)
  deckDeckGoHighlightElement()

  return (
    <Layout location="Journal Page" liquid>
      <Seo title={frontmatter.title} />
      <main className="journalpage">
        <header>
          <h1>{frontmatter.title}</h1>
          <div>
            <GoBack />
            <span className="date">{frontmatter.date}</span>
          </div>
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

const GoBack = () => (
  <Link className="go-back-button" to="/journal">
    <svg viewBox="0 -7 3 24" className="mr-2.5 h-6 w-auto overflow-visible">
      <path
        d="M3 0L0 3L3 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
    Go back
  </Link>
)
