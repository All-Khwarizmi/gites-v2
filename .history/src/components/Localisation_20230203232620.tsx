import React from "react";
import Link from "next/link";

const Localisation = () => {
  const coordinates: string =
    "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
  const baseUrl: string =
    "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";
  return (
    <>
      <div className="location flex flex-col  items-center justify-center p-3"></div>
      <div className="section-location align-center flex justify-center">
        <p className="text-extra-bold w-30 rounded bg-white p-2">
          Où nous trouver
        </p>
      </div>

      <div className="location p-3">
        <a
          className="align-center flex items-center justify-center"
          target="_blank"
          href={baseUrl}
        >
          <img
            className="w-2/3"
            src="./IMG_0537.JPG"
            alt="carte de la Guadeloupe"
          />
        </a>
      </div>
    </>
  );
};

export default Localisation;
