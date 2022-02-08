import React from "react"
import { Icon } from "@iconify/react"
import { FaBook, FaBriefcase, FaFile, FaHome, FaUser } from "react-icons/fa"

export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

export const toggleText = e => {
  e.preventDefault()
  let textDiv = document.getElementsByClassName("minimized")
  let toggleBtn = document.getElementById("toggleDescription")
  if (textDiv[0].classList.contains("hidden")) {
    textDiv[0].classList.remove("hidden")
    toggleBtn.innerHTML = "less"
  } else {
    textDiv[0].classList.add("hidden")
    toggleBtn.innerHTML = "more"
  }
}

export const setCurrent = (url, navigation) => {
  let i = url.lastIndexOf("/")
  let j = url.lastIndexOf("/", url.lastIndexOf("/") - 1)
  let token = url.substring(i + 1)
  let special = url.substring(j + 1)

  let found = false
  navigation.forEach((item, index) => {
    let t = token.toLowerCase()
    let s = special.toLowerCase()
    let mt = item.name.toLowerCase()
    let ms = mt + "/"

    if (t === mt || s === ms) {
      navigation[index].current = true
      found = true
    } else {
      navigation[index].current = false
    }
  })

  if (!found) {
    navigation[0].current = true
  }
}

export const buildItems = special => {
  let colors = [
    "blue-300",
    "teal-300",
    "purple-300",
    "rose-300",
    "slate-300",
    "orange-300",
    "green-300",
    "indigo-300",
    "amber-200",
    "pink-300",
    "sky-300",
  ]

  let globs = []
  for (let i = 0; i < colors.length; i++) {
    let odd = i % 2
    globs.push({
      top: i * 10,
      class: `bg-${colors[i]} absolute -${
        odd ? `right` : `left`
      }-80 w-64 h-64 rounded-5xl filter blur-lg animate-${odd ? `a` : `b`}`,
    })
  }

  console.log(globs)

  if (!special) return globs.slice(0, 5)
  else {
    let items = []
    colors.sort(() => Math.random() - 0.5)
    let n = randomNum(5, colors.length)
    for (let i = 0; i < n; i++) {
      items.push(globs[i])
    }
    return items
  }
}

export const links = [
  {
    name: "Github",
    icon: (
      <Icon
        icon="akar-icons:github-fill"
        color="#333"
        className="text-lg lg:text-3xl sm:text-2xl"
      />
    ),
    href: "https://github.com/kiko-g",
  },
  {
    name: "Linkedin",
    icon: (
      <Icon
        icon="logos:linkedin-icon"
        color="#39e09b"
        className="text-lg lg:text-3xl sm:text-2xl"
      />
    ),
    href: "https://linkedin.com/in/kikogoncalves",
  },
  {
    name: "Twitter",
    icon: (
      <Icon
        icon="simple-icons:twitter"
        color="#1da1f2"
        className="text-lg lg:text-3xl sm:text-2xl"
      />
    ),
    href: "https://twitter.com/kikogoncalves_",
  },
  {
    name: "Linktree",
    icon: (
      <Icon
        icon="simple-icons:linktree"
        color="#39e09b"
        className="text-lg lg:text-3xl sm:text-2xl"
      />
    ),
    href: "https://linktr.ee/kikogoncalves",
  },
]

export const navigation = [
  {
    name: "Home",
    href: "/",
    icon: <FaHome className="text-slate-200 mt-2 mr-1.5" size="13" />,
    current: true,
  },
  {
    name: "Me",
    href: "/me",
    icon: <FaUser className="text-slate-200 mt-2 mr-1.5" size="13" />,
    current: false,
  },
  {
    name: "CV",
    href: "/cv",
    icon: <FaFile className="text-slate-200 mt-2 mr-1.5" size="13" />,
    current: false,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <FaBook className="text-slate-200 mt-2 mr-1.5" size="13" />,
    current: false,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: <FaBriefcase className="text-slate-200 mt-2 mr-1.5" size="13" />,
    current: false,
  },
]
