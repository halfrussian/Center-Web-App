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
              fontWeight: '700'
            }}
          >
            I’m a strategic Product Designer (ex GitHub)
          </Heading>

          <Text
            sx={{
              fontSize: 3,
              color: "fg.default",
            }}
          >
            Armed with the real world experience I was recently a UX Designer for GitHub. I specialize in implementing System Thinking, within an Agile
            environment for B2B products. Including: SaaS, Ecommerce, and Support Portals. 
            And if clients are low on developers I help them code as well. On a lighter note, in my spare time I experiment in developing for VR/MR, but my passions are in UX/UI.
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
