import { Box, Container, Heading, VStack, Flex, Text, List } from '@chakra-ui/react'

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
    period: '2022 - Present',
    description: [
      'Work across backend and frontend using Node.js, TypeScript, React and PostgreSQL',
      'Participated in legacy backend migration from Python to Common Lisp, simplifying business logic',
      'Design and maintain FQL, an internal DSL on top of SQL to centralize query logic',
      'Contributed to CI workflows using GitHub Actions and assisted with AWS deployments'
    ]
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'CLASS Limitless',
    period: '2021-11 - 2022-02',
    description: [
      'Built REST APIs using Node.js and PostgreSQL',
      'Assisted in database design and query optimization',
      'Worked with Docker-based development environments',
      'Implemented small internal tools to improve data access for the team'
    ]
  },
  {
    id: 3,
    title: 'Frontend Developer Intern',
    company: 'Innovasoft Solutions',
    period: '2021-05 - 2021-06',
    description: [
      'Developed UI components using React and TypeScript',
      'Integrated frontend features with backend APIs',
      'Improved internal dashboards for data visualization'
    ]
  }
]

export function Experience() {
  return (
    <Box
      as="section"
      id="experience"
      bg="#0f172a"
      py={{ base: 16, md: 24 }}
      borderTopWidth={1}
      borderTopColor="#334155"
    >
      <Container maxW="1200px">
        {/* Section Header */}
        <VStack
          gap={4}
          mb={16}
          align={{ base: 'center', md: 'start' }}
        >
          <Heading
            as="h2"
            size="2xl"
            fontWeight={700}
          >
            Experience
          </Heading>
          <Box
            h="4px"
            w="60px"
            bg="linear-gradient(135deg, #00d9ff 0%, #64e9ff 100%)"
            borderRadius="2px"
          />
        </VStack>

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
                  bg="#00d9ff"
                  border="3px solid #0f172a"
                  zIndex={2}
                  mt={2}
                />
                {/* Line */}
                {index !== experiences.length - 1 && (
                  <Box
                    w="2px"
                    flex={1}
                    bg="#334155"
                    mt={4}
                    minH="120px"
                  />
                )}
              </Box>

              {/* Experience Content */}
              <Box pb={12}>
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
                      color="#f1f5f9"
                    >
                      {exp.title}
                    </Heading>
                    <Text
                      color="#00d9ff"
                      fontSize="sm"
                      fontWeight={500}
                    >
                      {exp.company}
                    </Text>
                  </VStack>
                  <Text
                    color="#cbd5e1"
                    fontSize="sm"
                    flexShrink={0}
                  >
                    {exp.period}
                  </Text>
                </Flex>

                {/* Description */}
                <List.Root
                  as="ul"
                  color="#cbd5e1"
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
      </Container>
    </Box>
  )
}
