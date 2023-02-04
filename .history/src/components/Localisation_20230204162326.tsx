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

      <div className=" flex flex-col gap-3 p-3">
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
            className="w[90%] md:w-"
            src="./IMG_0537.JPG"
            alt="carte de la Guadeloupe"
          />
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default Localisation;
