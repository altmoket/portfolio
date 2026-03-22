import { useState } from 'react'
import {
  Box,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  Text,
  Flex,
  Link
} from '@chakra-ui/react'
import Section from './Section'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thanks for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactMethods = [
    { icon: '📧', label: 'Email', link: 'mailto:leandro.nunez1457@email.com', value: 'leandro.nunez1457@email.com' },
    { icon: '💼', label: 'LinkedIn', link: 'https://linkedin.com/in/lnunez1457', value: 'linkedin.com/in/lnunez1457' },
    { icon: '🐙', label: 'GitHub', link: 'https://github.com/altmoket', value: 'github.com/altmoket' },
    { icon: '📍', label: 'Location', link: '#', value: 'São Paulo, Brazil' }
  ]

  return (
    <Section title='Get In Touch'>
      {/* Contact Content */}
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={12}
      >
        {/* Contact Info */}
        <VStack
          flex={1}
          gap={6}
          align="start"
        >
          <Heading
            as="h3"
            size="lg"
            color="#f1f5f9"
          >
            Let's Talk
          </Heading>
          <Text
            color="#cbd5e1"
            lineHeight="1.8"
          >
            I'm always interested in discussing new projects, opportunities, and collaborations.
            Whether you want to chat about backend systems, internal tooling, or just say hello - feel free to reach out!
          </Text>

          {/* Contact Methods */}
          <VStack gap={4} w="full">
            {contactMethods.map((method) => (
              <Flex
                key={method.label}
                align="start"
                gap={4}
                w="full"
              >
                <Box fontSize="24px" flexShrink={0}>
                  {method.icon}
                </Box>
                <VStack gap={1} align="start">
                  <Text
                    color="#cbd5e1"
                    fontSize="sm"
                    fontWeight={500}
                  >
                    {method.label}
                  </Text>
                  <Link
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="#00d9ff"
                    _hover={{ color: '#64e9ff' }}
                    fontSize="sm"
                  >
                    {method.value}
                  </Link>
                </VStack>
              </Flex>
            ))}
          </VStack>
        </VStack>

        {/* Contact Form */}
        <Box
          flex={1}
          as="form"
          onSubmit={handleSubmit}
        >
          <VStack gap={6}>
            {/* Name Field */}
            <Box w="full">
              <Text
                as="label"
                color="#f1f5f9"
                fontSize="sm"
                fontWeight={500}
                mb={2}
                display="block"
              >
                Name
              </Text>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                bg="#1e293b"
                border="1px solid #334155"
                color="#f1f5f9"
                _placeholder={{ color: '#64849e' }}
                _focus={{
                  borderColor: '#00d9ff',
                  boxShadow: '0 0 0 1px #00d9ff'
                }}
                required
              />
            </Box>

            {/* Email Field */}
            <Box w="full">
              <Text
                as="label"
                color="#f1f5f9"
                fontSize="sm"
                fontWeight={500}
                mb={2}
                display="block"
              >
                Email
              </Text>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                bg="#1e293b"
                border="1px solid #334155"
                color="#f1f5f9"
                _placeholder={{ color: '#64849e' }}
                _focus={{
                  borderColor: '#00d9ff',
                  boxShadow: '0 0 0 1px #00d9ff'
                }}
                required
              />
            </Box>

            {/* Message Field */}
            <Box w="full">
              <Text
                as="label"
                color="#f1f5f9"
                fontSize="sm"
                fontWeight={500}
                mb={2}
                display="block"
              >
                Message
              </Text>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                minH="180px"
                bg="#1e293b"
                border="1px solid #334155"
                color="#f1f5f9"
                _placeholder={{ color: '#64849e' }}
                _focus={{
                  borderColor: '#00d9ff',
                  boxShadow: '0 0 0 1px #00d9ff'
                }}
                required
              />
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              w="full"
              bg="#00d9ff"
              color="#0f172a"
              fontWeight={600}
              py={6}
              _hover={{
                bg: '#64e9ff',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.3s ease"
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Section>
  )
}
