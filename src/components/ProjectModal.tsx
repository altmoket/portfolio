import { Box, Text, Badge, VStack, HStack, Button, Center, SimpleGrid, Dialog } from '@chakra-ui/react'
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
    <Dialog.Root open={open} onOpenChange={(e: any) => !e.open && onClose()} placement={'center'}>
      <Dialog.Backdrop backdropFilter="blur(4px)" />

      <Dialog.Positioner>
        <Dialog.Content
          bg={colors.bgCard}
          border="1px solid"
          borderColor={colors.border}
          boxShadow="0 20px 60px rgba(0,0,0,0.3)"
          maxW="900px"
          borderRadius="12px"
        >
          <Dialog.Header>
            <Dialog.Title style={{ color: colors.text }}>
              {project.title}
            </Dialog.Title>
          </Dialog.Header>

          <Dialog.CloseTrigger />

          <Dialog.Body>
            <VStack gap={6} align="start" w="full">
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
                    <Badge
                      key={tag}
                      bg={colors.bgCardHover}
                      color={colors.accent}
                      border={`1px solid ${colors.border}`}
                      px="2"
                      py="1"
                      borderRadius="6px"
                      fontSize="xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </Dialog.Body>

          <Dialog.Footer>
            <HStack gap={3}>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" colorScheme="blue">
                    Live ↗
                  </Button>
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button size="sm" colorScheme="blue">
                  Code →
                </Button>
              </a>
            </HStack>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}
