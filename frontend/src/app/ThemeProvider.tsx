import { useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import {
  ThemeContext,
  type ThemeContextValue,
  type ThemeMode,
} from './theme-context'

const STORAGE_KEY = 'exposure-guard-theme'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode)

  useEffect(() => {
    document.documentElement.dataset.theme = mode
    document.documentElement.style.colorScheme = mode
    window.localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      setMode,
      toggleMode: () => {
        setMode((current) => (current === 'dark' ? 'light' : 'dark'))
      },
    }),
    [mode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
