import React from 'react'

const PriceTable = () => {
  return (
    <div className="section-3 flex  h-screen flex-row justify-center gap-6 ">
      <div className="w-1/4 pl-3">
        <div className="pricingTable10">
          <div className="pricingTable-header">
            <span className="price-value">Basse Siason</span>
            <h3 className="heading">Du </h3>
          </div>
          <div className="pricing-content">
            <ul>
              <li>70GB Disk Space</li>
              <li>70 Email Accounts</li>
              <li>70GB Monthly Bandwidth</li>
              <li>20 Subdomains</li>
              <li>25 Domains</li>
            </ul>
            <a href="#" className="read">
              sign up
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/4 pl-3">
        <div className="pricingTable10">
          <div className="pricingTable-header">
            <h3 className="heading">Premium</h3>
            <span className="price-value">
              <span className="currency">$</span> 30
              <span className="month">/mo</span>
            </span>
          </div>
          <div className="pricing-content">
            <ul>
              <li>70GB Disk Space</li>
              <li>70 Email Accounts</li>
              <li>70GB Monthly Bandwidth</li>
              <li>20 Subdomains</li>
              <li>25 Domains</li>
            </ul>
            <a href="#" className="read">
              sign up
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/4 pl-3">
        <div className="pricingTable10">
          <div className="pricingTable-header">
            <h3 className="heading">Premium</h3>
            <span className="price-value">
              <span className="currency">$</span> 30
              <span className="month">/mo</span>
            </span>
          </div>
          <div className="pricing-content">
            <ul>
              <li>70GB Disk Space</li>
              <li>70 Email Accounts</li>
              <li>70GB Monthly Bandwidth</li>
              <li>20 Subdomains</li>
              <li>25 Domains</li>
            </ul>
            <a href="#" className="read">
              sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceTable