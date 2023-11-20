import React, {useState, useEffect} from "react";
import { Box, Button } from "@primer/react";
import { projectData } from '../data/projectData'
import Projects from "./Projects";

const FilteringProjects = () => {


  const [filteredData, setFilteredData] = useState(projectData)


  const bTooBFilter = () => {
    setFilteredData(projectData.filter(item => !item.categories.includes('Branding')))
  }

  console.log(filteredData)


    


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
