import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface ViewAllProjectsCardProps {
  colors: any
}

export function ViewAllProjectsCard({ colors }: ViewAllProjectsCardProps) {
  return (
    <Box
      bg={colors.bgCard}
      border={`1px solid ${colors.border}`}
      borderRadius="10px"
      p={5}
      _hover={{
        borderColor: colors.accent,
        bg: colors.bgCardHover,
        transform: 'translateY(-2px)'
      }}
      transition="all 0.3s ease"
      cursor="pointer"
    >
      <VStack align="center" justify="center" gap={4} py={8}>
        <Text fontSize="2xl">✨</Text>
        <Heading size="sm" color={colors.text} textAlign="center">
          More Projects
        </Heading>
        <Text fontSize="sm" color={colors.textTertiary} textAlign="center">
          Explore all my projects and experiments
        </Text>
        <RouterLink to="/projects">
          <Button colorScheme="blue" variant="outline" size="sm">
            View All →
          </Button>
        </RouterLink>
      </VStack>
    </Box>
  )
}
