import { SimpleGrid, VStack, Text, Link } from '@chakra-ui/react'
import Section from './Section'

export function Footer() {
  const footerSections = [
    {
      title: 'Leandro Dev',
      items: ['Building amazing digital experiences one project at a time.']
    },
    {
      title: 'Quick Links',
      items: [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Social',
      items: [
        { label: 'GitHub', href: '#' },
        { label: 'LinkedIn', href: '#' },
        { label: 'Twitter', href: '#' }
      ]
    }
  ]

  return (
    <Section>
      {/* Footer Sections */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={8}
        mb={8}
      >
        {footerSections.map((section) => (
          <VStack
            key={section.title}
            gap={4}
            align={{ base: 'center', md: 'start' }}
          >
            <Text
              fontSize="lg"
              fontWeight={600}
              color="#f1f5f9"
            >
              {section.title}
            </Text>
            <VStack gap={2} align={{ base: 'center', md: 'start' }}>
              {section.items.map((item, idx) => (
                <Link
                  key={idx}
                  href={typeof item !== 'string' && 'href' in item ? item.href : '#'}
                  target={typeof item !== 'string' && 'href' in item ? undefined : '_blank'}
                  rel={typeof item !== 'string' && 'href' in item ? undefined : 'noopener noreferrer'}
                  color={typeof item === 'string' ? '#cbd5e1' : '#00d9ff'}
                  _hover={{ color: '#64e9ff' }}
                  fontSize="sm"
                  transition="color 0.3s ease"
                >
                  {typeof item === 'string' ? item : item.label}
                </Link>
              ))}
            </VStack>
          </VStack>
        ))}
      </SimpleGrid>
    </Section>
  )
}
