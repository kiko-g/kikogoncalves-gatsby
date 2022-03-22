import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export const Postcard = ({ post }) => (
  <Link
    className="h-auto w-full max-w-7xl space-y-2 rounded-xl bg-light3 p-3 shadow transition hover:bg-lilac/5 dark:bg-dark3 hover:dark:bg-lilac/20"
    to={post.frontmatter.slug}
  >
    <div className="flex h-auto flex-col items-center justify-between rounded-lg bg-purple-300 bg-opacity-90 p-4 md:col-span-1" />
    <footer className="w-full">
      <h3 className="font-medium">{post.frontmatter.title}</h3>
      <p className="text-sm font-normal text-gray-400 dark:text-gray-400">{post.excerpt}</p>
    </footer>
  </Link>
)
