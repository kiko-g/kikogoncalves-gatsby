import React from 'react'
import { HomeIcon, EmojiHappyIcon, BriefcaseIcon, DocumentDuplicateIcon, CodeIcon } from '@heroicons/react/outline'

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const links = [
  { title: 'Home', location: '/', icon: <HomeIcon className="mr-1.5 h-5 w-5" /> },
  { title: 'Me', location: '/me', icon: <EmojiHappyIcon className="mr-1.5 h-[1.4rem] w-[1.4rem]" /> },
  { title: 'CV', location: '/cv', icon: <BriefcaseIcon className="mr-1.5 h-5 w-5" /> },
  { title: 'Blog', location: '/blog', icon: <DocumentDuplicateIcon className="mr-1.5 h-5 w-5" /> },
  { title: 'Portfolio', location: '/portfolio', icon: <CodeIcon className="mr-1.5 h-5 w-5" /> },
]
