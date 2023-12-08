import React from "react";
import HeroIntro from "../components/HeroIntro";
import FilteringProjects from "../components/FilteringProjects";
import { Box } from "@primer/react";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <Box sx={{height: '100vh', backgroundColor: 'canvas.default'}}>
            <HeroIntro  />
            <FilteringProjects  />
            <Footer  />
        </Box>
    )
}

export default Home