import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'

const Gallery = () => {
  const images = useStaticQuery(graphql`
    query AssetsPhotos {
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, relativeDirectory: { eq: "hero" } }) {
        edges {
          node {
            id
            name
            img: childImageSharp {
              gatsbyImageData(width: 300, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `).allFile.edges

  return (
    <>
      <div className="tab-inner-header">Gallery</div>
      <div className="mt-0 grid w-full grid-cols-2 gap-3 md:mt-1 lg:grid-cols-4 xl:grid-cols-5">
        {images
          .sort(() => Math.random() - 0.5) // random order every time
          .map((imageGatsby: { node: { img: ImageDataLike } }, imageIdx: number) => {
            const image = getImage(imageGatsby.node.img)
            return image ? (
              <GatsbyImage
                image={image}
                key={`gallery-${imageIdx}`}
                alt={`gallery-${imageIdx}`}
                objectPosition="50% 0%"
                className="aspect-square h-full rounded-xl object-cover shadow"
              />
            ) : (
              <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-tertiary via-indigo-400 to-secondary shadow" />
            )
          })}
      </div>
    </>
  )
}

export default Gallery
