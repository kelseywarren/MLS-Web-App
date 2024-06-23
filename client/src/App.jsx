// Imports
import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link } from 'react-router-dom';
import './App.css'
import Login from './pages/login/login';
import Home from './pages/home/home';
import Register from './pages/register/register';
import Navbar from './components/navbar/navbar';
import axios from 'axios';

// Set axios defaults 
axios.defaults.baseURL = 'http://localhost:5500';
axios.defaults.withCredentials = true; 

// Main component 
function App() {

// Routes
const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={ <Home/> } />
    <Route path="login" element={ <Login/>} />
    <Route path="register" element={ <Register/>} />
  </Route>
));

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
