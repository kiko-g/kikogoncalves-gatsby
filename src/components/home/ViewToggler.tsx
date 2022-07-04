import React, { Dispatch, SetStateAction } from 'react'
import { MenuIcon, CollectionIcon } from '@heroicons/react/solid'

type Props = {
  hook: [boolean, Dispatch<SetStateAction<boolean>>]
}

const ViewToggler = ({ hook }: Props) => {
  const [condensed, setCondensed] = hook

  return condensed ? (
    <button onClick={() => setCondensed(false)}>
      <MenuIcon className="h-8 w-8" />
    </button>
  ) : (
    <button onClick={() => setCondensed(true)}>
      <CollectionIcon className="h-8 w-8" />
    </button>
  )
}

export default ViewToggler
