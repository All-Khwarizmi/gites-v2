import { type AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Itim } from "@next/font/google";
import Navbar from "../components/Navbar";


import "../styles/globals.css";
import Head from "next/head";

const inter = Itim({ weight: "400", subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="tit" />
      </Head>

      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
};

export default MyApp;
