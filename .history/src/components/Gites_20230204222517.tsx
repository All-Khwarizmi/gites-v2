import React from "react";
import Image from "next/image";

const Gites = () => {
  return (
    <div className="grid grid-rows-3 place-items-center gap-3 lg:grid lg:grid-cols-3">
      <div className="lg:h-500 group relative flex cursor-pointer justify-center overflow-hidden rounded-md px-4 text-center lg:w-[80%] ">
        <img
          className="h-100 w-50 rotate-  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-500 ease-in-out hover:rotate-2 hover:scale-125"
          src="./Gite Ananas/1.jpg"
          alt="Gite Ananas"
        />
      </div>
      <div className="lg:h-500 group relative flex cursor-pointer justify-center overflow-hidden rounded-md px-4 text-center lg:w-[80%] ">
        <img
          className="h-100 w-50   shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
          src="./Gite Kawan/1.jpg"
          alt="Gite Kawan"
        />
      </div>
      <div className="lg:h-500 group relative flex cursor-pointer justify-center overflow-hidden rounded-md px-4 text-center lg:w-[80%] ">
        <img
          className="h-100 w-50  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
          src="./Gite Palmier/1.jpg"
          alt="Gite Kawan"
        />
      </div>
    </div>
  );
};

export default Gites;
