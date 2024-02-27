//edit to menino taht i developer and esigned all 
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
import paper from '../assets/devCardIm/paper.png'
import lib from '../assets/devCardIm/lib.png'
import vr from '../assets/devCardIm/vr.png'
import appro from '../assets/devCardIm/appro.png'
import one from '../assets/king/one.png'
import cor from '../assets/devCardIm/cour.png'
import ufo from '../assets/devCardIm/ufo.png'
import batt from '../assets/devCardIm/batt.png'

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
            I'm an enthusiastic Developer 
          </Heading>

          <Text
            sx={{
              fontSize: 3,
              color: "fg.default",
            }}
          >
            Many designers shy away from coding. Not me. My career, and my life, reflect this motto:<br  />
            
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
                <hr style={{ maxWidth: "200px" }} />
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
                    top: document.querySelector("#threeD").offsetTop,
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
                > 3D Designs & Games
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
                
              </div>
              
            </Box>
          </div>
          <div className="aboutBody">
            <Box>
              <div className="container-fluid">

                <div className="row">
                <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    > Projects I've designed and  developed</h3>
                </div>
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
                    
                    <p style={{ fontSize: "20px" }}>
                    
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
                          border: '1px',
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
                            Commerce Furniture
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                            React, Javascript, Bootstrap, SCSS
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://ecommerce-store-comfy.netlify.app/')}
                             
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://github.com/halfrussian/React.js-Ecommerce-Furniture-Store')}
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
                          border: '1px',
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
                            React, Javascript,  CSS 
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://nasa-x-spacex.netlify.app/')}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://github.com/halfrussian/Nasa-X-SpaceX-React-')}
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
                          border: '1px',
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
                            React, Javascript,  Bootstrap, SCSS
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://money-works-stock-app.netlify.app/')}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://github.com/halfrussian/React.js-Stock-Market-Application')}
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
                          border: '1px',
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
                            React, Javascript,  Primer
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://joshuabracken.netlify.app/')}
                            >
                              Live Demo
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
                          border: '1px',
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={one}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            King Metals
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                            HTML, CSS, Javascript, Sql, Php
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://www.kingmetals.com/')}
                            >
                              Live Demo
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
                          border: '1px',
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={paper}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Newspaper in the Park
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                            HTML, CSS, Javascript
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://codepen.io/halfrussian/pen/rNwGmvv')}
                            >
                              Live Demo
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
                          border: '1px',
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={lib}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Library Card
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                            HTML, CSS, Javascript
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://codepen.io/halfrussian/pen/vYZKbJv')}
                            >
                              Live Demo
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
                          border: '1px',
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
                              onClick={() => window.open('https://codepen.io/halfrussian/pen/GREoEGQ')}
                            >
                              Live Demo
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
                          border: '1px',
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
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
                            React Native,  Javascript,  Native Paper 
                          </Text>
                          <div className=" d-flex mt-3">
                            
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://github.com/halfrussian/React-Native-Media-Literacy')}
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
                          border: '1px',
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                         style={{ objectFit: "cover", height: "200px" }}
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
                          React Native,  Javascript,  React Native Paper 
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://codepen.io/halfrussian/pen/xxLQWvX')}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://github.com/halfrussian/Focus-App-React-Native')}
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
                  <div className="col-12" id="threeD">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: 6,
                        mb: 6,
                      }}
                    >
                     3D Designs & Games
                    </Text>
                    
                
                  </div>
                </div>
                <div className="row">
                    {/* CARD  COL */}
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card mt-3 mb-3" style={{ border: "none" }}>
                      <Box
                        sx={{
                          backgroundColor: "canvas.default",
                          border: '1px',
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          alt=""
                          src={batt}
                           />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Galaxy Battle 
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                           Unity, C#
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://www.youtube.com/watch?v=eSCOlTwv_UI')}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://github.com/halfrussian/Galaxy-Battle')}
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
                          border: '1px',
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={cor}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Obstacle Course
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                           Unity, Mathematica, C#
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://youtu.be/5KPmFO9R7gY?feature=shared')}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://github.com/halfrussian/Obstacle-Course')}
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
                          border: '1px',
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={ufo}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            UFO Navigation
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                           Unity, Mathematica, C#
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://www.youtube.com/watch?v=ChfmjAX8u4M')}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://github.com/halfrussian/UFO-Navigation-3D-Game-Unity-C-')}
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
                        mt: 6,
                        mb: 6,
                      }}
                    >
                      Meta Quest 2
                    </Text>
                    
                
                  </div>
                </div>
                <div className="row">
                {/* CARD  COL */}
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card mt-3 mb-3" style={{ border: "none" }}>
                      <Box
                        sx={{
                          backgroundColor: "canvas.default",
                          border: '1px',
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={vr}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Save the Earth from Asteroids
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                          C#, Unity, XRToolkit
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://www.youtube.com/watch?v=DiYHHVtMCbk')}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://github.com/halfrussian/Virtual-Reality---SaveTheEarth---MetaQuest2')}
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
                    </h3>
                    
                  </div>
                </div>
                <div className="row">
                   {/* CARD  COL */}
                <div className="col-xl-4 col-md-6 col-sm-12">
                    <div className="card mt-3 mb-3" style={{ border: "none" }}>
                      <Box
                        sx={{
                          backgroundColor: "canvas.default",
                          border: '1px',
                          borderRadius: 6,
                          borderStyle: "solid",
                          borderColor: "border.default",
                        }}
                      >
                        <img
                          style={{ objectFit: "cover", height: "200px" }}
                          className="card-img-top"
                          src={appro}
                          alt=""
                        />
                        <div className="card-body">
                          <Text sx={{ color: "fg.default" }}>
                            Mixed Reality | Immersive Amazon 
                          </Text>
                          <br />
                          <Text sx={{ color: "fg.default" }}>
                          Swift
                          </Text>
                          <div className=" d-flex mt-3">
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://youtu.be/WnRpfLD466g')}
                            >
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              sx={{ mr: 3 }}
                              onClick={() => window.open('https://github.com/halfrussian/Immersive-Product-in-Amazon-Apple-Vision-Pro1.0/tree/main')}
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

              
            </Box>
          </div>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Dev;
