import React from "react";
import { Text, Heading, Box } from "@primer/react";

const HeroIntro = () => {
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
            maxWidth: "1200px",
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
            }}
          >
            I’m Joshua Bracken UX/UI Designer and Developer
          </Heading>

          <Text
            sx={{
              fontSize: 3,
              color: "fg.default",
              
            }}
          >
            Armed with the real world experience I was recently and Developer and UX Designer for Github. I specialize in implementing Design Thinking, within an Agile
            environment, for Saas, E-commerce, and Support Portal clients in
            order to help improve their UX and UI. On a lighter note
          </Text>
          <Box sx={{
            paddingTop: 3,
          }}>
          <hr  />
          </Box>
          
        </Box>
      </Box>
      
      
    </>
  );
};

export default HeroIntro;
