import { type AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
     <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
 
     </ChakraProvider>
 )
};

export default MyApp;
