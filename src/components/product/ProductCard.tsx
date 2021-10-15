import { Button } from "@app/components/ui";
import { Box, Center, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { ClassNames } from "@emotion/react";
import NextImage from "next/image";
import { HoverMotion } from "@app/common/motion";
import { useToCartToast } from "@app/components/cart";
import { Product } from "@app/common/@types";
import { Price } from "@app/components/product";

type CardProductProps = {
  product: Product;
};
export const CardProduct = ({ product }: CardProductProps) => {
  const toast = useToCartToast();

  const imageProductStyles = css`
    border-radius: 20px;
  `;

  const imageSucursalStyles = css`
    border-radius: 50px;
  `;

  return (
    <HoverMotion>
      <VStack
        spacing={2}
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="flex-start"
        width="200px"
        margin="10px"
        cursor="pointer"
      >
        <ClassNames>
          {({ css }) => (
            <Box
              width="100%"
              height="140px"
              overflow="hidden"
              position="relative"
            >
              <Box position="absolute">
                <NextImage
                  className={imageProductStyles}
                  src={product.imagenproducto}
                  width="380px"
                  height="250px"
                />
              </Box>
              <Box position="absolute" top="10px" right="10px">
                <NextImage
                  className={imageSucursalStyles}
                  src={product.logosucursal}
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
              </Box>
            </Box>
          )}
        </ClassNames>
        <Text fontWeight="bold">{product.detalle}</Text>
        <Text fontWeight="light" color="gray.500">
          <Price value={5} />
        </Text>
        <Text fontWeight="bold">
          <Price value={product.costoproducto} />
        </Text>
        <Center width="100%">
          <Button
            variant="normal"
            onClick={() => {
              toast({
                count: 1,
                text: "Ver productos",
                price: 50,
              });
            }}
          >
            Agregar
          </Button>
        </Center>
      </VStack>
    </HoverMotion>
  );
};
