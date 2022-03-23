import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { daysDifference } from '../utils'

export const Postcard = ({ post }) => {
  const difference = daysDifference(post.frontmatter.date)

  return (
    <Link
      to={post.frontmatter.slug}
      className="group max-w-7xl space-y-2 rounded-xl bg-light1 p-4 shadow transition 
    hover:bg-violet-50 hover:text-dark dark:bg-dark3 hover:dark:bg-lilac/20 dark:hover:text-white"
    >
      <div className="relative flex items-center justify-center rounded-lg bg-opacity-90">
        <StaticImage className="h-48 w-full rounded-lg object-contain" src="../../static/images/hero.jpg" alt="cover" />

        {post.frontmatter.pinned ? (
          <span className="absolute top-2 left-2 rounded-full bg-teal-800/80 p-1 text-xs leading-none text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M13.554 2.662a2.25 2.25 0 013.055-.02l.125.124L21.5 7.85a2.251 2.251 0 01-.389 3.408l-.136.084-4.897 2.798a.75.75 0 00-.28.282l-.044.091-1.803 4.514a.75.75 0 01-1.147.322l-.08-.07-3.237-3.236-4.951 4.96L3.47 21l.002-1.055 4.953-4.962L5.22 11.78a.75.75 0 01.157-1.18l.095-.046 4.495-1.797a.75.75 0 00.328-.254l.056-.09 2.756-5.168a2.25 2.25 0 01.447-.583z"
              ></path>
            </svg>
          </span>
        ) : null}

        <span className="invisible absolute bottom-2 left-2 rounded-full bg-gray-800/80 p-1 text-xs leading-none tracking-tighter text-white group-hover:visible">
          {post.frontmatter.date}
        </span>
      </div>

      <footer className="w-full space-y-0.5">
        <div className="flex items-start justify-start">
          <h3 className="flex-grow font-medium">{post.frontmatter.title}</h3>
          {difference < 31 && difference > 0 ? (
            <span className="inline-flex items-center justify-center rounded-full bg-rose-800/80 px-2 py-1 text-xs leading-none text-white">
              New
            </span>
          ) : null}
        </div>

        <p className="text-sm font-normal text-gray-400 transition group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200">
          {post.excerpt}
        </p>
      </footer>
    </Link>
  )
}
