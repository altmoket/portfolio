import { Box, Heading, Text, VStack, SimpleGrid, Center, HStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import type { Project } from '../types/proyect'

interface ViewAllProjectsCardProps {
  colors: any
  projects?: Project[]
}

export function ViewAllProjectsCard({ colors, projects = [] }: ViewAllProjectsCardProps) {
  return (
    <RouterLink to="/projects" style={{ textDecoration: 'none' }}>
      <Box
        bg={`linear-gradient(135deg, ${colors.bgCard} 0%, ${colors.bgCardHover} 100%)`}
        border={`2px solid ${colors.accent}20`}
        borderRadius="12px"
        p={6}
        h="100%"
        _hover={{
          borderColor: colors.accent,
          boxShadow: `0 12px 24px ${colors.accent}15`,
          transform: 'translateY(-4px)'
        }}
        transition="all 0.3s ease"
        cursor="pointer"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <VStack align="start" gap={4} flex={1}>
          <Heading size="md" color={colors.accent}>
            Explore All
          </Heading>
          
          <Text fontSize="sm" color={colors.textTertiary} lineHeight="1.6">
            Discover more projects, experiments, and creative solutions
          </Text>

          {/* Project Previews Grid */}
          {projects.length > 0 && (
            <SimpleGrid 
              columns={3} 
              gap={3} 
              w="100%" 
              py={3}
              borderTop={`1px solid ${colors.border}`}
              borderBottom={`1px solid ${colors.border}`}
            >
              {projects.slice(0, 3).map((project) => (
                <Center
                  key={project.id}
                  bg={colors.bgCardHover}
                  borderRadius="8px"
                  h="60px"
                  border={`1px solid ${colors.border}`}
                  _hover={{
                    borderColor: colors.accent,
                    bg: colors.bgCard
                  }}
                  transition="all 0.2s"
                  position="relative"
                  overflow="hidden"
                >
                  {project.images?.[0] && (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  )}
                </Center>
              ))}
            </SimpleGrid>
          )}
        </VStack>

        {/* Action Button */}
        <HStack gap={2} w="100%" justify="space-between" align="center" pt={2}>
          <Text fontSize="xs" color={colors.textTertiary} fontWeight="500">
            {projects.length || 0} projects
          </Text>
          <Text color={colors.accent} fontWeight="600" fontSize="sm">
            View All →
          </Text>
        </HStack>
      </Box>
    </RouterLink>
  )
}
