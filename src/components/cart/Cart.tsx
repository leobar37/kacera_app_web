import { HoverMotion } from "@app/common/motion";
import {
  chakra,
  HStack,
  SystemStyleObject,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import _Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Plus = chakra(AiOutlinePlus);
const Minus = chakra(AiOutlineMinus);

const Image = styled(_Image)`
  border-radius: 20px;
`;

export const HandleUnits = () => {
  const iconStyle: SystemStyleObject = {
    color: "primary",
    fontSize: "25px",
  };
  return (
    <HStack padding="10px 15px" borderRadius="10px" color="primary">
      <HoverMotion as="button">
        <Plus sx={iconStyle} />
      </HoverMotion>
      <Text fontWeight="semibold">1 uni</Text>
      <HoverMotion as="button">
        <Minus sx={iconStyle} />
      </HoverMotion>
    </HStack>
  );
};

export const ProductItem = () => {
  return (
    <Wrap width="100%" spacing={5} align="center" justify="flex-start">
      <WrapItem>
        <Image
          src="/images/tomatoes.jpg"
          width="90px"
          alt="Tomatos"
          height="90px"
          objectFit="cover"
        />
      </WrapItem>
      <WrapItem maxWidth="250px">
        <Text maxWidth="150px" color="gray.500">
          Pitahaya de la selva de Costa
        </Text>
      </WrapItem>
      <WrapItem>
        <HandleUnits />
      </WrapItem>
      <WrapItem>
        <VStack fontWeight="semibold">
          <Text>Costo x uni</Text>
          <Text>S/. 16.00</Text>
        </VStack>
      </WrapItem>
    </Wrap>
  );
};

export const Cart = () => {
  return (
    <Wrap spacing="6" overflowY="scroll" overflowX="hidden">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Wrap>
  );
};
