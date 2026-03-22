import { IconButton } from '@chakra-ui/react'
import { MdSunny, MdDarkMode } from 'react-icons/md'
import { useTheme, getThemeColors } from '../context/ThemeContext'

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()
  const colors = getThemeColors(theme)

  return (
    <IconButton
      onClick={toggleTheme}
      borderRadius="full"
      bg={colors.bgCard}
      color={colors.accent}
      border={`1px solid ${colors.border}`}
      _hover={{
        borderColor: colors.accent,
        bg: colors.bgCardHover
      }}
      transition="all 0.3s ease"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <MdSunny /> : <MdDarkMode />}
    </IconButton>
  )
}
