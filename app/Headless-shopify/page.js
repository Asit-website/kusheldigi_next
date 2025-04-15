
"use client"
import Left from './Left/page'
import Perfect from './Perfect/page'
import Servicess from './Servicess/page'
import Some from '../Headless-shopify/Some/page'
import Spotify from '../Headless-shopify/Spotify/page'
import Ssss from '../Headless-shopify/Ssss/page'
import Troff from '../Headless-shopify/Troff/page'
import Action1 from '../Headless/Action1/page'
import HomeForm from '../components/Home/HomeForm'
import Omi from '../Headless/Omi/page'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import Banner9 from '../ecommerce-development/Banner9/page'


function page() {
  return (
    <div>
  <Navbar/>  
  <Troff/>
  <Ssss/> 
  <Some/>
  <Action1/>
  <Servicess/>
  <Banner9/>
  <Perfect/>
   <Left/> 
   <Spotify/>
   <HomeForm/>
   <Footer/>
  

    </div>
  )
}

export default page
