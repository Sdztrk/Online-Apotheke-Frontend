import React from 'react'
import {Navigate, Outlet} from "react-router-dom"
import { useSelector } from 'react-redux'


const PrivateRouter = () => {

    const currentUser = useSelector((state) => state.auth.currentUser)
    console.log(currentUser)

  return ( currentUser ? <Outlet/> : <Navigate to="/NotAuthorizedPage" replace/> )
}

export default PrivateRouter