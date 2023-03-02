import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import { Frankie } from '../components/404'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function NotFoundPage() {
  return (
    <Layout location="Oops">
      <main className="mx-auto mt-0 flex h-full max-w-lg flex-col items-start justify-start gap-y-4 md:mt-3">
        <div className="flex w-full flex-col items-start justify-between gap-3">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">404: Not Found</h2>
            <p className="font-normal">Not much too see here...</p>
          </div>

          <div className="w-full self-stretch lg:self-auto">
            <Link
              to="/"
              className="group flex h-full w-full items-center justify-center gap-x-2 rounded 
              bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 px-6 py-4 text-white 
              transition hover:opacity-80 lg:w-auto"
            >
              <span className="font-normal tracking-tight">Country roads, take me home!</span>
              <ArrowLongRightIcon className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mb-2 flex w-full">
          <Frankie />
        </div>
      </main>
    </Layout>
  )
}
