import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { AppType } from 'next/app'
import { FC } from 'react';

const Layout= ({children?: ReactNode}) => {
    return (
      <>
      <nav className='nav'>
        <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
      </nav>
        
<>
  {props}
</>
      </>
      
    )
}

export default Layout