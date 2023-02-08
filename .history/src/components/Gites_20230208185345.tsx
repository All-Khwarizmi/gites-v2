import React from "react";
import Image from "next/image";
import Popup from "./Popup";
import AnanasModalLG from "./AnanasModalLG";
import AnanasModal from "./AnanasModal";
import KawanModal from "./KawanModal";
import PalmierModal from "./PalmierModal";
import KawanModalLG from "./KawanModalLG";
import PalmierModalLG from "./PalmierModalLG";


const Gites = ({slides} : any ) => {
  return (
    <>
      <div className="grid-rows grid place-items-center gap-3 lg:grid lg:grid-cols-3 lg:pt-5">
        <div className="rotate-x-6 lg:h-500 group relative flex skew-y-3 cursor-pointer flex-col justify-center overflow-hidden rounded-md py-5 px-1 text-center md:px-5 lg:w-[80%] ">
          <img
            className="h-100 w-50 rotate-x-6 -skew-y-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-500 ease-in-out hover:rotate-2 hover:scale-125"
            src="./Gite Ananas/1.jpg"
            alt="Gite Ananas"
          />
        </div>

        <AnanasModal slides={slides} />
        <div className="lg:h-500 group relative flex cursor-pointer justify-center overflow-hidden rounded-md px-1 text-center md:px-5  lg:w-[80%] ">
          <img
            className="h-100 w-50 rounded  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
            src="./Gite Kawan/1.jpg"
            alt="Gite Kawan"
          />
        </div>

        <KawanModal slides={slides} />
        <div className="lg:h-800 group relative flex -skew-y-3 cursor-pointer justify-center overflow-hidden rounded-md px-1 text-center md:px-5  lg:w-[80%] ">
          <img
            className="h-100 w-50 skew-y-3  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
            src="./Gite Palmier/1.jpg"
            alt="Gite Kawan"
          />
        </div>

        <PalmierModal slides={slides} />
      </div>
      <div className="grid-rows grid hidden place-items-center gap-3 pt-2 lg:block lg:grid lg:grid-cols-3">
        <AnanasModalLG slides={slides} />
        <div className="mt-1 rounded bg-white bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 sm:hidden lg:block ">
          
        </div>
        <div className="mt-1 rounded bg-white bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 sm:hidden lg:block ">
         <PalmierModalLG slides={slides} />
        </div>
      </div>
    </>
  );
};

export default Gites;
