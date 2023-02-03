import React from 'react'

const PriceTable = () => {
  return (
    <div clas="demo10">
      <div clas="container">
        <h4 clas="py-4 text-center">Pricing Table</h4>
        <div clas="row">
          <div clas="col-md-3 col-sm-6">
            <div clas="pricingTable10">
              <div clas="pricingTable-header">
                <h3 clas="heading">Standard</h3>
                <span clas="price-value">
                  <span clas="currency">$</span> 10
                  <span clas="month">/mo</span>
                </span>
              </div>
              <div clas="pricing-content">
                <ul>
                  <li>50GB Disk Space</li>
                  <li>50 Email Accounts</li>
                  <li>50GB Monthly Bandwidth</li>
                  <li>10 Subdomains</li>
                  <li>15 Domains</li>
                </ul>
                <a href="#" clas="read">
                  sign up
                </a>
              </div>
            </div>
          </div>
          <div clas="col-md-3 col-sm-6">
            <div clas="pricingTable10">
              <div clas="pricingTable-header">
                <h3 clas="heading">Business</h3>
                <span clas="price-value">
                  <span clas="currency">$</span> 20
                  <span clas="month">/mo</span>
                </span>
              </div>
              <div clas="pricing-content">
                <ul>
                  <li>60GB Disk Space</li>
                  <li>60 Email Accounts</li>
                  <li>60GB Monthly Bandwidth</li>
                  <li>15 Subdomains</li>
                  <li>20 Domains</li>
                </ul>
                <a href="#" clas="read">
                  sign up
                </a>
              </div>
            </div>
          </div>
          <div clas="col-md-3 col-sm-6">
            <div clas="pricingTable10">
              <div clas="pricingTable-header">
                <h3 clas="heading">Premium</h3>
                <span clas="price-value">
                  <span clas="currency">$</span> 30
                  <span clas="month">/mo</span>
                </span>
              </div>
              <div clas="pricing-content">
                <ul>
                  <li>70GB Disk Space</li>
                  <li>70 Email Accounts</li>
                  <li>70GB Monthly Bandwidth</li>
                  <li>20 Subdomains</li>
                  <li>25 Domains</li>
                </ul>
                <a href="#" clas="read">
                  sign up
                </a>
              </div>
            </div>
          </div>
          <div clas="col-md-3 col-sm-6">
            <div clas="pricingTable10">
              <div clas="pricingTable-header">
                <h3 clas="heading">Extra</h3>
                <span clas="price-value">
                  <span clas="currency">$</span> 40
                  <span clas="month">/mo</span>
                </span>
              </div>
              <div clas="pricing-content">
                <ul>
                  <li>80GB Disk Space</li>
                  <li>80 Email Accounts</li>
                  <li>80GB Monthly Bandwidth</li>
                  <li>25 Subdomains</li>
                  <li>30 Domains</li>
                </ul>
                <a href="#" clas="read">
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