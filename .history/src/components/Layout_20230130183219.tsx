import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import {}

import styles from '../styles/Home.module.scss'

 console.log("Lol")

const Layout= ({ children }: React.PropsWithChildren<{}>) => {


    return (
      <>
      
      <nav className={styles.nav}>
      <ul className="flex justify-items-center gap-x-3 ">
  <li className="mr-6">
    <img className='w-24 hover:w-32' src='/IMG_0318.JPG' alt="Gîtes Mon Tresor Logo" />
   
  </li>
  <li className="mr-6">
    <a className="text-white flex-initial text-2xl text-justify   hover:underline" href="#">Accueil</a>
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