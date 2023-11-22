import React from "react";
import { Text, Heading, Box, Link } from "@primer/react";
import '../components/About.css'
import Image from "../assets/heroimg.jpeg";
import bImage from "../assets/belgium.png";

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
                display='flex'
                sx={{
                    maxWidth: "1350px",
                    //width: ["90%", "90%", "90%", "95%", "87%"],
                    margin: "auto",
                    marginTop: 3,
                  }}
                >
                    {/* FIX SPACING LATER  */}
                    <Box sx={{ width: '300px',  backgroundColor: 'yellow'}}>
                        <Link className='link' sx={{ fontSize: '3', color: 'fg.default', ':hover': {cursor: 'pointer'}}}>Why I Design</Link>
                        <br />
                        <Link className='link' sx={{ fontSize: '3', color: 'fg.default', ':hover': {cursor: 'pointer'}}}>What I Love Designing</Link>
                        <br />
                        <Link className='link' sx={{fontSize: '3', color: 'fg.default', ':hover': {cursor: 'pointer'}}}>Personality</Link>
                        <br /> 
                        <Link className='link' sx={{fontSize: '3', color: 'fg.default', ':hover': {cursor: 'pointer'}}}>Hobbies</Link>
                        <br />
                        <Link sx={{fontSize: '3', color: 'fg.default', ':hover': {cursor: 'pointer'}}}>Social Links</Link>
                        <br />
                    </Box>
                    <Box>
                        <Heading as="h1" sx={{fontSize: '50px', marginLeft: '10px', mb: '3', mt: '3'}}>About</Heading>


                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <h2 style={{fontSize: '18px'}}>Why I Design</h2>
                                    <h3 style={{fontSize: '30px'}}>Design is my opportunity to provide empathy and inclusivity — principles that I Iacked growing up</h3>
                                    <p style={{fontSize: '18px'}}>lorem
                                    </p>
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-center text-center mt-3">
                                <div className="col-lg-6 align-items-center">
                                    <img style={{width: '500px'}} src={Image}  className='img-fluid'/>

                                </div> 
                                <div className="col-lg-6 align-items-center mt-1">
                                    <img  style={{width: '500px'}}  src={bImage }  className='img-fluid'/>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                <h2 style={{fontSize: '18px'}}>What I Love Designing</h2>
                                    <h3 style={{fontSize: '30px'}}>Innovative and empowering consumer products</h3>
                                    <p style={{fontSize: '18px'}}>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </Box>
                   
                    
                </Box>

            </Box>
        </>
    )
}

export default About 