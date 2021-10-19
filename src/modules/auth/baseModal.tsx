import React from "react";
import {
  Modal,
  useDisclosure,
  ModalBody,
  ModalContent,
  CloseButton,
} from "@chakra-ui/react";
import { RegisterForm } from "./components";
import { useToken } from "@chakra-ui/react";

export function AuthModal() {
  const primaryColor = useToken("colors", ["primary"]);
  const { isOpen, onClose } = useDisclosure({
    isOpen: true,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent position="relative" border={`2px solid ${primaryColor}`}>
        <CloseButton right="10px" top="15px" position="absolute" />
        <ModalBody>
          <RegisterForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
