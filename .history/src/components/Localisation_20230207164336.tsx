import React, { useEffect, useState } from "react";
import Link from "next/link";
import Maps from "./Maps";
import useWindowDimensions from "../helpers/useWindowDimension";

const Localisation = () => {
  const [dimensions, setDimensions] = useState({});
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (width) {
      if (width > 1000) {
        setDimensions(coordsLG);
      } else if (width > 800) {
        setDimensions(coordsLG);
      }
    } else {
      setDimensions(coordsSM);
    }
  }, [width]);

  const coordsLG = {
    width: "600px",
    height: "400px",
  };
  const coordsSM = {
    width: "370px",
    height: "270px",
  };
  const coordinates: string =
    "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
  const baseUrl: string =
    "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";
  return (
    <div className="grid-row grid place-items-center ">
      <div className="p-5"></div>
      <div className="  flex-row place-items-center justify-center gap-4 p-5 md:flex lg:w-[70%]">
        <div>
          {" "}
          <Maps coords={dimensions} />
        </div>

        <div className=" flex justify-center md:h-max md:w-full md:bg-white ">
          <div>
            <p className=" w-[60%] md:w-[60%] ">
              À 30 minutes (27km) de l’aéroport Pôle Caraïbes, desservie par Air
              France, Air Caraïbes, Corsair, Air Canada, Air Belgium.
            </p>
            <p> À visiter aux alentours :</p>
            <ul>
              <li>
                <p>La Pointe de la Grande Vigie</p>
              </li>
              <li>
                <p>La Porte d’Enfer avec le trou de Man Coco</p>
              </li>
            </ul>
            <p> Les plages :</p>
            <ul>
              <li>
                <p>La plage de La Chapelle</p>
              </li>
              <li>
                <p>L’Anse Laborde </p>
              </li>
              <li>
                <p>L’Anse Colas </p>
              </li>
              <li>
                <p className=" w-[60%] md:w-[60%] ">
                  {" "}
                  la magnifique plage du Souffleur avec sa base nautique Les
                  Marches des Esclaves et l’ancienne prison à Petit-Canal{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Localisation;
