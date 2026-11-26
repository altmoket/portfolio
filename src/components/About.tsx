import { Text, Flex } from '@chakra-ui/react'
import Section from './Section'
import { useTheme, getThemeColors } from '../context/ThemeContext'

export function About() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)

  return <Section title='About me'>
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      gap={12}
      align="start"
    >
      <Text color={colors.textSecondary} lineHeight="1.8" fontSize="base">
        I'm a Full Stack Developer focused on backend systems and internal tools.
        Most of my time goes into making business logic behave and preventing data workflows
        from turning into something nobody understands a week later.

        I mainly work with TypeScript, Node.js, React, PostgreSQL and Common Lisp.
        At Synchronit I design and build FQL, an internal DSL on top of SQL, and the product
        ecosystem around it: a REST API engine, a multi-tenant PostgreSQL architecture,
        interactive documentation, a conversational AI assistant and browser-based tooling.

        I also own security and CI/CD for that ecosystem, which mostly means GitHub Actions,
        AWS and Infrastructure as Code, and occasionally fixing things that somehow
        made it to production without anyone noticing. It happens.

        Based in São Paulo, trying to keep software a little more predictable than it usually is.
      </Text>
    </Flex>
  </Section>
}
