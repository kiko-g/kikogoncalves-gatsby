import React from 'react'

type Props = {
  square?: boolean
}

export default function Frankie({ square }: Props) {
  const title = 'Coming to theaters soon...'

  return (
    <img
      alt={title}
      title={title}
      src="/images/404/frankie.jpeg"
      className={`${square ? 'aspect-square' : ''} h-full w-full rounded object-cover shadow lg:h-5/6 lg:w-full`}
    />
  )
}
