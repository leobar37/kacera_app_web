import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle from "../styles/global.style";
import theme from "../theme";
import { CartModal } from "@app/components/cart";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
      <CartModal />
    </ChakraProvider>
  );
}
export default MyApp;
