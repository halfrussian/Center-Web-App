import React from "react";
import { Text, Heading, Box, Link, Button } from "@primer/react";
import top from "../assets/github-success/top.webp";
import sub1 from "../assets/github-success/sub1.png";
import sub2 from "../assets/github-success/sub2.png";

import slide1 from "../assets/github-success/slide1.png";
import slide2 from "../assets/github-success/slide2.png";
import slide3 from "../assets/github-success/slide3.png";
import slide4 from "../assets/github-success/slide4.png";
import journey from "../assets/github-success/journey.png";
import Footer from "../components/Footer";
import map from "../assets/github-success/map.png";

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
                  GitHub Success Portal - Building a Portal that will allow
                  Enterprise customer's to succeed without the Need of Human
                  Support
                </Heading>
              </div>
            </div>
            <div className="row">
              <Text sx={{ fontSize: "4" }}>
                In this project, I conceptualized and designed the GitHub
                Success Portal, a groundbreaking platform tailored for
                Enterprise customers. With a user-centric approach, the portal
                was crafted to empower users with the tools and resources
                necessary to navigate GitHub seamlessly, eliminating the
                dependency on human support. By streamlining the user experience
                and anticipating the needs of Enterprise clients, the GitHub
                Success Portal serves as a self-sufficient hub for unlocking
                success in the GitHub ecosystem.
              </Text>
            </div>
            <div className="row mt-4">
              <div className="col-lg-3 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Role</Text>
                <br />

                <Text sx={{ fontSize: "4" }}>UX Designer</Text>
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
                  Lead Design of the Sucess Portal with Figma, Figjam, and Adobe
                  Creative Cloud
                </Text>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <img src={top} className="img-fluid" style={{ width: "100%" }} />
      </Box>

      {/* PROJECT INFO  */}

      <Box
        display="flex"
        sx={{
          width: "100%",
          backgroundColor: "canvas.default",
        }}
      >
        <Box
          display="flex"
          sx={{
            maxWidth: "1350px",
            //width: ["90%", "90%", "90%", "95%", "87%"],
            margin: "auto",
            marginTop: 10,
          }}
        >
          <div className="navigate ">
            <Box sx={{ width: "300px", position: "sticky", top: 5 }}>
              <div style={{ marginBottom: "15px" }}>
                <Text
                  sx={{
                    fontSize: "2",
                    color: "fg.muted",
                  }}
                >
                  Overview
                </Text>
              </div>
              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#problem").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  Problem
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#reas").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  Research
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#goals").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  Goals
                </Link>
              </div>
              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#journ").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  User Journey
                </Link>
              </div>

              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#solution").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  High Fidelity
                </Link>
              </div>
              <div
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#results").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  sx={{
                    fontSize: "3",
                    color: "fg.muted",
                    ":hover": { cursor: "pointer" },
                  }}
                >
                  Results
                </Link>
                <hr style={{ maxWidth: "200px" }} />
              </div>
            </Box>
          </div>
          <div className="aboutBody">
            <Box>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="problem">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Problems & Insight
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      GitHub's intermediate-tier Enterprise clientele has
                      encountered significant delays while seeking assistance
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      GitHub's intermediate-tier Enterprise users face delays in
                      accessing human support, impeding issue resolution and
                      hindering feedback channels. Swiftly addressing this
                      challenge is essential for enhancing developers'
                      efficiency within this Enterprise tier.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container-fluid mb-5">
                <div className="row">
                  <div className="col-6">
                    <img src={sub1} className="img-fluid" />
                  </div>
                  <div className="col-6">
                    <img src={sub2} className="img-fluid" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Leaving our Enterprise Customers confused and upset in
                      Community Discussions.
                    </Text>
                  </div>

                  <div className="col-lg-6">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Enterprise Admins often get lost in Tickets that go
                      unanswered
                    </Text>
                  </div>
                </div>
                <div className="row mt-5" id="reas">
                  <div className="col-12">
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Research and Users Personas
                    </h3>
                    <p style={{ fontSize: "20px" }}></p>
                  </div>
                  <div className="col-12">
                    <img src={slide1} className="img-fluid" />
                  </div>
                  <div className="col-12">
                    <img src={slide2} className="img-fluid" />
                  </div>
                  <div className="col-12">
                    <img src={slide4} className="img-fluid" />
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12" id="goals">
                      <Text
                        as="h3"
                        sx={{
                          fontSize: "30px",
                          color: "fg.muted",
                          mt: "6",
                          mb: "2",
                        }}
                      >
                       Goal 
                      </Text>
                      <h3
                        style={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          mb: "2",
                        }}
                      >
                         Create a Success Portal, on top of GitHub's Support Portal, 
                        that will enable Enterprise Admins to ramp up production and
                         see their Enterprises' Health at a Glance
                      </h3>
                      
                    </div>
                  </div>
                </div>

                {/* section start */}
                <div className="row">
                  <div className="col-12" id="journ">
                    <h3
                      style={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        mb: "2",
                        marginTop: "45px",
                      }}
                    >
                      User Journeys & Site-Map
                    </h3>
                    <p style={{ fontSize: "20px" }}></p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={journey} className="img-fluid" />
                  </div>
                </div>
                {/* section end */}

                {/* section start */}
                <div className="row">
                  <div className="col-10" id="sitemap" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h3
                      style={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        mb: "2",
                        marginTop: "45px",
                      }}
                    >
                      Site-map
                    </h3>
                    <Link
                    sx={{
                     marginTop: '45px',
                     fontSize: "30px",
                     ":hover" :{
                      cursor: 'pointer'
                     }
                    }}
                    onClick={()=> window.open("https://www.figma.com/file/2oAVhP7fdeaGjblNFliDSL/Untitled?type=whiteboard&node-id=0-1&t=ANOIQW5lEosYNTlf-0")}
                 
                    
                    >Full Preview</Link>
                    
                  </div>
                 
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={map} className="img-fluid" />
                  </div>
                </div>
                

                {/* section end */}
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="solution">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      High Fidelity
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      title
                    </h3>
                    <p style={{ fontSize: "20px" }}>lorem para</p>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={"seven"} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={"eight"} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={"ten"} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={"eleven"} className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="container-fluid mb-5">
                <div className="row">
                  <div className="col-12" id="results">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                      }}
                    >
                      Results
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Title
                    </h3>
                    <p style={{ fontSize: "20px" }}>lorem ipsum para</p>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default GitHubSuccess;
