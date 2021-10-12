import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  useToken,
} from "@chakra-ui/react";
import * as React from "react";
import { Cart } from "./Cart";
import { useCartModal } from "./hooks";
function CartModal() {
  const primaryColor = useToken("colors", "primary");
  const { isOpen, onOpen, onClose } = useCartModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent
        border={`2px solid ${primaryColor}`}
        paddingBottom="20px"
        minWidth="650px"
        borderRadius="10px"
      >
        <ModalCloseButton fontSize="20px" margin="10px" />
        <ModalHeader padding="30px 30px">
          <Text fontSize="4xl">Mis productos</Text>
        </ModalHeader>
        <ModalBody>
          <Cart />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CartModal;
