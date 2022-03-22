import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export const Postcard = ({ post }) => (
  <div className="aspect-square h-auto rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow">
    <Link to={post.frontmatter.slug}>
      <div className="flex flex-col">
        <div className="flex-grow">
          <StaticImage className="rounded-t-xl" src="../../static/images/avatar.png" alt="Francisco Gonçalves" />
        </div>
        <footer className="w-full px-2 py-1 font-normal">{post.frontmatter.title}</footer>
      </div>
    </Link>
  </div>
)
