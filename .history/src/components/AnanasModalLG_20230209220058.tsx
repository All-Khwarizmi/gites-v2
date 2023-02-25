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
import CarouselLG from "./CarouselLG";
import Link from "next/link";
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
  const diapos = slides.slidesAnanas;
  return (
    <div className="w-50 flex place-items-center content-center justify-center  rounded bg-black transition  delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <h3
        onClick={onOpen}
        className=" btn-blk w-50 rounded bg-white px-4 py-2 text-center text-2xl  "
      >
        Gîte Ananas
      </h3>
      <div>
        <Modal isCentered size="6xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="pb-5">
            <ModalHeader className="text-center">
              <h3> Gîte Ananas</h3>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <div className="grid w-full grid-cols-2 gap-10">
                <CarouselLG slides={diapos} />
                <div className="grid w-full gap-5">
                  <div className="grid w-full content-end pl-5 ">
                    <div className="  ">
                      <strong> Gîte de 63m2 comprenant:</strong>
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

export default AnanasModalLG;
