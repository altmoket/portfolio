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
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: [
      'Led development of scalable microservices architecture serving 100k+ daily users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored team of 5 junior developers, improving code quality and team productivity'
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Innovations Inc',
    period: '2020 - 2022',
    description: [
      'Developed and maintained React-based web applications with 99.9% uptime',
      'Designed RESTful APIs serving mobile and web clients',
      'Optimized database queries improving application performance by 40%'
    ]
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: [
      'Built responsive web applications using React and TypeScript',
      'Collaborated with design team to implement pixel-perfect UI designs',
      'Fixed critical bugs in production, ensuring system stability'
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
