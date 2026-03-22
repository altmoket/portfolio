import { Box, Container, VStack } from '@chakra-ui/react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'

function App() {
  return (
    <Box
      w="100%"
      overflowX="hidden"
      bg="#171816"
      color="#f1f5f9"
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    >
      <Container maxW="1200px" py={{ base: 16, md: 24 }}>
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

export default App