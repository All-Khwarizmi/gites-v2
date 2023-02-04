import React from "react";
import Link from "next/link";

const Localisation = () => {
  const coordinates: string =
    "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
  const baseUrl: string =
    "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";
  return (
    <div className="grid-row grid">
      <div className="p-5"></div>

      <div className=" grid-row grid gap-3 p-3 text-center">
        <div className="  flex flex-row justify-center ">
          <p className="text-extra-bold place-self-center rounded bg-white p-2">
            Où nous trouver
          </p>
        </div>
        <a
          className="align-center flex items-center justify-center"
          target="_blank"
          href={baseUrl}
        >
          <img
            className="w[90%] md:w-2/3"
            src="./IMG_0537.JPG"
            alt="carte de la Guadeloupe"
          />
        </a>
      </div>
      <div className="   w-4/12   text-center ">
        <p className="p-2 ">
          À 30 minutes (27km) de l’aéroport Pôle Caraïbes, desservie par Air
          France, Air Caraïbes, Corsair, Air Canada, Air Belgium. À visiter aux
          alentours : La Pointe de la Grande Vigie La Porte d’Enfer avec le trou
          de Man Coco Les plages : plage de La Chapelle, l’Anse Laborde, l’Anse
          Colas et la magnifique plage du Souffleur avec sa base nautique Les
          Marches des Esclaves et l’ancienne prison à Petit-Canal
        </p>
      </div>
    </div>
  );
};

export default Localisation;
