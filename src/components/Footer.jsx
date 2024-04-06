import React from "react";
import {  Box, Link } from "@primer/react";


const Footer = () => {
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
         <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div className="mx-3">
              <Link 
              sx={{
                color: 'fg.default',
                fontSize: 1,
              }}
                href="https://www.linkedin.com/in/joshua-b-a23349a6/">
                  LinkeIn</Link>
              </div>
              <div className="mx-3">
              <Link 
              sx={{
                color: 'fg.default',
                fontSize: 1,
              }}
                href="https://github.com/halfrussian">
                  Github</Link>
              </div>
              <div className="mx-3">
              <Link 
              sx={{
                color: 'fg.default',
                fontSize: 1,
              }}
                href="https://www.instagram.com/joshuabracken__/">
                  Instagram</Link>
              </div>
            </div>
          </div>
         </div>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
