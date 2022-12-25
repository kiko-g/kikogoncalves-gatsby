import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/outline'

type Props = {
  count: number
}

const PageVistsMinimal = ({ count }: Props) => {
  return count < 1 ? null : (
    <div
      className="flex flex-wrap items-center justify-between rounded border-2 
      border-primary/90 bg-primary/75 p-4 text-light dark:border-light/10 dark:bg-primary"
    >
      <div className="flex flex-1 items-start justify-between">
        <div className="flex">
          <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
          <p className="ml-3 font-medium">
            <span>
              This webpage was visited <strong>{count}</strong> times.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageVistsMinimal
