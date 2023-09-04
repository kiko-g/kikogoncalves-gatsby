import React from 'react'
import classNames from 'classnames'
import { graphql } from 'gatsby'
import { Layout, Seo } from '../components/layout'
import { PortfolioEntry } from '../components/porfolio'
import { Listbox } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function PortfolioPage({
  data: {
    allMarkdownRemark: { nodes },
  },
}) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [pickedCategories, setPickedCategories] = React.useState<string[]>([])

  const categories = React.useMemo(() => {
    const categoryCounts = new Map<string, number>()

    nodes.forEach((node) => {
      node.frontmatter.techStack.forEach((tech: string) => {
        if (categoryCounts.has(tech)) {
          categoryCounts.set(tech, categoryCounts.get(tech)! + 1)
        } else {
          categoryCounts.set(tech, 1)
        }
      })
    })

    return Array.from(categoryCounts).map(([name, count]) => ({ name, count }))
  }, [nodes])

  const projects = React.useMemo(
    () =>
      nodes
        .filter((node: { frontmatter: { startDate: any } }) => !!node.frontmatter.startDate)
        .filter((node: { frontmatter: { title: string } }) =>
          node.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((node: { frontmatter: { techStack: string[] } }) => {
          if (pickedCategories.length === 0) return true

          return pickedCategories.every((tech: string) => node.frontmatter.techStack.includes(tech))
        }),
    [nodes, pickedCategories]
  )

  return (
    <Layout location="Portfolio">
      <Seo title="Portfolio" />
      <main>
        <header className="mt-2">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Portfolio</h2>

          <p className="mt-4 text-lg font-light">
            Welcome to the portfolio! This is where you can browse through the main (software)
            projects I've contributed to or developed myself. The source code for most of these
            projects is available on{' '}
            <a target="_blank" className="link" href="https://github.com/kiko-g?tab=repositories">
              my github
            </a>
            , so make sure you check that out and maybe drop a follow! 😊
          </p>

          <div className="mt-3 flex gap-x-3">
            <Search hook={[searchQuery, setSearchQuery]} />
            <CategoryFilter
              categories={categories}
              hook={[pickedCategories, setPickedCategories]}
            />
          </div>

          <div className="mt-2">{projects.length} projects matching filtering options.</div>
        </header>

        <article className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((node: { id: React.Key }) => (
            <PortfolioEntry key={`project-${node.id}`} project={node} />
          ))}
        </article>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: [{ frontmatter: { pinned: DESC } }, { frontmatter: { startDate: DESC } }]
      filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
    ) {
      nodes {
        id
        html
        frontmatter {
          pinned
          title
          slug
          startDate(formatString: "MMM YYYY")
          endDate(formatString: "MMM YYYY")
          repo
          deploy
          preview
          techStack
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          featuredVideo
          description
          team
        }
      }
    }
  }
`

type SearchProps = {
  hook: [string, React.Dispatch<React.SetStateAction<string>>]
}

function Search({ hook }: SearchProps) {
  const [searchQuery, setSearchQuery] = hook

  return (
    <input
      type="search"
      id="searchProject"
      name="searchProject"
      placeholder="Search"
      className="flex-1 px-4 py-2"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}

type CategoryEntry = {
  name: string
  count: number
}

type CategoryFilterProps = {
  categories: CategoryEntry[]
  hook: [string[], React.Dispatch<React.SetStateAction<string[]>>]
}

function CategoryFilter({ categories, hook }: CategoryFilterProps) {
  const [pickedCategories, setPickedCategories] = hook

  return (
    <Listbox
      as="div"
      multiple
      value={pickedCategories}
      onChange={setPickedCategories}
      className="relative h-full"
    >
      {({ open }) => (
        <>
          <Listbox.Button
            className="flex w-full items-center justify-center gap-x-0.5 rounded border border-primary bg-primary/80 
            px-4 py-2 text-white transition hover:opacity-80 dark:border-white/10 dark:bg-white/10"
          >
            <span className="text-sm font-normal">Categories</span>
          </Listbox.Button>

          <Listbox.Options
            className={classNames(
              'z-40 rounded-md px-0 py-1 text-sm shadow-xl',
              'max-h-[30rem] overflow-scroll border-2 border-white bg-white dark:border-[#434b51] dark:bg-[#2e373d]',
              open ? 'absolute right-0 mt-2 w-full min-w-[12rem] lg:w-64' : 'hidden'
            )}
          >
            {/* Option box header */}
            <div
              className="flex w-full items-center justify-between border-b 
              px-3 pb-2 pt-1 font-normal tracking-tighter"
            >
              <span>{pickedCategories.length} selected</span>
              <button
                type="button"
                className="dark:text-tertiary tracking-tighter text-primary underline hover:font-bold hover:opacity-80"
                onClick={() => setPickedCategories([])}
              >
                Reset
              </button>
            </div>

            {/* Option box body (options list) */}
            <div className="py-1">
              {categories
                .sort((a: CategoryEntry, b: CategoryEntry) => {
                  if (a.count > b.count) return -1
                  if (a.count < b.count) return 1

                  return a.name.localeCompare(b.name) // if equal compare alphabetically by name
                })
                .map((category: CategoryEntry, categoryIdx: number) => {
                  return (
                    <Listbox.Option
                      key={`category-${categoryIdx}`}
                      value={category.name}
                      className={({ active }) =>
                        classNames(
                          'relative cursor-default select-none py-2 pl-3 pr-3',
                          active ? 'bg-slate-200 dark:bg-slate-600' : ''
                        )
                      }
                    >
                      {({ selected }) => (
                        <span className="flex items-center gap-2">
                          {selected ? (
                            <CheckCircleIcon className="h-5 w-5 text-teal-500" aria-hidden="true" />
                          ) : (
                            <span className="h-5 w-5 text-teal-500"></span>
                          )}
                          <span
                            className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}
                          >
                            {category.name} ({category.count})
                          </span>
                        </span>
                      )}
                    </Listbox.Option>
                  )
                })}
            </div>
          </Listbox.Options>
        </>
      )}
    </Listbox>
  )
}
