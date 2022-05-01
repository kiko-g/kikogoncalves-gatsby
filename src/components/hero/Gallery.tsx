import React from 'react'

const Gallery = () => {
  const gallery = Array(10).fill(false)

  return (
    <div className="px-2 py-2">
      <div className="tab-inner-header">Gallery</div>
      <div className="mt-0 grid w-full grid-cols-2 gap-4 md:mt-2 lg:grid-cols-4 xl:grid-cols-5">
        {gallery.map((image: string, imageIdx: number) => {
          return (
            <img
              src={`/images/hero/hero${imageIdx}.jpg`}
              key={`gallery-${imageIdx}`}
              alt={`gallery-${imageIdx}`}
              className="aspect-square h-full rounded-xl object-cover object-top shadow"
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
