import React from "react";
import Image from "next/image";

const MetaNext = () => {
  return (
    <>
      <Image
      className="meta h-60  lg:w-90 lg:h-50"
        priority
        src="./meta.svg"
       
        alt="Follow us on Twitter"
      />
    </>
  );
};

export default MetaNext;
