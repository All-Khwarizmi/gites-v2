import React from "react";

const Gites = () => {
  return (
    <div className="grid grid-rows-3 place-items-center gap-3 lg:grid lg:grid-cols-3">
      <div className="lg:h-500 px-4 lg:w-[80%]  ">
        <img
          className="h-100 w-50 object-cover  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-500 ease-in-out group-hover:rotate-6 group-hover:scale-125"
          src="./Gite Ananas/1.jpg"
          alt="Gite Ananas"
        />
        <div className=" h-full w-full bg-black opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
      </div>
      <div className="lg:h-500 px-4 lg:w-[80%] ">
        <img
          className="h-100 w-50   shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          src="./Gite Kawan/1.jpg"
          alt="Gite Kawan"
        />
      </div>
      <div className="lg:h-500 px-4 lg:w-[80%] ">
        <img
          className="h-100 w-50  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          src="./Gite Kawan/1.jpg"
          alt="Gite Kawan"
        />
      </div>
    </div>
  );
};

export default Gites;
