import React from "react";
import { Text, Heading, Box, Link } from "@primer/react";
import trans from "../assets/logos/trans.png";
import top from "../assets/trans/top.png";
import one from "../assets/trans/one.png";
import sol1 from "../assets/trans/sol1.png";
import sol2 from "../assets/trans/sol2.png";
import sol3 from "../assets/trans/sol3.png";
import sol4 from "../assets/trans/sol4.png";

import Footer from '../components/Footer'

const TransportPro = () => {
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
                <img src={trans} style={{ width: "50px" }} />
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
                  Transport Pro - Inspiring Clear & Confident Communication
                  between Drivers, Load Managers and Brokers
                </Heading>
              </div>
            </div>
            <div className="row">
              <Text sx={{ fontSize: "4" }}>
                Leading Transport Pro through a strategic pivot from a legacy
                outdated codebase, from the early 2000’s, to a cohesive data
                rich platform that provided great data visualization for its
                users, I guided the ensemble, which included a frontend
                developer, and a backend developer, while keeping our CEO
                aligned with our strategy. In conceptualizing and directing a
                four-phase strategy, we refined our feature set and bolstered
                our user-focused approach, producing significant outcomes: a
                two-fold increase in user retention, a 20% rise in being able to
                pair drivers with loads for their trucks, thereby enhancing both
                user engagement and team morale.
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
                      Brokers and Account Executives struggle to consistently
                      dig through data quickly and find drivers available. New
                      business was harder to get as the UI was outdated
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      Though Transport Pro illuminated users' communication with
                      drivers and brokers through the use of vast amounts of
                      data and tables, many users were disappointed in how
                      clicky the app was and how nested things were in a complex
                      navigation header. So we identified a gap: tangible
                      improvement to the overall UI and data visualization so
                      brokers know what drivers are available for that day and
                      how many loads need to be delivered.
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
                      Refocusing Transport Pro: From an old clunky UI to a
                      modern UI that has great data visualization
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      Leadership's pushed for Transport Pro to be easier to
                      navigate in which it generates suggestions, such as loads
                      available for that day. Challenging this, I redirected our
                      team towards a concentrated emphasis on facilitating clear
                      verbal communication. Guided by user feedback and
                      recognizing a team morale dip due to an overextended
                      feature set, I organized a four-phase strategy that
                      streamlined features, amplified off-meeting support,
                      consolidated our tools, and facilitated user adaptation to
                      our redefined platform, concurrently uplifting user
                      engagement and team spirit.
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
                      Refocusing Transport Pro: From an old clunky UI to a
                      modern UI that has great data visualization
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      As I directed the product and content designers, our
                      collective efforts pivoted Poised from a passive homepage
                      to a dynamically active, user-centric interface,
                      intertwining continuous personalized suggestions with
                      substantive feedback. My strategic emphasis shifted from a
                      purely metrics-focused approach to one that harmoniously
                      melded immediate feedback with anticipatory tips and a
                      balance of qualitative and quantitative insights, thereby
                      notably enhancing user engagement and efficaciously
                      enabling them to refine their communication skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={sol1} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={sol2} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12 ">
                    <img src={sol3} className="img-fluid" />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-12">
                    <img src={sol4} className="img-fluid" />
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
                      Culminated in a 20+% increase in users ability to match
                      drivers with available loads and a 10+% increase in
                      companies choosing Transport Pro as their Saas of choice
                      for their logistics
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      Feedback from users paints a vivid picture of the impact:
                      many laud the revamped UI for a smoother user journey,
                      while others highlight how Transport Pro has bolstered
                      their confidence in boosting sales. A recurring sentiment
                      is the newfound ability to navigate the drives journey
                      from a-z with clarity, minimizing common pitfalls like
                      getting lost in data or forgetting why they opened the
                      app, and truly capitalizing on the essence of delivering
                      goods.
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

export default TransportPro;
