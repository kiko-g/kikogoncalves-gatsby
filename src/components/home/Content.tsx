import React from 'react'
import { Link } from 'gatsby'
import { classNames } from '../../utils'
import { Tab } from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { Gallery, About, Skills, Resume } from './tabs'
import { PageVisits } from '../../layout'

type Props = {
  condensed?: boolean
  visits?: number
}

const Content = ({ condensed, visits }: Props) => {
  const [focusRing] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const headers = ['About', 'Skills', 'Resume', 'Gallery']
  const content = [<About />, <Skills />, <Resume />, <Gallery />]
  const domainVisits = visits || 0

  const nextTab = () => {
    setSelectedIndex((selectedIndex + 1) % content.length)
  }

  return condensed ? (
    <div className="tabs">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="tab-list">
          {headers.map(category => (
            <Tab
              key={category}
              className={({ selected }: { selected: boolean }) =>
                classNames('tab', focusRing ? 'tab-focus-ring' : '', selected ? 'tab-selected' : 'tab-not-selected')
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="tab-panels">
          {content.map((content: JSX.Element, index: number) => (
            <Tab.Panel key={index} className={classNames('tab-panel', focusRing ? 'tab-focus-ring' : '')}>
              {content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      <div className="see-more">
        <PageVisits count={domainVisits} />
        <Link to="/me" className="see-more-button">
          <span>
            <span>See more</span>
            <ArrowLongRightIcon className="inline-flex h-5 w-5" />
          </span>
        </Link>
      </div>
    </div>
  ) : (
    <div className="blocks">
      <div className="block-list">
        {content.map((content: JSX.Element, index: number) => (
          <div key={index} className="block-content">
            {content}
          </div>
        ))}
      </div>

      <div className="see-more">
        <PageVisits count={domainVisits} />
        <Link to="/me" className="see-more-button">
          <span>
            <span>See more</span>
            <ArrowLongRightIcon className="inline-flex h-5 w-5" />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Content
