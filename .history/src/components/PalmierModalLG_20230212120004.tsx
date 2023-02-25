
import clsx from "clsx";
import { cabin, pat } from "../pages/_app"
;import React from "react";
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
    <div className="w-50 flex place-items-center content-center justify-center  rounded bg-black transition  delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <h3
        onClick={onOpen}
        className={clsx(
          cabin.className,
          "btn-blk w-50 rounded px-4 py-2 text-center  text-2xl font-bold   transition"
        )}
      >
        Gîte Palmier
      </h3>
      <div>
        <Modal isCentered size="6xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="pb-8">
            <ModalHeader className="text-center">
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <div className="grid w-full grid-cols-2 gap-10">
                <CarouselLG slides={diapos} />
                <div className="grid w-full gap-1">
                  <h3
                    className={clsx(
                      cabin.className,
                      "btn-blk w-50 rounded px-4 py-2 text-center  text-3xl font-bold   transition"
                    )}
                  >
                    {" "}
                    Gîte Palmier
                  </h3>
                  <div
                    className={clsx(
                      pat.className,
                      "grid w-full content-center pl-5 text-lg "
                    )}
                  >
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
                        <li>
                          {" "}
                          <p>accessible aux personnes à mobilité réduite</p>
                        </li>
                        <li>une terrasse avec un coin repas et un hamac</li>
                      </ul>
                      <div className="roudend my-2 bg-gray-200 p-2 text-center">
                        <p>Parking</p>
                        <p>Wifi</p>
                        <p>Accès à la piscine et au barbecue</p>
                        <p>Climatisation dans les chambres (20h à 8h)</p>
                        <p>
                          Linge fournis (draps, linge de toilette, torchons)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid w-full  gap-5">
                    <div className="grid w-full grid-cols-2 items-end gap-5">
                      <div className="btn-div flex place-items-center  content-center justify-center rounded transition  delay-150 duration-300 ease-in-out   hover:-translate-y-1 hover:scale-110">
                        <Link href={"#section-4"}>
                          <h3
                            onClick={onClose}
                            className="  btn-blk w-40 rounded px-4 py-2  text-center text-2xl transition  "
                          >
                            Contact
                          </h3>
                        </Link>
                      </div>
                      <div className="btn-div flex place-items-center  content-center justify-center rounded transition  delay-150 duration-300 ease-in-out   hover:-translate-y-1 hover:scale-110 ">
                        <Link href={"#section-5"}>
                          <h3
                            onClick={onClose}
                            className="  btn-blk w-40 rounded px-4 py-2  text-center text-2xl transition  "
                          >
                            Tarifs
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
