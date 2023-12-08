import React from "react";
import { Text, Heading, Box, Link } from "@primer/react";
import king from "../assets/logos/king.jpg";
import top from "../assets/king/top.png";
import sub from '../assets/king/sub.png'

import one from "../assets/king/one.png"
import two from "../assets/king/two.png"
import three from "../assets/king/three.png"
import four from "../assets/king/four.png"
import five from "../assets/king/five.png"

import Footer from '../components/Footer'

const KingMetals = () => {
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
                <img  src={king} style={{ width: "50px", borderRadius: '50%'}} />
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
                  King Metals - Comprehensively redesigning an e-commerce web application with the aim of optimizing and streamlining the purchasing workflow.
                </Heading>
              </div>
            </div>
            <div className="row">
              <Text sx={{ fontSize: "4" }}>
              I spearheaded the conceptualization and design of novel UI and frontend components, orchestrating a revitalization of the brand identity and enhancing the efficacy of the purchasing process.
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
                <Text sx={{ fontSize: "4" }}>10 Months</Text>
              </div>

              <div className="col-lg-6 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>
                  Core Responsibilities
                </Text>
                <Text sx={{ fontSize: "4" }}>
                  <br />
                  Visual Design, React
                </Text>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <img src={top}className="img-fluid" style={{ width: "100%" }} />
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
            <Box sx={{ width: "300px", position: 'sticky', top: 5}}>
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
                     Given the extensive selection of over 40,000 products, users expressed that the previous user interface posed challenges in efficiently locating their desired items.
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                    Despite offering a virtual array encompassing
                     metallic products, King Metals encountered significant challenges
                      stemming from an antiquated website infrastructure 
                      established decades ago on a L.A.M.P. server. The 
                      obsolescence of the codebase and the static nature 
                      of the architecture impeded the dynamic evolution 
                      of the user interface, rendering it difficult for 
                      King Metals to maintain currency. Users experienced 
                      navigation difficulties, as the initial UI was not
                       designed to align with their evolving needs but 
                       rather to accommodate the extensive array of 
                       products offered by King Metals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container-fluid mb-5">
                <div className="row mx-auto">
                  <div className="col-12">
                  <img src={sub} className="img-fluid" />
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
                      Vast amounts of products with rough UI filters
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
                    >Weary users frequently migrated to alternative platforms
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
                      Completely overhaul the UI to establish a seamless purchasing experience for
                       customers, adeptly managing extensive product data.
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                    Key components like the navigation menu, product cards, 
                    and filtration systems, along with various guides, posed 
                    challenges rather than solutions. The e-commerce landscape
                     has evolved significantly in recent years, with online buying 
                     experiences becoming almost organic. Our goal was to replicate 
                     this seamless feeling for our customers
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
                      Revitalize the brand and craft cohesive components to elevate the purchasing experience.
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                    Each component is strategically designed to guide 
                    the buyer through a progressively specialized sales 
                    funnel. For example, when a buyer visits the 'Fences' 
                    page, they encounter options such as fences, fence
                     decorations, and fence hardware. Clicking on any 
                     section leads to a product list within that category,
                      complete with pre-applied filters. In the event a
                       specific product is not found, users can utilize 
                       the top search bar for a global search across the 
                       entire product list, applying filters as necessary
                    </p>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={one} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={two} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={three} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={four} className="img-fluid" />
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
                     Sales on the rise and postive User feedback
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                    The updated UI resulted in a notable 32% boost in sales 
                    within the initial months of release, with continued 
                    month-over-month growth. Positive user feedback has
                     been consistent, and both engagement and retention 
                     metrics are on an upward trajectory, monitored through
                      Google Tag Manager
                    </p>
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

export default KingMetals;
