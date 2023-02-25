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
    <div>
      <div
        className={clsx(cabin.className, "my-4 text-xl font-bold uppercase")}
        onClick={() => {
          setTimeout(() => {
            open(!open);
            onOpen();
          }, 100);
        }}
      >
        Partenariats
      </div>

      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-center">
              <h3
                className={clsx(
                  cabin.className,
                  "btn-blk mt-4 text-xl font-bold uppercase"
                )}
              >
                {" "}
                Partenariats
              </h3>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody className="m-0  w-full  gap-5 px-0">
              <div className="h-300 pb-5"></div>

              <div className="">
                <div className="pb-5">
                  <div className="py-1 px-2">
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 font-bold uppercase"
                      )}
                    >
                      Excursions :
                    </h3>
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.uhaina-croisieres-guadeloupe.com"
                      >
                        {" "}
                        UHAÏNA Croisières :
                      </a>{" "}
                      <p>
                        excursions en catamaran vers Petite Terre depuis St
                        François, (une remise de 5€ vous sera accordée en venant
                        de notre part) PARADOXE{" "}
                      </p>
                    </div>
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.paradoxe-croisieres.com"
                      >
                        {" "}
                        PARADOXE Croisières :
                      </a>{" "}
                      <p>
                        excursions en catamaran vers Petite Terre ou
                        Marie-Galante
                      </p>
                    </div>
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 font-bold uppercase"
                      )}
                    >
                      Location de voitures :
                    </h3>
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.europcar-guadeloupe.com "
                      >
                        {" "}
                        EUROPCAR :
                      </a>{" "}
                      <p>(code promo : treso14)</p>
                    </div>
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.anoliscar.fr "
                      >
                        {" "}
                        ANOLIS CAR:
                      </a>{" "}
                    </div>
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.jumbocar-guadeloupe.com "
                      >
                        {" "}
                        JUMBO CAR:
                      </a>{" "}
                      <p>code promo « montresor »</p>
                    </div>
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.heliconialocation.fr"
                      >
                        {" "}
                        HELICONIA LOCATION:
                      </a>{" "}
                    </div>
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.atlantis-location.com "
                      >
                        {" "}
                        ATLANTIS LOCATION:
                      </a>{" "}
                    </div>{" "}
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 pt-4 font-bold uppercase"
                      )}
                    >
                      Restaurants :
                    </h3>{" "}
                    <div className="py-2 pl-2">
                      <a className="text-blue-400 underline " href="https:// ">
                        {" "}
                        La Case à Fernand
                      </a>{" "}
                      <p className="pt-2"> Bourg d'Anse Bertrand Zion Train</p>
                    </div>{" "}
                    <div className="py-2 pl-2">
                      <a className="text-blue-400 underline" href="https:// ">
                        {" "}
                        Zion Train
                      </a>{" "}
                      <p className="pt-2">
                        Plage de la Chapelle, Anse Bertrand
                      </p>
                    </div>{" "}
                    <div className="py-2 pl-2">
                      <a className="text-blue-400 underline" href="https:// ">
                        {" "}
                        Chez TOF
                      </a>{" "}
                      <p className="pt-2"> Table d'hôtes à Port-Louis</p>
                    </div>{" "}
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 pt-4 font-bold uppercase"
                      )}
                    >
                      Organisation de séjour :
                    </h3>
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.karukeraholidays.com "
                      >
                        {" "}
                        KARUKERA HOLIDAYS :
                      </a>{" "}
                      <p className="pt-2">
                        {" "}
                        Locations de véhicules de tourisme avec transferts
                        aéroport, activités touristiques, VTC
                      </p>
                    </div>{" "}
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.eyescaraibes.com "
                      >
                        {" "}
                        EYESCARAÏBES :
                      </a>{" "}
                      <p className="pt-2">
                        Organisations de sorties, activités touristiques dans
                        toute la Guadeloupe par des conseillers suivant vos
                        envies,
                      </p>
                    </div>{" "}
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 font-bold uppercase"
                      )}
                    >
                      Activités :
                    </h3>
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://https://www.caraibesflyboard.com"
                      >
                        {" "}
                        X’trême Gliss 971 :
                      </a>{" "}
                      <p className="pt-2">
                        Activités nautiques (jet-ski, bouées tractées, parachute
                        ascensionnel, flyboard), réduction à voir sur place
                      </p>
                    </div>{" "}
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://step-paddle-guadeloupe.business.site "
                      >
                        {" "}
                        Sea Step & Sun :
                      </a>{" "}
                      <p className="pt-2">
                        Organisations de sorties, activités touristiques dans
                        toute la Guadeloupe par des conseillers suivant vos
                        envies,
                      </p>
                    </div>{" "}
                   
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.eyescaraibes.com "
                      >
                        {" "}
                        EYESCARAÏBES :
                      </a>{" "}
                      <p className="pt-2">
                        Organisations de sorties, activités touristiques dans
                        toute la Guadeloupe par des conseillers suivant vos
                        envies,
                      </p>
                    </div>{" "}
                    SeacretDive ex Antidote : club de plongée à Port-Louis
                    (www.SeacretDive.com){" "}
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 font-bold uppercase"
                      )}
                    >
                      Autre:
                    </h3>{" "}
                    BB LOU : location de matériel pour bébé, à l’intérieur de
                    l’aéroport (www.bblou.gp)
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

export default PartenariatsModal;
