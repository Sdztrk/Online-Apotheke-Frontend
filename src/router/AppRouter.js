import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from "../components/layout/Navbar"
import LandingPage from '../pages/LandingPage'
import Profile from "../pages/Profile"
import Arzneimittel from '../pages/navbarPages/Medicine'
import Vitamine from '../pages/navbarPages/Vitamins'
import Beauty from '../pages/navbarPages/Beauty'
import TierApotheke from '../pages/navbarPages/AnimalPharmacy'
import ShoppingPage from '../pages/ShoppinPage'
import Footer from '../components/layout/Footer'
import FAQPage from '../pages/FAQPage'
import DetailPage from '../pages/DetailPage'
import PaymentSuccess from '../pages/PaymentSuccess'
import PaymentFailed from '../pages/PaymentFailed'
import Sleep from '../pages/illnessPages/Sleep'
import Herz from "../pages/illnessPages/Herz"
import Throat from "../pages/illnessPages/Throat"
import Magen from "../pages/illnessPages/Magen"
import Schnupfen from "../pages/illnessPages/Schnupfen"
import Stress from "../pages/illnessPages/Stress"
import Admin from '../pages/Admin'
import { useSelector } from 'react-redux'


const AppRouter = () => {
  const currentUser = useSelector((state) => state.auth.currentUser)
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        {
          currentUser ? (<Route path='/Profile' element={<Profile/>}/>) : null
        }
        
        <Route path='/Arzneimittel' element={<Arzneimittel/>}/>
        <Route path='/Vitamine' element={<Vitamine/>}/>
        <Route path='/Beauty' element={<Beauty/>}/>
        <Route path='/TierApotheke' element={<TierApotheke/>}/>
        <Route path='/ShoppingPage' element={<ShoppingPage/>}/>
        <Route path='/PaymentSuccess' element={<PaymentSuccess/>}/>
        <Route path='/PaymentFailed' element={<PaymentFailed/>}/>
        <Route path='/faq' element={<FAQPage/>}/>
        <Route path='/product/:id' element={<DetailPage/>}/>
        <Route path='/Sleep' element={<Sleep/>}/>
        <Route path='/Throat' element={<Throat/>}/>
        <Route path='/Herz' element={<Herz/>}/>
        <Route path='/Magen' element={<Magen/>}/>
        <Route path='/Stress' element={<Stress/>}/>
        <Route path='/Schnupfen' element={<Schnupfen/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        {/* <Route element={<PrivateRouter/>}>
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route> */}
    </Routes>
    <Footer/>
    </>
  )
}

export default AppRouter