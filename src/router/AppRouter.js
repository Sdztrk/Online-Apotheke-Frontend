import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from "../components/Navbar"
import LandingPage from '../pages/LandingPage'
import Profile from "../pages/Profile"
import Arzneimittel from '../pages/Arzneimittel'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Arzneimittel' element={<Arzneimittel/>}/>

        {/* <Route element={<PrivateRouter/>}>
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route> */}
    </Routes>
    </>
  )
}

export default AppRouter