import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from "../components/layout/Navbar"
import LandingPage from '../pages/LandingPage'
import Profile from "../pages/Profile"
import Arzneimittel from '../pages/Medicine'
import Vitamine from '../pages/Vitamins'
import Beauty from '../pages/Beauty'
import TierApotheke from '../pages/AnimalPharmacy'
import ShoppingPage from '../pages/ShoppinPage'
import Footer from '../components/layout/Footer'
import FAQPage from '../pages/FAQPage'
import DetailPage from '../pages/DetailPage'
import PaymentSuccess from '../pages/PaymentSuccess'
import PaymentFailed from '../pages/PaymentFailed'


const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Arzneimittel' element={<Arzneimittel/>}/>
        <Route path='/Vitamine' element={<Vitamine/>}/>
        <Route path='/Beauty' element={<Beauty/>}/>
        <Route path='/TierApotheke' element={<TierApotheke/>}/>
        <Route path='/ShoppingPage' element={<ShoppingPage/>}/>
        <Route path='/PaymentSuccess' element={<PaymentSuccess/>}/>
        <Route path='/PaymentFailed' element={<PaymentFailed/>}/>
        <Route path='/faq' element={<FAQPage/>}/>
        <Route path='/product/:id' element={<DetailPage/>}/>
        {/* <Route element={<PrivateRouter/>}>
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route> */}
    </Routes>
    <Footer/>
    </>
  )
}

export default AppRouter