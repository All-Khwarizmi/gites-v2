import React from 'react'

const PriceTable = () => {
  return (
    <div>
        
    </div>
    <div className="demo10">
      <div className="container">
        <h4 className="py-4 text-center">Pricing Table</h4>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="pricingTable10">
              <div className="pricingTable-header">
                <h3 className="heading">Standard</h3>
                <span className="price-value">
                  <span className="currency">$</span> 10
                  <span className="month">/mo</span>
                </span>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Monthly Bandwidth</li>
                  <li>10 Subdomains</li>
                  <li>15 Domains</li>
                </ul>
                <a href="#" className="read">
                  sign up
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="pricingTable10">
              <div className="pricingTable-header">
                <h3 className="heading">Business</h3>
                <span className="price-value">
                  <span className="currency">$</span> 20
                  <span className="month">/mo</span>
                </span>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>60GB Disk Space</li>
                  <li>60 Email Accounts</li>
                  <li>60GB Monthly Bandwidth</li>
                  <li>15 Subdomains</li>
                  <li>20 Domains</li>
                </ul>
                <a href="#" className="read">
                  sign up
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
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
          <div className="col-md-3 col-sm-6">
            <div className="pricingTable10">
              <div className="pricingTable-header">
                <h3 className="heading">Extra</h3>
                <span className="price-value">
                  <span className="currency">$</span> 40
                  <span className="month">/mo</span>
                </span>
              </div>
              <div className="pricing-content">
                <ul>
                  <li>80GB Disk Space</li>
                  <li>80 Email Accounts</li>
                  <li>80GB Monthly Bandwidth</li>
                  <li>25 Subdomains</li>
                  <li>30 Domains</li>
                </ul>
                <a href="#" className="read">
                  sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceTable