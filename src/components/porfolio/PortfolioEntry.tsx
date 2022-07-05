import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { DeployIcon, GithubIcon, PinIcon, PreviewIcon } from '../icons'

type Props = {
  project: any
}

const PortfolioEntry = ({ project }: Props) => {
  const info = project.frontmatter
  const content = project.html
  const coverImage = getImage(info.featuredImage)
  const dates = info.startDate === info.endDate ? info.startDate : `${info.startDate} - ${info.endDate ?? 'Present'}`

  return (
    <div className="entry">
      <aside>
        {info.featuredVideo ? (
          <div className="video">
            <video className="video-inner" controls muted>
              <source src={info.featuredVideo} type="video/mp4" />
            </video>
          </div>
        ) : coverImage ? (
          <GatsbyImage image={coverImage} alt="cover" className="image" />
        ) : (
          <div className="dummy" />
        )}

        {info.pinned && (
          <span className="pinned">
            <PinIcon />
          </span>
        )}
      </aside>

      <section>
        <div className="core">
          <header>
            <div className="title">{info.title}</div>
            <div className="subheader">
              <span>{dates}</span>
              <span className="mx-2">&middot;</span>
              <span>{info.team}</span>
            </div>
            <span className="description">{info.description}</span>
          </header>

          <div className="body">
            <div className="tech-stack">
              {info.techStack.map((tech: string, techIdx: number) => (
                <span key={`technology-${techIdx}`}>{tech}</span>
              ))}
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        <div className="links">
          {info.repo && (
            <a href={info.repo} target="_blank" className="repo">
              <GithubIcon />
              <span className="hidden md:flex">Code on Github</span>
            </a>
          )}
          {info.deploy && (
            <a href={info.deploy} target="_blank" className="deploy">
              <DeployIcon />
              <span className="hidden md:flex">Try it</span>
            </a>
          )}
          {info.preview && (
            <a href={info.preview} target="_blank" className="deploy">
              <PreviewIcon />
              <span className="hidden md:flex">Preview</span>
            </a>
          )}
        </div>
      </section>
    </div>
  )
}

export default PortfolioEntry
