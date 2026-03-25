import { Badge } from '@chakra-ui/react';
import { useTheme, getThemeColors } from '../context/ThemeContext';

const CustomBadge = ({ tag }: { tag: string; }) => {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  return (
    <Badge
      px={2}
      py={1}
      borderRadius="6px"
      bg={colors.bgCardHover}
      color={colors.accent}
      border={`1px solid ${colors.border}`}
      fontWeight="500"
      fontSize="0.75rem"
    >
      {tag}
    </Badge>
  );
};

export default CustomBadge
