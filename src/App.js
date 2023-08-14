import React from 'react';
import Contact from './components/Contact.js';
import NavigationBar from './components/NavigationBar.js';
import ContactFooter from './components/ContactFooter.js';
import Services from './components/Services.js';
import Career from './components/Career.js';
import Data from './components/dataAnalytics.js';
import Cloud from './components/cloud.js';
import Web from './components/webDev.js';
import Landing from './components/landing.js';
import Terms from './components/TermsCondition.js';
import Policy from './components/PrivacyPolicy.js';
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
// import image from './images/businessman-pressing-shiny-button.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    < > <div className='App' style={{overflow:'hidden'}}>
    <Router>
      <header><NavigationBar /></header>
      
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/dataAnalytics" element={<Data />} />
        <Route path='/cloud' element={<Cloud />} />
        <Route path='/web' element={<Web />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/policy' element={<Policy />} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>    

      <footer className='footer'><ContactFooter /></footer>
      
    </Router>
    </div>
    </>
  );
}

export default App;
