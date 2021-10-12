import { Box, SystemStyleObject, Center, Text } from "@chakra-ui/react";

import * as React from "react";

type BadgeProps = {
  count?: number;
};

const config = {
  widthBadge: "20px",
};
const Badge: React.FC<BadgeProps> = ({ children, count }) => {
  const buttonSyles: SystemStyleObject = {
    position: "relative",
  };

  const badgeStyles: SystemStyleObject = {
    position: "absolute",
    background: "black",
    width: config.widthBadge,
    height: config.widthBadge,
    color: "white",
    borderRadius: "5px",
    top: "-5px",
    right: "-8px",
    zIndex: "20",
  };
  if (!count) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <Box sx={buttonSyles}>
      <Center sx={badgeStyles}>
        <Text fontSize="0.7rem"> {count}</Text>
      </Center>
      {children}
    </Box>
  );
};

export default Badge;
