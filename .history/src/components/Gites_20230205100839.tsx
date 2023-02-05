import React from "react";
import Image from "next/image";

const Gites = () => {
  return (
    <div className="grid-rows grid place-items-center gap-3 lg:grid lg:grid-cols-3">
      <div className="flex-row place-items-center content-center  gap-10">
        <div className="lg:h-500 rotate-x-6 group relative flex skew-y-3 cursor-pointer flex-col justify-center overflow-hidden rounded-md py-5 text-center sm:px-10 md:px-5 lg:w-[80%] ">
          <img
            className="h-100 w-50 rotate-x-6 -skew-y-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-500 ease-in-out hover:rotate-2 hover:scale-125"
            src="./Gite Ananas/1.jpg"
            alt="Gite Ananas"
          />
        </div>
        <div className="flex-c w-1/5 place-items-center content-center justify-center rounded bg-white bg-blue-500 text-center transition delay-150 duration-300 ease-in-out  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ">
          <h3 className="px-4 py-2 text-2xl">Gîte Ananas</h3>
        </div>
      </div>

      <div className="lg:h-500 group relative flex cursor-pointer justify-center overflow-hidden rounded-md text-center sm:px-10 md:px-5  lg:w-[80%] ">
        <img
          className="h-100 w-50 rounded  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
          src="./Gite Kawan/1.jpg"
          alt="Gite Kawan"
        />
      </div>
      <div className="rounded bg-white bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ">
        <h3 className="px-4 py-2 text-2xl">Gîte Kawan</h3>
      </div>
      <div className="lg:h-800 group relative flex -skew-y-3 cursor-pointer justify-center overflow-hidden rounded-md text-center sm:px-10 md:px-5  lg:w-[80%] ">
        <img
          className="h-100 w-50 skew-y-3  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
          src="./Gite Palmier/1.jpg"
          alt="Gite Kawan"
        />
      </div>
      <div className="mt-1 rounded bg-white bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ">
        <h3 className="px-4 py-2 text-2xl">Gîte Palmier</h3>
      </div>
    </div>
  );
};

export default Gites;
