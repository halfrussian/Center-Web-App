import { ThemeProvider, BaseStyles } from "@primer/react";
import React, { useState } from "react";
import Nav from "./components/Nav";
import HeroIntro from "./components/HeroIntro";
import FilteringProjects from "./components/FilteringProjects";
import Projects from "./components/Projects";


const App = () => {
  const [themeStyles, setThemeStyles] = useState('light');

  return (
    <ThemeProvider colorMode={themeStyles}>
      <BaseStyles>
        <Nav themeStyles={themeStyles} setThemeStyles={setThemeStyles} />
        <HeroIntro  />
        <FilteringProjects  />
        <Projects  />
      </BaseStyles>
    </ThemeProvider>
  );
};

export default App;
