import React from "react";
import { Flex, Text, Button, Center, HStack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
type CartToastParams = {
  count: number;
  text: string;
  price: number;
};

function useToCartToast() {
  const toast = useToast();
  const newToast = ({ count, text, price }: CartToastParams) => {
    return toast({
      render: (props) => {
        return (
          <Flex
            background="black"
            borderRadius="10px"
            justifyContent="center"
            padding="4"
            width="500px"
            cursor="pointer"
          >
            <HStack padding="5px" justifyContent="center" spacing="50px">
              <Center
                width="35px"
                borderRadius="3px"
                height="35px"
                margin="0 20px"
                background="whiteAlpha.400"
              >
                <Text fontSize="x-large" fontWeight="bold" color="white">
                  {count}
                </Text>
              </Center>
              <Text color="white" fontSize="lg" fontWeight="medium">
                {text}
              </Text>
              <Text fontWeight="bold" fontSize="x-large" color="white">
                {price}s/
              </Text>
            </HStack>
          </Flex>
        );
      },
    });
  };
  return newToast;
}

export default useToCartToast;
