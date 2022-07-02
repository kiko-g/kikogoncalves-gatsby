---
pinned: false
date: 2022-05-02
slug: /blog/tailwind
title: The magic of Tailwind
featuredImage: ./featured.jpg
---

TailwindCSS is an extremely useful framework that saves you a lot of **time and gray hairs**. Essentially, Tailwind is a CSS framework packed with utility classes that make it much **easier to apply css rules**. I believe the greatest thing about Tailwind is that it isn't like traditional frameworks that give you a new paradigm and approach to developing. Instead, Tailwind is almost like CSS++. It gives you pre-built classes to use in your HTML, as well as extract them and reuse them in your CSS, as we will see in a minute. In this tutorial I will show off some handy tricks and how to manipulate TailwindCSS with ease, by showing off the process of creating awesome and reusable "components".

## Getting Started

Before installing Tailwind we should start by configuring our work environment. I strongly recommend that you use VS Code and then configure extensions for Tailwind. The ones I recommend the most are `Tailwind CSS IntelliSense` and `Tailwind Docs`. Feel free to add other extensions to your environment, but these two are the most common and I would say most useful.

To get going with Tailwind checkout out the **tailwind docs** on [installation](https://tailwindcss.com/docs/installation). If you're familiar with **React** or **Vue** visit the section that combines [Tailwind with popular frameworks](https://tailwindcss.com/docs/installation/framework-guides) (e.g., NextJS, Gatsby, Create React App). You can also skip the installation and jump right into the action in Tailwind's [playground](play.tailwindcss.com/), but let me warn you that some of the components I will show you will use React.

One of the many reasons Tailwind is so great is because of how customizable it is. In your `tailwind.config.js` file you can define extra rules. Take a look at some of the simplest and most important parts of mine.

```js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ice: '#e8ebf5',
        navy: '#18222e',
        dark: '#252832',
        darker: '#1e2028',
        darkest: '#1a1c23',
        light: '#f2f4f7',
        lighter: '#f7f7f7',
        lightest: '#fcfcfc',
        primary: '#173b6c',
        secondary: '#149ddd',
        tertiary: '#9f7aea',
      },
      maxWidth: {
        screen: '100vw',
        '8xl': '88rem',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      fontFamily: {
        flow: 'Flow',
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
        code: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: ['gatsby-plugin-postcss'],
}
```

As you can see, you can expand the classes that are available to you, which provides endless possibilities! If you're familiar with bootstrap, you know that the choices are made for you. In bootstrap you use `btn btn-primary` to define a main button which will have the default styles that bootstrap provides. If you want to change that blue bootstrappy color, you'll need to do css overrides using `!important`. This can quickly get out of hand if you want to stay away from bootstrap's theme. Tailwind gives is the complete opposite. Everything comes unstyled and it is up to you to create your own buttons, for example. Checkout how to [customize your theme](https://tailwindcss.com/docs/adding-custom-styles) in the tailwind docs.

## Creating awesome components

### Links to socials

For this example we are going to be using Typescript and React. If you're not using these you can still refactor the examples below using an hard coded version in your HTML, for example. First let's define an **array of socials** we want to display. A good way to start is by creating a type for a **social**.

```ts
type Social = {
  shown: boolean
  label: string
  url: string
  svg: string[] // array of `d` entries for tag <path>
  viewBox?: string // svg `viewBox` (optional, deefined by the ? operator)
}
```

Then we create the array with whatever socials we want. In this example we are using icons which means you need to find an `svg` for every social. The way I set this up is by defining a collection of `d` entries for every `svg` entry. I simply went on the internet and found some in the HTML of some websites like in [GatsbyJS](https://www.gatsbyjs.com/)' footer area.

```ts
const socials: Social[] = [
  {
    shown: false,
    label: 'twitter',
    url: 'https://twitter.com/your-username',
    svg: [
      'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
    ],
  },
  {
    shown: true,
    label: 'instagram',
    url: 'https://www.instagram.com/kikogoncalves_/',
    svg: [
      'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
    ],
  },
  {
    shown: true,
    label: 'github',
    url: 'https://github.com/your-username',
    svg: [
      'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
    ],
  },
  {
    shown: true,
    label: 'linkedin',
    url: 'https://linkedin.com/in/your-username',
    svg: [
      'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
    ],
    viewBox: '0 0 512 512',
  },
]
```

Now that we have the array defined we can create the component itself.

```tsx
const Socials = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 text-gray-400 dark:text-gray-300 md:mt-0">
      {socials
        .filter(social => social.shown)
        .map((social, socialIdx) => (
          <a
            target="_blank" // open in new tab
            href={social.url} // the destination url
            key={`social-${socialIdx}`} // array maps need unique key elements
            aria-labelledby={social.label}
            className={`transition ${social.label}`} // create a css class like twitter:hover and apply the styles you see fit
          >
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              fill="currentColor"
              viewBox={social.viewBox ? social.viewBox : '0 0 24 24'} // use `0 0 24 24` if `viewBox` not provided
              aria-hidden="true"
            >
              {social.svg.map((d, dIdx) => (
                <path fillRule="evenodd" d={d} clipRule="evenodd" key={`social-${socialIdx}-svg-${dIdx}`} />
              ))}
            </svg>
          </a>
        ))}
    </div>
  )
}
```

_Et voilà_. There you have it. A resuable component for the socials of any website you create! If you don't want use the icons for any reason, a good alternative would be replacing the `svg` tag with just the label wrapped in a `span` if you wish.

```tsx{14-16}
const Socials = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 text-gray-400 dark:text-gray-300 md:mt-0">
      {socials
        .filter(social => social.shown)
        .map((social, socialIdx) => (
          <a
            target="_blank" // open in new tab
            href={social.url} // the destination url
            key={`social-${socialIdx}`} // array maps need unique key elements
            aria-labelledby={social.label}
            className={`transition ${social.label}`} // create a css class like twitter:hover and apply the styles you see fit
          >
            <span>
              {social.label}
            </span>
          </a>
        ))}
    </div>
  )
}
```
