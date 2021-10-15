import { SafeAny } from "@app/common/@types";
import { Center, CenterProps } from "@chakra-ui/layout";
import { Text, SystemStyleObject } from "@chakra-ui/react";
import { forwardRef, LegacyRef, PropsWithChildren } from "react";
import { matVa } from "@app/common/utils";
type ButtonProps = {
  variant?: "solid" | "normal";
};
// eslint-disable-next-line react/display-name
export const Button = forwardRef<
  LegacyRef<HTMLElement>,
  PropsWithChildren<CenterProps & ButtonProps>
>(({ children, variant, ...props }, ref) => {
  if (!variant) {
    variant = "normal";
  }
  const variantSwitch = matVa<ButtonProps["variant"], SystemStyleObject>(
    variant
  );
  const stylesBoxVariant = variantSwitch({
    solid: {
      background: "primary",
      color: "white",
      borderRadius: "15px",
      padding: "20px 25px",
    },
    normal: {
      shadow: "2xl",
      width: "150px",
      color: "primary",
      _hover: {
        background: "gray.300",
      },
    },
  });
  return (
    <Center
      as="button"
      cursor="pointer"
      padding="10px 20px"
      sx={stylesBoxVariant}
      ref={ref as SafeAny}
      {...props}
    >
      <Text fontWeight="bold" textTransform="capitalize">
        {children}
      </Text>
    </Center>
  );
});
