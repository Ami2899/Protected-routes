import React from 'react'
import {Navigate, Outlet} from "react-router-dom"

interface ProtectedRouteProps{
    isAuthenticated:boolean;
    children?:React.ReactElement;
    adminRoute?:boolean;
    isAdmin?:boolean
}

const ProtectedRoute:React.FC<ProtectedRouteProps> = ({isAuthenticated,children,adminRoute,isAdmin}) => {
    if(!isAuthenticated){
        return <Navigate to="/login" />
    }

    if (adminRoute && !isAdmin) {
        return <Navigate to="/profile" />;
      }
    
    return children?children:<Outlet/>
}

export default ProtectedRoute
