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
  const dates =
    info.startDate === info.endDate
      ? info.startDate
      : `${info.startDate} - ${info.endDate ?? 'Present'}`

  return (
    <div className="flex w-full flex-col gap-y-3 rounded-xl bg-lightest p-4 shadow dark:bg-white/5">
      <aside className="relative w-full rounded-l-xl md:rounded-xl">
        {info.featuredVideo ? (
          <div className="h-[20rem] w-auto max-w-full rounded-xl object-contain lg:max-w-2xl">
            <video className="rounded-xl" controls muted>
              <source src={info.featuredVideo} type="video/mp4" />
            </video>
          </div>
        ) : coverImage ? (
          <GatsbyImage
            image={coverImage}
            alt="cover"
            className="h-[20rem] w-auto max-w-full rounded-xl object-contain lg:max-w-2xl"
          />
        ) : (
          <div className="h-64 w-full rounded-xl bg-gradient-to-br from-secondary via-secondary to-violet-400 shadow lg:h-full lg:w-80" />
        )}

        {info.pinned && (
          <span className="absolute top-2 left-2 rounded-full bg-gradient-to-br from-secondary via-secondary to-violet-400 p-1 text-xs leading-none text-white">
            <PinIcon className="h-4 w-4" />
          </span>
        )}
      </aside>

      <section className="relative flex w-full grow flex-col justify-between gap-y-6 rounded-r-xl py-1 text-base font-light lg:h-auto lg:max-h-full lg:py-0">
        <div className="flex flex-col">
          <header className="mb-0 flex flex-col">
            <div className="mb-3 flex gap-x-2 self-end rounded-xl lg:top-0 lg:right-0">
              {info.repo && (
                <a
                  href={info.repo}
                  target="_blank"
                  className="inline-flex items-center space-x-2 rounded bg-primary p-1 text-center text-sm font-normal text-white transition hover:bg-primary/75 dark:bg-secondary/80 dark:hover:bg-secondary lg:p-2"
                >
                  <GithubIcon className="h-5 w-5" />
                  <span className="hidden md:flex">Code on Github</span>
                </a>
              )}
              {info.deploy && (
                <a
                  href={info.deploy}
                  target="_blank"
                  className="inline-flex items-center space-x-2 rounded bg-slate-700 p-1 text-center text-sm font-normal text-white transition hover:bg-slate-500 dark:bg-lightest dark:text-slate-700 dark:hover:bg-gray-200 lg:p-2"
                >
                  <DeployIcon className="h-5 w-5" />
                  <span className="hidden md:flex">Try it</span>
                </a>
              )}
              {info.preview && (
                <a
                  href={info.preview}
                  target="_blank"
                  className="inline-flex items-center space-x-2 rounded bg-slate-700 p-1 text-center text-sm font-normal text-white transition hover:bg-slate-500 dark:bg-lightest dark:text-slate-700 dark:hover:bg-gray-200 lg:p-2"
                >
                  <PreviewIcon className="h-5 w-5" />
                  <span className="hidden md:flex">Preview</span>
                </a>
              )}
            </div>

            <div className="text-xl font-semibold uppercase tracking-wide text-primary dark:text-secondary">
              {info.title}
            </div>
            <div className="font-normal tracking-tighter">
              <span>{dates}</span>
              <span className="mx-2">&middot;</span>
              <span>{info.team}</span>
            </div>
            <span className="font-normal tracking-tight text-gray-600 dark:text-white">
              {info.description}
            </span>
          </header>

          <div className="space-y-3">
            <div className="mt-2 flex flex-wrap gap-2">
              {info.techStack.map((tech: string, techIdx: number) => (
                <span
                  key={`technology-${techIdx}`}
                  className="rounded bg-primary px-2 py-1 text-xs font-normal lowercase tracking-wide text-white shadow dark:bg-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioEntry
