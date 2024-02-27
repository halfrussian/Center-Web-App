import React from "react";
import { Text, Heading, Box, Link } from "@primer/react";

const GitHubSuccess = () => {
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
            maxWidth: "1340px",
            width: ["90%", "90%", "90%", "95%", "87%"],
            margin: "auto",
            marginTop: 3,
          }}
        >
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-12">
                <img style={{ width: "50px" }} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Heading
                  as="h1"
                  sx={{
                    fontSize: "50px",
                    marginLeft: "10px",
                    mb: "3",
                    mt: "3",
                    ml: "-2",
                  }}
                >
                   GitHub Success Portal - Building a Portal
                   that will allow Enterprise customer's to succeed 
                   without the Need of Human Support
                </Heading>
              </div>
            </div>
            <div className="row">
              <Text sx={{ fontSize: "4" }}>
              In this project, I conceptualized and designed the GitHub Success Portal,
               a groundbreaking platform tailored for Enterprise customers. With a user-centric approach, 
               the portal was crafted to empower users with the tools and resources necessary to navigate 
               GitHub seamlessly, eliminating the dependency on human support. By streamlining the user 
               experience and anticipating the needs of Enterprise clients, the GitHub Success Portal 
               serves as a self-sufficient hub for unlocking success in the GitHub ecosystem.
              </Text>
            </div>
            <div className="row mt-4">
              <div className="col-lg-3 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Role</Text>
                <br />

                <Text sx={{ fontSize: "4" }}>
                  UX Designer
                </Text>
              </div>
              <div className="col-lg-3 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Timeline</Text>
                <br />
                <Text sx={{ fontSize: "4" }}>5 Months</Text>
              </div>

              <div className="col-lg-6 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>
                  Core Responsibilities
                </Text>
                <Text sx={{ fontSize: "4" }}>
                  <br />
                  Lead Design of the Sucess Portal with Figma, Figjam, and Adobe Creative Cloud
                </Text>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default GitHubSuccess;
