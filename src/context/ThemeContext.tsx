import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    return saved || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const colors = {
  dark: {
    bg: '#171816',
    bgCard: '#0f172a',
    bgCardHover: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#cbd5e1',
    textTertiary: '#94a3b8',
    border: '#334155',
    accent: '#0ea5e9',
    accentLight: '#06b6d4',
    cyan: '#00d9ff'
  },
  light: {
    bg: '#ffffff',
    bgCard: '#f8fafc',
    bgCardHover: '#f1f5f9',
    text: '#0f172a',
    textSecondary: '#475569',
    textTertiary: '#64748b',
    border: '#cbd5e1',
    accent: '#0ea5e9',
    accentLight: '#06b6d4',
    cyan: '#0ea5e9'
  }
}

export function getThemeColors(theme: Theme) {
  return colors[theme]
}
