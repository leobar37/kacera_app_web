import React, { PropsWithChildren, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { Box, BoxProps, ChakraComponent } from "@chakra-ui/react";
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

export function HoverMotion({
  children,
  ...props
}: PropsWithChildren<BoxProps>) {
  const Moti = motion(Box);
  return (
    <Moti variants={boxAnimation.box} whileHover={"hover"} {...props}>
      {children}
    </Moti>
  );
}
