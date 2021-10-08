import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { FC } from "react";

type RowContentProps = {
  title: string;
};

const RowContent: FC<RowContentProps> = ({ title, children }) => {
  return (
    <Box margin="20px 8px">
      <Text
        color="gray.500"
        paddingLeft="10px"
        paddingBottom="20px"
        fontWeight="semibold"
        fontSize="sm"
        opacity="0.7"
      >
        {/* Tiendas cerca de mi */}
        {title}
      </Text>
      <Box>{children}</Box>
    </Box>
  );
};

export default RowContent;
