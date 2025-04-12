"use client"
import React from 'react'
import Menu from './Menu/page'
import More from './More/page'
import Ben from './Ben/page'
import Omi from './Omi/page'
import Store from './Store/page'
import Pwa from './Pwa/page'
import Wining from './Wining/page'
import Online from './Online/page'
import Development from './Development/page'
import Upgrad from './Upgrad/page'
import Cycle from './Cycle/page'
import Wifi from './Wifi/page'
import Diff from './Diff/page'
import Sec16 from './Sec16/page'
import Sec14 from './Sec14/page'
import Process from './Process/page'
import Last from './Last/page'
import Navbar from '../COMMON/Navbar'
import HomeForm from '../components/Home/HomeForm'
import Footer from '../COMMON/Footer'
import Banner9 from '../ecommerce-development/Banner9/page'
import CallAction from '../magento/CallAction/CallAction'
import Action3 from '../Headless/Action3/page'
// import Action3 from '../Headless/Action3/page'
const page = () => {
  return (
    <div>
 <Navbar/>     
<Menu/>
<Upgrad/>
<More/>
{/* <Ben/> */}
<Last/>
<Banner9/>
<Action3/>

{/* <Action3/> */}
{/* <CallAction/> */}
<Cycle/>
<Process/>
<Omi/>
<Online/>
<Development/>
<Diff/>
{/* <Store/> */}
<Pwa/>
<Wining/>



<Wifi/>

{/* <Sec16/> */}
<Sec14/>


<HomeForm/>
<Footer/>
    </div>
  )
}

export default page