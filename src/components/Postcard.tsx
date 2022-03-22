import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export const Postcard = ({ post }) => (
  <Link
    to={post.frontmatter.slug}
    className="group max-w-7xl space-y-2 rounded-xl bg-light1 p-4 shadow transition 
    hover:bg-violet-50 hover:text-dark dark:bg-dark3 hover:dark:bg-lilac/20 dark:hover:text-white"
  >
    <div className="flex items-center justify-center rounded-lg bg-opacity-90">
      <StaticImage className="h-48 w-full rounded-lg object-contain" src="../../static/images/hero.jpg" alt="cover" />
    </div>

    <footer className="w-full">
      <h3 className="font-medium">{post.frontmatter.title}</h3>
      <p className="text-sm font-normal text-gray-400 transition group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200">
        {post.excerpt}
      </p>
    </footer>
  </Link>
)
