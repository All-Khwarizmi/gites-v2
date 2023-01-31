import { type AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Itim } from "@next/font/google";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

const inter = Itim({ weight: "400", subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      {/* <Navbar /> */}
      <Layout>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      
    </ChakraProvider>
  );
};

export default MyApp;
