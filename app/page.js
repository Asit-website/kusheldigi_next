// app/page.js
"use client"
// import {Metadata} from 'next'
import Head from 'next/head';
import Image from 'next/image';
import Home2Banner from './components/Home/Home2Banner';
import Home2Swiper from './components/Home/Home2Swiper';
import Home2Section3 from './components/Home/Home2Section3';
import Home2Section4 from './components/Home/Home2Section4';
import Home2Section5 from './components/Home/Home2Section5';
import Home2Section6 from './components/Home/Home2Section6';
import Home2Section7 from './components/Home/Home2Section7';
import Home2Section8 from './components/Home/Home2Section8';
import Home2Section9 from './components/Home/Home2Section9';
import Home2Section10 from './components/Home/Home2Section10';
import Home2BrandSwiper from './components/Home/Home2BrandSwiper';
import Home2Testimonial from './components/Home/Home2Testimonial';
import Home2AskQuestion from './components/Home/Home2AskQuestion';


// import Navbar from './components/Home/Navbar';
import './globals.css'
import Footer from './COMMON/Footer';
import Navbar from './COMMON/Navbar';
import { useEffect } from 'react';
import Home2 from './components/Home/Home2';
const HomePage = ({props}) => {
  const phoneNumber = '9045301702';

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, '_blank');
  };


 
  

  const generateMetadata = ({ params }) => {
    return {
      title: ' Kushel Digi Solutions | Expert eCommerce Development Services',
    description:'High performance Ecommerce solutions with specialized development strategies. Kushel Digi Solutions boosts conversion and builds scalable Shopify, BigCommerce and custom online stores.',
    metadataBase: new URL(`https://www.kusheldigi.com/`),

       
    
    }
  };

  useEffect(() => {
       const { title, description } = generateMetadata({ params: {} });
       document.title = title;
       let metaDescription = document.querySelector('meta[name="description"]');
       
       metaDescription ? metaDescription.content = description : 
         document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
     }, []);
  

  return (
    <>
      <Head>
     
      
       
      </Head>
      <div className="home-main">
     <Navbar/>
        <Home2Banner />
        <Home2Swiper />
        <Home2/>
        <Home2Section3 />
        <Home2Section4 />
        <Home2Section5 />
        <Home2Section6 />
        <Home2Section7 />
        <Home2Section8 />
        <Home2Section9 />
        <Home2Section10
          heading={'Empowering industries with our expert solutions '}
          para={
            'We have expertise in multiple industries, providing custom digital solutions for growth and success. Be it in transforming customer experience or operational excellence, we engineer technology that caters specifically to your business needs. '
          }
        />
        <Home2BrandSwiper title={'Brands We Help Thrive'} />
        <Home2Testimonial />
        <Home2AskQuestion />
        <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <Image
              className="what-image-universal"
              src="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738230407/whatsapp_ztk2oe.png"
              alt="whatsApp-kusheldigi"
              title="whatsApp-kusheldigi"
              width={50}
              height={50}
            />
          </button>
          <button onClick={callHandler}>
            <Image
              src="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738230446/telephone_wnquao.png"
              alt="call-icon"
              title="call-icon"
              width={50}
              height={50}
            />
          </button>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
