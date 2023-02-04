import React from "react";

const PriceTable = () => {
  return (
    <div className="section-3 grid grid-flow-row place-items-center gap-1 md:grid-flow-col">
      <div className="w-4/5 p-1 ">
        <div className="pricingTable10">
          <div className="pricingTable-header">
            <span className="price-value">BASSE SAISON</span>
            <h3 className="heading">Du 1/05 au 30/06</h3>
            <h3 className="heading">&</h3>
            <h3 className="heading">Du 1/09 au 31/10</h3>
          </div>
          <div className="pricing-content">
            <div>
              <ul></ul>
            </div>
            <h2 className="text-3xl">Gîtes Ananas et Palmier</h2>
            400€ / semaine
            <p> pour 4 personnes </p>
            <br />
            <p>De 3 à 6 nuités:</p>
            <p> - 65€ pour 2 personnes</p>
            <p> - 90€ pour 4 personnes</p>
            <div className="grid grid-row place-items-center p-2">
              <div className="border-black-500 w-2/3 border-t-2" />
            </div>
            <h2 className=" pl-2 text-3xl">Gîte Kawan</h2>
            <p>420€ / semaine</p>
            <p> pour 4 personnes </p>
            <p>De 3 à 6 nuités:</p>
            <p> - 70€ pour 2 personnes</p>
            <p> - 100€ pour 4 personnes</p>
          </div>
        </div>
      </div>

      <div className="w-4/5 p-1 ">
        <div className="pricingTable10">
          <div className="pricingTable-header">
            <span className="price-value">HAUTE SAISON</span>
            <h3 className="heading">Du 1/11 au 30/04</h3>
          </div>
          <div className="pricing-content">
            <h2>Gîtes Ananas et Palmier</h2>
            <ul>
              <li>
                450€ / semaine
                <p> pour 4 personnes </p>
                <br />
                <p>De 3 à 6 nuités:</p>
                <p> - 75€ pour 2 personnes</p>
                <p> - 100€ pour 4 personnes</p>
              </li>
              <h2>Gîte Kawan</h2>
              <li>
                <p>480€ / semaine</p>
                <p> pour 4 personnes </p>
                <br />
                <p>De 3 à 6 nuités:</p>
                <p> - 80€ pour 2 personnes</p>
                <p> - 120€ pour 4 personnes</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-4/5 p-1 ">
        <div className="pricingTable10">
          <div className="pricingTable-header">
            <span className="price-value">TRÈS HAUTE SAISON</span>
            <h3 className="heading">Du 1/07 au 31/08</h3>
          </div>
          <div className="pricing-content">
            <h2>Gîtes Ananas et Palmier</h2>
            <ul>
              <li>
                500€ / semaine
                <p> pour 4 personnes </p>
                <br />
                <p>De 3 à 6 nuités:</p>
                <p> - 90€ pour 2 personnes</p>
                <p> - 115€ pour 4 personnes</p>
              </li>
              <h2>Gîte Kawan</h2>
              <li>
                <p>520€ / semaine</p>
                <p> pour 4 personnes </p>
                <br />
                <p>De 3 à 6 nuités:</p>
                <p> - 100€ pour 2 personnes</p>
                <p> - 140€ pour 4 personnes</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
