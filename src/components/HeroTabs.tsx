import * as React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(' ')
}

export const HeroTabs: React.FC = () => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
    <div className="hero-tabs">
      <Tab.Group vertical defaultIndex={1}>
        <Tab.List className="hero-tab-list">
          <Tab
            key="tab-hero"
            className={({ selected }) =>
              classNames('hero-tab', selected ? 'bg-dark text-white hover:bg-dark/90' : 'text-dark hover:bg-dark/5')
            }
          >
            Hero
          </Tab>
          {Object.keys(categories).map(category => (
            <Tab
              key={`tab-${category}`}
              className={({ selected }) =>
                classNames('hero-tab', selected ? 'bg-dark text-white hover:bg-dark/90' : 'text-dark hover:bg-dark/5')
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2 md:mt-4">
          <Tab.Panel key="panel-hero" className={classNames('hero-tab-panel')}>
            <ul></ul>
          </Tab.Panel>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={`panel-${idx}`} className={classNames('hero-tab-panel')}>
              <ul>
                {posts.map(post => (
                  <li key={post.id} className="relative rounded-md p-3 transition hover:bg-dark/5">
                    <h3 className="text-sm font-medium leading-5">{post.title}</h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <Link
                      to="/"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-primary focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
