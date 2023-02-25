import { type AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Indie_Flower, Cabin_Sketch, Roboto, Patrick_Hand } from "@next/font/google";
import Navbar from "../components/Navbar";

import "../styles/globals.css";
import Head from "next/head";

export const indie = Indie_Flower({ weight: "400", subsets: ["latin"] });
export const pat = Patrick_Hand({ weight: "400", subsets: ["latin"] });
export const cabin = Cabin_Sketch({ weight: "400", subsets: ["latin"] });
export const roboto = Cabin_Sketch({ weight: "400", subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Head>
        <title>Gîtes Mon Tresor</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
         
        />
       
        <meta name="title" content="Gîtes Mon Tresor" />
          
        <meta
          name="description"
          content="Gîtes accueillants et chaleureux en Guadeloupe, Anse Bertrand. Venez en famille ou en amoureux profiter des plaisirs qu'offre l'île. "
        />
        <meta property="og:image" content="/IMG_0318.JPG" key="ogimage" />
      </Head>

      <main className={indie.className} >
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
};

export default MyApp;
