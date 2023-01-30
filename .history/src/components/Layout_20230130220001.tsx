import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

import { useState, useEffect } from 'react'







const Layout= ({ children }: React.PropsWithChildren<{}>) => {


  const [color, setColor] = useState(" ")
  const [colorFont, setColorFont] = useState(" ")
  
const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        if (offset > 622) {
    setColor("white")
    setColorFont("text-")
  }else {
    setColor(" ")
    setColorFont("white")
  }
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);

   
const style = {backgroundColor: color, color: colorFont}
    return (
      <>
      
      <nav style={style} className="nav p-2 flex w-full">
      <ul className="flex justify-items-center gap-x-3 ">
  <li className="mr-6">
    <img className='w-24 hover:w-32' src='/IMG_0318.JPG' alt="Gîtes Mon Tresor Logo" />
   
  </li>
  <li className="mr-6">
    <a className={`text-white flex-initial text-2xl ${style.color} text-justify   hover:underline`} href="#">Accueil</a>
  </li>
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:underline " href="#">Gîtes</a>
  </li>
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:underline " href="#">Localisation</a>
  </li>
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:underline " href="#">Tarifs</a>
  </li>
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:underline " href="#">Contact</a>
  </li>
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:underline " href="#">Partenariats</a>
  </li>

  
</ul>

      </nav>
        
<>
  {children}
</>
      </>
      
    )
}

export default Layout