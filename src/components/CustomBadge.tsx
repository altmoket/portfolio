import { Badge } from '@chakra-ui/react';
import { useTheme, getThemeColors } from '../context/ThemeContext';

const CustomBadge = ({ tag }: { tag: string; }) => {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <Badge
      px={2}
      py={1}
      borderRadius="full"
      bg={`${colors.accent}15`}
      color={colors.accent}
      fontWeight="500"
      fontSize="0.7rem"
    >
      {tag}
    </Badge>
  );
};

export default CustomBadge
