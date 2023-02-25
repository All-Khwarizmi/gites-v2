import React, { useEffect, useState, useMemo } from "react";
import clsx from "clsx";
import { cabin } from "../pages/_app";
import Maps from "./Maps";
import useWindowDimensions from "../helpers/useWindowDimension";

const Localisation = () => {
  const [dimensions, setDimensions] = useState({});
  const { width } = useWindowDimensions();

    const coordsLG = useMemo(() => ({
      width: "600px",
      height: "400px",
    }), []);
    const coordsSM = useMemo(
      () => ({
        width: "600px",
        height: "400px",
      }),
      []
    );

    // 370 270
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
  }, [width, coordsSM, coordsLG]);


  const coordinates: string =
    "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
  const baseUrl: string =
    "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";
  return (
    <>
      <div className="grid w-full place-items-center ">
        <div className="eight w-2/3 py-10 pt-20 md:pt-32">
          <h1 className={clsx(cabin.className, "font-bold")}>Localisation</h1>
        </div>
      </div>
      <div className="grid-row grid place-items-center ">
        <div className="  align-center flex items-center justify-center gap-4 p-5 lg:flex lg:w-[70%]">
          <div className="items-center lg:flex-row">
            <div>
              {" "}
              <Maps coords={dimensions} />
            </div>

            <div className=" flex w-[100%] items-center justify-center md:h-[100%] ">
              <div className="flex-col gap-5 lg:pt-10 py-5 md:grid md:grid-cols-3">
                <div className="pl-2 text-center">
                  <p className={clsx(cabin.className, "text-2xl ")}>Accès:</p>
                  <p className="">
                    À 30 minutes (27km) de l’aéroport Pôle Caraïbes, desservie
                    par Air France, Air Caraïbes, Corsair, Air Canada, Air
                    Belgium.
                  </p>
                </div>
                <div className="text-center">
                  <div className="py-2 lg:py-0"></div>
                  <p className={clsx(cabin.className, "text-2xl ")}>
                    {" "}
                    À visiter aux alentours :
                  </p>
                  <ul>
                    <li>
                      <p>La Pointe de la Grande Vigie</p>
                    </li>
                    <li>
                      <p>La Porte d’Enfer avec le trou de Man Coco</p>
                    </li>
                    <li>
                      <p className="  ">
                        {" "}
                        Les Marches des Esclaves et l’ancienne prison à
                        Petit-Canal{" "}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="py-2 lg:py-0"></div>
                  <p className={clsx(cabin.className, "text-2xl ")}>
                    {" "}
                    Les plages :
                  </p>
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
                      <p>
                        {" "}
                        La magnifique plage du Souffleur avec sa base nautique
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Localisation;
