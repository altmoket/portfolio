import { Box, Heading, SimpleGrid, Text, Badge, Link, VStack, Card } from '@chakra-ui/react'
import Section from './Section'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
    image: '🛍️',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team collaboration, and advanced filtering.',
    image: '✅',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool integrated with GPT API for creating marketing copy, blog posts, and more.',
    image: '🤖',
    tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Vercel'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization, custom reports, and user behavior tracking.',
    image: '📊',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Social Network',
    description: 'Feature-rich social network platform with messaging, notifications, and community feeds.',
    image: '👥',
    tags: ['React Native', 'Node.js', 'WebSocket', 'GraphQL'],
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Video Streaming Service',
    description: 'Streaming platform with adaptive bitrate, live streaming, and content recommendation system.',
    image: '▶️',
    tags: ['React', 'AWS', 'FFmpeg', 'Node.js'],
    link: '#',
    github: '#'
  }
]

export function Projects() {
  return (
    <Section title='Featured Projects'>
      {/* Projects Grid */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={6}
      >
        {projects.map((project) => (
          <Card.Root
            key={project.id}
            bg="#1e293b"
            borderColor="#334155"
            borderWidth={1}
            _hover={{
              borderColor: '#00d9ff',
              transform: 'translateY(-4px)',
              transition: 'all 0.3s ease'
            }}
            transition="all 0.3s ease"
          >
            <Card.Body p={6}>
              <VStack gap={4} align="start" h="full">
                {/* Image */}
                <Box
                  w="60px"
                  h="60px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="32px"
                >
                  {project.image}
                </Box>

                {/* Title */}
                <Heading
                  as="h3"
                  size="md"
                  fontWeight={600}
                  color="#f1f5f9"
                >
                  {project.title}
                </Heading>

                {/* Description */}
                <Text
                  color="#cbd5e1"
                  fontSize="sm"
                  lineHeight="1.6"
                  flex={1}
                >
                  {project.description}
                </Text>

                {/* Tags */}
                <VStack gap={2} align="start">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      bg="rgba(0, 217, 255, 0.1)"
                      color="#00d9ff"
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="4px"
                    >
                      {tag}
                    </Badge>
                  ))}
                </VStack>

                {/* Links */}
                <VStack gap={4} pt={4}>
                  <Link
                    href={project.link}
                    color="#00d9ff"
                    _hover={{ color: '#64e9ff' }}
                    display="flex"
                    alignItems="center"
                    gap={1}
                    fontSize="sm"
                  >
                    Live Demo ↗
                  </Link>
                  <Link
                    href={project.github}
                    color="#00d9ff"
                    _hover={{ color: '#64e9ff' }}
                    display="flex"
                    alignItems="center"
                    gap={1}
                    fontSize="sm"
                  >
                    GitHub ⭐
                  </Link>
                </VStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Section>
  )
}
