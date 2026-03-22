import { Box, Container, Flex, Heading, Text, Button, Stack, VStack } from '@chakra-ui/react'

export function Hero() {
  return (
    <Box
      as="section"
      bg="#0f172a"
      py={{ base: 16, md: 24 }}
    >
      <Container maxW="1200px">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={12}
          align="center"
        >
          {/* Text Content */}
          <VStack
            flex={1}
            gap={6}
            align="start"
          >
            <Heading
              as="h1"
              size="2xl"
              fontWeight={900}
              lineHeight="1.2"
            >
              Hi, I'm{' '}
              <Box
                as="span"
                background="linear-gradient(135deg, #00d9ff 0%, #64e9ff 100%)"
                backgroundClip="text"
                color="transparent"
              >
                Leandro
              </Box>
            </Heading>
            
            <Heading
              as="p"
              size="lg"
              fontWeight={400}
              color="#cbd5e1"
            >
              Full Stack Developer
            </Heading>

            <Text
              fontSize="base"
              color="#cbd5e1"
              maxW="sm"
              lineHeight="1.8"
            >
              Full Stack Developer experienced in building backend systems and internal tools using TypeScript, Node.js, React and PostgreSQL. Focused on simplifying business logic and improving data workflows.
            </Text>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              gap={4}
              pt={4}
            >
              <Button
                bg="#00d9ff"
                color="#0f172a"
                fontWeight={600}
                px={6}
                py={6}
                _hover={{ bg: '#64e9ff', transform: 'translateY(-2px)' }}
                transition="all 0.3s ease"
              >
                View My Work
              </Button>
              <Button
                bg="transparent"
                color="#00d9ff"
                border="2px solid #00d9ff"
                fontWeight={600}
                px={6}
                py={6}
                _hover={{ bg: 'rgba(0, 217, 255, 0.1)', transform: 'translateY(-2px)' }}
                transition="all 0.3s ease"
              >
                Download CV
              </Button>
            </Stack>
          </VStack>

          {/* Code Box */}
          <Box
            flex={1}
            bg="#1e293b"
            border="1px solid #334155"
            borderRadius="8px"
            p={6}
            fontFamily="'Monaco', 'Courier New', monospace"
            fontSize="sm"
            color="#64e9ff"
          >
            <Box
              pb={4}
              borderBottomWidth={1}
              borderBottomColor="#334155"
              mb={4}
            >
              <Text fontWeight={600}>~/leandro</Text>
            </Box>
            <VStack
              gap={2}
              align="start"
            >
              <Box>
                <Box as="span" color="#00d9ff">const</Box> expertise{' '}
                = <Box as="span" color="#10b981">"Backend & Tooling"</Box>
              </Box>
              <Box>
                <Box as="span" color="#00d9ff">const</Box> focus{' '}
                = <Box as="span" color="#10b981">"Query Systems"</Box>
              </Box>
              <Box>
                <Box as="span" color="#00d9ff">const</Box> location{' '}
                = <Box as="span" color="#10b981">"São Paulo, Brazil"</Box>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
