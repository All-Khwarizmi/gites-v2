import React from "react";

const Gites = () => {
  return (
    <div className=":grid-rows-3 grid gap-3 lg:grid lg:grid-cols-3">
      <div className="lg:h-500 lg:w-[80%]  ">
        <img
          className="h-100 w-50 p-2 shadow-2xl shadow-zinc-400"
          src="./Gite Ananas/1.jpg"
          alt="Gite Ananas"
        />
      </div>
      <div className="lg:h-500 lg:w-[80%] ">
        <img
          className="h-100 w-50 p-2"
          src="./Gite Kawan/1.jpg"
          alt="Gite Kawan"
        />
      </div>
      <div className="lg:h-500 lg:w-[80%] ">
        <img
          className="h-100 w-50 p-2"
          src="./Gite Kawan/1.jpg"
          alt="Gite Kawan"
        />
      </div>
    </div>
  );
};

export default Gites;
