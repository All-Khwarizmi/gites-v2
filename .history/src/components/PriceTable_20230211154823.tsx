import React from "react";
import clsx from "clsx";
import { cabin } from "../pages/_app";
import ModaliteModal from "./ModaliteModal";
import ModaliteModalLG from "./ModaliteModalLG";

const PriceTable = () => {
  return (
    <>
      <div className="grid w-full place-items-center py-10 pt-20 md:pt-32">
        <div className="eight w-2/3  ">
          <h1 className={clsx(cabin.className, "font-bold")}>Tarifs</h1>
        </div>
      </div>
      <div>
        <div className=" grid grid-flow-row place-items-center gap-1 lg:grid-flow-col">
          <div className="  w-4/5  ">
            <div className="pricingTable10">
              <div className="pricingTable-header">
                <span
                  className={clsx(
                    cabin.className,
                    "price-value py-3 font-bold"
                  )}
                >
                  BASSE SAISON
                </span>
                <h3 className="heading">Du 1/05 au 30/06</h3>
                <h3 className="heading">&</h3>
                <h3 className="heading">Du 1/09 au 31/10</h3>
              </div>
              <div className="pricing-content">
                <div>
                  <ul></ul>
                </div>
                <div className="text-lg">
                  <h2 className="text-3xl">Gîtes Ananas et Palmier</h2>
                  <div className="p-2"></div>
                  <strong> 400€</strong> / semaine
                  <p> pour 4 personnes </p>
                  <div className="p-2"></div>
                  <p>De 3 à 6 nuités:</p>
                  <p>
                    {" "}
                    - <strong>65€ </strong> pour 2 personnes
                  </p>
                  <p>
                    {" "}
                    - <strong>90€</strong> pour 4 personnes
                  </p>
                  <div className="grid-row grid place-items-center p-3">
                    <div className="border-black-500 w-2/3 border-t-2" />
                  </div>
                  <h2 className=" pl-2 text-3xl">Gîte Kawan</h2>
                  <div className="p-2"></div>
                  <p>
                    <strong>420€</strong>/ semaine
                  </p>
                  <p> pour 4 personnes </p>
                  <div className="p-2"></div>
                  <p>De 3 à 6 nuités:</p>
                  <p>
                    {" "}
                    - <strong>70€</strong> pour 2 personnes
                  </p>
                  <p className="pb-10">
                    {" "}
                    - <strong>100€</strong> pour 4 personnes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-4/5 ">
            <div className="pricingTable10">
              <div className="pricingTable-header ">
                <span
                  className={clsx(
                    cabin.className,
                    "price-value py-3 pt-5 font-bold"
                  )}
                >
                  HAUTE SAISON
                </span>
                <h3 className="heading pb-6 ">Du 1/11 au 30/04</h3>
              </div>
              <div className="pricing-content">
                <div>
                  <ul></ul>
                </div>
              </div>
              <div className="bg-white text-lg">
                <h2 className="text-3xl">Gîtes Ananas et Palmier</h2>
                <div className="p-2"></div>
                <strong>450€</strong> / semaine
                <p> pour 4 personnes </p>
                <div className="p-2"></div>
                <p>De 3 à 6 nuités:</p>
                <p>
                  {" "}
                  - <strong>75€</strong> pour 2 personnes
                </p>
                <p>
                  {" "}
                  - <strong>100€</strong> pour 4 personnes
                </p>
                <div className="grid-row grid place-items-center p-3">
                  <div className="border-black-500 w-2/3 border-t-2" />
                </div>
                <h2 className=" pl-2 text-3xl">Gîte Kawan</h2>
                <div className="p-2"></div>
                <p>
                  <strong>480€</strong> / semaine
                </p>
                <p> pour 4 personnes </p>
                <div className="p-2"></div>
                <p>De 3 à 6 nuités:</p>
                <p>
                  {" "}
                  - <strong>80€</strong> pour 2 personnes
                </p>
                <p className="pb-12 ">
                  {" "}
                  - <strong>120€</strong> pour 4 personnes
                </p>
              </div>
            </div>
          </div>

          <div className=" w-4/5 ">
            <div className="pricingTable10">
              <div className="pricingTable-header">
                <span
                  className={clsx(
                    cabin.className,
                    "price-value py-3 font-bold"
                  )}
                >
                  TRÈS HAUTE SAISON
                </span>
                <h3 className="heading pb-4 ">Du 1/07 au 31/08</h3>
              </div>
              <div className="pricing-content">
                <div>
                  <ul></ul>
                </div>
                <div className="text-lg">
                  <h2 className="text-3xl">Gîtes Ananas et Palmier</h2>
                  <div className="p-2"></div>
                  <strong>500€</strong> / semaine
                  <p> pour 4 personnes </p>
                  <div className="p-2"></div>
                  <p>De 3 à 6 nuités:</p>
                  <p>
                    {" "}
                    - <strong>90€</strong> pour 2 personnes
                  </p>
                  <p>
                    {" "}
                    - <strong>115€</strong> pour 4 personnes
                  </p>
                  <div className="grid-row grid place-items-center p-3">
                    <div className="border-black-500 w-2/3 border-t-2" />
                  </div>
                  <h2 className=" pl-2 text-3xl">Gîte Kawan</h2>
                  <div className="p-2"></div>
                  <p>
                    <strong>520€</strong> / semaine
                  </p>
                  <p> pour 4 personnes </p>
                  <div className="p-2"></div>
                  <p>De 3 à 6 nuités:</p>
                  <p>
                    {" "}
                    - <strong>100€</strong> pour 2 personnes
                  </p>
                  <p className="pb-12">
                    {" "}
                    - <strong>140€</strong> pour 4 personnes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ModaliteModal />
        </div>
        <div className="grid place-items-center pt-10">
          <ModaliteModalLG />
        </div>
      </div>
    </>
  );
};

export default PriceTable;
