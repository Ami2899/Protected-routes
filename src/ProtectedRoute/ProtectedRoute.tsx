import React from 'react'
import {Navigate, Outlet} from "react-router-dom"

interface ProtectedRouteProps{
    isAuthenticated:boolean;
    children?:React.ReactElement
}

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({isAuthenticated,children}) => {
    if(!isAuthenticated){
        return <Navigate to="/login" />
    }
    return children?children:<Outlet/>
}

export default ProtectedRoute
