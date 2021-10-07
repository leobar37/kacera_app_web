import { BaseLayout } from "@app/components/layout";
import { NavBarRoot } from "@app/components/navbar";
import { Sidebar } from "@app/components/menu";
import type { NextPage } from "next";
import { BrandSvg } from "@app/svgs";
import { Box, Center, Flex, HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { SystemStyleObject, Avatar } from "@chakra-ui/react";
import { ReactNode } from "react";
type StoreBadgeProps = {
  variant: "normal" | "selected";
  leftSide?: string;
};

const ifValue = <T extends any, Val>(val: T, fallback?: any) => {
  return (obj: Record<any, Val>) => {
    const key = Object.keys(obj).find((d) => d == val);
    if (!key) {
      return fallback || null;
    }
    return obj[key];
  };
};

const StoreBadge = ({ variant, leftSide }: StoreBadgeProps) => {
  const boxStyles: SystemStyleObject = {
    background: ifValue(
      variant,
      "primary"
    )({
      normal: "white",
      selected: "primary",
    }),
    padding: "8px 15px",
    height: "70px",
    width: "200px",
    ...ifValue(variant)({
      normal: {
        shadow: "2xl",
      } as SystemStyleObject,
    }),
  };

  const textStyles: SystemStyleObject = {
    color: ifValue(
      variant,
      "white"
    )({
      normal: "black",
      selected: "white",
    }),
    ...ifValue(variant)({
      selected: {
        fontWeight: "bold",
      } as SystemStyleObject,
    }),
  };

  const boxAvatar: SystemStyleObject = ifValue<
    StoreBadgeProps["variant"],
    SystemStyleObject
  >(variant)({
    normal: {},
    selected: {
      background: "black",
    },
  });

  const left = !leftSide ? (
    <BrandSvg mode="white" />
  ) : (
    <Avatar src={leftSide}></Avatar>
  );
  return (
    <Box>
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

const Home: NextPage = () => {
  return (
    <BaseLayout nav={<NavBarRoot />} sidebar={<Sidebar />}>
      <HStack spacing={10}>
        <StoreBadge variant="selected" />
        <StoreBadge variant="normal" leftSide="https://bit.ly/dan-abramov" />
      </HStack>
    </BaseLayout>
  );
};

export default Home;
