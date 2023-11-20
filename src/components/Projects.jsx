import React from "react";
import { Text, Heading, Box } from "@primer/react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../assets/projectCardImages/github.png";

const Projects = () => {
  return (
    <Box sx={{ maxWidth: "100%", backgroundColor: "canvas.default" }}>
      <Box
        sx={{
          backgroundColor: "canvas.default",
          paddingTop: 9,
          maxWidth: "1220px",
          margin: "auto",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Box>
                <Box sx={{}}>
                  <img
                    src={image}
                    alt=""
                    className="img-fluid"
                    style={{
                      borderRadius: "6px",
                      border: "solid 1px lightgray",
                    }}
                  />
                </Box>
                <Box display="flex" sx={{ fontFamily: "Gill Sans", mt: 3 }}>
                  <Text sx={{ marginRight: 2 }}> B2B / </Text>
                  <Text sx={{ marginRight: 2 }}> B2C / </Text>
                  <Text sx={{ marginRight: 2 }}> Desktop</Text>

                  
                </Box>
                <Box>
                <Heading as="h2" sx={{fontSize: 4}}>
                    Github - Making the Support Portal more accessible for companies and customer in need
                  </Heading>
                </Box>
              </Box>
            </div>
            <div className="col-lg-6 bg-info">try</div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Projects;
