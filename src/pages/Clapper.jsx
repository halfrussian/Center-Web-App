import React from "react";
import { Text, Heading, Box, Link } from "@primer/react";
import top from '../assets/clapper/top.webp'
import sub from '../assets/clapper/sub.png'
import clap from '../assets/logos/clap.png'
import one from '../assets/clapper/one.png'
import two from '../assets/clapper/two.png'
import three from '../assets/clapper/three.png'
import ten from '../assets/clapper/ten.png'
import el from '../assets/clapper/el.png'

const Clapper = () => {
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
                    <img src={clap} style={{ width: "50px", borderRadius: '50%' }} />
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
                      Clapper -  Compassionate Platform Facilitating the Universal Expression of Diverse Perspectives Through the Fundamental Right of Free Speech on Any Subject
                    </Heading>
                  </div>
                </div>
                <div className="row">
                  <Text sx={{ fontSize: "4" }}>
                  Steering the research efforts for a revolutionary social media 
                  application centered on the ethos of free speech, I provided 
                  guidance to our developers, ensuring not only the fulfillment
                  of UI requirements but also addressing the prevalent challenges
                   and issues that creators commonly face on other video platforms.
                  </Text>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-3 mb-3">
                    <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Role</Text>
                    <br />
    
                    <Text sx={{ fontSize: "4" }}>UX Researcher</Text>
                  </div>
                  <div className="col-lg-3 mb-3">
                    <Text sx={{ fontSize: "3", color: "fg.subtle" }}>Timeline</Text>
                    <br />
                    <Text sx={{ fontSize: "4" }}> 7 Months</Text>
                  </div>
    
                  <div className="col-lg-6 mb-3">
                    <Text sx={{ fontSize: "3", color: "fg.subtle" }}>
                      Core Responsibilities
                    </Text>
                    <Text sx={{ fontSize: "4" }}>
                      <br />
                      Lead the intial research initiative of an imergeing social media platform
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
                         Enduring recurrent bans and suspensions merely for expressing one's thoughts and opinions.
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                        Content creators consistently faced bans on TikTok 
                        for merely expressing their opinions on current events.
                         Depending on the prevailing social climate or advertiser
                          preferences, TikTok would arbitrarily suspend or even 
                          delete creators' accounts simply for holding particular
                           opinions. Some topics were outright prohibited, stifling
                            free expression on the platform
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid mb-5">
                    <div className="row">
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
                          Bans were always around the corner
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
                         Suspensions were constant
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
                         
Centering solely on the user experience, disregarding external influences such as advertisers
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                        Create a platform that truly embodies an open forum, 
                        where individuals from any background or belief system 
                        can engage in conversation without the fear of their 
                        contributions being arbitrarily deleted
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
                          Designing a user interface that not only caters to
                           but actively encourages individuals to express their thoughts freely
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                        Initiate by providing users the capability to go
                         live together, fostering healthy discourse and 
                         the exchange of ideas on current events. Incentivize 
                         content creation and social media growth through a 
                         paid partnership program. Gradually expand the 
                         platform's scope to include extensive "Town Hall" 
                         features, enabling individuals from around the 
                         world to come together, listen to speakers, and 
                         voice their opinions on a wide range of subjects.
                         This multifaceted approach encourages engagement,
                          collaboration, and diverse perspectives on the 
                          platform.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row mb-5">
                      <div className="col-12">
                        <img src={ten} className="img-fluid" />
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-12 ">
                        <img src={el} className="img-fluid" />
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-12 ">
                        <img src={one} className="img-fluid" />
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
                         Investors noticed our mission and believed in Clapper
                        </h3>
                        <p style={{ fontSize: "20px" }}>
                        After conducting thorough research and actively
                         incorporating user feedback into our platform, 
                         Clapper experienced a significant boost with 
                         a $3 million injection of capital. This infusion
                          of funds will further support the growth 
                          and development of the platform, allowing 
                          us to enhance features, scale operations,
                           and continue providing a dynamic and 
                           user-driven experience.

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

export default Clapper