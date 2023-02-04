import { Box, Button, Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import MetaSvg from "../components/MetaSvg";
import MetaNext from "./MetaNext";

const MetaModal = () => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      const finalRef = React.useRef(null);
  return (
    <div>
      <a
        href="http://m.me/100063605350179"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MetaSvg />
      </a>

      <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        Some other content that'll receive focus on close.
      </Box>

      <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

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
