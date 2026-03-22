import { Box, Heading, SimpleGrid, Card, Text, VStack, HStack } from '@chakra-ui/react'
import Section from './Section'

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    skills: ['TypeScript', 'JavaScript', 'Node.js', 'React', 'PostgreSQL', 'Common Lisp']
  },
  {
    name: 'Backend Development',
    skills: ['REST APIs', 'Query Optimization', 'Database Design', 'Docker', 'CI/CD', 'Microservices']
  },
  {
    name: 'Tooling & Infrastructure',
    skills: ['GitHub Actions', 'Docker', 'AWS (basic)', 'Internal DSLs', 'SQL', 'Query Systems']
  },
  {
    name: 'Focus Areas',
    skills: ['Backend Development', 'Internal Tooling', 'Query Systems', 'Developer Workflows']
  }
]

export function Skills() {
  return (
    <Section title="Skills & Expertise">
      {/* Skills Grid */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap={6}
      >
        {skillCategories.map((category) => (
          <Card.Root
            key={category.name}
            bg="#1e293b"
            borderColor="#334155"
            borderWidth={1}
            _hover={{
              borderColor: '#00d9ff',
              transform: 'translateY(-4px)',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.1)'
            }}
            transition="all 0.3s ease"
          >
            <Card.Body p={6}>
              <VStack gap={4} align="start">
                {/* Category Title */}
                <Heading
                  as="h3"
                  size="md"
                  fontWeight={600}
                  color="#f1f5f9"
                >
                  {category.name}
                </Heading>

                {/* Skills List */}
                <VStack gap={3} align="start" w="full">
                  {category.skills.map((skill) => (
                    <HStack key={skill} gap={3}>
                      <Box
                        w="8px"
                        h="8px"
                        borderRadius="50%"
                        bg="#00d9ff"
                        flexShrink={0}
                      />
                      <Text
                        color="#cbd5e1"
                        fontSize="sm"
                      >
                        {skill}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Section>
  )
}
