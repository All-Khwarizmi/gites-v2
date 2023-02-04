import React from "react";

const Gites = () => {
  return (
    <div className="grid grid-rows-3 place-items-center gap-3 lg:grid lg:grid-cols-3">
      <div className="lg:h-500 px-4 lg:w-[80%]  ">
        <img
          className="h-100 w-50   shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] duration-500 ease-in-out group-hover:rotate-6 hover:scale-125"
          src="./Gite Ananas/1.jpg"
          alt="Gite Ananas"
        />
        
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
