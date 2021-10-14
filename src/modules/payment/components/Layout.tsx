import { Flex, Box, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: {
    resume: ReactNode;
    detail?: ReactNode;
  };
}

export function Layout({ children }: LayoutProps) {
  return (
    <HStack
      spacing="45px"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Box flex="50%" maxWidth="640px">
        {children.resume}
      </Box>
      <Box alignSelf="center">{children.detail}</Box>
    </HStack>
  );
}
