import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

type Props = {}

const Gallery = ({}: Props) => {
  const gallery = [
    `../../static/images/hero.jpg`,
    `../../static/images/hero.jpg`,
    `../../static/images/hero1.jpg`,
    `../../static/images/hero2.jpg`,
    `../../static/images/hero3.jpg`,
    `../../static/images/hero6.jpg`,
    `../../static/images/hero4.jpg`,
    `../../static/images/hero3.jpg`,
  ]

  return (
    <div className="grid w-full grid-cols-1 gap-4 p-1 md:grid-cols-4">
      {gallery.map((imageSrc, imageIdx) => {
        return (
          <StaticImage
            src={`../../static/images/hero4.jpg`}
            key={`gallery-${imageIdx}`}
            alt={`gallery-${imageIdx}`}
            className="aspect-square h-auto w-auto rounded"
          />
        )
      })}
    </div>
  )
}

export default Gallery
