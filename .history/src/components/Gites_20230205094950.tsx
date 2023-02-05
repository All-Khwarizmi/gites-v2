import React from "react";
import Image from "next/image";

const Gites = () => {
  return (
    <div className="grid grid-rows place-items-center gap-3 lg:grid lg:grid-cols-3">
      <div className="lg:h-500 rotate-x-6 group relative flex skew-y-3 cursor-pointer flex-col justify-center overflow-hidden rounded-md text-center sm:px-10 md:px-5  lg:w-[80%] ">
        <img
          className="h-100 w-50 rotate-x-6 -skew-y-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-500 ease-in-out hover:rotate-2 hover:scale-125"
          src="./Gite Ananas/1.jpg"
          alt="Gite Ananas"
        />
      </div>
      <h3>Gîte Ananas</h3>
      <div className="lg:h-500 group relative flex cursor-pointer justify-center overflow-hidden rounded-md text-center sm:px-10 md:px-5  lg:w-[80%] ">
        <img
          className="h-100 w-50 rounded  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
          src="./Gite Kawan/1.jpg"
          alt="Gite Kawan"
        />
      </div>
      <div className="lg:h-800 group relative flex -skew-y-3 cursor-pointer justify-center overflow-hidden rounded-md text-center sm:px-10 md:px-5  lg:w-[80%] ">
        <img
          className="h-100 w-50 skew-y-3  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
          duration-500 ease-in-out hover:rotate-2 hover:scale-125"
          src="./Gite Palmier/1.jpg"
          alt="Gite Kawan"
        />
      </div>
    </div>
  );
};

export default Gites;
