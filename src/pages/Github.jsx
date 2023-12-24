import React from "react";
import { Text, Heading, Box, Link } from "@primer/react";
import top from '../assets/github/top.webp'
import sub from '../assets/github/sub.png'
import seven from '../assets/github/seven.png'
import eight from '../assets/github/eight.png'
import el from '../assets/github/el.png'
import ten from '../assets/github/ten.png'
import Footer from '../components/Footer'
import op from '../assets/github/op.png'
import gitmap from '../assets/github/gitmap.png'


const Github = () => {
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
                      Github - Revamping the Support Portal to Facilitate
                       the Resolution of Challenges Encountered by All Members 
                       of the GitHub Community
                    </Heading>
                  </div>
                </div>
                <div className="row">
                  <Text sx={{ fontSize: "4" }}>
                  In overhauling the support portal, my 
                  focus is on user-centric design, ensuring intuitive 
                  navigation, responsive design across devices, and 
                  personalized dashboards. By enhancing search functionality 
                  and incorporating multimedia elements, the goal is to
                   create an interactive and adaptable platform. 
                   Continuous improvement, guided by user feedback,
                    will be pivotal in maintaining the portal's 
                    efficacy for all GitHub community members.
                  </Text>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-3 mb-3">
                    <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Role</Text>
                    <br />
    
                    <Text sx={{ fontSize: "4" }}>UX Designer & Frontend Developer</Text>
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
                      Lead Design and Frontend Developer of Version 2 of the Support Portal, React, Primer, Typescript
                    </Text>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <img  src={top} className="img-fluid" style={{ width: "100%" }} />
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
                         "Challenging to navigate and plagued by inconsistent branding
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                        The challenges in user navigation stemmed from an antiquated user
                          interface and a dearth of comprehensive components within the
                           support portal. Additionally, the incongruity in branding failed to 
                         align with the contemporary design standards upheld by GitHub.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid mb-5">
                    <div className="row">
                      <div className="col-12">
                        <img  src={sub} className="img-fluid" />
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
                          Too much to choose from creating a sense of being overwhelmed
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
                         Too much to read. User need help fast
                        </Text>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-12">
                      <h3
                          style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                        >
                       User Profile
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                        Conducting research to better understand our users we discovered that often, when looking for support, users looked to 3rd party websites to solve their issues. 
                      
                        </p></div>
                      <div className="col-12">
                        <img  src={op} className="img-fluid" />
                      </div>
                    </div>

                     {/* section start */}
                <div className="row">
                  <div className="col-12" id="goals">
                  <h3
                          style={{ fontSize: "30px", fontWeight: "bold", mb: "2", marginTop: "45px"}}
                        >
                       Sitemap
                        </h3>
                    <p style={{ fontSize: "20px" }}>
                      Ensure users are able to reach solutions and explore GitHub products
                    </p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={gitmap} className="img-fluid" />
                  </div>
                </div>
                {/* section end */}
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
                        Optimize the support experience for ease, visual comfort, and accessibility.
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                        GitHub has cultivated a theme-oriented library named "Primer."
                         Harnessing this library's capabilities for out-of-the-box accessibility,
                          we can meticulously craft a UI design that not only adheres to 
                        industry standards but also exudes aesthetic excellence.
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
                          Reinvigorated and poised for action
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                          
                        Remaining faithful to our brand, we can draw inspiration from a diverse 
                        array of sources incorporating elements such as GitHub's gradient patterns and
                        leveraging the versatility of out-of-the-box Primer components, among other 
                        compelling influences
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row mb-5">
                      <div className="col-12">
                        <img src={seven} className="img-fluid" />
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-12 ">
                        <img src={eight} className="img-fluid" />
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-12 ">
                        <img src={ten}  className="img-fluid" />
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-12">
                        <img src={el}  className="img-fluid" />
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
                          Testing is currently ongoing in parts of the world before release to general public
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                        All regions currently undergoing the inaugural 
                        release of Version 2 of the support portal have 
                        embraced the new iteration with commendable enthusiasm.
                         Metrics indicate a notable surge in engagement, and 
                         surveys consistently reflect a user experience that 
                         surpasses its predecessor by light years, constituting
                          a significant and commendable improvement.
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

export default Github