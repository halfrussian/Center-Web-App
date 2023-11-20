import React from "react";
import { Box, Button } from "@primer/react";

const FilteringProjects = () => {
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
    </>
  );
};

export default FilteringProjects;
