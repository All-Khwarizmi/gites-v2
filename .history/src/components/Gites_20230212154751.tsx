import React from "react";
import AnanasModalLG from "./AnanasModalLG";
import AnanasModal from "./AnanasModal";
import KawanModal from "./KawanModal";
import PalmierModal from "./PalmierModal";
import KawanModalLG from "./KawanModalLG";
import PalmierModalLG from "./PalmierModalLG";
import clsx from "clsx";
import { cabin } from "../pages/_app";
import Image from "next/image";

const Gites = ({ slides }: any) => {
  return (
    <>
      <div id="section-2" className="grid w-full place-items-center ">
        <div className="eight w-2/3 pb-10 pt-20 md:pt-25">
          <h1 className={clsx(cabin.className, "font-bold")}>Gîtes</h1>
        </div>
      </div>
      <div className="grid-rows grid place-items-center gap-3 lg:grid lg:grid-cols-3 lg:pt-5">
        <div className="rotate-x-6 lg:h-500 group relative flex skew-y-3 cursor-pointer flex-col justify-center overflow-hidden rounded-md py-5 px-1 text-center md:px-5 lg:w-[80%] ">
          <Image
            className="h-100 w-50 rotate-x-6 -skew-y-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-500 ease-in-out hover:rotate-2 hover:scale-125"
            src="./ananas.jpg"
            alt="Gite Ananas"
          />
        </div>

        <AnanasModal slides={slides} />
        <div className="lg:h-500 group relative flex cursor-pointer justify-center overflow-hidden rounded-md px-1 text-center md:px-5  lg:w-[80%] ">
          <img
            className="h-100 w-50 rounded  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
            src="./kawan.jpg"
            alt="Gite Kawan"
          />
        </div>

        <KawanModal slides={slides} />
        <div className="lg:h-800 group relative flex -skew-y-3 cursor-pointer justify-center overflow-hidden rounded-md px-1 text-center md:px-5  lg:w-[80%] ">
          <img
            className="h-100 w-50 skew-y-3  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
            src="./palmier.jpg"
            alt="Gite Palmier"
          />
        </div>

        <PalmierModal slides={slides} />
      </div>
      <div className="grid-rows grid hidden place-items-center gap-3 pt-2 lg:block lg:grid lg:grid-cols-3">
        <AnanasModalLG slides={slides} />
        <KawanModalLG slides={slides} />
        <PalmierModalLG slides={slides} />
      </div>
    </>
  );
};

export default Gites;
