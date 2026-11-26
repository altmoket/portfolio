import { Box, Heading, VStack, Flex, Text, List } from '@chakra-ui/react'
import Section from './Section'
import { useTheme, getThemeColors } from '../context/ThemeContext'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  location: string
  description: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Synchronit',
    period: '10/2022 - Present',
    location: 'Switzerland (remote)',
    description: [
      'Designed, built and maintained FQL, an internal DSL on top of SQL adopted by a 5-person engineering team, simplifying query writing and ensuring data consistency across the internal ecosystem.',
      'Designed and maintained the REST API engine and the multi-tenant PostgreSQL data model underpinning FQL, enabling multiple environments/clients to operate securely on shared infrastructure.',
      'Led the design and development of a full product suite around FQL — a landing page, an interactive wiki with live, runnable code examples, a no-code presentation server, a conversational AI assistant that builds and executes FQL queries in real time, and a browser-based CLI — expanding access to the DSL for both technical and non-technical users.',
      'Owned security across the FQL ecosystem, covering authentication, authorization and data isolation between tenants.',
      'Built a task-management product on top of the FQL data model, validating the DSL as a foundation for products beyond its original use case.',
      'Increased ecosystem deployment velocity by migrating infrastructure from a manual, AWS-only approach to automated GitHub Actions workflows backed by Infrastructure as Code.',
      'Reduced bugs and accelerated feature development by contributing to the migration of the legacy backend from Python to Common Lisp alongside a 5-person team.',
      "Maintained and improved Synchronit's corporate website."
    ]
  }
]

export function Experience() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)

  return (
    <Section title='Experience'>
      {/* Timeline */}
      <VStack gap={0} align="stretch">
        {experiences.map((exp, index) => (
          <Flex key={exp.id} position="relative">
            {/* Timeline Line and Dot */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mr={8}
              position="relative"
            >
              {/* Dot */}
              <Box
                w="16px"
                h="16px"
                borderRadius="50%"
                bg={colors.accent}
                border={`3px solid ${colors.bg}`}
                zIndex={2}
                mt={2}
              />
              {/* Line */}
              {index !== experiences.length - 1 && (
                <Box
                  w="2px"
                  flex={1}
                  bg={colors.border}
                  mt={4}
                  minH="120px"
                />
              )}
            </Box>

            {/* Experience Content */}
            <Box pb={12} w={'100%'}>
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                justify="space-between"
                align={{ base: 'start', sm: 'flex-start' }}
                mb={3}
                gap={4}
              >
                <VStack gap={1} align="start">
                  <Heading
                    as="h3"
                    size="md"
                    fontWeight={600}
                    color={colors.text}
                  >
                    {exp.title}
                  </Heading>
                  <Text
                    color={colors.accent}
                    fontSize="sm"
                    fontWeight={500}
                  >
                    {exp.company}
                  </Text>
                </VStack>
                <VStack gap={1} align={{ base: 'start', sm: 'end' }} flexShrink={0}>
                  <Text color={colors.textSecondary} fontSize="sm">
                    {exp.period}
                  </Text>
                  <Text color={colors.textTertiary} fontSize="sm">
                    {exp.location}
                  </Text>
                </VStack>
              </Flex>

              {/* Description */}
              <List.Root
                as="ul"
                color={colors.textSecondary}
                fontSize="sm"
                gap={2}
                pl={6}
              >
                {exp.description.map((desc, idx) => (
                  <List.Item key={idx} lineHeight="1.6">
                    {desc}
                  </List.Item>
                ))}
              </List.Root>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Section>
  )
}
