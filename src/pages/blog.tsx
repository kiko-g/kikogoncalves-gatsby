import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { BlogPostCard } from '../components/blog'
import './styles/blog.css'

// prettier-ignore
const BlogPage = ({ data: { allMarkdownRemark: { edges }, }, }) => {
  return (
    <Layout location="Blog" liquid>
      <Seo title="Blog" />
      <main className="blog">
        <header>
          <h2>Blog</h2>
          <p>
            Welcome to my blog! This is where you'll find posts about things I want to talk about. Most posts will be
            about software development, engineering and programming, but occasionally you might find some stuff related
            to hobbies of mine and maybe some other random jibber-jabber!
          </p>
        </header>

        <article>
          {edges
            .filter((edge: { node: { frontmatter: { date: any } } }) => !!edge.node.frontmatter.date)
            .map((edge: { node: { id: React.Key } }) => (
              <BlogPostCard key={`blogpost-${edge.node.id}`} post={edge.node} />
            ))}
        </article>
      </main>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: [DESC, DESC], fields: [frontmatter___pinned, frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 80)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            slug
            title
            pinned
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
    }
  }
`
