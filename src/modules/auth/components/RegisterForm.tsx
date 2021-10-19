import React from "react";
import { Heading, Button } from "@chakra-ui/react";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel, Input, Text, Flex } from "@chakra-ui/react";
import { SystemStyleObject } from "@chakra-ui/react";

function RegisterForm() {
  const stylesLabel: SystemStyleObject = {
    color: "gray.500",
    fontSize: "sm",
  };
  return (
    <Box as="form">
      <VStack padding="20px 20px" borderRadius="15px" align="center">
        <VStack align="start" my="20px" textAlign="start" width="100%">
          <Heading>Para continuar</Heading>
          <Heading size="md">Necesitas registrar tu compra</Heading>
        </VStack>
        <FormControl>
          <FormLabel sx={stylesLabel}>Tus nombres :</FormLabel>
          <Input type="text" placeholder="Esteban Gerardo"></Input>
        </FormControl>
        <FormControl>
          <FormLabel sx={stylesLabel}>Email para enviar boletas:</FormLabel>
          <Input type="email" placeholder="gerardo.odp@gmail.com"></Input>
        </FormControl>
        <FormControl>
          <FormLabel sx={stylesLabel}>Teléfono para comunicaciones:</FormLabel>
          <Input type="tel" placeholder="910220484"></Input>
        </FormControl>
        <Flex width="100%" py="4" direction="column" align="center">
          <Button my={3} display="block" variant="black" w="100%">
            Registrarme
          </Button>
          <Text>yo ya tengo una cuenta</Text>
        </Flex>
      </VStack>
    </Box>
  );
}

export default RegisterForm;
