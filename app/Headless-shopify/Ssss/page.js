import React from 'react';
import './ssss.css';
import {  ArrowRight } from 'lucide-react';

const ShopifyHeadless = () => {
  return (
    <section className="Sss">
      <div className="Sss-content">
        <p className="Sss-tagline">Expert Shopify Developers</p>
        <h2 className="Sss-heading">What is Shopify Headless Development?</h2>
        <p className="Sss-description">
          Traditional Shopify storefronts keep the frontend (what customers see) and the backend (inventory, checkout, and order management) tightly connected.
          This works well for many brands, but it limits creative freedom and performance optimization.
        </p>
        <p className="Sss-description">
          Going headless means decoupling the two, allowing businesses to:
        </p>
        <ul className="Sss-features">
          <li>
            Use modern frontend frameworks (like React, Vue.js, or Next.js) for faster, more dynamic user experiences.
          </li>
          <li>
            Deliver consistent, custom experiences across websites, apps, and even in-store kiosks.
          </li>
          <li>
            Integrate third-party tools without Shopify’s built-in limitations.
          </li>
        </ul>
        <p className="Sss-description">
          By separating presentation from operations, Shopify headless commerce gives merchants the best of both worlds—unlimited design potential while maintaining powerful commerce features.
        </p>

        <p className='Sss-description'>Need help deciding if headless is right for your business? Let’s chat.</p>

        <button className="Sssi-btn">
          Get in Touch <ArrowRight size={18}  />
        </button>
      </div>

      <div className="Sss-image">
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744063520/Shopify-Headless-Commerce_ktfpr4.webp" alt="Shopify Headless Development" />
      </div>
    </section>
  );
};

export default ShopifyHeadless;
