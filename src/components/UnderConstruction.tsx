import { HStack, Text } from '@chakra-ui/react'
import { LuConstruction } from 'react-icons/lu'
import { useTheme, getThemeColors } from '../context/ThemeContext'

export function UnderConstruction() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)
  const amber = theme === 'dark' ? '#fbbf24' : '#b45309'

  return (
    <HStack
      role="status"
      alignSelf={{ base: 'center', md: 'flex-start' }}
      gap={2}
      px={4}
      py={2}
      borderRadius="full"
      bg={colors.bgCard}
      border={`1px solid ${amber}`}
      color={amber}
      fontSize="sm"
    >
      <LuConstruction aria-hidden />
      <Text>This portfolio is still under construction</Text>
    </HStack>
  )
}
