import React from 'react';
import {
  Modal,
  ModalContent,
  CloseButton,
  Heading,
  useDisclosure,
  Box,
  Text,
  HStack,
  VStack,
  Center,
  Input,
  InputGroup,
  chakra,
  InputLeftElement,
  useToken,
  ModalCloseButton,
} from '@chakra-ui/react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt as _MapIcon } from 'react-icons/fa';
import { useState, useEffect } from 'react';
const MapIcon = chakra(_MapIcon);

const useLocationCoord = () => {
  const [position, setPosition] = useState({ latitude: 0, logitud: 0 });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        latitude: pos.coords.latitude,
        logitud: pos.coords.longitude,
      });
    });
  }, [position]);
  return position;
};

export function ModalUbication() {
  const { isOpen, onClose, onOpen } = useDisclosure({
    isOpen: true,
  });
  const position = useLocationCoord();
  const primaryColor = useToken('colors', ['primary']);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <Box
          position="relative"
          borderRadius="20px"
          padding="40px 50px"
          width="550px"
          bg="white"
          border={`2px solid ${primaryColor}`}
        >
          <ModalCloseButton pos="absolute" right="20px" />
          <VStack my={2}>
            <Heading fontSize="3xl" textAlign="center">
              Para mostrarte las tiendas cerca
            </Heading>
            <Text color="gray.500" fontSize="small">
              Necesito <Text as="b">saber tu ubicación de entrega</Text>
            </Text>
          </VStack>
          <Box my={5}>
            <InputGroup>
              <InputLeftElement>
                <MapIcon color="gray.400" />
              </InputLeftElement>
              <Input placeholder="22 de julio 245,Lince Lima" />
            </InputGroup>
          </Box>
          <Center width="100%" height="350px" overflow="hidden">
            <GoogleMapReact
              defaultCenter={{ lat: position.latitude, lng: position.logitud }}
              zoom={12}
              bootstrapURLKeys={{
                key: 'AIzaSyAMSHuJEc8DPD0f1JAA9VM_c2-MGwnO8zc',
              }}
            />
          </Center>
        </Box>
      </ModalContent>
    </Modal>
  );
}
