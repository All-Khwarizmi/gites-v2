import React from 'react'
import Image from "next/image";


const MetaNext = () => {
  return (
    <div>
      <Image
        priority
        src="/meta"
        height={32}
        width={32}
        alt="Follow us on Twitter"
      />
    </div>
  );
}

export default MetaNext