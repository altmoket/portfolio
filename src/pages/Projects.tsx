import { Box } from '@chakra-ui/react';
import { AllProjects } from '../components/AllProjects';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { useTheme, getThemeColors } from '../context/ThemeContext';

export function ProjectsPage() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <Box
      w="100%"
      overflowX="hidden"
      bg={colors.bg}
      color={colors.text}
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
      transition="all 0.3s ease"
      minH="100vh"
    >
      <Box position="fixed" top={6} right={6} zIndex={10}>
        <ThemeSwitcher />
      </Box>
      <AllProjects />
    </Box>
  );
}
