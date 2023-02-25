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

const ModaliteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex place-items-center content-center justify-center rounded bg-black  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 lg:hidden ">
      <h3
        onClick={onOpen}
        className={clsx(
          cabin.className,
          "btn-blk w-50 rounded px-4 py-2 text-center  text-2xl font-bold   transition"
        )}
      >
        Modalités de réservation
      </h3>

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
                  <ul className="list-disc px-10">
                    <li>
                      Possibilité d’une 5e personne (enfant), uniquement dans
                      les gîtes Palmier et Kawan. Nous contacter pour le
                      supplément.
                    </li>
                    <li>
                      Premier dîner et petit-déjeuner offert à partir d’une
                      semaine de location et pour les clients en provenance
                      directe de la métropole.{" "}
                    </li>
                    <li>deux salles de bain avec douche et WC</li>
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
                  </ul>
                </div>
              </div>
            </ModalBody>
        
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default ModaliteModal;
