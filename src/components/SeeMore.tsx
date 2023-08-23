import React from 'react'
import usePageVisits from '../hooks/usePageVisits'
import { Link } from 'gatsby'
import { PageVisits } from './layout'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

type Props = {}

export default function SeeMore({}: Props) {
  // const domainVisits = usePageVisits('')

  return (
    <div className="mt-4 flex flex-col items-end justify-between gap-3 lg:flex-row lg:items-center">
      <div>{/* <PageVisits count={domainVisits} /> */}</div>

      <Link
        to="/portfolio"
        className="group inline-flex rounded bg-gradient-to-r from-sky-500 via-indigo-400 to-violet-400 p-[2px] transition-all focus:outline-none focus:ring active:text-opacity-75"
      >
        <span className="flex items-center justify-center space-x-2 rounded-sm bg-gradient-to-r from-sky-500 via-indigo-400 to-violet-400 px-6 py-3 font-medium text-white transition-all hover:bg-transparent hover:opacity-90">
          <span>See more</span>
          <ArrowLongRightIcon className="inline-flex h-5 w-5 transition group-hover:-rotate-45" />
        </span>
      </Link>
    </div>
  )
}
