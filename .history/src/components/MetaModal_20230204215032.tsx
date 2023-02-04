import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import MetaSvg from "../components/MetaSvg";
import MetaNext from "./MetaNext";

const MetaModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <a
        href="http://m.me/100063605350179"
        target="_blank"
        rel="noopener noreferrer"
      ></a>

      <Button mt={4} onClick={onOpen}>
        <MetaSvg />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MetaModal;
