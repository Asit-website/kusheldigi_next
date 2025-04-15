import React from 'react';
import './spo.css';
import {
  FaTachometerAlt,
  FaPuzzlePiece,
  FaGlobe,
  FaMapMarkerAlt,
  FaSwatchbook,
  FaEye
} from 'react-icons/fa';

const BenefitsOfHeadlessShopify = () => {
  return (
    <section className="softyy">
      <div className='softyy1'>
        <div className="softyy-header">
          <h2>Benefits of Headless Shopify</h2>
          <p>
            If you want to dive deeper into the digital revolution then you need to go headless with Shopify.
            Experience unmatched flexibility, speed, and customizability tailored for the future of headless e-commerce.
          </p>
        </div>

        <div className="softyy-grid">
          <div className="softyy-box">
            <FaTachometerAlt className="softyy-icon" />
            <p>
              Enjoy faster loads and a better user experience for higher conversions.<br />
              Headless e-commerce on Shopify optimizes every aspect of your store for performance.
            </p>
          </div>

          <div className="softyy-box">
            <FaPuzzlePiece className="softyy-icon" />
            <p>
             Save on IT with easy third-party integrations and fewer platform dependencies.<br />
              Headless commerce on Shopify simplifies complex processes and reduces maintenance overheads.
            </p>
          </div>

          <div className="softyy-box">
            <FaMapMarkerAlt className="softyy-icon" />
            <p>
              Pivot swiftly with headless flexibility, adapting to market shifts or launching new offers.<br />
              Shopify headless architecture allows your business to remain agile and responsive.
            </p>
          </div>

          <div className="softyy-box">
            <FaGlobe className="softyy-icon" />
            <p>
              Tap into new markets with omni-channel capabilities, expanding globally.<br />
              Headless e-commerce enables your brand to reach international audiences effectively.
            </p>
          </div>

          {/* New Card - Branding Consistency */}
          <div className="softyy-box">
            <FaSwatchbook className="softyy-icon" />
            <p>
              Maintain consistent branding across touchpoints, boosting trust.<br />
              Our headless commerce solution ensures your brand message is uniform and compelling across all channels.
            </p>
          </div>

          {/* New Card - Analytics Insight */}
          <div className="softyy-box">
            <FaEye className="softyy-icon" />
            <p>
              Simplify analytics integration for smarter growth strategies.<br />
              Headless commerce on Shopify provides robust data insights to help you grow strategically and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfHeadlessShopify;
