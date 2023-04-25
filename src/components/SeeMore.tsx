import React from 'react'
import usePageVisits from '../hooks/usePageVisits'
import { Link } from 'gatsby'
import { PageVisits } from './layout'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

type Props = {}

export default function SeeMore({}: Props) {
  const domainVisits = usePageVisits('')

  return (
    <div className="mt-4 flex flex-col items-end justify-between gap-3 lg:flex-row lg:items-center">
      <PageVisits count={domainVisits} />
      <Link
        to="/cv"
        className="inline-flex rounded bg-gradient-to-r from-tertiary via-secondary to-indigo-500 p-[2px] transition focus:outline-none focus:ring active:text-opacity-75"
      >
        <span className="flex items-center justify-center space-x-2 rounded-sm bg-white px-6 py-3 font-medium transition hover:bg-transparent hover:text-white dark:text-gray-800 dark:hover:text-white">
          <span>See more</span>
          <ArrowLongRightIcon className="inline-flex h-5 w-5" />
        </span>
      </Link>
    </div>
  )
}
