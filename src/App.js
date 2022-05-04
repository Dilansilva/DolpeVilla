import React from 'react';

import Footer from "./components/Footer";
import Header from './components/Header';

import Home from "./pages/Home";
import Location from "./pages/Location";

function App() {
  return (
    <div>
      <Header/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;