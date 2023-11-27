import React from "react";
import { Text, Heading, Box, Link } from "@primer/react";

import ver from "../assets/logos/ver.png";
//import top from "../assets/ver/top.png";
import one from "../assets/ver/one.png";


const Verizon = () => {
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
                      Verizon -  
                    </Heading>
                  </div>
                </div>
                <div className="row">
                  <Text sx={{ fontSize: "4" }}>
                   lorem
                  </Text>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-3 mb-3">
                    <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Role</Text>
                    <br />
    
                    <Text sx={{ fontSize: "4" }}>UI/UX Designer & Developer</Text>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Timeline</Text>
                    <br />
                    <Text sx={{ fontSize: "4" }}>4 Months</Text>
                  </div>
    
                  <div className="col-lg-6 mb-3">
                    <Text sx={{ fontSize: "3", color: "fg.subtle" }}>
                      Core Responsibilities
                    </Text>
                    <Text sx={{ fontSize: "4" }}>
                      <br />
                      Lead a design and development team of 2, product strategy,
                      research, visual design, front-end dev
                    </Text>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <img  className="img-fluid" style={{ width: "100%" }} />
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
                <Box sx={{ width: "300px", position: 'sticky', top: 0}}>
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
                      Solution
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
                         ipsum
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                          lorem
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid mb-5">
                    <div className="row">
                      <div className="col-12">
                        <img src={one} className="img-fluid" />
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
                          Disruptive clicky UI lead to less sales and lower
                          commissions
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
                          Repetitive, granular data, that left the user lost
                        </Text>
                      </div>
                    </div>
                  </div>
    
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12" id="goals">
                        <Text
                          as="h2"
                          sx={{
                            fontSize: "20px",
                            color: "fg.muted",
                            mt: "6",
                            mb: "2",
                          }}
                        >
                          Goals
                        </Text>
                        <h3
                          style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                        >
                         lorem
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                          ipsum
                        </p>
                      </div>
                    </div>
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
                          Solutions
                        </Text>
                        <h3
                          style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                        >
                          lorem
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                          ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row mb-5">
                      <div className="col-12">
                        <img className="img-fluid" />
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-12 ">
                        <img  className="img-fluid" />
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-12 ">
                        <img  className="img-fluid" />
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-12">
                        <img  className="img-fluid" />
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
                          Lorem
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                          Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </Box>
          </Box>
        </>
      );
    };

export default Verizon