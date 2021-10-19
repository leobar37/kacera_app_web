import { extendTheme, SystemStyleObject, Theme } from "@chakra-ui/react";
type StyleInterpolation =
  | SystemStyleObject
  | ((options: StyleOptions) => SystemStyleObject);

interface StyleOptions {
  theme: Theme;
  colorMode: "light" | "dark";
  colorScheme: string;
}

const Button = {
  baseStyle: {
    display: "block",
  } as SystemStyleObject,
  variants: {
    black: {
      color: "white",
      bg: "black",
      _hover: {
        color: "black",
        bg: "white",
        border: "gray.100",
      },
    } as SystemStyleObject,
  },
};

const components = {
  Button,
};
const overrides = {
  colors: {
    primary: "#1AC91E",
    gray: {
      100: "#EAEAEA",
    },
  },
  components,
};

export default extendTheme(overrides);
