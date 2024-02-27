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
import Dev from "./pages/Development";
import GitHubSuccess from "./pages/GitHubSuccess";



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

          <Route exact path='/' element={<Home />} />
           
          <Route exact path='/about' element={<About />} />
          <Route exact path='/interests' element={<Interests />} />
          <Route exact path='/github-success' element={<GitHubSuccess  />} />
          <Route exact path='/github' element={<Github  />} />
          <Route exact path='/market' element={<Market  />} />
          <Route exact path='/clapper' element={<Clapper  />} />
          {/* <Route path='/verizon' element={<Verizon  />} /> */}
          <Route exact path='/vmart' element={<Vmart  />} />
          <Route exact path='/king' element={<KingMetals  />} />
          <Route exact path='/transportpro' element={<TransportPro  />} />
          <Route exact path='/dev' element={<Dev />} />



          <Route exact path='*' element={<Home />}/>


        </Routes>
   
      </BaseStyles>
   
    </ThemeProvider>

    
  );
};

export default App;
