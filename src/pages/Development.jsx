import React from "react";
import Footer from "../components/Footer";
import { Text, Heading, Box, Link, Button } from "@primer/react";
import furn from "../assets/devCardIm/furn.png";
import space from "../assets/devCardIm/space.png";
import mon from "../assets/devCardIm/mon.png";
import think from "../assets/devCardIm/think.png";
import newer from '../assets/devCardIm/new.png'
import port from "../assets/devCardIm/port.png";
import land from '../assets/devCardIm/land.png'

const Dev = () => {
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
            maxWidth: "1300px",
            width: ["90%", "90%", "90%", "95%", "87%"],
            margin: "auto",
            marginTop: 8,
          }}
        >
          <Heading
            as="h1"
            sx={{
              fontSize: 6,
              marginBottom: 3,
              fontWeight: "700",
            }}
          >
            Who said UX Designers cant code?
          </Heading>

          <Text
            sx={{
              fontSize: 3,
              color: "fg.default",
            }}
          >
            "While specialization breeds expertise, true mastery is born from
            the cross-pollination of knowledge across diverse fields." -
            Leonardo da Vinci
          </Text>
          <Box
            sx={{
              paddingTop: 3,
            }}
          >
            <hr />
          </Box>
        </Box>
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
            marginTop: 6,
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
                  Web
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
                  Mobile
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
                  Meta Quest 2
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
                  Apple Vision Pro
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
                      Web
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    ></h3>
                    <p style={{ fontSize: "20px" }}>
                      Despite offering a virtual array encompassing metallic
                      products, King Metals encountered significant
                    </p>
                  </div>
                </div>
                <div className="row">
                  {/* CARD  COL */}
                  <div className="col-xl-4  col-md-6 col-sm-12">
                    <div className="card mt-3 mb-3" style={{ border: "none" }}>
                      <Box
                        sx={{
                          backgroundColor: "canvas.default",
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={furn}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            E-Commerce Furniture
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                            React, Bootstrap, SCSS
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Code
                            </Button>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </div>

                  {/* CARD  COL END */}
                  {/* CARD  COL */}
                  <div className="col-xl-4  col-md-6 col-sm-12">
                    <div className="card mt-3 mb-3" style={{ border: "none" }}>
                      <Box
                        sx={{
                          backgroundColor: "canvas.default",
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={space}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Nasa x SpaceX
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                            React, CSS 
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Code
                            </Button>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </div>

                  {/* CARD  COL END */}
                  {/* CARD  COL */}
                  <div className="col-xl-4  col-md-6 col-sm-12">
                    <div className="card mt-3 mb-3" style={{ border: "none" }}>
                      <Box
                        sx={{
                          backgroundColor: "canvas.default",
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={mon}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Stock Platform
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                            React, Bootstrap, SCSS
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Code
                            </Button>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </div>

                  {/* CARD  COL END */}
                </div>
                <div className="row">
                  {/* CARD  COL */}
                  <div className="col-xl-4  col-md-6 col-sm-12">
                    <div className="card mt-3 mb-3" style={{ border: "none" }}>
                      <Box
                        sx={{
                          backgroundColor: "canvas.default",
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={port}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Portfolio
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                            React, Primer
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Code
                            </Button>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </div>

                  {/* CARD  COL END */}
                  {/* CARD  COL */}
                  <div className="col-xl-4  col-md-6 col-sm-12">
                    <div className="card mt-3 mb-3" style={{ border: "none" }}>
                      <Box
                        sx={{
                          backgroundColor: "canvas.default",
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={land}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Media Landing Page
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                            HTML, CSS, Javascript
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Code
                            </Button>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </div>

                  {/* CARD  COL END */}
                </div>
              </div>

              {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}

             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
             {/* MOBILLEEEEEeeee=EEEEEEEEEEEEEEEEEEEEEEEE */}
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
                      Mobile
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >

                    </h3>
                    <p style={{ fontSize: "20px" }}></p>
                  </div>
                </div>
                <div className="row">
                    {/* CARD  COL */}
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card mt-3 mb-3" style={{ border: "none" }}>
                      <Box
                        sx={{
                          backgroundColor: "canvas.default",
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "700px" }}
                          className="card-img-top"
                          src={newer}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Media Literacy
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                            React Native, React Native Paper 
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Code
                            </Button>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </div>

                  {/* CARD  COL END */}
                  {/* CARD  COL */}
                  <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card mt-3 mb-3" style={{ border: "none" }}>
                      <Box
                        sx={{
                          backgroundColor: "canvas.default",
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "700px" }}
                          className="card-img-top"
                          src={think}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Focus App
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                          React Native, React Native Paper 
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open()}
                            >
                              Code
                            </Button>
                          </div>
                        </div>
                      </Box>
                    </div>
                  </div>

                  {/* CARD  COL END */}
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
                      Meta Quest 2
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    ></h3>
                    <p style={{ fontSize: "20px" }}></p>
                  </div>
                </div>
              </div>
              <div className="container-fluid"></div>

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
                      Apple Vision Pro
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Coming soon...
                    </h3>
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

export default Dev;
