import { type AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { Itim } from '@next/font/google'


import "../styles/globals.css";


const inter = Itim({weight: "400", subsets })

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
     <ChakraProvider>
      <Layout>
        <main className={inter.className}>
<Component {...pageProps} />
        </main>
        
      </Layout>
 
     </ChakraProvider>
 )
};

export default MyApp;
