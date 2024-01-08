import React from "react";
import { Text, Heading, Box, Link, Button } from "@primer/react";
import top from "../assets/vmart/top.png";
import map from "../assets/vmart/mapo.png";
import flow from "../assets/vmart/flow.png";
import flowtwo from "../assets/vmart/flowtwo.png";
import per from "../assets/vmart/pers.png";
import frame from "../assets/vmart/frame.png";
import el from "../assets/vmart/el.png";
import it from "../assets/vmart/it.jpeg";

import Footer from '../components/Footer'

const Vmart = () => {
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
                  VMart - A solution for those who want specialized items not
                  available on Amazon
                </Heading>
              </div>
            </div>
            <div className="row">
              <Text sx={{ fontSize: "4" }}></Text>
            </div>
            <div className="row mt-4">
              <div className="col-lg-3 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Role</Text>
                <br />

                <Text sx={{ fontSize: "4" }}>UX Designer </Text>
              </div>
              <div className="col-lg-3 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Timeline</Text>
                <br />
                <Text sx={{ fontSize: "4" }}>3 Months</Text>
              </div>

              <div className="col-lg-6 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>
                  Core Responsibilities
                </Text>
                <Text sx={{ fontSize: "4" }}>
                  <br />
                  Lead a design, product strategy, research, and visual design
                </Text>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <img src={top} className="img-fluid" style={{ width: "100%" }} />
      </Box>

      {/* attempt */}

      

   

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
                      Create readily available Vietnamese grocery items
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      I aspired to curate an immersive experience for
                      individuals to discover Vietnamese cuisine, be it their
                      initial encounter or a nostalgic return. Given the
                      scarcity of Vietnamese markets, both in rural and urban
                      locales, accessing specific ingredients poses a challenge.
                      My objective revolves around crafting a responsive
                      website, accessible to users of all ages, facilitating the
                      seamless exploration and convenient ordering of Vietnamese
                      groceries.
                    </p>
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
                      
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      I’m certain that due to the pandemic, people have been
                      more inclined to order groceries online. I’m looking to
                      discover which sites are most commonly used, any desired
                      flows, or any complications, frustrations, or slowdowns
                      someone may have had when ordering groceries online.
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
                      User Persona
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Once I gathered all the information, I started working on
                      a persona. I’d like you to meet Billy!
                    </h3>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={per} className="img-fluid" />
                  </div>
                </div>

                
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
                      Sitemap
                    </Text>
                    <p style={{ fontSize: "20px" }}>
                      Next up was to design the sitemap. I asked myself, what
                      would the simplest navigation bar look like? I broke it
                      down to the barebones of most navigations bar and was able
                      to create the following.{" "}
                    </p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={map} className="img-fluid" />
                  </div>
                </div>
                
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
                      User flow
                    </Text>
                    <p style={{ fontSize: "20px" }}>
                      I then needed to establish what would be the main flows
                      for this website. I noted that when a user is visiting a
                      website, they either have something specific in mind that
                      they are going to purchase, or they are going to browse
                      until they find something of their liking.{" "}
                    </p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={flow} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={flowtwo} className="img-fluid" />
                  </div>
                </div>
                
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
                      Low Fidelity
                    </Text>
                    <p style={{ fontSize: "20px" }}>
                      The next task was to create a set of low fidelity
                      wireframes for both desktop and mobile. I used Figma to
                      create the barebones of what I was envisioning.
                    </p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={frame} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5"></div>
                
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
                      Elements
                    </Text>
                    <p style={{ fontSize: "20px" }}>
                      Once I had the low fidelity wireframes, I needed to build
                      upon my foundation with UI elements.
                    </p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={el} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5"></div>
                
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
                      Iterations
                    </Text>
                    <p style={{ fontSize: "20px" }}>
                      The general feedback was helpful and positive. Not a lot
                      of iterations needed to be made. As seen below, I made
                      changes such as: Adjusting font size, removing the thick
                      black outline that consisted throughout the pages, using a
                      lighter gray outline for a softer touch, condensing the
                      footer into 2 sections
                    </p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={it} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5"></div>
                
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
                        Final Product
                    </h3>
                    
                    <Button
                        sx={{
                            marginTop: 5,
                        padding: "5px 20px",
                        marginBottom: 5,
                        textAlign: "center",
                        display: "inline-block",
                        borderRadius: "25px",
                        marginRight: 3,
                        height: '40px',
                        fontSize: 2,
                        backgroundColor: "accent.muted",
                        }}
                        onClick={()=> window.open("https://www.figma.com/proto/K9EoIxr2tdciYahxXEkUO3/V-Mart-Hi-Fidelity-Wireframes?node-id=2-79&scaling=scale-down")}
                    >
                        Figma File
                    </Button>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </Box>
      </Box>
      <Footer  />
    </>
  );
};
export default Vmart;