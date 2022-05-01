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
    <Layout location="Blogpost" liquid>
      <main className="blogpost">
        <header>
          <h1>{frontmatter.title}</h1>
          <div>
            <GoBack />
            <span>{frontmatter.date}</span>
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
  <a
    className="group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
    href="/blog"
  >
    <svg
      viewBox="0 -9 3 24"
      className="mr-3 h-6 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
    >
      <path
        d="M3 0L0 3L3 6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
    Go back
  </a>
)
