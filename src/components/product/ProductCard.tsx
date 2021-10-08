import { Button } from "@app/components/ui";
import { Box, Center, VStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { ClassNames } from "@emotion/react";
import NextImage from "next/image";
import { HoverMotion } from "@app/common/motion";
export const CardProduct = () => {
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
                  src="/images/tomatoes.jpg"
                  width="380px"
                  height="250px"
                />
              </Box>
              <Box position="absolute" top="10px" right="10px">
                <NextImage
                  className={imageSucursalStyles}
                  src="/images/bots.jpg"
                  width="30px"
                  height="30px"
                  objectFit="cover"
                />
              </Box>
            </Box>
          )}
        </ClassNames>

        <Text fontWeight="bold">Cebolla morada</Text>
        <Text fontWeight="light" color="gray.500">
          S/3.60
        </Text>
        <Text fontWeight="bold">S/ 0.75</Text>
        <Center width="100%">
          <Button>Agregar</Button>
        </Center>
      </VStack>
    </HoverMotion>
  );
};
