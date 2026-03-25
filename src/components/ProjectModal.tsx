import { Box, Text, Badge, VStack, HStack, Button, Center, SimpleGrid } from '@chakra-ui/react'
import { Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/modal'
import type { Project } from '../types/proyect'

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onClose: () => void
  colors: any
}

export function ProjectModal({ project, open, onClose, colors }: ProjectModalProps) {
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
                  {project.images.map((image, idx) => {
                    const isEmoji = image.length <= 2 && !image.includes('/') && !image.includes('.');
                    return (
                      <Center
                        key={idx}
                        w="full"
                        h="120px"
                        bg={colors.bgCardHover}
                        borderRadius="8px"
                        border={`1px solid ${colors.border}`}
                        fontSize="48px"
                        overflow="hidden"
                      >
                        {isEmoji ? (
                          image
                        ) : (
                          <img
                            src={image}
                            alt={`${project.title} ${idx + 1}`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        )}
                      </Center>
                    );
                  })}
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
