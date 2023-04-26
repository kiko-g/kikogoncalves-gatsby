import React from 'react'
import { Layout, Seo } from '../components/layout'
import { graphql, Link } from 'gatsby'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import { getImage } from 'gatsby-plugin-image'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const coverImage = getImage(frontmatter.featuredImage)
  deckDeckGoHighlightElement()

  return (
    <Layout location="Journal Page" liquid>
      <Seo title={frontmatter.title} />
      <main className="mx-auto mt-0 flex w-full max-w-4xl flex-col justify-between p-4 px-4 pb-28 font-normal md:mt-4 md:px-8 xl:px-12">
        <header className="mb-2 text-[2rem] font-bold tracking-tight">
          <h1 className="text-3xl font-bold tracking-tight text-pink-700 dark:text-white md:text-center md:text-4xl xl:mb-16">
            {frontmatter.title}
          </h1>
          <div className="flex w-full items-center justify-between text-base text-gray-400 dark:text-white">
            <Link
              to="/journal"
              className="flex rounded-full font-semibold transition hover:opacity-75"
            >
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
              <span>Go back</span>
            </Link>
            <span className="flex font-semibold">{frontmatter.date}</span>
          </div>
        </header>

        <article dangerouslySetInnerHTML={{ __html: html }} className="markdown" />

        <footer className="mt-12 flex items-center justify-between border-t border-gray-200 py-2 text-xs text-gray-400 dark:border-gray-600 dark:text-gray-300 md:py-3 md:text-sm">
          <span className="font-semibold text-gray-600 dark:text-gray-200 md:text-center">
            {frontmatter.title}
          </span>
          <span className="font-semibold text-gray-600 dark:text-gray-200 md:text-center">
            {frontmatter.date}
          </span>
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
