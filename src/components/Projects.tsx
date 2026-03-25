import { useState } from 'react'
import { Box, Heading, SimpleGrid, VStack, Center, useDisclosure } from '@chakra-ui/react'
import Section from './Section'
import { useTheme, getThemeColors } from '../context/ThemeContext'
import type { Project } from '../types/proyect'
import { projects } from '../store/proyects'
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
      {/* PROJECTS GRID - First 3 projects + View All Card */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
        {projects.slice(0, 3).map((project) => (
          <Box
            key={project.id}
            bg={colors.bgCard}
            border={`1px solid ${colors.border}`}
            borderRadius="12px"
            overflow="hidden"
            _hover={{
              borderColor: colors.accent,
              transform: 'translateY(-4px)',
              boxShadow: `0 8px 16px rgba(0,0,0,0.1)`
            }}
            transition="all 0.3s ease"
            cursor="pointer"
            onClick={() => handleProjectClick(project)}
          >
            {/* Project Image */}
            {project.images?.[0] && (
              <Center
                h="220px"
                bg={colors.bgCardHover}
                overflow="hidden"
                position="relative"
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Center>
            )}

            {/* Project Title */}
            <VStack align="start" gap={0} p={5}>
              <Heading size="sm" color={colors.text}>
                {project.title}
              </Heading>
            </VStack>
          </Box>
        ))}

        {/* View All Projects Card */}
        <ViewAllProjectsCard colors={colors} projects={projects} />
      </SimpleGrid>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} open={open} onClose={handleCloseModal} colors={colors} />
    </Section>
  )
}
