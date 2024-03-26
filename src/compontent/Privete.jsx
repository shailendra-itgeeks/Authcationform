import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


export const Privete = () => {
               const auth = sessionStorage.getItem("token")
               if (auth) {
                return auth?<Outlet/>:<Navigate to='/'/>       
                              
               }


 
}
