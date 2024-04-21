import { ThemeProvider, BaseStyles } from "@primer/react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";


const App = () => {
  const [themeStyles, setThemeStyles] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", themeStyles);
  }, [themeStyles]);

  return (
    <ThemeProvider colorMode={"dark"}>
      <Nav></Nav>
      <BaseStyles>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="*" element={<Home />} />
        </Routes>
      </BaseStyles>
    </ThemeProvider>
  );
};

export default App;
