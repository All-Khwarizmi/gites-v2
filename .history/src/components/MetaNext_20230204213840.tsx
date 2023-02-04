import React from "react";
import Image from "next/image";

const MetaNext = () => {
  return (
    <>
      <Image
        className="meta w-90 lg:w-90 lg:h-50 h-60"
        priority
        src="./meta.svg"
        alt="Follow us on Twitter"
      />
    </>
  );
};

export default MetaNext;
