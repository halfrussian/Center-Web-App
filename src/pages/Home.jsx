import React from "react";
import HeroIntro from "../components/HeroIntro";
import FilteringProjects from "../components/FilteringProjects";
import { Box } from "@primer/react";

const Home = () => {
    return (
        <Box sx={{height: '100vh', backgroundColor: 'canvas.default'}}>
            <HeroIntro  />
            <FilteringProjects  />
        </Box>
    )
}

export default Home