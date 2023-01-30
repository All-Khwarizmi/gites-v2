import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

 

const Layout= ({ children }: React.PropsWithChildren<{}>) => {
    return (
      <>
      <nav className='nav justify-center'>
      <ul className="flex justify-items-center space-between">
  <li className="mr-6">
    <img src="../../public/IMG_0318.JPG" alt="" />
    <a className="text-white text-2xl text-justify   hover:underline" href="#">Logo</a>
  </li>
  <li className="mr-6">
    <a className="text-white text-2xl text-justify   hover:underline" href="#">Accueil</a>
  </li>
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:underline " href="#">Les Gîtes</a>
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