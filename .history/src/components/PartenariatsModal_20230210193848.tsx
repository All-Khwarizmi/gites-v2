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
import Link from "next/link";
import clsx from "clsx";
import { cabin } from "../pages/_app";

const PartenariatsModal = ({open}: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div >
      <div
        className={clsx(cabin.className, "my-4 text-xl font-bold uppercase")}
        onClick={() => {
          setTimeout(() => {
            open(!open);
             onOpen(); 
          }, 100);
      }
        
    }
      >
        Partenariats
      </div>

      

      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-center">
              <h3> Modalités de réservation</h3>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody className="m-0  w-full  gap-5 px-0">
              <div className="h-300 pb-5"></div>

              <div className="">
                <div className="pb-5">
                  <div className="py-1"></div>
                 
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default PartenariatsModal;
