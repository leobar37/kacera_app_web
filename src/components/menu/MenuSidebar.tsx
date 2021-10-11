import { BrandSvg, Ofert } from "@app/svgs";
import { Text, VStack } from "@chakra-ui/react";
import { HoverMotion } from "@app/common/motion";
const Sidebar = () => {
  return (
    <VStack spacing={"45px"} marginTop="50px">
      <VStack cursor="pointer">
        <HoverMotion as="button">
          <BrandSvg />
        </HoverMotion>
      </VStack>
      <HoverMotion>
        <VStack cursor="pointer">
          <Ofert />
          <Text fontWeight="extrabold">Inicio</Text>
        </VStack>
      </HoverMotion>
    </VStack>
  );
};

export default Sidebar;
