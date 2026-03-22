import { Box, Text, SimpleGrid, VStack, Flex } from '@chakra-ui/react'
import Section from './Section'

export function About() {
  return <Section title='About me'>
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      gap={12}
      align="start"
    >
      {/* Text Content */}
      <VStack
        flex={1}
        gap={4}
        align="start"
      >
        <Text
          color="#cbd5e1"
          lineHeight="1.8"
          fontSize="base"
        >
          I'm a Full Stack Developer based in São Paulo, Brazil, experienced in building backend systems and internal tools.
          With a strong background in TypeScript, Node.js, React, and PostgreSQL, I focus on simplifying business logic
          and improving data workflows through thoughtful engineering and tooling.
        </Text>
        <Text
          color="#cbd5e1"
          lineHeight="1.8"
          fontSize="base"
        >
          At Synchronit, I work across backend and frontend, contributing to migration efforts, designing internal DSLs,
          and building tools that improve daily operations. I'm passionate about creating systems that make business logic
          clearer and query optimization more accessible to teams.
        </Text>
        <Text
          color="#cbd5e1"
          lineHeight="1.8"
          fontSize="base"
        >
          My expertise spans internal tooling, query systems, and developer workflows. I also have experience with CI/CD pipelines
          using GitHub Actions and basic AWS deployments, helping teams move faster and more confidently.
        </Text>

        {/* Stats */}
        <SimpleGrid
          columns={{ base: 1, sm: 3 }}
          gap={8}
          mt={8}
          w="full"
        >
          {[
            { number: '4+', label: 'Years Experience' },
            { number: '3+', label: 'Companies' },
            { number: '6', label: 'Tech Stack' }
          ].map((stat) => (
            <Box key={stat.label} textAlign="center">
              <Text
                fontSize="2xl"
                fontWeight={700}
                color="#00d9ff"
              >
                {stat.number}
              </Text>
              <Text
                color="#cbd5e1"
                fontSize="sm"
                mt={2}
              >
                {stat.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      {/* Image Placeholder */}
      <Box
        flex={1}
        bg="#1e293b"
        border="1px solid #334155"
        borderRadius="12px"
        p={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="300px"
      >
        <VStack gap={4} align="center">
          <Box fontSize="64px">👨‍💻</Box>
          <Text
            color="#f1f5f9"
            fontSize="lg"
            fontWeight={600}
          >
            Leandro
          </Text>
        </VStack>
      </Box>
    </Flex>
  </Section>
}
