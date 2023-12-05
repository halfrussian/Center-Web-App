import React from "react";
import { Text, Heading, Box, Link } from "@primer/react";
import c2 from "../assets/logos/c2.png";
import top from "../assets/market/top.png";
import one from "../assets/market/one.webp";
import two from "../assets/market/two.webp";
import three from "../assets/market/three.webp";
import four from "../assets/market/four.webp";

const Market = () => {
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
                <img src={c2} style={{ width: "50px" }} />
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
                  Marketdeus - Streamlining the Email Marketing Process for
                  Companies and their customers
                </Heading>
              </div>
            </div>
            <div className="row">
              <Text sx={{ fontSize: "4" }}>
                A brand new Marketing software faced challenges as users who
                hadn’t marketed before struggled to understand campaign
                customization. A collaborative effort between a UX designer and
                a frontend developer was pivotal in addressing this issue.
                Through incorporating new react libraries, AB testing, Figma,
                and frontend development, they revamped the user journey by
                optimizing the campaign editor and flow via marketing nodes. The
                redesigned experience led to significant improvements, including
                a 12% rise in user ability to comprehend where their customers
                were at any given point of the sales journey.
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
                <Text sx={{ fontSize: "4" }}>1 Year</Text>
              </div>

              <div className="col-lg-6 mb-3">
                <Text sx={{ fontSize: "3", color: "fg.subtle" }}>
                  Core Responsibilities
                </Text>
                <Text sx={{ fontSize: "4" }}>
                  <br />
                  UX Design and Frontend development ona team of 8, visual
                  deasign, figma, design management, front-end dev
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
                      Entrepreneurs seek marketing platforms endowed with
                      real-time campaign editing capabilities coupled with an
                      intuitively designed user interface.
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      In the year 2022, Clear C2, a purveyor of CRM Database
                      SaaS with an extensive clientele in the business sector,
                      discerned a strategic opportunity. Recognizing that a
                      substantial portion of their clients had the headache of
                      integrating their CRM database with an external marketing
                      platform, Clear C2 aspired to establish a robust
                      ecosystem.
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
                      Create an intiuive UI that matched the branding of Clear
                      C2, was effortless to use, and pulled all existing company
                      data from the cloud
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      The objective was to retain financial investments within
                      their platform and cultivate an environment where clients
                      could effortlessly manage their data in the cloud,
                      eschewing the need for extensive migrations. This
                      visionary initiative aimed to consolidate operations,
                      offering clients the seamless integration of their CRM
                      database with the Marketdeus (The Marketing God) platform
                      to comprehensively address their digital marketing
                      requirements.
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
                      A faster and simpler way for Businesses to access shared
                      cloud data and handle campaigns
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      Leveraging the React Flow library in conjunction with the
                      Tailwind CSS framework as our stylistic foundation, we
                      meticulously crafted a contemporary user interface. This
                      interface empowers our users to seamlessly traverse their
                      customer data, affording them real-time visibility into
                      the precise location of each customer within the
                      advertising journey. This functionality provides
                      invaluable insights, enabling users to receive timely
                      updates on optimizing their marketing strategies for both
                      the current moment and future endeavors.
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
                      High Demand and 15% of current clients were willing early
                      adopters
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      Marketdeus is still in its infancy however the demand for
                      it is still high and current clients of Clear C2 are ready
                      to onboard once it releases
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

export default Market;
