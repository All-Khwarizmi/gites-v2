import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import clsx from "clsx";
import { cabin, pat } from "../pages/_app";

const PartenariatsModalLG = ({  style }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <p
        className={clsx(
          cabin.className,
          `flex-initial text-2xl font-bold uppercase  hover:underline  ${style.color}   `
        )}
        onClick={() => {
          onOpen();
        }}
      >
        Partenariats
      </p>

      <div>
        <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-center">
              <h3
                className={clsx(
                  cabin.className,
                  "btn-blk mt-4 text-3xl font-bold  uppercase"
                )}
              >
                {" "}
                Partenariats
              </h3>
              <ModalCloseButton />
            </ModalHeader>

            <ModalBody
              className={clsx(pat.className, "m-0  w-full   gap-5 px-0 ")}
            >
              <div className="h-300 pb-5"></div>

              <div className="">
                <div className="pb-5">
                  <div className="py-1 px-4">
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
                        de notre part) PARADOXE
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
                      <p className="pt-2">
                        {" "}
                        Bourg d&apos;Anse Bertrand Zion Train
                      </p>
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
                      <p className="pt-2"> Table d&apos;hôtes à Port-Louis</p>
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
                        Découverte de la mangrove au départ de Petit Canal sur
                        des paddles à pédales, appelés step paddle{" "}
                      </p>
                    </div>{" "}
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.SeacretDive.com "
                      >
                        {" "}
                        SeacretDive ex Antidote :
                      </a>{" "}
                      <p className="pt-2">club de plongée à Port-Louis </p>
                    </div>{" "}
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 font-bold uppercase"
                      )}
                    >
                      Autre:
                    </h3>{" "}
                    <div className="py-2 pl-2">
                      <a
                        className="text-blue-400 underline"
                        href="https://www.bblou.gp "
                      >
                        {" "}
                        BB LOU :
                      </a>{" "}
                      <p className="pt-2">
                        Location de matériel pour bébé, à l’intérieur de
                        l’aéroport
                      </p>
                    </div>{" "}
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

export default PartenariatsModalLG;
