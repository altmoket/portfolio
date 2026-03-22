import { Box, Container, SimpleGrid, VStack, Text, Link, Separator } from '@chakra-ui/react'

export function Footer() {
  const currentYear = new Date().getFullYear()

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
    <Box
      as="footer"
      bg="#0f172a"
      borderTopWidth={1}
      borderTopColor="#334155"
      py={{ base: 12, md: 16 }}
    >
      <Container maxW="1200px">
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

        <Separator
          my={8}
          borderColor="#334155"
        />

        {/* Footer Bottom */}
        <Text
          textAlign="center"
          color="#cbd5e1"
          fontSize="sm"
        >
          &copy; {currentYear} Leandro Dev. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}
