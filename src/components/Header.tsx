import { Box, Flex, Button, Container, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = ['about', 'projects', 'experience', 'contact']

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg="rgba(15, 23, 42, 0.95)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid #334155"
    >
      <Container maxW="1200px" px={{ base: 4, md: 5 }}>
        <Flex
          justify="space-between"
          align="center"
          py={5}
          gap={10}
        >
          {/* Logo */}
          <Box
            fontSize="24px"
            fontWeight={700}
            background="linear-gradient(135deg, #00d9ff 0%, #64e9ff 100%)"
            backgroundClip="text"
            color="transparent"
            cursor="pointer"
            whiteSpace="nowrap"
          >
            Leandro
          </Box>

          {/* Desktop Navigation */}
          <Flex
            gap={5}
            display={{ base: 'none', md: 'flex' }}
            ml="auto"
          >
            {navLinks.map((link) => (
              <Button
                key={link}
                bg="transparent"
                color="#cbd5e1"
                _hover={{
                  color: '#00d9ff',
                  borderBottomColor: '#00d9ff',
                }}
                borderBottom="2px solid transparent"
                borderRadius={0}
                fontSize="1rem"
                p="8px 0"
                onClick={() => scrollToSection(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Button>
            ))}
          </Flex>

          {/* Mobile Menu Button */}
          <Button
            display={{ base: 'flex', md: 'none' }}
            bg="transparent"
            onClick={() => setIsOpen(!isOpen)}
            fontSize="24px"
            ml="auto"
          >
            {isOpen ? '✕' : '☰'}
          </Button>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Stack
            display={{ base: 'flex', md: 'none' }}
            pb={4}
            gap={3}
          >
            {navLinks.map((link) => (
              <Button
                key={link}
                w="full"
                bg="transparent"
                color="#cbd5e1"
                _hover={{ bg: '#1e293b', color: '#00d9ff' }}
                onClick={() => {
                  scrollToSection(link)
                  setIsOpen(false)
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Button>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  )
}
