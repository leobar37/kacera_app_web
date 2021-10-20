import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle from "../styles/global.style";
import theme from "../theme";
import { CartModal } from "@app/components/cart";
import "swiper/css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthModal } from "@app/modules/auth";
import { ModalUbication } from "@app/modules/onboarding";
// Create a client

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <CartModal />
        <AuthModal />
        <ModalUbication />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default MyApp;
