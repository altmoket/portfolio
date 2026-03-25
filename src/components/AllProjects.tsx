import { useState } from 'react'
import { Box, Heading, SimpleGrid, Text, Badge, VStack, HStack, Button, useDisclosure, Center, Container } from '@chakra-ui/react'
import { Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/modal'
import { Link as RouterLink } from 'react-router-dom'
import { useTheme, getThemeColors } from '../context/ThemeContext'
import type { Project } from '../types/proyect'
import { projects } from '../store/proyects'

function ProjectModal({ project, open, onClose, colors }: { project: Project | null; open: boolean; onClose: () => void; colors: any }) {
  if (!project) return null

  return (
    <Modal isOpen={open} onClose={onClose} size="xl">
      <ModalContent bg={colors.bgCard} border={`1px solid ${colors.border}`}>
        <ModalHeader color={colors.text}>{project.title}</ModalHeader>
        <ModalCloseButton color={colors.textTertiary} />
        <ModalBody>
          <VStack gap={6} align="start">
            {/* Images Gallery */}
            {project.images && project.images.length > 0 && (
              <Box w="full">
                <Text fontSize="sm" fontWeight="600" color={colors.textTertiary} mb={3}>
                  Preview
                </Text>
                <SimpleGrid columns={{ base: 2, md: 3 }} gap={3}>
                  {project.images.map((image, idx) => (
                    <Center
                      key={idx}
                      w="full"
                      h="120px"
                      bg={colors.bgCardHover}
                      borderRadius="8px"
                      border={`1px solid ${colors.border}`}
                      fontSize="48px"
                    >
                      {image}
                    </Center>
                  ))}
                </SimpleGrid>
              </Box>
            )}

            {/* Description */}
            <Box w="full">
              <Text fontSize="sm" fontWeight="600" color={colors.textTertiary} mb={2}>
                Description
              </Text>
              <Text color={colors.text}>{project.description}</Text>
            </Box>

            {/* Tags */}
            <Box w="full">
              <Text fontSize="sm" fontWeight="600" color={colors.textTertiary} mb={2}>
                Technologies
              </Text>
              <HStack wrap="wrap" gap={2}>
                {project.tags.map(tag => (
                  <Badge key={tag} bg={colors.bgCardHover} color={colors.accent} border={`1px solid ${colors.border}`}>
                    {tag}
                  </Badge>
                ))}
              </HStack>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter gap={3}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button colorScheme="blue" variant="outline" size="sm">
                Live ↗
              </Button>
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button colorScheme="blue" size="sm">
              Code →
            </Button>
          </a>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export function AllProjects() {
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
    <Container maxW="6xl" py={12}>
      {/* Header with Back Link */}
      <VStack gap={8} align="start">
        <RouterLink to="/">
          <Button variant="ghost" colorScheme="blue" size="sm" mb={4}>
            ← Back to Home
          </Button>
        </RouterLink>

        <Box>
          <Heading size="2xl" color={colors.text} mb={4}>
            All Projects
          </Heading>
          <Text color={colors.textTertiary} maxW="2xl">
            Explore all my projects and side experiments. Click on any project to see more details, images, and links.
          </Text>
        </Box>

        {/* All Projects Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
          {projects.map((project) => (
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
              <VStack align="start" gap={3} h="full">
                {/* Project Image/Icon */}
                {project.images && project.images.length > 0 && (
                  <Center w="full" h="80px" bg={colors.bgCardHover} borderRadius="8px" fontSize="40px" mb={2}>
                    {project.images[0]}
                  </Center>
                )}

                <Heading size="sm" color={colors.text}>
                  {project.title}
                </Heading>

                <Text fontSize="sm" color={colors.textTertiary} flex={1}>
                  {project.description}
                </Text>

                <HStack wrap="wrap" gap={1}>
                  {project.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} fontSize="xs" bg={colors.bgCardHover} color={colors.accent} border={`1px solid ${colors.border}`}>
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge fontSize="xs" bg={colors.bgCardHover} color={colors.accent} border={`1px solid ${colors.border}`}>
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </HStack>

                <HStack gap={4} pt={2} w="full">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: colors.accent }} onClick={(e) => e.stopPropagation()}>
                      Live ↗
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: colors.accent }} onClick={(e) => e.stopPropagation()}>
                    Code →
                  </a>
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} open={open} onClose={handleCloseModal} colors={colors} />
    </Container>
  )
}
