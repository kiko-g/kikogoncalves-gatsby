import React, { Dispatch, SetStateAction } from 'react'
import { SortDescendingIcon, CollectionIcon } from '@heroicons/react/solid'

type Props = {
  hook: [boolean, Dispatch<SetStateAction<boolean>>]
}

const ViewToggler = ({ hook }: Props) => {
  const tooltip = 'Toggle View Mode'
  const [condensed, setCondensed] = hook

  return condensed ? (
    <button title={tooltip} onClick={() => setCondensed(false)}>
      <SortDescendingIcon className="h-8 w-8" />
    </button>
  ) : (
    <button title={tooltip} onClick={() => setCondensed(true)}>
      <CollectionIcon className="h-8 w-8" />
    </button>
  )
}

export default ViewToggler
