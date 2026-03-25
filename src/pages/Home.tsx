
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Experience } from '../components/Experience'
import { Box, Container, VStack } from '@chakra-ui/react'
import { getThemeColors, useTheme } from '../context/ThemeContext'
import { ThemeSwitcher } from '../components/ThemeSwitcher'

export function HomePage() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)

  return (
    <Box
      w="100%"
      overflowX="hidden"
      bg={colors.bg}
      color={colors.text}
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
      transition="all 0.3s ease"
      minH="100vh"
    >
      <Container maxW="1200px" py={{ base: 16, md: 24 }} position="relative">
        <Box position="fixed" top={6} right={6} zIndex={10}>
          <ThemeSwitcher />
        </Box>
        <VStack gap={10} align={'flex-start'}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </VStack>
      </Container>
    </Box>
  )
}