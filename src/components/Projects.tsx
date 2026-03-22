import { Box, Heading, SimpleGrid, Text, Badge, Link, VStack, HStack } from '@chakra-ui/react'
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

const featured = {
  title: 'Price Comparator',
  description:
    'Tool to compare supermarket prices and optimize shopping decisions based on real data.',
  tags: ['React', 'Node.js', 'PostgreSQL'],
  link: '#',
  github: '#'
}

export function Projects() {
  return (
    <Section title="Projects">
      
      {/* FEATURED PROJECT */}
      <Box
        bg="#0f172a"
        border="1px solid #334155"
        borderRadius="12px"
        p={8}
        mb={10}
        _hover={{
          borderColor: '#0ea5e9',
          bg: '#1e293b'
        }}
        transition="all 0.3s ease"
      >
        <VStack align="start" gap={4}>
          <Heading size="lg">{featured.title}</Heading>

          <Text color="#94a3b8" maxW="lg">
            {featured.description}
          </Text>

          <HStack>
            {featured.tags.map(tag => (
              <Badge key={tag} bg="#1e293b" color="#0ea5e9" border="1px solid #334155">
                {tag}
              </Badge>
            ))}
          </HStack>

          <HStack gap={6} pt={2}>
            <Link href={featured.link} color="#0ea5e9" _hover={{ color: '#06b6d4' }}>
              Live ↗
            </Link>
            <Link href={featured.github} color="#0ea5e9" _hover={{ color: '#06b6d4' }}>
              Code →
            </Link>
          </HStack>
        </VStack>
      </Box>

      {/* OTHER PROJECTS */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {projects.slice(1).map((project) => (
          <Box
            key={project.id}
            bg="#0f172a"
            border="1px solid #334155"
            borderRadius="10px"
            p={5}
            _hover={{
              borderColor: '#0ea5e9',
              bg: '#1e293b',
              transform: 'translateY(-2px)'
            }}
            transition="all 0.3s ease"
          >
            <VStack align="start" gap={3}>
              <Heading size="sm">{project.title}</Heading>

              <Text fontSize="sm" color="#94a3b8">
                {project.description}
              </Text>

              <HStack wrap="wrap">
                {project.tags.map(tag => (
                  <Badge key={tag} fontSize="xs" bg="#1e293b" color="#0ea5e9" border="1px solid #334155">
                    {tag}
                  </Badge>
                ))}
              </HStack>

              <HStack gap={4} pt={2}>
                <Link href={project.link} fontSize="sm" color="#0ea5e9" _hover={{ color: '#06b6d4' }}>
                  Live
                </Link>
                <Link href={project.github} fontSize="sm" color="#0ea5e9" _hover={{ color: '#06b6d4' }}>
                  Code
                </Link>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  )
}
