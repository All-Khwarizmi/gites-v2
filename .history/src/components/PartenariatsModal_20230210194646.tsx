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
                    UHAÏNA Croisières : excursions en catamaran vers Petite
                    Terre depuis St François,
                     (une remise de 5€ vous
                    sera accordée en venant de notre part) PARADOXE{" "}
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 pt-4 font-bold uppercase"
                      )}
                    >
                      Croisières :
                    </h3>
                    excursions en catamaran vers Petite Terre ou Marie-Galante,
                    www.paradoxe-croisieres.com Location de voitures : EUROPCAR,
                    www.europcar-guadeloupe.com (code promo : treso14) ANOLIS
                    CAR, www.anoliscar.fr JUMBO CAR, www.jumbocar-guadeloupe.com
                    (code promo « montresor ») HELICONIA LOCATION,
                    www.heliconialocation.fr ATLANTIS LOCATION,
                    www.atlantis-location.com{" "}
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 pt-4 font-bold uppercase"
                      )}
                    >
                      Restaurants :
                    </h3>{" "}
                    La Case à Fernand, bourg d'Anse Bertrand Zion Train, plage
                    de la Chapelle, Anse Bertrand Chez TOF, table d'hôtes à
                    Port-Louis
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 pt-4 font-bold uppercase"
                      )}
                    >
                      Organisation de séjour :
                    </h3>
                    KARUKERA HOLIDAYS : locations de véhicules de tourisme avec
                    transferts aéroport, activités touristiques, VTC
                    www.karukeraholidays.com EYESCARAÏBES : organisations de
                    sorties, activités touristiques dans toute la Guadeloupe par
                    des conseillers suivant vos envies, www.eyescaraibes.com
                    <h3
                      className={clsx(
                        cabin.className,
                        "text-md py-2 font-bold uppercase"
                      )}
                    >
                      Activités :
                    </h3>
                    X’trême Gliss 971 : activités nautiques (jet-ski, bouées
                    tractées, parachute ascensionnel, flyboard), réduction à
                    voir sur place (https://www.caraibesflyboard.com) Sea Step &
                    Sun : découverte de la mangrove au départ de Petit Canal sur
                    des paddles à pédales, appelés step paddle
                    (https://step-paddle-guadeloupe.business.site) SeacretDive
                    ex Antidote : club de plongée à Port-Louis
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
