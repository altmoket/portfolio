import { Box, Heading, VStack, Flex, Text } from '@chakra-ui/react'
import Section from './Section'
import { useTheme, getThemeColors } from '../context/ThemeContext'

interface EducationEntry {
  id: number
  institution: string
  area: string
  period: string
  location: string
  summary: string
}

const education: EducationEntry[] = [
  {
    id: 1,
    institution: 'Havana University',
    area: 'Computer Science',
    period: '09/2018 - 06/2021',
    location: 'Havana, Cuba',
    summary: 'Completed three years of undergraduate studies before moving into full-time software development.'
  }
]

export function Education() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)

  return (
    <Section title='Education'>
      <VStack gap={8} align="stretch">
        {education.map(entry => (
          <Box key={entry.id}>
            <Flex
              direction={{ base: 'column', sm: 'row' }}
              justify="space-between"
              align={{ base: 'start', sm: 'flex-start' }}
              mb={3}
              gap={4}
            >
              <VStack gap={1} align="start">
                <Heading as="h3" size="md" fontWeight={600} color={colors.text}>
                  {entry.institution}
                </Heading>
                <Text color={colors.accent} fontSize="sm" fontWeight={500}>
                  {entry.area}
                </Text>
              </VStack>
              <VStack gap={1} align={{ base: 'start', sm: 'end' }} flexShrink={0}>
                <Text color={colors.textSecondary} fontSize="sm">
                  {entry.period}
                </Text>
                <Text color={colors.textTertiary} fontSize="sm">
                  {entry.location}
                </Text>
              </VStack>
            </Flex>
            <Text color={colors.textSecondary} fontSize="sm" lineHeight="1.6">
              {entry.summary}
            </Text>
          </Box>
        ))}
      </VStack>
    </Section>
  )
}
