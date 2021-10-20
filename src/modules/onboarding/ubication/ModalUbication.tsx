import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  CloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";
export function ModalUbication() {
  const { isOpen, onClose, onOpen } = useDisclosure({
    isOpen: true,
  });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <CloseButton />

      <ModalContent>
        <Box width="450px" height="350px">
          <GoogleMapReact
            defaultCenter={{ lat: 59.95, lng: 30.33 }}
            zoom={12}
            bootstrapURLKeys={{
              key: "AIzaSyBrOgmvq8HrfwKOsgjqGB8v6Ma04awmiEE",
            }}
          />
        </Box>
      </ModalContent>
    </Modal>
  );
}
