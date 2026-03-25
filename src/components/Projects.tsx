import { useState } from 'react'
import { Box, Heading, SimpleGrid, Text, Badge, VStack, HStack, useDisclosure } from '@chakra-ui/react'
import Section from './Section'
import { useTheme, getThemeColors } from '../context/ThemeContext'
import type { Project } from '../types/proyect'
import { featuredProject, projects } from '../store/proyects'
import { ProjectModal } from './ProjectModal'
import { ViewAllProjectsCard } from './ViewAllProjectsCard'

export function Projects() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { open, onOpen, onClose } = useDisclosure()

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    onOpen()
  }

  const handleCloseModal = () => {
    onClose()
    setSelectedProject(null)
  }

  return (
    <Section title="Projects">
      
      {/* FEATURED PROJECT */}
      <Box
        bg={colors.bgCard}
        border={`1px solid ${colors.border}`}
        borderRadius="12px"
        p={8}
        mb={10}
        _hover={{
          borderColor: colors.accent,
          bg: colors.bgCardHover,
          cursor: 'pointer'
        }}
        transition="all 0.3s ease"
        onClick={() => handleProjectClick(featuredProject)}
      >
        <VStack align="start" gap={4}>
          <Heading size="lg" color={colors.text}>{featuredProject.title}</Heading>

          <Text color={colors.textTertiary} maxW="lg">
            {featuredProject.description}
          </Text>

          <HStack>
            {featuredProject.tags.map(tag => (
              <Badge key={tag} bg={colors.bgCardHover} color={colors.accent} border={`1px solid ${colors.border}`}>
                {tag}
              </Badge>
            ))}
          </HStack>

          <HStack gap={6} pt={2}>
            {featuredProject.live && (
              <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>
                Live ↗
              </a>
            )}
            <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" style={{ color: colors.accent }}>
              Code →
            </a>
          </HStack>
        </VStack>
      </Box>

      {/* OTHER PROJECTS */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {projects.slice(1, 4).map((project) => (
          <Box
            key={project.id}
            bg={colors.bgCard}
            border={`1px solid ${colors.border}`}
            borderRadius="10px"
            p={5}
            _hover={{
              borderColor: colors.accent,
              bg: colors.bgCardHover,
              transform: 'translateY(-2px)',
              cursor: 'pointer'
            }}
            transition="all 0.3s ease"
            onClick={() => handleProjectClick(project)}
          >
            <VStack align="start" gap={3}>
              <Heading size="sm" color={colors.text}>{project.title}</Heading>

              <Text fontSize="sm" color={colors.textTertiary}>
                {project.description}
              </Text>

              <HStack wrap="wrap">
                {project.tags.map(tag => (
                  <Badge key={tag} fontSize="xs" bg={colors.bgCardHover} color={colors.accent} border={`1px solid ${colors.border}`}>
                    {tag}
                  </Badge>
                ))}
              </HStack>

              <HStack gap={4} pt={2}>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: colors.accent }} onClick={(e) => e.stopPropagation()}>
                    Live
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: colors.accent }} onClick={(e) => e.stopPropagation()}>
                  Code
                </a>
              </HStack>
            </VStack>
          </Box>
        ))}
        
        {/* View All Projects Card */}
        <ViewAllProjectsCard colors={colors} />
      </SimpleGrid>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} open={open} onClose={handleCloseModal} colors={colors} />
    </Section>
  )
}
