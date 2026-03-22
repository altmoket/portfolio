import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  Link,
  Button,
  IconButton,
} from '@chakra-ui/react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export function Hero() {
  return (
    <Box as="section" bg="#0f172a" py={{ base: 16, md: 24 }}>
      <Container maxW="1200px">
        <HStack
          flex={1}
          align="start"
          gap={8}
        >
          <Image
            src="./me.jpeg"
            alt="Leandro Hernandez"
            boxSize="140px"
            borderRadius="full"
            objectFit="cover"
            border="2px solid #00d9ff"
          />

          <VStack align="start" gap={3}>

            <Heading size="xl" fontWeight={900}>
              Leandro Hernandez Nuñez
            </Heading>

            <Text color="#cbd5e1" maxW="md">
              Full Stack Developer
            </Text>

            <HStack color="#94a3b8" align="center" gap={2}>
              <HiOutlineLocationMarker />
              <Text>
                São Paulo, Brazil
              </Text>
            </HStack>

            <HStack gap={4} pt={2} wrap="wrap">
              <Link as={Button} href="mailto:leandro.nunez1457@email.com" color="#ffffff" bg={'rgb(70, 167, 89, 1)'} _hover={{ bg: 'rgb(70, 167, 89, 0.8)' }} borderRadius={'full'} p={2}>
                <FiMail />
                leandro.nunez1457@gmail.com
              </Link>
              <IconButton borderRadius={'full'} color={'#ffffff'} bg={'rgb(100, 100, 100, 1)'} _hover={{ bg: 'rgb(100, 100, 100, 0.8)' }} aria-label="Download CV">
                <FaFileLines />
              </IconButton>
              <IconButton borderRadius={'full'} color={'#ffffff'} bg={'rgb(0, 0, 0, 1)'} _hover={{ bg: 'rgb(0, 0, 0, 0.8)' }} aria-label="GitHub">
                <FiGithub />
              </IconButton>
              <IconButton borderRadius={'full'} color={'#ffffff'} bg={'rgb(14, 118, 168, 1)'} _hover={{ bg: 'rgb(14, 118, 168, 0.8)' }} aria-label="LinkedIn">
                <FaLinkedin />
              </IconButton>
            </HStack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  )
}