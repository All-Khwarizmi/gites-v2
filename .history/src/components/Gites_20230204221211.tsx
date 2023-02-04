import React from "react";

const Gites = () => {
  return (
    <div className="grid-rows-3 place-items-center grid gap-3 lg:grid lg:grid-cols-3">
      <div className="lg:h-500 lg:w-[80%] px-  ">
        <img
          className="h-100 w-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          src="./Gite Ananas/1.jpg"
          alt="Gite Ananas"
        />
      </div>
      <div className="lg:h-500 lg:w-[80%] px- ">
        <img
          className="h-100 w-50  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          src="./Gite Kawan/1.jpg"
          alt="Gite Kawan"
        />
      </div>
      <div className="lg:h-500 lg:w-[80%] px- ">
        <img
          className="h-100 w-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          src="./Gite Kawan/1.jpg"
          alt="Gite Kawan"
        />
      </div>
    </div>
  );
};

export default Gites;
