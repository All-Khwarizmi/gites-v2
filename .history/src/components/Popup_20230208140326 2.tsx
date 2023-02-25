import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Popup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>Popup</div>
  )
}

export default Popup