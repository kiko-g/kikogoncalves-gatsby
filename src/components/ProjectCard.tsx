import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const ProjectCard = ({ project }) => {
  const info = project.frontmatter
  const content = project.html
  const coverImage = getImage(project.frontmatter.featuredImage)

  return (
    <div className="project-card">
      <aside>
        <GatsbyImage image={coverImage} alt="cover" className="image" />
        {info.pinned ? (
          <span className="pinned">
            <PinIcon />
          </span>
        ) : null}
      </aside>

      <section>
        <div className="flex flex-col">
          <header>
            <div className="title">{info.title}</div>
            <div className="dates">
              {info.startDate} - {info.endDate}
            </div>
            <em className="description">{info.description}</em>
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
          {info.repo ? (
            <a href={info.repo} target="_blank" className="repo">
              <GithubIcon />
              <span className="hidden md:flex">Code on Github</span>
            </a>
          ) : null}
          {info.deploy ? (
            <a href={info.deploy} target="_blank" className="deploy">
              <DeployLink />
              <span className="hidden md:flex">Preview</span>
            </a>
          ) : null}
        </div>
      </section>
    </div>
  )
}

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
    <path
      fill="#fff"
      d="M13.554 2.662a2.25 2.25 0 013.055-.02l.125.124L21.5 7.85a2.251 2.251 0 01-.389 3.408l-.136.084-4.897 2.798a.75.75 0 00-.28.282l-.044.091-1.803 4.514a.75.75 0 01-1.147.322l-.08-.07-3.237-3.236-4.951 4.96L3.47 21l.002-1.055 4.953-4.962L5.22 11.78a.75.75 0 01.157-1.18l.095-.046 4.495-1.797a.75.75 0 00.328-.254l.056-.09 2.756-5.168a2.25 2.25 0 01.447-.583z"
    ></path>
  </svg>
)

const GithubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
)

const DeployLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
)
