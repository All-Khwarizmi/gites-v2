import Gites from "../components/Gites";
import Welcome from "../components/Welcome";
import { useRef } from "react";
import Localisation from "../components/Localisation";
import Navbar from "../components/Navbar";
import PriceTable from "../components/PriceTable";
import MetaModal from "../components/MetaModal";
import Contact from "../components/Contact";

import SimpleFooter from "../components/Footer";
import Video from "../components/Video";

const MainPage = () => {
  const divPosition: any = useRef(null);

  const slidesPalmier = [
    {
      img: "./palmier/1.jpg",
    },
    {
      img: "./palmier/2.jpg",
    },
    {
      img: "./palmier/3.jpg",
    },
    {
      img: "./palmier/4.jpg",
    },
    
    {
      img: "./palmier/6.jpg",
    },
    {
      img: "./palmier/6.jpg",
    },
  ];
  const slidesAnanas = [
    {
      img: "./ananas/1.jpg",
    },
    {
      img: "./ananas/2.jpg",
    },
    {
      img: "./ananas/3.jpg",
    },
    {
      img: "./ananas/4.jpg",
    },
    {
      img: "./ananas/5.jpg",
    },
    {
      img: "./ananas/6.jpg",
    },
  ];
  const slidesKawan = [
    {
      img: "kawan/1.jpg",
    },
    {
      img: "kawan/2.jpg",
    },
    {
      img: "kawan/3.jpg",
    },
    {
      img: "kawan/4.jpg",
    },

    {
      img: "kawan/5.jpg",
    },
    {
      img: "kawan/6.jpg",
    },
    {
      img: "kawan/7.jpg",
    },
    {
      img: "kawan/8.jpg",
    },
    {
      img: "kawan/9.jpg",
    },
    {
      img: "kawan/10.jpg",
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

export default MainPage;
