import { useEffect, useState } from 'react'

const useLocalStorage = (key: string, initialValue?: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      }
    } catch (error) {
      console.warn(error)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      if (typeof window !== 'undefined') {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(error)
    }
  }
  return [storedValue, setValue]
}

const usePageVisits = (path: string) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const page = path[0] === '/' ? path.slice(1, path.length) : path
    const operation = process.env.NODE_ENV === 'development' ? 'get' : 'hit'
    const url = `https://api.countapi.xyz/${operation}/kikogoncalves.com/${page}`

    fetch(url)
      .then((response) => response.json())
      .then((response) => setCount(parseInt(response.value)))
  }, [])

  return count
}

export default usePageVisits
