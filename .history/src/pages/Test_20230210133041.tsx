import Gites from "../components/Gites";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { useRef } from "react";
import Localisation from "../components/Localisation";
import Navbar from "../components/Navbar";
import PriceTable from "../components/PriceTable";
import MetaModal from "../components/MetaModal";
import Contact from "../components/Contact";
import Partenariats from "../components/Partenariats";
import SimpleFooter from "../components/Footer";

const Test = () => {
  const divPosition: any = useRef(null);

  const slidesPalmier = [
    {
      img: "/Gite Palmier/1.jpg",
    },
    {
      img: "/Gite Palmier/2.jpg",
    },
    {
      img: "/Gite Palmier/3.jpg",
    },
    {
      img: "/Gite Palmier/4.jpg",
    },
    {
      img: "/Gite Palmier/5.jpg",
    },
    {
      img: "/Gite Palmier/6.jpg",
    },
    {
      img: "/Gite Palmier/7.jpg",
    },
    {
      img: "/Gite Palmier/9087556.jpg",
    },
  ];
  const slidesAnanas = [
    {
      img: "/Gite Ananas/1.jpg",
    },
    {
      img: "/Gite Ananas/2.jpg",
    },
    {
      img: "/Gite Ananas/3.jpg",
    },
    {
      img: "/Gite Ananas/4.jpg",
    },
    {
      img: "/Gite Ananas/5.jpg",
    },
    {
      img: "/Gite Ananas/6.jpg",
    },
    {
      img: "/Gite Ananas/20191231_100325.jpg",
    },
    {
      img: "/Gite Ananas/20200325_100606.jpg",
    },
  ];
  const slidesKawan = [
    {
      img: "/Gite Kawan/1.jpg",
    },
    {
      img: "/Gite Kawan/2.jpg",
    },
    {
      img: "/Gite Kawan/3.jpg",
    },
    {
      img: "/Gite Kawan/4.jpg",
    },

    {
      img: "/Gite Kawan/6.jpg",
    },
    {
      img: "/Gite Kawan/7.jpg",
    },
    {
      img: "/Gite Kawan/8.jpg",
    },
    {
      img: "/Gite Kawan/9.jpg",
    },
    {
      img: "/Gite Kawan/10.jpg",
    },
    {
      img: "/Gite Kawan/11.jpg",
    },
    {
      img: "/Gite Kawan/12.jpg",
    },
    {
      img: "/Gite Kawan/13.jpg",
    },
    {
      img: "/Gite Kawan/14.jpg",
    },
    {
      img: "/Gite Kawan/15.jpg",
    },
  ];

   const slides = {
    slidesAnanas,
    slidesKawan,
    slidesPalmier
   }

  return (
    <>
      <main>
        <Navbar position={divPosition} />
        <div className="grid-rows-4">
          <section id="section-1" className="video">
            <video
              autoPlay
              playsInline
              muted
              loop
              id="myVideo"
              poster="/Gite Kawan/1.jpg"
            >
              <source src={"/Mon film.mp4"} type="video/mp4" />
            </video>
          </section>

          <section
            id="section-2"
            ref={divPosition}
            className="section h-full w-screen overflow-hidden"
          >
      
         
            <Gites slides={slides} />
          </section>
        </div>
        <MetaModal />

        <section id="section-3" className="section-2 ">
          <Localisation />
        </section>
        <section id="section-4" className="section-3 relative">
          <PriceTable />
        </section>
        <section id="section-5" className="section-4 relative">
          <Contact />
        </section>
        <section id="section-6" className="section-5">
          <Partenariats />
        </section>
        <SimpleFooter />
      </main>
    </>
  );
};

export default Test;
