import { ThemeProvider, BaseStyles } from "@primer/react";
import React, { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from './pages/About'
import Interests from './pages/Interests'


const App = () => {
  const [themeStyles, setThemeStyles] = useState('light');

  return (
    <ThemeProvider colorMode={themeStyles}>
      <BaseStyles>
        <Nav themeStyles={themeStyles} setThemeStyles={setThemeStyles} />
      
        <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/interests' element={<Interests />} />
        </Routes>
      </Router>
      </BaseStyles>
    </ThemeProvider>

    
  );
};

export default App;
