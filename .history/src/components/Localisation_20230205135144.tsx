import React from "react";
import Link from "next/link";

import Maps from "./Maps";
import useWindowDimensions from "../helpers/useWindowDimension";

const Localisation = () => {
  const { width, height } = useWindowDimensions();
const coordsLG = {
  width: "800px",
  height: "400px",
};
const coordsSM = {
  width: "500px",
  height: "300px",
};
  const coordinates: string =
    "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
  const baseUrl: string =
    "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";
if (width) {
  if (width > 1000) {
    return (
      <div className="grid-row grid">
        <div className="p-5"></div>

        <div className=" grid-row grid place-items-center gap-3 p-3">
          <div className="  flex flex-row justify-center ">
            <p className="text-extra-bold place-self-center rounded bg-white p-2">
              Où nous trouver
            </p>
          </div>
          {/*    <a
          className=" flex items-center justify-center"
          target="_blank"
          href={baseUrl}
        >
          <img
            className="w[90%] md:w-2/3"
            src="./IMG_0537.jpg"
            alt="carte de la Guadeloupe"
          />
        </a> */}
          <Maps coords={coordsLG} />
          <p className=" md:w-2/3 ">
            À 30 minutes (27km) de l’aéroport Pôle Caraïbes, desservie par Air
            France, Air Caraïbes, Corsair, Air Canada, Air Belgium. À visiter
            aux alentours : La Pointe de la Grande Vigie La Porte d’Enfer avec
            le trou de Man Coco Les plages : plage de La Chapelle, l’Anse
            Laborde, l’Anse Colas et la magnifique plage du Souffleur avec sa
            base nautique Les Marches des Esclaves et l’ancienne prison à
            Petit-Canal
          </p>
        </div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div className="grid-row grid">
        <div className="p-5"></div>

        <div className=" grid-row grid place-items-center gap-3 p-3">
          <div className="  flex flex-row justify-center ">
            <p className="text-extra-bold place-self-center rounded bg-white p-2">
              Où nous trouver
            </p>
          </div>
          {/*    <a
          className=" flex items-center justify-center"
          target="_blank"
          href={baseUrl}
        >
          <img
            className="w[90%] md:w-2/3"
            src="./IMG_0537.jpg"
            alt="carte de la Guadeloupe"
          />
        </a> */}
          <Maps coords={coordsSM} />
          <p className=" md:w-2/3 ">
            À 30 minutes (27km) de l’aéroport Pôle Caraïbes, desservie par Air
            France, Air Caraïbes, Corsair, Air Canada, Air Belgium. À visiter
            aux alentours : La Pointe de la Grande Vigie La Porte d’Enfer avec
            le trou de Man Coco Les plages : plage de La Chapelle, l’Anse
            Laborde, l’Anse Colas et la magnifique plage du Souffleur avec sa
            base nautique Les Marches des Esclaves et l’ancienne prison à
            Petit-Canal
          </p>
        </div>
        <div></div>
      </div>
    );
  }
} else {
  return (
    <div className="grid-row grid">
      <div className="p-5"></div>

      <div className=" grid-row grid place-items-center gap-3 p-3">
        <div className="  flex flex-row justify-center ">
          <p className="text-extra-bold place-self-center rounded bg-white p-2">
            Où nous trouver
          </p>
        </div>
        {/*    <a
          className=" flex items-center justify-center"
          target="_blank"
          href={baseUrl}
        >
          <img
            className="w[90%] md:w-2/3"
            src="./IMG_0537.jpg"
            alt="carte de la Guadeloupe"
          />
        </a> */}
        <Maps coords={coordsSM} />
        <p className=" md:w-2/3 ">
          À 30 minutes (27km) de l’aéroport Pôle Caraïbes, desservie par Air
          France, Air Caraïbes, Corsair, Air Canada, Air Belgium. À visiter aux
          alentours : La Pointe de la Grande Vigie La Porte d’Enfer avec le trou
          de Man Coco Les plages : plage de La Chapelle, l’Anse Laborde, l’Anse
          Colas et la magnifique plage du Souffleur avec sa base nautique Les
          Marches des Esclaves et l’ancienne prison à Petit-Canal
        </p>
      </div>
      <div></div>
    </div>
  );
}
  
};

export default Localisation;
