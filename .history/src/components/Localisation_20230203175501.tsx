import React from "react";
import Link from "next/link";

const Localisation = () => {
  const coordinates: string =
    "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
  const baseUrl: string =
    "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";
  return (
    <>
      <div className="p-3"></div>
      <div className=" flex  justify-center">
        <p className="text-extra-bold w-30 rounded bg-white p-2">
          Où nous trouver
        </p>
      </div>

      <div className="w-150 p-3">
        <a target="_blank" href={baseUrl}>
          <img src="localisation.jpg" alt="carte de la Guadeloupe" />
        </a>
      </div>
    </>
  );
};

export default Localisation;
