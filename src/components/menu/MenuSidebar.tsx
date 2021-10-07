import { BrandSvg, Ofert } from "@app/svgs";
import { Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack spacing={"45px"} marginTop="50px">
      <VStack cursor="pointer">
        <BrandSvg />
      </VStack>
      <VStack cursor="pointer">
        <Ofert />
        <Text fontWeight="extrabold">Inicio</Text>
      </VStack>
    </VStack>
  );
};

export default Sidebar;
