import React from 'react'
import Link  from 'next/link';

const Localisation = () => {
    const coordinates: string = "Les+Gîtes+Mon+Trésor/@16.4645544,-61.4825254,17z";
    const baseUrl: string =
      "https://www.google.com/maps/search/?api=1&query=Les+Gîtes+Mon+Trésor+Anse+Bertrand/";
  return (
    <>
      <div>Où nous trouver</div>
      <div className='p-3 w-150'>
        <  href={baseUrl}> 
        <img src="/location.jpg" alt="" />
        </>
       
      </div>
    </>
  );
}

export default Localisation