import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { PinIcon } from '../icons'
import { daysDifference } from '../../utils'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

type Props = {
  post: any
}

const JournalPageCard = ({ post }: Props) => {
  const difference = daysDifference(post.frontmatter.date)
  const coverImage = getImage(post.frontmatter.featuredImage)
  const available = difference >= 0
  const isNew = difference < 60 && available

  return (
    <Link
      to={post.frontmatter.slug}
      onClick={(e) => {
        if (!available) e.preventDefault()
      }}
      className={classNames(
        'group relative space-y-2 rounded-xl p-4 shadow transition duration-300',
        available
          ? 'bg-lightest hover:bg-pink-100 hover:text-gray-800 dark:bg-light/5 dark:hover:bg-pink-500/20 dark:hover:text-white'
          : 'bg-lightest hover:cursor-not-allowed dark:bg-light/5'
      )}
    >
      <header className="relative flex items-center justify-center rounded-lg bg-opacity-90">
        {coverImage ? (
          <GatsbyImage
            image={coverImage}
            alt="cover"
            className="h-64 w-full rounded-lg object-contain"
          />
        ) : (
          <div className="h-64 w-full rounded-lg bg-gradient-to-br from-tertiary via-secondary to-violet-400 shadow" />
        )}

        {post.frontmatter.pinned && (
          <span className="absolute top-2 left-2 rounded-full bg-gradient-to-br from-tertiary via-secondary to-violet-400 p-1 text-xs leading-none text-white shadow">
            <PinIcon />
          </span>
        )}

        <span className="absolute top-2 right-2 rounded-full bg-navy/50 px-2 py-1 text-xs leading-none tracking-tight text-white dark:bg-ice/80 dark:text-gray-800">
          {post.frontmatter.date}
        </span>
      </header>

      <section className="w-full">
        <div className="flex items-start justify-start">
          <h3 className="flex-grow font-medium text-pink-700 dark:text-codepink">
            {post.frontmatter.title}
          </h3>
        </div>
        <p className="pb-0 text-sm font-normal tracking-tight text-gray-500 transition dark:text-gray-300">
          {post.excerpt}
        </p>
        <div className="mt-3 flex items-center justify-end">
          {isNew && (
            <span className="inline-flex items-center justify-center bg-gradient-to-br from-rose-600 to-rose-700 px-2 py-2 text-xs leading-none text-white">
              New
            </span>
          )}
          {!available && (
            <span className="inline-flex items-center justify-center rounded-full bg-teal-800/80 px-2 py-1 text-xs leading-none text-white">
              Coming&nbsp;Soon
            </span>
          )}
        </div>
      </section>
    </Link>
  )
}

export default JournalPageCard
