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
} from "@chakra-ui/react";
import Carousel from "./Carousel";
import Link from "next/link";
import clsx from "clsx";
import { cabin, pat } from "../pages/_app";

const KawanModal = ({ slides }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const diapos = slides.slidesKawan;
  return (
    <div className="flex place-items-center content-center justify-center rounded bg-black  transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 lg:hidden ">
      <h3
        onClick={onOpen}
        className={clsx(
          cabin.className,
          "btn-blk w-50 cursor-pointer rounded px-4 py-2 text-center  text-2xl font-bold   transition"
        )}
      >
        Gîte Kawan
      </h3>

      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-center">
              <h3
                className={clsx(
                  cabin.className,
                  "btn-blk w-50 rounded px-4 py-2 text-center  text-3xl font-bold   transition"
                )}
              >
                {" "}
                Gîte Kawan
              </h3>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody
              className={clsx(
                pat.className,
                "grid w-full content-center gap-5 pl-5 text-lg "
              )}
            >
              <div className="h-300 pb-5">
                <Carousel slides={diapos} />
              </div>

              <div className="">
                <div className="">
                  <strong> Gîte de 100m2 comprenant:</strong>
                  <div className="py-1"></div>
                  <ul className="list-disc pl-5">
                    <li>une chambre avec un lit double (140cm)</li>
                    <li>une chambre avec deux lits simples (90cm)</li>
                    <li>deux salles de bain avec douche et WC</li>
                    <li>un salon avec un canapé et une télévision TNT</li>
                    <li>
                      {" "}
                      une cuisine équipée (cuisinière à gaz, micro-ondes,
                      réfrigérateur/congélateur, cafetière, grille-pain)
                    </li>
                    <li>une terrasse avec un coin repas et un hamac</li>
                  </ul>
                  <div className="roudend mt-2 bg-gray-200 p-2 text-center">
                    <p>Parking</p>
                    <p>Wifi</p>
                    <p>Accès à la piscine et au barbecue</p>
                    <p>Climatisation dans les chambres (20h à 8h)</p>
                    <p>Linges fournis (draps, linge de toilette, torchons)</p>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="grid w-full grid-cols-2 items-center gap-5">
                <div className="btn-div flex place-items-center  content-center justify-center rounded transition  delay-150 duration-300 ease-in-out   hover:-translate-y-1 hover:scale-110 lg:hidden">
                  <Link href={"#section-5"}>
                    <h3
                      onClick={onClose}
                      className="  btn-blk w-40 rounded px-4 py-2  text-center text-2xl transition  "
                    >
                      Contact
                    </h3>
                  </Link>
                </div>
                <div className="btn-div flex place-items-center  content-center justify-center rounded transition  delay-150 duration-300 ease-in-out   hover:-translate-y-1 hover:scale-110 lg:hidden">
                  <Link href={"#section-4"}>
                    <h3
                      onClick={onClose}
                      className="  btn-blk w-40 rounded px-4 py-2  text-center text-2xl transition  "
                    >
                      Tarifs
                    </h3>
                  </Link>
                </div>
              </div>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default KawanModal;
