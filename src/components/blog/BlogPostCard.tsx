import React from 'react'
import { Link } from 'gatsby'
import { daysDifference } from '../../utils'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

type Props = {
  post: any
}

const BlogPostCard = ({ post }: Props) => {
  const difference = daysDifference(post.frontmatter.date)
  const coverImage = getImage(post.frontmatter.featuredImage)
  const available = difference >= 0
  const isNew = difference < 60 && available

  return (
    <Link className="postcard group" to={available ? post.frontmatter.slug : undefined}>
      <header>
        {coverImage ? (
          <GatsbyImage image={coverImage} alt="cover" className="h-64 w-full rounded-lg object-contain" />
        ) : (
          <div className="h-64 w-full rounded-lg bg-gradient-to-br from-tertiary via-indigo-400 to-secondary shadow" />
        )}

        {post.frontmatter.pinned && (
          <span className="pinned">
            <PinIcon />
          </span>
        )}

        <span className="date">{post.frontmatter.date}</span>
      </header>

      <section>
        <div className="top">
          <h3 className="title">{post.frontmatter.title}</h3>
        </div>
        <p className="excerpt">{post.excerpt}</p>
        <div className="bottom">
          {isNew && <span className="new">New</span>}
          {!available && <span className="coming-soon">Coming&nbsp;Soon</span>}
        </div>
      </section>
    </Link>
  )
}

export default BlogPostCard

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
    <path
      fill="#fff"
      d="M13.554 2.662a2.25 2.25 0 013.055-.02l.125.124L21.5 7.85a2.251 2.251 0 01-.389 3.408l-.136.084-4.897 2.798a.75.75 0 00-.28.282l-.044.091-1.803 4.514a.75.75 0 01-1.147.322l-.08-.07-3.237-3.236-4.951 4.96L3.47 21l.002-1.055 4.953-4.962L5.22 11.78a.75.75 0 01.157-1.18l.095-.046 4.495-1.797a.75.75 0 00.328-.254l.056-.09 2.756-5.168a2.25 2.25 0 01.447-.583z"
    ></path>
  </svg>
)
