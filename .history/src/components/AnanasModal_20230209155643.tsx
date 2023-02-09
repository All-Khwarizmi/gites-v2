import React from 'react'
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
import Carousel from './Carousel';


const AnanasModal = ({slides}: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
 const diapos = slides.slidesAnanas;

  return (
    <div className="flex place-items-center content-center justify-center lg:hidden ">
      <h3
        onClick={onOpen}
        className=" w-40 rounded bg-white bg-blue-500 px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
      >
        Gîte Ananas
      </h3>
      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody className="m-0 grid w-full grid-rows-2 gap-2 px-0">
              <div className="h-300">
                <Carousel slides={diapos} />
              </div>

              <div className="grid grid-rows-2">
                <div>
                  Gîte de 63m2 comprenant une chambre avec un lit double (140cm)
                  et une chambre avec deux lits simples (90cm), une salle de
                  bain avec douche et WC, un salon avec un canapé et une
                  télévision TNT, une cuisine équipée (cuisinière à gaz,
                  micro-ondes, réfrigérateur/congélateur, cafetière,
                  grille-pain), une terrasse avec un coin repas et un hamac.
                  Parking et Wifi gratuit Accès à la piscine et au barbecue
                  Climatisation dans les chambres (20h à 8h) Linge fournis
                  (draps, linge de toilette, torchons)
                </div>
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
}

export default AnanasModal