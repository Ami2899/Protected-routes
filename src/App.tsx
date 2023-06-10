import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {useSelector} from "react-redux"
import Header from './Header';
import Home from './Components/Home';
import AdminDashboard from './Components/AdminDashboard';
import Login from './Components/Login';
import Profile from './Components/Profile';
import MyOrders from './Components/MyOrders';
import MyBlog from './Components/MyBlog';
import { RootState } from './Store/store';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  const isAuthenticated=useSelector((state:RootState)=>state.route.isAuthenticated)
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/admin/dashboard" element={<AdminDashboard/>} /> */}
          <Route path="/admin/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={true}><AdminDashboard/></ProtectedRoute>} />
          <Route path="/login" element={<Login/>} />
          
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/myorders" element={<MyOrders/>} />
          </Route>
          
          <Route path="/blog" element={<ProtectedRoute isAuthenticated={isAuthenticated}><MyBlog/></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
