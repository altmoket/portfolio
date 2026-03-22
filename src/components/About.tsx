import { Box, Container, Heading, Text, SimpleGrid, VStack, Flex } from '@chakra-ui/react'

export function About() {
  return (
    <Box
      as="section"
      id="about"
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
            About Me
          </Heading>
          <Box
            h="4px"
            w="60px"
            bg="linear-gradient(135deg, #00d9ff 0%, #64e9ff 100%)"
            borderRadius="2px"
          />
        </VStack>

        {/* Content */}
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
              I'm a passionate developer with a love for creating clean, efficient code and beautiful user interfaces.
              With over 5 years of experience in web development, I've worked with startups and established companies
              to deliver high-quality digital solutions.
            </Text>
            <Text
              color="#cbd5e1"
              lineHeight="1.8"
              fontSize="base"
            >
              I specialize in building scalable applications with modern technologies like React, TypeScript, and Node.js.
              My approach combines technical excellence with a deep understanding of user experience and business goals.
            </Text>
            <Text
              color="#cbd5e1"
              lineHeight="1.8"
              fontSize="base"
            >
              When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs,
              or exploring new technologies to stay ahead in this fast-paced industry.
            </Text>

            {/* Stats */}
            <SimpleGrid
              columns={{ base: 1, sm: 3 }}
              gap={8}
              mt={8}
              w="full"
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '5+', label: 'Years' },
                { number: '30+', label: 'Clients' }
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
                Leonardo
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
