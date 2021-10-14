import React from "react";
import {
  Box,
  VStack,
  Text,
  HStack,
  SystemStyleObject,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import { Button } from "@app/components/ui";
import { matVa } from "@app/common/utils";
import { Delivery, Moto } from "@app/components/icons";
import { HoverMotion } from "@app/common/motion";
const subtitleStyles: SystemStyleObject = {
  fontWeight: "300",
  color: "gray.400",
};

type ItemDetailProps = {
  name: string;
  children: string;
  state: "marked" | "normal" | "big";
};

const ItemDetail = ({ name, children, state }: ItemDetailProps) => {
  const switchState = matVa<ItemDetailProps["state"], SystemStyleObject>(state);

  const textStyles: SystemStyleObject = switchState({
    marked: {
      color: "red",
    },
    normal: {
      color: "gray.400",
    },
    big: {
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
  });

  return (
    <WrapItem width="380px" display="flex" justifyContent="space-between">
      <Text fontWeight="medium" sx={textStyles}>
        {name}
      </Text>
      <Text sx={textStyles}>{children}</Text>
    </WrapItem>
  );
};

type IconPaymentTypeProps = {
  status: "normal" | "active";
  Icon: React.ComponentType<any>;
};

const IconPaymentType = ({ status, Icon }: IconPaymentTypeProps) => {
  const statusStylesSwitch = matVa<
    IconPaymentTypeProps["status"],
    SystemStyleObject
  >(status);
  const statusStylesBox = statusStylesSwitch({
    active: {
      background: "primary",
    },
    normal: {
      background: "white",
    },
  });
  return (
    <Center
      cursor="pointer"
      shadow="xl"
      background="primary"
      width="95px"
      margin="10px"
      borderRadius="10px"
      height="80px"
      sx={statusStylesBox}
    >
      <Icon status={status}></Icon>
    </Center>
  );
};

function DetailOrder() {
  return (
    <VStack
      align="start"
      shadow="xl"
      padding="20px 25px"
      maxWidth="350px"
      fontSize="small"
      fontWeight="normal"
      spacing="15px"
    >
      <Text fontWeight="semibold">Resumen del pedido</Text>
      {/* direction */}
      <VStack align="start" background="gray.50" p="4">
        <Text sx={subtitleStyles}>Dirección de la entrega</Text>
        <Text>Av. Javier Prado Este 6804, La Molina, Departamento 201</Text>
      </VStack>
      <Box alignSelf="center" width="100%">
        <Text sx={subtitleStyles}>Tipo de entrega</Text>
        <HStack width="100%">
          <IconPaymentType status="normal" Icon={Delivery} />
          <IconPaymentType status="active" Icon={Moto} />
        </HStack>
      </Box>
      <Wrap
        background="#EFEFEF"
        align="center"
        alignSelf="center"
        borderRadius="10px"
        justify="center"
        width="100%"
        padding="20px 20px"
        spacing={"8px"}
      >
        <ItemDetail state="normal" name="Fecha de entrega">
          13/12/2016
        </ItemDetail>
        <ItemDetail state="normal" name="Hora de entrega">
          2:40-2:50 PM
        </ItemDetail>
        <ItemDetail state="normal" name="Costo de productos">
          S/ 140.00
        </ItemDetail>
        <ItemDetail state="normal" name="Costo de envío">
          S/ 16.90
        </ItemDetail>
        <ItemDetail state="marked" name="Código descuento">
          - S/ 10.00
        </ItemDetail>
        <ItemDetail state="big" name="Total">
          S/ 156.90
        </ItemDetail>
      </Wrap>

      {/* type shippping */}
      <Text textAlign="center" fontWeight="thin" fontSize="0.8rem">
        Al dar click “Pagar” declaro haber leído y acepto los Términos y
        Condiciones y Política de confidencialidad de Kacera
      </Text>

      <HoverMotion width="100%">
        <Button width="100%" variant="solid" shadow="2xl">
          Pagar S/ 156.90
        </Button>
      </HoverMotion>
      {/* resume */}
      {/* message */}
      {/* button */}
    </VStack>
  );
}

export default DetailOrder;
