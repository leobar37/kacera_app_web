import { SafeAny } from "@app/common/@types";
import { Center, CenterProps } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { forwardRef, LegacyRef, PropsWithChildren } from "react";

// eslint-disable-next-line react/display-name
export const Button = forwardRef<
  LegacyRef<HTMLElement>,
  PropsWithChildren<CenterProps>
>(({ children, ...props }, ref) => {
  return (
    <Center
      as="button"
      cursor="pointer"
      padding="10px 20px"
      shadow="2xl"
      width="150px"
      ref={ref as SafeAny}
      {...props}
    >
      <Text color="primary" fontWeight="bold" textTransform="capitalize">
        {children}
      </Text>
    </Center>
  );
});
