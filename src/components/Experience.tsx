import { Box, Heading, VStack, Flex, Text, List } from '@chakra-ui/react'
import Section from './Section'
import { useTheme, getThemeColors } from '../context/ThemeContext'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Synchronit',
    period: '10/2022 - Present',
    description: [
      'Work across backend and frontend using Node.js, TypeScript, React and PostgreSQL',
      'Participated in the migration of a legacy backend from Python to Common Lisp, helping simplify business logic and data handling',
      'Design and maintain FQL, an internal DSL on top of SQL used to centralize query logic',
      'Contributed to an internal assistant that translates natural language into FQL queries and executes them against the database',
      'Helped build internal tools including dashboards, lightweight documentation tools, JavaScript utilities and a browser-based CLI',
      'Contribute to CI workflows using GitHub Actions and assist with basic AWS deployments'
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'CLASS Limitless',
    period: '12/2021 - 01/2022',
    description: [
      'Built REST APIs using Node.js and PostgreSQL',
      'Assisted in database design and query optimization',
      'Worked with Docker-based development environments',
      'Implemented small internal tools to improve data access for the team',
      'Collaborated with frontend developers to integrate APIs with React applications'
    ]
  },
  {
    id: 3,
    title: 'Full Stack Developer Intern',
    company: 'Grupo de Electronica para el Turismo, GET',
    period: '01/2021 - 07/2021',
    description: [
      'Developed UI components using React',
      'Integrated frontend features with backend APIs',
      'Improved internal dashboards for data visualization'
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
                <Text
                  color={colors.textSecondary}
                  fontSize="sm"
                  flexShrink={0}
                >
                  {exp.period}
                </Text>
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
