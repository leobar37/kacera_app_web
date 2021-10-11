import { matVa } from "@app/common/utils";
import { Badge as _Badge, SystemStyleObject, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";
type BadgeCategorieProps = {
  status: "selected" | "normal" | "disable";
};
const Badge = motion(_Badge);
const boxAnimation: Record<string, Variants> = {
  box: {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
    },
  },
};

const BadgeCategorie = ({
  status,
  children,
}: PropsWithChildren<BadgeCategorieProps>) => {
  const statusStyle = matVa<BadgeCategorieProps["status"], SystemStyleObject>(
    status
  );

  const stylesBox = statusStyle({
    selected: {
      background: "primary",
    },
    normal: {
      background: "transparent",
    },
  });

  const stylesText = statusStyle({
    selected: {
      color: "white",
    },
    normal: {
      color: "gray.400",
    },
  });

  return (
    <Badge
      padding="15px 30px"
      sx={stylesBox}
      borderRadius="19px"
      display="flex"
      justifyContent="center"
      width="140px"
      cursor="pointer"
      variants={boxAnimation.box}
      whileHover="hover"
    >
      <Text
        sx={stylesText}
        color="gray.700"
        fontWeight="bold"
        display="block"
        fontSize="lg"
      >
        {children}
      </Text>
    </Badge>
  );
};

export default BadgeCategorie;
