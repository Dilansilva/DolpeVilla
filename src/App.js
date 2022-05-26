import React from 'react';

import Footer from "./components/Footer";
import Header from './components/Header';

import Home from "./pages/Home";
import Location from "./pages/Location";
import Accomadation from './pages/Accomadation';
import Facilities from './pages/Facilities';
import Dinnning from './pages/Dinning';
import ThingsToDo from './pages/ThingsToDo';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Promotions from './pages/Promotions';
import Bookings from './pages/Bookings';

import {Route,Routes,BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='location' element={<Location/>}/>
            <Route path='accomadation' element={<Accomadation/>}/> 
            <Route path='facilities' element={<Facilities/>}/> 
            <Route path='dinning' element={<Dinnning/>}/>     
            <Route path='things' element={<ThingsToDo/>}/>  
            <Route path='contact' element={<ContactUs/>}/>  
            <Route path='gallery' element={<Gallery/>}/>
            <Route path='promotion' element={<Promotions/>}/>            
            <Route path='bookings' element={<Bookings/>}/>            
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;