import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Carousel from "./Carousel";
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Modal: {
      sizes: { "2.5xl": { dialog: { maxW: "712px" } } },
    },
  },
});
const AnanasModalLG = ({ slides }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex w-screen place-items-center content-center justify-center ">
      <h3
        onClick={onOpen}
        className=" w-40 rounded bg-white bg-blue-500 px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
      >
        Gîte Ananas
      </h3>
      <div className="w-[50%]">
        <Modal  size="2xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody className="w-full flex-auto flex-row  gap-2">
              <Carousel slides={slides} />
              <div>
                Some description
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AnanasModalLG;
