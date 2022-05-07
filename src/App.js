import React from 'react';

import Footer from "./components/Footer";
import Header from './components/Header';

import Home from "./pages/Home";
import Location from "./pages/Location";
import Accomadation from './pages/Accomadation';

function App() {
  return (
    <div>
      <Header/>
      <Accomadation/>
      <Footer/>
    </div>
  );
}

export default App;