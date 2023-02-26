import React from 'react'
import { Card, CardBody, Heading} from "@chakra-ui/react";
import clsx from "clsx";
import { cabin } from "../pages/_app";
const Welcome = () => {
  return (
    <div className=" flex w-[100%] justify-center px-5  pt-20 ">
      <Card className="welcome w-[100%]  border-4 border-double border-black bg-transparent lg:w-[60%]">
        <Heading className="flex-column flex place-items-center justify-center p-2 text-center">
          <p className={clsx(cabin.className, "pt-2 font-bold")}>
            {" "}
            Bienvenue en Guadeloupe !
          </p>
        </Heading>
        <CardBody>
          <div className="welcome-text text-2xl">
            Pour des vacances au soleil, sur des plages de sable blanc ou de
            belles balades dans une verdure luxuriante : les Gîtes Mon Trésor
            vous assurent un dépaysement total. Loin des grandes structures
            touristiques, dans un jardin calme et ventilé avec piscine
            sécurisée, Catherine et Laurent, originaires de Normandie, vous
            accueillent toute l&apos;année dans leurs gîtes situés sur la
            commune d&apos;ANSE-BERTRAND, à 3 km des plages et de tous
            commerces. Nous avons l&apos;énorme chance de n&apos;avoir jamais
            de sargasses sur nos plages les plus proches. 
             Bonne visite !
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Welcome