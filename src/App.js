import { ThemeProvider, BaseStyles } from "@primer/react";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About'
import Interests from './pages/Interests'
import Vmart from './pages/Vmart'
import Verizon from './pages/Verizon'
import TransportPro from './pages/TransportPro'
import KingMetals from './pages/KingMetals'
import Market from './pages/Marketdeus'
import Github from './pages/Github'
import Clapper from './pages/Clapper'
import Footer from "./components/Footer";



const App = () => {
  const [themeStyles, setThemeStyles] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', themeStyles);
  }, [themeStyles]);


  return (
    <ThemeProvider colorMode={themeStyles}>
      <BaseStyles>
        <Nav themeStyles={themeStyles} setThemeStyles={setThemeStyles} />
      
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/interests' element={<Interests />} />

          <Route path='/github' element={<Github  />} />
          <Route path='/market' element={<Market  />} />
          <Route path='/clapper' element={<Clapper  />} />
          {/* <Route path='/verizon' element={<Verizon  />} /> */}
          <Route path='/vmart' element={<Vmart  />} />
          <Route path='/king' element={<KingMetals  />} />
          <Route path='/transportpro' element={<TransportPro  />} />
          



          <Route path='*' element={<Home />}/>


        </Routes>
   
      </BaseStyles>
   
    </ThemeProvider>

    
  );
};

export default App;
