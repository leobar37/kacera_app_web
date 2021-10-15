import { matVa } from "@app/common/utils";
import { Badge as _Badge, SystemStyleObject, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";
import { Categorie } from "@app/common/@types";

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

type BadgeCategorieProps = {
  status: "selected" | "normal" | "disable";
  categorie: Categorie;
};

const BadgeCategorie = ({ status, categorie }: BadgeCategorieProps) => {
  const statusStyle = matVa<BadgeCategorieProps["status"], SystemStyleObject>(
    status
  );

  const stylesBox = statusStyle({
    selected: {
      background: "primary",
    },
    normal: {
      background: "transparent",
      _hover: {
        background: "primary",
        color: "white",
      },
    },
  });

  const stylesText = statusStyle({
    selected: {
      color: "white",
    },
    normal: {
      color: "gray.400",
      _hover: {
        color: "inherit",
      },
    },
  });

  return (
    <Badge
      padding="15px 30px"
      sx={stylesBox}
      borderRadius="19px"
      display="flex"
      justifyContent="center"
      maxWidth="350px"
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
        {categorie.categoria}
      </Text>
    </Badge>
  );
};

export default BadgeCategorie;
