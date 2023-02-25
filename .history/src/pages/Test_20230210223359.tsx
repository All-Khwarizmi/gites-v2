import Gites from "../components/Gites";
import Welcome from "../components/Welcome";
import { useRef } from "react";
import Localisation from "../components/Localisation";
import Navbar from "../components/Navbar";
import PriceTable from "../components/PriceTable";
import MetaModal from "../components/MetaModal";
import Contact from "../components/Contact";
import Partenariats from "../components/Partenariats";
import SimpleFooter from "../components/Footer";
import Video from "../components/Video";

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
    slidesPalmier,
  };

  return (
    <>
      <main>
        <Navbar position={divPosition} />
        <div className="grid-rows-4">
          <Video />
          <section
            id="welcome"
            ref={divPosition}
            className="section h-full w-screen overflow-hidden"
          >
            <Welcome />
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
        <section id="section-5" className="section-4 relative pb-5">
          <Contact />
        </section>
        
        <SimpleFooter />
      </main>
    </>
  );
};

export default Test;
