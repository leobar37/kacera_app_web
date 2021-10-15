// import moduleName from '@app/'
import { HoverMotion } from "@app/common/motion";
import { Cart } from "@app/components/cart";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  chakra,
  useToken,
} from "@chakra-ui/react";
import { MdArrowBackIosNew } from "react-icons/md";
import NextLink from "next/link";
const BackIcon = chakra(MdArrowBackIosNew);

function DetailProducts() {
  const gray = useToken("colors", "gray.300");

  return (
    <>
      <HStack my={10} spacing={4}>
        <NextLink passHref href="/">
          <HoverMotion
            cursor="pointer"
            as="a"
            background="gray.100"
            p={5}
            borderRadius={25}
          >
            <BackIcon />
          </HoverMotion>
        </NextLink>

        <Heading>Pagar mi pedido</Heading>
      </HStack>
      <Box shadow="lg" padding="20px">
        <Flex py={5} justifyContent="space-between">
          <HStack spacing={8}>
            <Box
              sx={{
                borderRadius: "25px",
                border: `0.2px solid ${gray}`,
                padding: "10px",
              }}
            >
              <Text>14</Text>
            </Box>
            <Text fontWeight="normal" fontSize="xl">
              Productos totales
            </Text>
          </HStack>
          <Box
            sx={{
              borderRadius: "25px",
              border: `0.2px solid ${gray}`,
              padding: "10px 15px",
            }}
          >
            <Text>S./ 140</Text>
          </Box>
        </Flex>
        <Cart />
      </Box>
    </>
  );
}

export default DetailProducts;
