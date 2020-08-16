import { useState, useEffect } from "react"
import { COLORS } from "../constants/variables"

const useMode = () => {
  const [mode, setMode] = useState(undefined)
  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    )
    setMode(initialColorValue)
    console.log("Hello World", mode)
  }, [])
  const setColorMode = () => {
    const value = mode === "light" ? "dark" : "light"
    const root = window.document.documentElement
    // 1. Update React color-mode state
    setMode(value)
    // 2. Update localStorage
    localStorage.setItem("color-mode", value)
    root.style.setProperty(
      "--color-text",
      value === "light" ? COLORS.light.text : COLORS.dark.text
    )
    root.style.setProperty(
      "--color-background",
      value === "light" ? COLORS.light.background : COLORS.dark.background
    )
    root.style.setProperty(
      "--color-primary",
      value === "light" ? COLORS.light.primary : COLORS.dark.primary
    )
  }
  return [mode, setColorMode]
}

export default useMode
