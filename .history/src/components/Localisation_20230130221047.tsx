import React from "react";
import Link from "next/link";

const Localisation = () => {
  const coordinates: string =
    "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
  const baseUrl: string =
    "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";
  return (
    <>
    <div className="p-3">

    </div>
    <div className="flex justify-center  text-bold">
         <p className="p-2 bg-white text-bold w-30" >Où nous trouver</p >
    </div>
     
      <div className="w-150 p-3">
        <a target="_blank" href={baseUrl}>
          <img src="/location.jpg" alt="" />
        </a>
      </div>
    </>
  );
};

export default Localisation;
