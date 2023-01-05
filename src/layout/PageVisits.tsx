import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

type Props = {
  count: number
}

const PageVists = ({ count }: Props) => {
  const hide = process.env.NODE_ENV !== 'production' || count < 1

  return hide ? null : (
    <div className="flex w-full flex-wrap items-center justify-between rounded bg-primary/10 p-4 dark:bg-white/5 lg:w-min">
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center justify-center">
          <InformationCircleIcon className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
          <p className="ml-3 text-sm font-medium lg:text-base">
            <span className="whitespace-nowrap">
              This webpage was visited <strong>{count}</strong> times.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageVists
