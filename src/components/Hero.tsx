import { useState } from 'react'
import {
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  Button,
  IconButton,
} from '@chakra-ui/react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useTheme, getThemeColors } from '../context/ThemeContext'

export function Hero() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)
  const [copied, setCopied] = useState(false)
  const email = 'leandro.nunez1457@email.com'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleDownloadCV = () => {
    window.open('./Leandro_Hernandez_CV.pdf', '_blank')
  }

  const handleGitHub = () => {
    window.open('https://github.com/altmoket', '_blank')
  }

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/lnunez1457', '_blank')
  }
  
  return (
    <VStack
      flex={1}
      align={{ base: "center", md: "start" }}
      gap={{ base: 6, md: 8 }}
      w="full"
    >
      <HStack
        align={{ base: "center", md: "start" }}
        gap={{ base: 4, md: 8 }}
        w="full"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Image
          src="./me.jpeg"
          alt="Leandro Hernandez"
          boxSize={{ base: "120px", md: "140px" }}
          minW={{ base: "120px", md: "140px" }}
          borderRadius="full"
          objectFit="cover"
          border={`2px solid ${colors.cyan}`}
        />

        <VStack align={{ base: "center", md: "start" }} gap={3} w="full">

          <Heading size={{ base: "lg", md: "xl" }} fontWeight={900} textAlign={{ base: "center", md: "left" }}>
            Leandro Hernandez Nuñez
          </Heading>

          <Text color={colors.textSecondary} maxW="md" textAlign={{ base: "center", md: "left" }}>
            Full Stack Developer
          </Text>

          <HStack color={colors.textTertiary} align="center" gap={2} justify={{ base: "center", md: "flex-start" }}>
            <HiOutlineLocationMarker />
            <Text>
              São Paulo, Brazil
            </Text>
          </HStack>

          <HStack gap={{ base: 2, md: 4 }} pt={2} wrap="wrap" justify={{ base: "center", md: "flex-start" }} w="full">
          <Button onClick={handleCopyEmail} color="#ffffff" bg={'rgb(70, 167, 89, 1)'} _hover={{ bg: 'rgb(70, 167, 89, 0.8)' }} borderRadius={'full'} p={2} gap={2}>
            <FiMail />
            {copied ? 'Copied!' : 'leandro.nunez1457@email.com'}
          </Button>
          <IconButton onClick={handleDownloadCV} borderRadius={'full'} color={colors.text} bg={colors.bgCard} border={`1px solid ${colors.border}`} _hover={{ bg: colors.bgCardHover, borderColor: colors.accent }} aria-label="Download CV" transition="all 0.3s ease">
            <FaFileLines />
          </IconButton>
          <IconButton onClick={handleGitHub} borderRadius={'full'} color={colors.text} bg={colors.bgCard} border={`1px solid ${colors.border}`} _hover={{ bg: colors.bgCardHover, borderColor: colors.accent }} aria-label="GitHub" transition="all 0.3s ease">
            <FiGithub />
          </IconButton>
          <IconButton onClick={handleLinkedIn} borderRadius={'full'} color={'#ffffff'} bg={'rgb(14, 118, 168, 1)'} _hover={{ bg: 'rgb(14, 118, 168, 0.8)' }} aria-label="LinkedIn">
            <FaLinkedin />
          </IconButton>
        </HStack>
        </VStack>
      </HStack>
    </VStack>
  )
}