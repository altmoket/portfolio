import { Box, Heading, VStack } from "@chakra-ui/react";

const Section = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  return <Box >
    <VStack
      gap={4}
      mb={8}
      align={{ base: 'center', md: 'start' }}
    >
      {title && <>
        <Heading
          as="h2"
          size="2xl"
          fontWeight={700}
        >
          {title}
        </Heading>
        <Box
          h="4px"
          w="60px"
          bg="linear-gradient(135deg, #00d9ff 0%, #64e9ff 100%)"
          borderRadius="2px"
        />
      </>
      }
    </VStack>
    {children}
  </Box>
}

export default Section