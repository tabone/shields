import { useEffect, useState } from "react"

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number,
    height: number
  }>(
    () => ({
      width: window.innerWidth,
      height: window.innerHeight
    })
  )

  useEffect(() => {
    const listener = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize", listener)

    return () => window.removeEventListener('resize', listener)
  }, [])

  return windowSize
}
