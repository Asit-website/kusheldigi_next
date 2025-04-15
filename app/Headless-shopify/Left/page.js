import React from "react";
import { FaBullhorn, FaMoneyCheckAlt, FaChartLine, FaKey, FaGift, FaCogs, FaGlobe, FaPuzzlePiece } from "react-icons/fa";
import './left.css';

const features = [
    {
      icon: <FaBullhorn size={40} />,
      title: "Multi-Channel Selling",
      description:
        "Seamlessly integrate multi-channel selling, expanding your business's footprint across platforms and devices. Our Shopify expert developers can help you leverage multi-channel strategies effectively."
    },
    {
      icon: <FaMoneyCheckAlt size={40} />,
      title: "Secure Payment Processing",
      description:
        "Trustworthy transactions are the heart of our headless Shopify development. Enjoy ironclad payment security. Our Shopify development service ensures all transactions are safe and secure."
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Unmatchable Performance",
      description:
        "Experience the epitome of speed with our headless Shopify development services, enhancing user engagement and satisfaction. Hire Shopify experts to ensure your store performs at its peak."
    },
    {
      icon: <FaKey size={40} />,
      title: "Integration Capabilities",
      description:
        "Harmonize operations effortlessly with our headless Shopify development. Our Shopify development services offer robust integration capabilities to support your business operations."
    },
    {
      icon: <FaGift size={40} />,
      title: "Fulfillment Options",
      description:
        "Cater to diverse needs with our headless Shopify store services. Offering tailored shipping methods and ensuring customer satisfaction at every turn."
    },
    {
      icon: <FaCogs size={40} />,
      title: "Microservice Architecture",
      description:
        "Embrace agile microservices for dynamic growth, allowing for rapid development and deployment tailored to your evolving needs with our headless Shopify development."
    },
    {
      icon: <FaGlobe size={40} />,
      title: "PWA (Progressive Web App)",
      description:
        "Step into the future of shopping experiences with Progressive Web Apps, a hallmark of our Shopify headless commerce solutions."
    },
    {
      icon: <FaPuzzlePiece size={40} />,
      title: "Extreme Flexibility",
      description:
        "Adapt without limits. With extreme flexibility, customize your store, features, and user experience to perfectly align with your brand's unique identity."
    }
  ];
  

export default function ShopifyFeatures() {
  return (
    <section className="left-section">
      <h2 className="left-title">Features of Shopify Headless eCommerce</h2>
      <p className="left-subtitle">
        Explore a world of possibilities with our Shopify Headless E-Commerce solutions. From secure payment processing to unmatched flexibility, our features redefine the way you do e-commerce.
      </p>
      <div className="left-grid">
        {features.map((feature, index) => (
          <div key={index} className="left-card">
            
            <div className="left-icon">{feature.icon}
            <h3 className="left-card-title">{feature.title}</h3>
            </div>
            
            <p className="left-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
