import React from "react";
import { Text, Heading, Box, Link } from "@primer/react";
import "../components/About.css";
import Image from "../assets/heroimg.jpeg";
import bImage from "../assets/belgium.png";
import aboutImage from "../assets/about.png";
import {useNavigate} from 'react-router-dom';

const About = () => {
  return (
    <>
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
            marginTop: 3,
          }}
        >
          <div className="navigate">
            <Box sx={{ width: "300px", position: 'sticky', top: 0}}>
                <div className="link"
                onClick = {(e)=>{
                    e.preventDefault();
                    window.scrollTo({
                    top: document.querySelector("#design").offsetTop,
                    behavior: "smooth",
                 });}}
                >
                <Link
                sx={{
                  fontSize: "3",
                  color: "fg.muted",
                  ":hover": { cursor: "pointer" },
                }}
              >
                Why I Design
              </Link>
                </div>
              <div className="link"
              onClick = {(e)=>{
                e.preventDefault();
                window.scrollTo({
                top: document.querySelector("#love").offsetTop,
                behavior: "smooth",
             });}}
              >
              <Link
                sx={{
                  fontSize: "3",
                  color: "fg.muted",
                  ":hover": { cursor: "pointer" },
                }}
              >
                 What I Love Designing
              </Link>
              </div>
              <div className="link"
              onClick = {(e)=>{
                e.preventDefault();
                window.scrollTo({
                top: document.querySelector("#personality").offsetTop,
                behavior: "smooth",
             });}}
              >
              <Link
                
                sx={{
                  fontSize: "3",
                  color: "fg.muted",
                  ":hover": { cursor: "pointer" },
                }}
              >
                Personality
              </Link>
              </div>
              <div className="link" 
              onClick = {(e)=>{
                e.preventDefault();
                window.scrollTo({
                top: document.querySelector("#hobbies").offsetTop,
                behavior: "smooth",
             });}}
              >
              <Link
                 
                sx={{
                  fontSize: "3",
                  color: "fg.muted",
                  ":hover": { cursor: "pointer" },
                }}
              >
                Hobbies
              </Link>
              </div>
            
              <div className="link">
              <Link
                
                sx={{
                  fontSize: "3",
                  color: "fg.muted",
                  ":hover": { cursor: "pointer" },
                }}
                onClick = {(e)=>{
                    e.preventDefault();
                    window.scrollTo({
                    top: document.querySelector("#social").offsetTop,
                    behavior: "smooth",
                 });}}
              >
               Social Links
              </Link>
              </div>
            </Box>
          </div>
          <div className="aboutBody">
            <Box>
              <Heading
                as="h1"
                sx={{ fontSize: "50px", marginLeft: "10px", mb: "3", mt: "3" }}
              >
                About
              </Heading>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="design">
                    <Text
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "6",
                        mb: "2",
                        
                      }}
                    >
                      Why I Design
                    </Text>
                    <h3
                      style={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Design is my opportunity to provide empathy and
                      inclusivity — principles that I Iacked growing up
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      Growing up biracial, half black and half white, I never
                      felt that there was a group of people to fit in with. I
                      wasn’t black enough to fit in with black kids or white
                      enough for white kids. Even things in society at the time
                      of my childhood never catered to those who were mixed.
                      Testing questions, at the time, never had “Two or more
                      races.” They had Black, White, or Other. I always felt
                      like an “Other”. Through designing, and developing for
                      both myself and clients I’ve discovered myself more and
                      strived to be inclusive in all projects I work on.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center text-center mt-3">
                  <div className="col-lg-6 align-items-center">
                    <img
                      style={{ width: "500px" }}
                      src={Image}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-6 align-items-center mt-1">
                    <img
                      style={{ width: "500px" }}
                      src={bImage}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="love">
                    <Heading
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "10",
                        mb: "2",
                      }}
                    >
                      What I Love Designing
                    </Heading>
                    <Heading
                      as="h3"
                      sx={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Innovative and empowering consumer products
                    </Heading>
                    <Text sx={{ fontSize: "20px" }}>
                      I've always been drawn to the thrill of building from the
                      ground up. My passion extends from startups to enterprise
                      Saas products, always intertwining people and uniting them
                      under a single vision. Currently, I'm exploring 3D design
                      and Virtual Reality game development, combining my love
                      for innovation and a touch of my Matrix fan enthusiasm.
                      Most recently, I was designing a space Virtual Reality
                      first person shooter game.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="personality">
                    <Heading
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "10",
                        mb: "2",
                      }}
                    >
                      Personality
                    </Heading>
                    <Heading
                      as="h3"
                      sx={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      I'm a athletic, open, and quirky product designer who
                      loves to challenge the status quo inside and outside of
                      work
                    </Heading>
                    <Text sx={{ fontSize: "20px" }}>
                      My design philosophy and life are guided by my
                      adventurous, open, and slightly quirky compass. From
                      swimming a mile, running a marathon, dunking a basketball,
                      or sparring in the boxing gym, to impromptu adventures to
                      new countries, my determined spirit pervades all I do. I
                      find joy in venturing into the unknown, challenging
                      assumptions, and embracing vulnerability as a tool to
                      explore varied perspectives.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12" id="hobbies">
                    <Heading
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "10",
                        mb: "2",
                      }}
                      
                    >
                      Hobbies
                    </Heading>
                    <Heading
                      as="h3"
                      sx={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      All things exercise, travel, and health
                    </Heading>
                    <Text sx={{ fontSize: "20px" }}>
                      Whether sparing at the gym, lifting weights, snorkeling, traversing global destinations, or preparing for a
                      hypothetical zombie apocalypse, I embrace a multi-faceted
                      approach to life and hobbies. From 1 year dedicated to
                      training for a marathon to a half-year training to swim a
                      mile without stopping, my adventurous spirit is always up
                      for new exploratory challenges – and I'm all ears for your
                      hobby suggestions!
                    </Text>
                  </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-12 mb-5">
                        <img src={aboutImage} className="img-fluid" />
                    </div>
                </div>
                <div className="row" id="social">
                    <div className="col-12">
                    <Heading
                      as="h2"
                      sx={{
                        fontSize: "20px",
                        color: "fg.muted",
                        mt: "5",
                        mb: "2",
                      }}
                      
                    >
                      Social Links
                    </Heading>
                    <Heading
                      as="h3"
                      sx={{ fontSize: "30px", fontWeight: "bold", mb: "2" }}
                    >
                      Feel free to reach out — preferably through LinkedIn
                    </Heading>
                    </div>
                </div>
                <div className="row mb-5">
                    <Text sx={{mt: '1', fontSize: '3', fontWeight: 'bold'}}>Linkedin - 
                    <Link
                    href="https://www.linkedin.com/in/joshua-b-a23349a6/"
                    >https://www.linkedin.com/in/joshua-b-a23349a6/</Link></Text>
                    <Text sx={{mt: '1', fontSize: '3', fontWeight: 'bold'}}>Instagram - 
                    <Link
                    href="https://www.instagram.com/joshaaronbracken_/"
                    >https://www.instagram.com/joshaaronbracken_/</Link></Text>
                 

                </div>
              </div>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default About;
