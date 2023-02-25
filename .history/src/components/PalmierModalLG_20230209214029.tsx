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

import CarouselLG from "./CarouselLG";
import Link from "next/link";

const PalmierModalLG = ({ slides }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const diapos = slides.slidesPalmier;
  return (
    <div className="flex bg place-items-center content-center justify-center ">
      <h3
        onClick={onOpen}
        className=" w-40 rounded bg-white btn-blk px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
      >
        Gîte Palmier
      </h3>
      <div>
        <Modal isCentered size="6xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="pb-5">
            <ModalHeader className="text-center">
              <h3> Gîte Palmier</h3>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <div className="grid w-full grid-cols-2 gap-10">
                <CarouselLG slides={diapos} />
                <div className="grid w-full gap-5">
                  <div className="grid w-full content-end pl-5 ">
                    <div className="  ">
                      <strong> Gîte de 73m2 comprenant:</strong>
                      <div className="py-1"></div>
                      <ul className="list-disc pl-5">
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
                        <li>
                          Linge fournis (draps, linge de toilette, torchons)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid w-full  gap-5">
                    <div className="grid w-full grid-cols-2 items-end gap-5">
                      <div className="content-enter flex place-items-center justify-center  ">
                        <Link href={"#section-5"}>
                          <h3
                            onClick={onClose}
                            className=" w-40 rounded bg-white bg-blue-500 px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                          >
                            Contact
                          </h3>
                        </Link>
                      </div>
                      <div className="flex place-items-center content-center justify-center  ">
                        <Link href={"#section-4"}>
                          <h3
                            onClick={onClose}
                            className=" w-40 rounded bg-white bg-blue-500 px-4 py-2 text-center text-2xl  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                          >
                            Prix
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default PalmierModalLG;
