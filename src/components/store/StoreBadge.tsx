import { matVa } from "@app/common/utils";
import { BrandSvg } from "@app/svgs";
import { Box as _Box, Center, HStack } from "@chakra-ui/react";
import { Avatar, SystemStyleObject, Text } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

const Box = motion(_Box);

type StoreBadgeProps = {
  variant: "normal" | "selected";
  leftSide?: string;
};

const animations: Record<string, Variants> = {
  box: {
    hover: {
      scale: 1.09,
    },
  },
};

const StoreBadge = ({ variant, leftSide }: StoreBadgeProps) => {
  const boxStyles: SystemStyleObject = {
    background: matVa(
      variant,
      "primary"
    )({
      normal: "white",
      selected: "primary",
    }),
    padding: "8px 15px",
    height: "70px",
    width: "200px",
    ...matVa(variant)({
      normal: {
        shadow: "2xl",
      } as SystemStyleObject,
    }),
  };

  const textStyles: SystemStyleObject = {
    color: matVa(
      variant,
      "white"
    )({
      normal: "black",
      selected: "white",
    }),
    ...matVa(variant)({
      selected: {
        fontWeight: "bold",
      } as SystemStyleObject,
    }),
  };

  const boxAvatar: SystemStyleObject = matVa<
    StoreBadgeProps["variant"],
    SystemStyleObject
  >(variant)({
    normal: {},
    selected: {
      background: leftSide ? "transparent" : "black",
    },
  });

  const left = !leftSide ? (
    <BrandSvg mode="white" />
  ) : (
    <Avatar src={leftSide}></Avatar>
  );
  return (
    <Box whileHover="hover" variants={animations.box}>
      <HStack
        cursor="pointer"
        sx={boxStyles}
        width="180px"
        justifyContent="space-around"
        borderRadius="50px"
        spacing="10px"
      >
        <Center sx={boxAvatar} padding="10px" borderRadius="50%">
          {left}
        </Center>
        <Text sx={textStyles} color="white">
          Kacera 24/7
        </Text>
      </HStack>
    </Box>
  );
};

export default StoreBadge;
