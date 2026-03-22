import { HStack, Badge } from '@chakra-ui/react'
import Section from './Section'
import { useTheme, getThemeColors } from '../context/ThemeContext'

const skills = [
  'TypeScript',
  'Node.js',
  'React',
  'PostgreSQL',
  'Docker',
  'GitHub Actions',
  'Python',
  'Common Lisp'
]

export function Skills() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)

  return (
    <Section title="Stack">
      <HStack align="center" gap={3} wrap="wrap">
        {skills.map(skill => (
          <Badge
            key={skill}
            bg={colors.bgCard}
            color={colors.text}
            border={`1px solid ${colors.border}`}
            px={3}
            py={2}
            borderRadius="full"
            fontSize="sm"
            _hover={{
              borderColor: colors.accent,
              color: colors.accent,
              transform: 'translateY(-2px)',
              bg: colors.bgCardHover
            }}
            transition="all 0.2s ease"
          >
            {skill}
          </Badge>
        ))}

      </HStack>
    </Section>
  )
}
