import { Box, Heading, VStack } from "@chakra-ui/react";
import { useTheme, getThemeColors } from "../context/ThemeContext"

const Section = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)

  return <Box w={'100%'}>
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
          color={colors.text}
        >
          {title}
        </Heading>
        <Box
          h="4px"
          w="60px"
          bg={theme === 'dark' 
            ? "linear-gradient(135deg, #00d9ff 0%, #64e9ff 100%)"
            : "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)"
          }
          borderRadius="2px"
        />
      </>
      }
    </VStack>
    {children}
  </Box>
}

export default Section