import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; 
import RegisterPage from './pages/RegisterPage'; 
import Dashboard from './pages/Dashboard'; 

function App() { 
  return ( 
  <BrowserRouter> 
  <Routes> 
    <Route path="/" element={<LoginPage />} /> 
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboard" element={<Dashboard />} /> 
    </Routes> </BrowserRouter> ); 
    
  } 
  export default App;
