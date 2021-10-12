import {} from "react";
import { useCartStore } from "./useCartStore";
import { useDisclosure } from "@chakra-ui/react";

export const useCartModal = () => {
  const { openModal } = useCartStore();
  const { toogleModal } = useCartStore.getState();

  return useDisclosure({
    isOpen: openModal,
    onOpen: toogleModal,
    onClose: toogleModal,
  });
};
