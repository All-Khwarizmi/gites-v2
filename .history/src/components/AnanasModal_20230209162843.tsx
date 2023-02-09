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
            <ModalHeader className="text-center">
              <h3> Gîte Ananas</h3>
              <ModalCloseButton  />
            </ModalHeader>
            <ModalBody className="m-0  w-full  gap-5 px-0">
              <div className="h-300 pb-5">
                <Carousel slides={diapos} />
              </div>

              <div className="">
                <div className="pb-5 text-center">
                  <strong> Gîte de 63m2 comprenant:</strong>
                  <ul>
                    <li>une chambre avec un lit double (140cm)</li>
                    <li>une chambre avec deux lits simples (90cm)</li>
                    <li>une salle de bain avec douche et WC</li>
                    <li>un salon avec un canapé et une télévision TNT</li>
                    <li>
                      {" "}
                      une cuisine équipée (cuisinière à gaz, micro-ondes,
                      réfrigérateur/congélateur, cafetière, grille-pain)
                    </li>
                    <li>une terrasse avec un coin repas et un hamac</li>
                    <li>Parking</li>
                    <li>Wifi</li>
                    <li>Accès à la piscine et au barbecue</li>
                    <li>Climatisation dans les chambres (20h à 8h)</li>
                    <li>Linge fournis (draps, linge de toilette, torchons)</li>
                    <li></li>
                  </ul>
                </div>
          
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default AnanasModal