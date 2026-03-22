import { Box, Heading, SimpleGrid, Text, Badge, Link, VStack, HStack } from '@chakra-ui/react'
import Section from './Section'
import { useTheme, getThemeColors } from '../context/ThemeContext'

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
  const { theme } = useTheme()
  const colors = getThemeColors(theme)

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
          bg: colors.bgCardHover
        }}
        transition="all 0.3s ease"
      >
        <VStack align="start" gap={4}>
          <Heading size="lg" color={colors.text}>{featured.title}</Heading>

          <Text color={colors.textTertiary} maxW="lg">
            {featured.description}
          </Text>

          <HStack>
            {featured.tags.map(tag => (
              <Badge key={tag} bg={colors.bgCardHover} color={colors.accent} border={`1px solid ${colors.border}`}>
                {tag}
              </Badge>
            ))}
          </HStack>

          <HStack gap={6} pt={2}>
            <Link href={featured.link} color={colors.accent} _hover={{ color: colors.accentLight }}>
              Live ↗
            </Link>
            <Link href={featured.github} color={colors.accent} _hover={{ color: colors.accentLight }}>
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
                <Link href={project.link} fontSize="sm" color={colors.accent} _hover={{ color: colors.accentLight }}>
                  Live
                </Link>
                <Link href={project.github} fontSize="sm" color={colors.accent} _hover={{ color: colors.accentLight }}>
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
