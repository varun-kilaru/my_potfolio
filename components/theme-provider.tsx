"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
  attribute?: string
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  enableSystem = true,
  attribute = "data-theme",
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (defaultTheme as Theme) || "dark"
  )

  useEffect(() => {
    const root = window.document.documentElement;

    const getSystemTheme = (): Theme => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    };

    const resolvedTheme = theme === 'system' && enableSystem ? getSystemTheme() : theme;

    const removeThemes = () => {
      root.classList.remove('light', 'dark');
    };

    if (attribute === 'class') {
      removeThemes();
      root.classList.add(resolvedTheme);
    } else {
      root.setAttribute(attribute, resolvedTheme);
    }

    if (storageKey) {
      localStorage.setItem(storageKey, theme);
    }

    return () => {
      if (attribute === 'class') {
        root.classList.remove(resolvedTheme);
      } else {
        root.removeAttribute(attribute);
      }
    };
  }, [theme, attribute, storageKey, enableSystem]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}