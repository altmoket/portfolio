import { Text, Flex } from '@chakra-ui/react'
import Section from './Section'

export function About() {
  return <Section title='About me'>
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      gap={12}
      align="start"
    >
      <Text color="#cbd5e1" lineHeight="1.8" fontSize="base">
        I'm a Full Stack Developer focused on backend systems and internal tools.
        Most of my time goes into making business logic behave and preventing data workflows
        from turning into something nobody understands a week later.

        I mainly work with TypeScript, Node.js, React and PostgreSQL.
        I like building systems that are easy to reason about, even if getting there usually involves
        questioning a few design decisions along the way.

        Day to day, I build tools, improve workflows, and occasionally fix things that somehow
        made it to production without anyone noticing. It happens.

        Based in São Paulo, trying to keep software a little more predictable than it usually is.
      </Text>
    </Flex>
  </Section>
}
