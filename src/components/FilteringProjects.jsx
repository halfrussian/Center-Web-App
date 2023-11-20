import React, {useState} from "react";
import { Box, Button } from "@primer/react";
import { projectData } from '../data/projectData'
import Projects from "./Projects";

const FilteringProjects = () => {
  const [filteredData, setFilteredData] = useState(projectData)
  const bTooBFilter = () => {

    setFilteredData(projectData.filter(item => item.categories.includes('B2B')))
  }

  const bTooCFilter = () => {
    setFilteredData(projectData.filter(item => item.categories.includes('B2C')))
  }


  const mobileFilter = () => {
    setFilteredData(projectData.filter(item => item.categories.includes('Mobile')))
  }

  const brandingFilter = () => {
    setFilteredData(projectData.filter(item => item.categories.includes('Branding')))
  }
    

  const webFilter = () => {
    setFilteredData(projectData.filter(item => item.categories.includes('Web')))
  }


  return (
    <>
      <Box
        display="flex"
        sx={{
          width: "100%",
          backgroundColor: "canvas.default",
        }}
        className="heroIntro"
      >
        <Box
          sx={{
            maxWidth: "1200px",
            width: ["90%", "90%", "90%", "95%", "87%"],
            margin: "auto",
            marginTop: 3,
          }}
        >
          <Button
            sx={{
              padding: "5px 20px",
              textAlign: "center",
              display: "inline-block",
              borderRadius: "25px",
              marginRight: 3,
              height: '40px',
              fontSize: 2,
              backgroundColor: "canvas.default",
            }}
            onClick={bTooBFilter}
          >
            B2B
          </Button>
          <Button
            sx={{
              padding: "5px 20px",
              textAlign: "center",
              display: "inline-block",
              borderRadius: "25px",
              marginRight: 3,
              height: '40px',
              fontSize: 2,
              backgroundColor: "canvas.default",
            }}
            onClick={bTooCFilter}
          >
            B2C
          </Button>
          <Button
            sx={{
              padding: "5px 20px",
              textAlign: "center",
              display: "inline-block",
              borderRadius: "25px",
              marginRight: 3,
              height: '40px',
              fontSize: 2,
              backgroundColor: "canvas.default",
            }}
            onClick={webFilter}
          >
            Web
          </Button>
          <Button
            sx={{
              padding: "5px 20px",
              textAlign: "center",
              display: "inline-block",
              borderRadius: "25px",
              marginRight: 3,
              height: '40px',
              fontSize: 2,
              backgroundColor: "canvas.default",
            }}
            onClick={mobileFilter}
          >
            Mobile
          </Button>
          <Button
            sx={{
              padding: "5px 20px",
              textAlign: "center",
              display: "inline-block",
              borderRadius: "25px",
              marginRight: 3,
              height: '40px',
              fontSize: 2,
              backgroundColor: "canvas.default",
            }}
            onClick={brandingFilter}
          >
            Branding
          </Button>
        </Box>
      </Box>
      <Projects data={filteredData}  />
    </>
  );
};

export default FilteringProjects;
