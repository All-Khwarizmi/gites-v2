import React from "react";
import Image from "next/image";

const MetaNext = () => {
  return (
    <>
      <Image
      className="meta lg:w-"
        priority
        src="./meta.svg"
        height={32}
        width={32}
        alt="Follow us on Twitter"
      />
    </>
  );
};

export default MetaNext;
